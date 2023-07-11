<template>
    <div class="card">
      <div class="card__img"><img :src="film?.primaryImage?.url"></div>
      <div class="card__body">
        <div class="card__title"><h4>{{ film.originalTitleText.text }}</h4></div>
          <div class="description">
            <div class="card__year">({{ film.releaseDate.year }})</div>
          </div>
        <div class="like">
          <svg-icon
            v-if="film?.favorite"
            class="like"
            @click.stop="disLikeFilm(film.id)"
            :src="LikeIcon"
        >
        </svg-icon>
          <svg-icon
              v-else
              class="like"
              @click.stop="likeFilm(film.id)"
              :src="HeartIcon"
          >
          </svg-icon>
        </div>
      </div>
    </div>
</template>
       
<script>
import HeartIcon from '../assets/heart.svg'
import LikeIcon from '../assets/redheart.svg'
import {mapActions} from "pinia";
import {useFilmStore} from "@/store";

export default {
  name: 'FilmCard',
  data() {
    return {
      HeartIcon,
      LikeIcon,
    }
  },
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(useFilmStore, ['addFavoriteFilm', 'deleteFilm']),
    likeFilm(id) {
      this.addFavoriteFilm(id)
      this.$emit('onLike', id)
    },
    disLikeFilm(id) {
      this.deleteFilm(id)
      this.$emit('onDislike', id)
    }
  }
}
</script>
       
<style scoped>

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
</style>