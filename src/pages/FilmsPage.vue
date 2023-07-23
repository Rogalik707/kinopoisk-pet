<template>
  <div class="search">
    <select-list
        :options="genres"
        @onSelectOption="selectGenre"
    >
    </select-list>
    <form @submit.prevent="findFilms">
      <input class="search__input" v-model="searchText" placeholder="Название фильма">
      <button class="search__button" :disabled="isLoading"><strong>Найти</strong></button>
    </form>
  </div>
  <div v-if="!preloader" class="cards-container" ref="scrollComponent">
    <film-card v-for="film in films" :key="film.id" :film="film" @click="openFilmDescription(film.id)"></film-card>
  </div>
  <span v-else class="loader"></span>
  <div class="observer" ref="observer"></div>
</template>
    
<script>

import FilmCard from "@/components/FilmCard.vue";
import {getFilms, getFilmsByGenre, getGenres, searchFilms} from "@/api";
import {mapActions, mapState} from "pinia";
import {useFilmStore} from "@/store";
import SelectList from "@/components/UI/SelectList.vue";

export default{
  components: {SelectList, FilmCard},
  data() {
    return {
      films: [],
      page: 1,
      searchText: '',
      isLoading: false,
      genres: [],
      filters: {genre: ''},
      preloader: false,
    }
  },
  created() {
    this.fetchFilms(this.page)
  },
  mounted() {
    this.fetchGenres()
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
  watch: {
    "films"() {
      this.checkLikedFilms()
    }
  },
  computed: {
    ...mapState(useFilmStore, ["favoriteFilms"])
  },
  methods: {
    ...mapActions(useFilmStore, ['addWatchedFilm']),
    async fetchFilms(page) {
      try {
        this.preloader = true
        const response = await getFilms(page)
        this.films = response.results
      }
      catch (e) {
        alert('error')
      }
      finally {
        this.preloader = false
      }
    },
    async loadMoreFilms() {
      this.page += 1
      const moreFilms = await getFilms(this.page)
      this.films = [...this.films, ...moreFilms.results]
    },
    async findFilms() {
      this.isLoading = true
      if(this.filters.genre) {
        const films = await getFilmsByGenre(this.filters.genre)
        this.films = films.results
      }
      if(this.searchText) {
        const films = await searchFilms(this.searchText)
        this.films = films.results
      }
      if(this.films) {
        this.isLoading = false
      }
    },
    async fetchGenres() {
      const response = await getGenres()
      this.genres = response.results
    },
    openFilmDescription(id) {
      this.$router.push(`/films/${id}`)
      this.addWatchedFilm(id)
    },
    checkLikedFilms() {
      this.films.forEach(el => {
        if (this.favoriteFilms.includes(el.id)) {
          el.favorite = true
        }
      })
    },
    selectGenre(genre) {
      this.filters.genre = genre
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
    -webkit-box-shadow: 0px 2px 11px 2px rgb(255, 129, 0);
    -moz-box-shadow: 0px 2px 11px 2px rgb(255, 129, 0);
    box-shadow: 0px 2px 11px 2px rgb(255, 129, 0);
    &:hover {
      background-color: #9a5202;
      color: #b2b2b2;
      -webkit-box-shadow: 0px 2px 11px 2px rgb(154, 82, 2);
      -moz-box-shadow: 0px 2px 11px 2px rgb(154, 82, 2);
      box-shadow: 0px 2px 11px 2px rgb(154, 82, 2);
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
.loader {
  position: absolute;
  top: 50%;
  right: 50%;
  width: 48px;
  height: 48px;
  border: 5px solid #ff8100;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>