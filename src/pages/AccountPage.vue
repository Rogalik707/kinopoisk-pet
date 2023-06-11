<template>
 <div class="profile">
   <div class="profile__img"></div>
   <div class="profile__description">
     <h1>Machen</h1>
     <div class="profile__table_box">
      <ul>
        <li>Просмотренных фильмов: 0</li>
        <li>Понравившихся фильмов: {{ favoriteFilms.length }} </li>
        <li>Просмотренных сериалов: 0</li>
        <li>Понравившихся сериалов: 0</li>
     </ul>
     </div>
   </div>
 </div>
  <div class="watched_films"></div>
</template>
    
<script>
import {mapState} from "pinia";
import {useFilmStore} from "@/store";

export default {
  name: 'AccountPage',
  computed: {
    ...mapState(useFilmStore, ["favoriteFilms"])
  }
}
</script>
    
<style scoped>
 .profile {
   margin: 50px 0 0 150px;
   display: flex;
 }
 .profile__img {
   height: 150px;
   width: 150px;
   background-color: #b6b4b4;
 }
 .profile__description {
   margin-left: 50px;
 }
 .profile__table_box {
   background-color: #eeb49f;
   border-radius: 20px;
   margin-top: 45px;
 }
 ul {
   list-style-type: none;
   padding: 20px;
   display: flex;
 }
 li:not(:last-child) {
   padding-right: 20px;
 }
</style>