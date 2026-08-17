<template>
  <div class="container">
    <slot />

    <nav class="navigation">
      <router-link :to="{ path: '/' }">Главная</router-link>
      <router-link :to="{ path: '/payments' }">Траты</router-link>
      <router-link :to="{ path: '/new-payment' }">Новая Трата (+)</router-link>
      <router-link :to="{ path: '/payment-type' }">Типы трат</router-link>
      <router-link :to="{ path: '/settings' }">Настройки</router-link>
    </nav>
  </div>
</template>

<style scoped>
.container {
  overflow-y: hidden;
  height: calc(100vh - 40px);
  width: 100vw;
}

.navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #e2e2e2;
  border: 2px solid #b5b5b5;
}
</style>
