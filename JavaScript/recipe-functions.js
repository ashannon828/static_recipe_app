const getSavedRecipes = () => {
    const recipeJSON = localStorage.getItem('recipes')
    return recipeJSON ? JSON.parse(recipeJSON) : []
}

const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
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