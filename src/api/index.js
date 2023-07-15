const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://moviesdatabase.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'e6b3ada70amsh1fb3b5eaa8b96edp1f87c0jsn80262fdc1bff',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
})

export async function getFilms(page) {
    try {
        const response = await axiosInstance.get('/titles', {
            params: {startYear: '2020',  list: 'most_pop_movies', page: page},
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export async function searchFilms(text) {
    try {
        const response = await axiosInstance.get(`/titles/search/title/${text}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
export async function getFavoriteFilms(films) {
    try {
        const response = await axiosInstance.get('/titles/x/titles-by-ids',{
            params: {idsList: films.join(',')},
        })
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export async function getFilm(id) {
    try {
        const response = await axiosInstance.get(`/titles/${id}`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}
export async function getActors() {
    try {
        const response = await axiosInstance.get('/actors/random');
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export async function getGenres() {
    try {
        const response = await axiosInstance.get('titles/utils/genres');
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
export async function getFilmsByGenre(genre) {
    try {
        const response = await axiosInstance.get('/titles', {
            params: {genre: genre},
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

