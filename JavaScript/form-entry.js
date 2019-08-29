'use strict'

const recipeForm = document.querySelector('#add-recipe-form')

const name = document.querySelector('#recipe-name-entry')
const tags = document.querySelector('#recipe-tags-entry')

const serves = document.querySelector('#serves-entry')
const cooksIn = document.querySelector('#cooks-in-entry')
const difficulty = document.querySelector('#difficulty-entry')

const ingredients = document.querySelector('#ingredient-list')
const steps = document.querySelector('#step-list')

let recipes = getSavedRecipes()


document.querySelector('#add-ingredient').addEventListener('click', () => {
    ingredients.appendChild(renderIngredient())
})

document.querySelector('#add-step').addEventListener('click', () => {
    steps.appendChild(renderStep())
})


recipeForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const newRecipe = {
        id: uuidv4(),
        name: e.target.elements.name.value,
        tags: e.target.elements.tags.value.split(','),
        meta: {
            serves: e.target.elements.serves.value,
            cooksIn: e.target.elements.cooksIn.value, 
            difficulty: e.target.elements.difficulty.value},
        ingredients: getIngredients(ingredients.childNodes),
        instructions: getSteps(steps.childNodes)
    }
    
    recipes.push(newRecipe)
    saveRecipes()
    recipeForm.reset()
})
