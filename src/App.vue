<script setup>
import HomePage from './pages/Home.vue'
import DrawerCart from './components/DrawerCart.vue'
import BaseHeader from './components/BaseHeader.vue'
import CardList from './components/CardList.vue'
import { Search } from 'lucide-vue-next'
</script>

<template>
  <main class="bg-white container mx-auto min-h-screen rounded-xl my-10 shadow-md">
    <BaseHeader />
    <div class="p-6">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-semibold">Все кроссовки</h2>

        <select>
          <option>По названию</option>
          <option>По цене (дешевле)</option>
          <option>По цене (дорогие)</option>
        </select>

        <div class="relative">
          <Search class="text-gray-300 absolute left-3 top-2" />
          <input
            class="border rounded-xl py-2 pl-12 pr-4 outline-none focus:border-gray-400"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <CardList />
    </div>
  </main>
  <!-- <DrawerCart /> -->
  <!-- <HomePage /> -->
</template>
