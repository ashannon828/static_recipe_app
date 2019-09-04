const recipeIndexContainer = document.querySelector('#index-container')

// let recipes = getSavedRecipes()



const renderRecipes = async () => {
    const recipes = await getJsonRecipes()
    renderRecipeIndex(recipes)
}

renderRecipes()