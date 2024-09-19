<script setup>
import CartItemList from './CartItemList.vue'
import InfoBlock from './InfoBlock.vue'
import DrawerHead from './DrawerHead.vue'
import axios from 'axios'
import { ref, provide, watch, computed, inject } from 'vue'

const props = defineProps({
  totalPrice: Number,
  buttonDisabled: Boolean
})

const { cart, closeDrawer } = inject('cart')

const isLoading = ref(false)

const orderId = ref(null)

const createOrder = async () => {
  try {
    isLoading.value = true

    const { data } = await axios.post('https://34d6cad7100e9bbb.mokky.dev/orders', {
      items: cart.value,
      totalPrice: props.totalPrice.value
    })
    cart.value = []

    orderId.value = data.id
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
const cartIsEmpty = computed(() => cart.value.length === 0)

const buttonDisabled = computed(() => isLoading.value || cartIsEmpty.value)
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-screen bg-black/50 z-10">
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-6 overflow-y-auto">
      <DrawerHead />

      <div v-if="!totalPrice || orderId" class="flex justify-center h-5/6">
        <InfoBlock
          v-if="!totalPrice && !orderId"
          imageUrl="/package-icon.png"
          title="Корзина пустая"
          desc="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        />

        <InfoBlock
          v-if="orderId"
          imageUrl="/order-success-icon.png"
          title="Заказ создан"
          :desc="`Ваш заказ №${orderId} создан и скоро будет передан в доставку`"
        />
      </div>

      <CartItemList />

      <div v-if="totalPrice">
        <div class="my-6">
          <div class="flex justify-between gap-2">
            <p class="text-gray-400">Итого:</p>
            <div class="flex-1 border-b border-dashed"></div>
            <p class="font-semibold">{{ totalPrice }} руб.</p>
          </div>
        </div>
        <button
          :disabled="buttonDisabled"
          @click="createOrder"
          class="p-2 w-full text-white font-semibold bg-[#40b681] rounded-xl hover:opacity-80 transition-all active:translate-y-1 shadow-md disabled:bg-gray-400 disabled:pointer-events-none"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>
