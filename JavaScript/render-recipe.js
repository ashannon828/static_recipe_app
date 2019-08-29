const recipeURL = location.hash.substring(1)
let recipes = getSavedRecipes()
let recipe = recipes.find((recipe) => recipe.name.toLowerCase() === decodeURL(recipeURL) )

const recipeName = document.querySelector('#recipe-name')
const recipeTags = document.querySelector('#recipe-tags')
const recipeMeta = document.querySelector('#recipe-meta')
const recipeIngredients = document.querySelector('#ingredients')
const recipeSteps = document.querySelector('#steps')


recipeName.textContent = recipe.name
recipeTags.textContent = tagFormat(recipe.tags)
recipeMeta.textContent = metaFormat(recipe.meta)

for (let ingredient of recipe.ingredients) {
    let li = document.createElement('li')
    if (ingredient.unit === 'unit(s)') {
        li.textContent = `${ingredient.quantity} ${ingredient.name} `
    } else {
        li.textContent = `${ingredient.quantity}${ingredient.unit} ${ingredient.name} `
    }
    recipeIngredients.appendChild(li)
}

for (let step of recipe.instructions) {
    let li = document.createElement('li')
    li.textContent = step
    recipeSteps.appendChild(li)
}