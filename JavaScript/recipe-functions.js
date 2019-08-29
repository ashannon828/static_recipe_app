'use strict'

const getSavedRecipes = () => {
    const recipeJSON = localStorage.getItem('recipes')
    return recipeJSON ? JSON.parse(recipeJSON) : []
}

const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const renderIngredient = () => {
    const li = document.createElement('li')
    
    const ingredient = document.createElement('input')
    ingredient.setAttribute('type', 'text')
    ingredient.setAttribute('placeholder', 'Enter Ingredient')

    const quantity = document.createElement('input')
    quantity.setAttribute('type', 'text')
    quantity.setAttribute('placeholder', 'Enter Quantity')

    const units = ['g', 'kg', 'ml', 'l', 'mm', 'cm', 'teaspoon', 'tablespoon', 'unit(s)']
    const select = document.createElement('select');
    for (let unit of units) {
        let option = document.createElement('option');
        option.textContent = unit;
        select.appendChild(option);
    }

    const removeIngredient = document.createElement('button')
    removeIngredient.setAttribute('type', 'button')
    removeIngredient.textContent = '-'
    removeIngredient.addEventListener('click', (e) => {
        const li = e.target.parentNode
        const ul = li.parentNode
        ul.removeChild(li)
    })

    li.appendChild(ingredient)
    li.appendChild(quantity)
    li.appendChild(select)
    li.appendChild(removeIngredient)
    return li
}

const getIngredients = (children) => {
    const ingredients = []
    for (let i = 1; i < children.length; i++ ) {
        // ingredients.push({
        //     children[i].childNodes[0].value
        // })
        children[i].childNodes
        ingredients.push({
            name:children[i].childNodes[0].value,
            quantity:children[i].childNodes[1].value,
            unit: children[i].childNodes[2].value
        })
    
    }
    return ingredients
}

const renderStep = () => {
    const li = document.createElement('li')
    
    const step = document.createElement('textarea')
    step.setAttribute('placeholder', 'Enter Step')
    step.setAttribute('name', 'step')

    const removeStep = document.createElement('button')
    removeStep.setAttribute('type', 'button')
    removeStep.textContent = '-'

    removeStep.addEventListener('click', (e) => {
        const li = e.target.parentNode
        const ul = li.parentNode
        ul.removeChild(li)
    })

    li.appendChild(step)
    li.appendChild(removeStep)
    return li
}

const getSteps = (children) => {
    const steps = []
    for (let i = 1; i < children.length; i++ ) {
        steps.push(children[i].childNodes[0].value)
    }
    return steps
}