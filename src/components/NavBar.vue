<template>
    <div class="list">
        <ul>
            <router-link class="link" to="/">Фильмы</router-link>
            <li class="link">Сериалы</li>
            <router-link class="link" to="/favorites"> Моё</router-link>
            <router-link class="link" to="/account">Аккаунт</router-link>
        </ul>
    </div>
</template>
    
<script>

</script>
    
<style lang="scss" scoped>
.list {
    background-color: black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
} 
ul {
    padding: 20px 0 20px 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
}
.link {
  margin-right: 15px;
  color: white;
  text-decoration: none;
  &:hover {
    color: #ff8100;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
}
</style>