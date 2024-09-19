<script setup>
import { ref, watch, provide, computed } from 'vue'
import axios from 'axios'

import DrawerCart from './components/DrawerCart.vue'
import BaseHeader from './components/BaseHeader.vue'

const cart = ref([])

const drawerOpen = ref(false)

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  {
    deep: true
  }
)

provide('cart', { cart, closeDrawer, openDrawer, addToCart, removeFromCart })
</script>

<template>
  <main class="bg-white container mx-auto min-h-screen rounded-xl my-10 shadow-md">
    <BaseHeader @open-drawer="openDrawer" :total-price="totalPrice" />
    <div class="p-10">
      <router-view />
    </div>
  </main>
  <DrawerCart :total-price="totalPrice" v-if="drawerOpen" />
</template>
