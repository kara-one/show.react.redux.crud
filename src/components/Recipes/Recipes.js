import './Recipes.scss';

import AddRecipe from './AddRecipe';
import DeleteRecipe from './DeleteRecipe';
import React from 'react';
import Recipe from './Recipe';
import { Row } from 'react-bootstrap';
import { connect } from "react-redux";

const Recipes = ({ syncRecipes }) => {
    if (!syncRecipes.length) {
        return (
            <div className="alert alert-info col-12" role="alert">
                No Recipes
            </div>
        );
    }

    return (
        <>
            <Row>
                {syncRecipes.map((recipe) => (
                    <Recipe recipe={recipe} key={recipe.recipeId} />
                ))}
            </Row>

            <AddRecipe />
            <DeleteRecipe />
        </>
    );
};

const mapStateToProps = (state) => ({
    syncRecipes: state.recipes.staticRecipes,
});

export default connect(mapStateToProps, null)(Recipes);
