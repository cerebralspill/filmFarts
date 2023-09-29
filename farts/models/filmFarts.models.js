import db from '../../db/db.js'

export const getItem = id => {
    try {
        const filmFart = db?.filmFarts?.filter(filmFart => filmFart?.id === id)[0]
        return filmFart
    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try {
        return db?.filmFarts
    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id, data) => {
    try {
        const index = db.filmFarts.findIndex(filmFart => filmFart.id === id)

        if (index === -1) throw new Error('Pet not found')
        else {
            db.filmFarts[index] = data
            return db.filmFarts[index]
        }        
    } catch (err) {
        console.log('Error', err)
    }
}

export const addItem = data => {
    try {  
        const newFilmFart = { id: db.filmFarts.length + 1, ...data }
        db.filmFarts.push(newFilmFart)
        return newFilmFart

    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = id => {
    try {
        // delete item from db
        const index = db.filmFarts.findIndex(filmFart => filmFart.id === id)

        if (index === -1) throw new Error('filmFart not found')
        else {
            db.filmFarts.splice(index, 1)
            return db.filmFarts
        }
    } catch (error) {
        
    }
}