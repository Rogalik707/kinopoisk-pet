<template>
 <div>film</div>
</template>

<script>

import {getFilm} from "@/api";

export default {
  data(){
    return {
      film: {}
    }
  },
  name: "DescriptionPage",
  created() {
    this.fetchFilm()
  },
  methods: {
    async fetchFilm(){
      const response = await getFilm(this.$route.params.id)
      this.film = response.results
    }
  }
}
</script>

<style scoped>

</style>