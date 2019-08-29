const recipeIndexContainer = document.querySelector('#index-container')

let recipes = getSavedRecipes()

renderRecipeIndex(recipes)