import React from 'react';

const Recipe = ({recipe}) => {
    return (
        <div>
            <h2>{recipe.name}</h2>
        </div>
    );
};

export default Recipe;