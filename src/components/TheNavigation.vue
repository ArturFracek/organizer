<template>
  <div class="nav">
    <router-link to="/" class="nav_link">Home</router-link>
    <router-link to="/Organise" class="organise nav_link">O r g a n i s e</router-link>
    <router-link to="Log-in" class="nav_link">Log-in</router-link>
  </div>
</template>

<script>

export default {
  name: "TheNavigation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Antic&family=Metal+Mania&family=Rock+Salt&display=swap');

.nav{
  height: 5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  background-color: rgb(228, 225, 225);
}

.nav_link {
  font-size: 2em;
  text-decoration: none;
  margin: 5px 4%;
  color: black;
  font-weight: bold;
  text-shadow: 0px 10px 10px  #bdb8b8;
}

.organise{
  font-family: 'Rock Salt', cursive;
  font-size: 2.7em;
  font-weight: bold;
}
</style>
