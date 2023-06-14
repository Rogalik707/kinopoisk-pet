<template>
 <div class="film">
   <div class="film__img">
     <img :src="film?.primaryImage?.url"/>
   </div>
   <div class="film__text_box">
     <div class="film__title"><h1>{{ film?.originalTitleText?.text }}</h1></div>
     <div class="film__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
   </div>
   <div class="actors">
     <h3 class="actors__header"> Актеры:</h3>
     <div class="actors__list" v-for="actor in actors" :key="actor.nconst"> {{ actor?.primaryName }} </div>
   </div>
 </div>
</template>

<script>

import {getActors, getFilm} from "@/api";

export default {
  data(){
    return {
      film: {},
      actors: []
    }
  },
  name: "DescriptionPage",
  created() {
    this.fetchFilm()
    this.fetchActors()
  },
  methods: {
    async fetchFilm(){
      const response = await getFilm(this.$route.params.id)
      this.film = response.results
    },
    async fetchActors() {
      const response = await getActors()
      this.actors = response.results
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 220px;
  width: 197px;
  border-radius: 10px;
}
.film {
  margin: 100px 0 0 100px;
  display: flex;
  justify-content: center;
  &__text_box {
    max-width: 600px;
    margin-left: 100px;
  }
  &__description {
    margin-top: 30px;
  }
}
.actors {
  margin-left: 50px;
  flex-direction: column;
  &__header {
    margin-bottom: 15px;
  }
  &__list {
    color: #b2b2b2;
    &:hover {
      color: #ff8100;
      cursor: pointer;
    }
  }
}
</style>