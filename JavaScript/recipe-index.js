const recipeIndexContainer = document.querySelector('#index-container')

let recipes = getSavedRecipes()


const renderRecipeIndex = () => {
    for (let i = 0; i < recipes.length; i++) {
        const recipeContainer = document.createElement('div')
        const recipeEl = document.createElement('h3')
        const a = document.createElement('a')
        a.textContent = recipes[i].name
        a.setAttribute('href', '#')
        recipeEl.appendChild(a)
        
        const tags = document.createElement('p')
        tags.textContent = `${recipes[i].tags}`

        const meta = document.createElement('p')
        meta.textContent = `Serves: ${recipes[i].meta.serves} | Cooking Time: ${recipes[i].meta.cooksIn} | Difficulty: ${recipes[i].meta.difficulty.toUpperCase()}`

        recipeContainer.appendChild(recipeEl)
        recipeContainer.appendChild(tags)
        recipeContainer.appendChild(meta)
        recipeIndexContainer.appendChild(recipeContainer)

        
    }
}

renderRecipeIndex()