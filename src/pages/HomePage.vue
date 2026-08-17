<script setup lang="ts">
import { ref } from 'vue'
import { usePaymentTypesStore } from '@/stores/paymentTypes.store'

const remaining = ref(38201)
const paymentTypesStore = usePaymentTypesStore()
</script>

<template>
  <main class="payments-page">
    <div class="greeting_banner">
      <div class="greeting_information">
        <h1 class="greeting_hello">Привет,</h1>
        <h2 class="greeting_name">{{ paymentTypesStore.name }}! 👋</h2>
        <div class="greeting_dashboard">
          Остаток в этом месяце:
          <div class="greeting_dashboard_remaining">{{ paymentTypesStore.budget }}₽</div>
          <div class="greeting_dashboard_spending_and_total">
            а тут типа полоса потрачено/осталось
          </div>
        </div>
      </div>
    </div>

    <div class="dashboards">
      <div class="dashboard_burned"></div>
      <div class="dashboard_categories"></div>
      <div class="dashboard_categories"></div>
    </div>
  </main>
</template>

<style scoped>
/* Main information */

.greeting_banner {
  position: sticky;
  height: 325px;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #e85d75;
}

.greeting_hello {
  color: #fff;
  padding: 20px 20px 0 20px;
  margin: 0;
}

.greeting_name {
  color: #fff;
  padding: 0 20px 0 20px;
  margin: 10px 0 0 0;
}

.greeting_dashboard {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: rgb(207, 135, 147);
  color: #fff;
  margin: 20px;
  padding: 20px;
  height: 15vh;
  border-radius: 20px;
}

.greeting_dashboard_remaining {
  color: #fff;
  font-size: 25px;
}

.greeting_dashboard_spending_and_total {
  color: #fff;
}

.payments-page {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
}

/* Dashboards */
.dashboards {
}

.dashboard_burned {
  width: 95%;
  height: 220px;
  margin: 8px auto 0px auto; /* ХАРДКОД!!! может стоит адаптивно написать */
  background-color: #eeeeee;
  border: 1px solid #b5b5b5;
  border-radius: 20px;
}

.dashboard_categories {
  width: 95%;
  height: 200px;
  margin: 8px auto;
  background-color: #eee;
  border: 1px solid #b5b5b5;
  border-radius: 20px;
}

/* Navigation Bar */
.navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #e2e2e2;
  border: 2px solid #b5b5b5;
}
</style>
