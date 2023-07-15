<template>
    <div class="card">
      <div class="card__img"><img :src="film?.primaryImage?.url"></div>
      <div class="card__body">
        <div class="card__title"><h4>{{ film.originalTitleText.text }}</h4></div>
          <div class="description">
            <div class="card__year">({{ film.releaseDate.year }})</div>
          </div>
        <div class="like"
             :class="{ 'like--active': isLiked }"
             @click.stop.prevent="changeFilmStatus(film.id)">
        </div>
      </div>
    </div>
</template>
       
<script>
import {mapActions} from "pinia";
import {useFilmStore} from "@/store";

export default {
  name: 'FilmCard',
  data() {
    return {
      isLiked: false,
    }
  },
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    if (this.film.favorite) {
      this.isLiked = true
    }
  },
  methods: {
    ...mapActions(useFilmStore, ['addFavoriteFilm', 'deleteFilm']),
    changeFilmStatus(id) {
      if(this.isLiked) {
        this.deleteFilm(id)
      } else {
        this.addFavoriteFilm(id)
      }
      this.isLiked = !this.isLiked
    }
  }
}
</script>
       
<style lang="scss" scoped>

.card {
  height: 350px;
  width: 200px;
  background-color: #c5c5c5;
  border-radius: 10px;
  margin: 30px;
  justify-content: center;
  box-shadow: 0 0 15px 1px #757575;
    &:hover {
      transition: 0.3s; /* Время эффекта */
      transform: scale(1.04); /* Увеличиваем масштаб */
    }
}
.card__body {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}
img {
  height: 220px;
  width: 200px;
  border-radius: 9px;
}
.description {
  display: flex;
  flex-direction: column;
}

.like {
  margin-top: 5px;
  width: 24px;
  height: 24px;
  background: url("@/assets/blackHeart.svg") no-repeat;
  cursor: pointer;
  &--active {
      background: url("@/assets/redHeart.svg") no-repeat;
  }
  &:hover {
    transform: scale(1.1);
    transition: ease-in-out 0.2s;
  }
}

</style>