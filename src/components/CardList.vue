<script setup>
import CardSneaker from './CardSneaker.vue'
</script>

<template>
  <div class="grid grid-cols-3 gap-5 mt-5">
    <CardSneaker :isFavorite="true" :isAdded="true" />
    <CardSneaker :isFavorite="true" :isAdded="true" />
    <CardSneaker :isFavorite="true" :isAdded="true" />

    <CardSneaker :isFavorite="true" :isAdded="true" />
  </div>
</template>
