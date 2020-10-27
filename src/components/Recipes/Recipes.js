import './Recipes.scss';

import React, { useEffect, useState } from 'react';

import AddRecipe from './AddRecipe';
import DeleteRecipe from './DeleteRecipe';
import Recipe from './Recipe';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../redux/actions';

const Recipes = ({ syncRecipes }) => {
    window.onload = function () {
        const fr = fetchRecipes(5);
        console.log('fr: ', fr);
    };

    let [recipes, setRecipes] = useState(syncRecipes);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log('result: ', result);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    console.log('error: ', error);
                },
            );

        setRecipes(syncRecipes);
    }, [setRecipes, syncRecipes]);

    console.log('syncRecipes: ', syncRecipes);
    console.log('recipes: ', recipes);

    if (!recipes.length) {
        return (
            <div className="alert alert-info col-12" role="alert">
                No Recipes
            </div>
        );
    }

    return (
        <>
            <Row>
                {recipes.map((recipe) => (
                    <Recipe recipe={recipe} key={recipe.recipeId} />
                ))}
            </Row>

            <AddRecipe />
            <DeleteRecipe />
        </>
    );
};

const mapStateToProps = (state) => ({
    syncRecipes: state.recipes.fetchedRecipes,
});

const mapDispatchToProps = {
    fetchRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
