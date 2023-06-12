<template>
  <div class="search">
    <input class="search__input" v-model="searchText" placeholder="Название фильма">
    <button class="search__button" @click="findFilms">Найти</button>
  </div>
  <div class="cards-container" ref="scrollComponent">
    <film-card v-for="film in films" :key="film.id" :film="film" @click="openFilmDescription(film.id)"></film-card>
  </div>
  <div class="observer" ref="observer"></div>
</template>
    
<script>

import FilmCard from "@/components/FilmCard.vue";
import {getFilms, searchFilms} from "@/api";

export default{
  components: {FilmCard},
  data() {
    return {
      films: [],
      page: 1,
      searchText: '',
    }
  },
  created() {
    this.fetchFilms(this.page)
  },
  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
      const callback = (entries) => {
      if (entries[0].isIntersecting) {
        this.loadMoreFilms()
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  methods: {
    async fetchFilms(page) {
      const response = await getFilms(page)
      this.films = response.results
    },
    async loadMoreFilms() {
      this.page += 1
      const moreFilms = await getFilms(this.page)
      this.films = [...this.films, ...moreFilms.results]
    },
    async findFilms() {
      if(this.searchText) {
        const films = await searchFilms(this.searchText)
        this.films = films.results
      }
    },
    openFilmDescription(id) {
      this.$router.push(`/films/${id}`)
    }
  },
}
</script>
    
<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  &__input {
    padding: 5px 25px 5px 10px;
    border-radius: 15px;
    background-color: #b6b4b4;
    border: 2px solid #b2b2b2;
    &::placeholder {
      color: #312f2f;
    }
  }
  &__button {
    margin-left: 20px;
    padding: 5px 15px;
    background-color: #ff8100;
    border-radius: 15px;
    border: none;
    &:hover {
      background-color: #9a5202;
      color: #b2b2b2;
    }
    &:active {
      background-color: #542a00;
      color: #b2b2b2;
    }
  }
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.observer {
  height: 30px;
}
</style>