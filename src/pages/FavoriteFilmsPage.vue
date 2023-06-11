<template>
  <div class="cards-container">
    <film-card v-for="film in films" :key="film.id" :film="film">
    </film-card>
  </div>
</template>
    
<script>
import {getFavoriteFilms} from "@/api";
import {mapActions, mapState} from "pinia";
import {useFilmStore} from "@/store";
import FilmCard from "@/components/FilmCard.vue";

export default {
  components: {FilmCard},
  data() {
    return {
      films: []
    }
  },
  mounted() { //када компонент отработает на стр
    this.fetchFavoriteFilms(this.favoriteFilms)
  },
  computed: { // свойство, внутри которого какие-то данные, которые пересчитываются при обновлении компонента
    ...mapState(useFilmStore,['favoriteFilms'])
  },
  methods: {
    ...mapActions(useFilmStore, ['addFavoriteFilm', 'deleteFilm']),
    async fetchFavoriteFilms(films) {
      const response = await getFavoriteFilms(films)
      this.films = response.results
      if (this.films) {
        this.films.forEach((el) => el.favorite = true)
      }
    }
  }
}
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>