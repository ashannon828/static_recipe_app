'use strict'

const getSavedRecipes = () => {
    const recipeJSON = localStorage.getItem('recipes')
    return recipeJSON ? JSON.parse(recipeJSON) : []
}

const getJsonRecipes = async () => {
    const response = await fetch('../data/recipes.json')
    if (response.status === 200) {
        const data = await response.json()
        return data
    }
}

const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const renderInputField = (placeholder) => {
    const el = document.createElement('input')
    el.setAttribute('type', 'text')
    el.setAttribute('placeholder', placeholder)
    return el
}

const renderAddIngredient = () => {
    const li = document.createElement('li')
    const ingredient = renderInputField('Enter Ingredient')
    const quantity = renderInputField('Enter Quantity')

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
        children[i].childNodes
        ingredients.push({
            name:children[i].childNodes[0].value,
            quantity:children[i].childNodes[1].value,
            unit: children[i].childNodes[2].value
        })
    
    }
    return ingredients
}

const renderAddStep = () => {
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

const tagFormat = (tags) => {
    let t = tags.map(s => s.trim())
    return `${t.join(' | ')}`
}

const renderTags = (tags) => {
    const p = document.createElement('p')
    p.textContent = tagFormat(tags)
    return p
}

const metaFormat = (meta) => {
    return `Serves: ${meta.serves} | Cooking Time: ${meta.cooksIn} | Difficulty: ${meta.difficulty.toUpperCase()}`
}

const renderMeta = (meta) => {
    const p = document.createElement('p')
    p.textContent = metaFormat(meta)
    return p
}

const renderRecipeIndex = (recipes) => {
    for (let i = 0; i < recipes.length; i++) {
        const recipeContainer = document.createElement('div')
        const recipeEl = document.createElement('h3')
        
        const a = document.createElement('a')
        a.textContent = recipes[i].name
        a.setAttribute('href', `recipe.html#${encodeURL(recipes[i].name)}`)
        recipeEl.appendChild(a)
        
        const tags = renderTags(recipes[i].tags)

        const meta = renderMeta(recipes[i].meta)

        recipeContainer.appendChild(recipeEl)
        recipeContainer.appendChild(tags)
        recipeContainer.appendChild(meta)
        recipeIndexContainer.appendChild(recipeContainer)
    }
}

const encodeURL = (recipeName) => {
    //trim and replace spaces with -
    return recipeName.toLowerCase().replace(/\s/g, '_')
}

const decodeURL = (recipeURL) => {
    return recipeURL.replace(/_/g, ' ')
}