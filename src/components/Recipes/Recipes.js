import './Recipes.scss';

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddRecipe from './AddRecipe';
import DeleteRecipe from './DeleteRecipe';
import Recipe from './Recipe';
import { Row } from 'react-bootstrap';
import SkeletonRecipe from './skeletonRecipe';
import { fetchRecipes } from '../../redux/actions';

export default () => {
    const dispatch = useDispatch();

    const syncRecipes = useSelector((state) => state.recipes.fetchedRecipes);
    const pageRecipes = useSelector((state) => state.recipes.pageRecipes);

    let [pageHeight, setPageHeight] = useState(0);

    let [loading, setLoading] = useState(false);

    let [recipes, setRecipes] = useState(syncRecipes);
    useEffect(() => {
        setRecipes(syncRecipes);
    }, [setRecipes, syncRecipes]);

    let [pages, setPages] = useState(pageRecipes);
    useEffect(() => {
        setPages(pageRecipes);
    }, [setPages, pageRecipes]);

    window.onload = function () {
        dispatch(fetchRecipes(pages));
    };

    let handleScroll = useCallback(() => {
        const scrollHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight,
        );
        const windowHeight =
            document.documentElement.clientHeight + window.scrollY;
        const isPageEnd = scrollHeight - 100 < windowHeight;

        if (pageHeight === 0 || (loading && pageHeight !== scrollHeight)) {
            setLoading(false);
            setPageHeight(scrollHeight);
        }

        if (isPageEnd && !loading && pageHeight === scrollHeight) {
            setLoading(true);
            dispatch(fetchRecipes(pages));
        }
    }, [pages, dispatch, loading, pageHeight]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    if (!recipes.length) {
        return (
            <>
                <Row>
                    <SkeletonRecipe />
                    <SkeletonRecipe />
                    <SkeletonRecipe />
                </Row>
            </>
        );
    }

    return (
        <>
            <Row>
                {recipes.map((recipe) => (
                    <Recipe recipe={recipe} key={recipe.recipeId} />
                ))}

                <SkeletonRecipe />
            </Row>

            <AddRecipe />
            <DeleteRecipe />
        </>
    );
};
