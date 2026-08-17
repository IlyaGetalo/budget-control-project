<script setup lang="ts">
import { ref } from 'vue'
import { usePaymentTypesStore } from '@/stores/paymentTypes.store'

const name = ref('')
const budget = ref<number | null>(null) // https://ru.vuejs.org/guide/typescript/composition-api.html
const paymentTypesStore = usePaymentTypesStore()

function saveSettings() {
  paymentTypesStore.name = name.value
  paymentTypesStore.budget = budget.value
}
</script>

<template>
  <div class="settings_header">
    <h1>Настройки</h1>
    <p>Личные данные и бюджет</p>
  </div>
  <input v-model="name" placeholder="Введите имя" />
  <input v-model.number="budget" type="number" placeholder="Введите размер бюджета" />
  <button @click="saveSettings">Сохранить</button>
</template>

<style scoped>
.settings_header h1,
.settings_header p {
  margin: 0;
}

.settings_header {
  top: 0;
  left: 0;
  margin: 20px 15px;
}
</style>
