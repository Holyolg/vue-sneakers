<script setup>
import CardList from '../components/CardList.vue'
import { inject, onMounted, ref, watch, reactive, provide, computed } from 'vue'
import { Search } from 'lucide-vue-next'
import debounce from 'lodash.debounce'
import axios from 'axios'

const { cart, addToCart, removeFromCart } = inject('cart')

const items = ref([])

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})
const onChangeSelect = (e) => {
  filters.sortBy = e.target.value
}

const onChangeSearch = debounce((e) => {
  filters.searchQuery = e.target.value
}, 500)

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id
      }

      item.isFavorite = true

      const { data } = await axios.post(`https://34d6cad7100e9bbb.mokky.dev/favorites`, obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://34d6cad7100e9bbb.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://34d6cad7100e9bbb.mokky.dev/favorites')

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}`
    }

    const { data } = await axios.get('https://34d6cad7100e9bbb.mokky.dev/items', {
      params
    })
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []

  await fetchItems()
  await fetchFavorites()

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
})

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }))
})

watch(filters, fetchItems)
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-2xl font-semibold">Все кроссовки</h1>

      <div class="flex gap-4">
        <select @change="onChangeSelect" class="py-2 border rounded-xl px-2 outline-none">
          <option value="name">По названию</option>
          <option value="price">По цене (дешевле)</option>
          <option value="-price">По цене (дороже)</option>
        </select>

        <div class="relative">
          <Search class="text-gray-300 absolute left-3 top-2" />
          <input
            @input="onChangeSearch"
            class="border rounded-xl py-2 pl-12 pr-4 outline-none focus:border-gray-400"
            placeholder="Поиск..."
          />
        </div>
      </div>
    </div>

    <CardList @add-to-cart="onClickAddPlus" :items="items" @add-to-favorite="addToFavorite" />
  </div>
</template>
