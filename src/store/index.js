import {defineStore} from "pinia";

export const useFilmStore = defineStore('film', {
    state: () => ({
        favoriteFilms: []
    }),
    getters: {

    },
    actions: {
        addFavoriteFilm(id) {
            this.favoriteFilms.push(id)
        },
        deleteFilm(id) {
            const index = this.favoriteFilms.findIndex((el) => el === id)
            this.favoriteFilms.splice(index, 1)
        }
    },
})