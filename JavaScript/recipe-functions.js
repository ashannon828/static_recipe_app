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


// // Read existing notes
// const getSavedNotes =  () => {
//     const notesJSON = localStorage.getItem('notes')
//     try {
//         return notesJSON ? JSON.parse(notesJSON) : []
//     } catch(e){
//         return []
//     }
// }

// // save notes
// const saveNotes = (notes) => {
//     localStorage.setItem('notes', JSON.stringify(notes))
// }