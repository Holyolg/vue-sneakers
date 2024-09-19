<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import CardList from '../components/CardList.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://34d6cad7100e9bbb.mokky.dev/favorites?_relations=items'
    )

    favorites.value = data.map((obj) => obj.item)
    console.log(favorites.value)
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <h1 class="text-2xl font-semibold mb-10">Мои кроссовки</h1>

  <CardList :items="favorites" is-favorites />
</template>
