<template>
  <v-container>
    <div>
  <v-carousel :show-arrows="false" height="830">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
    </div>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
             {src: require('../assets/home-carousel/home_pic_box.jpg')}
        ],
      }
    },
  }
</script>

<style>
</style>
