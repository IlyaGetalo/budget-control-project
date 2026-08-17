import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import NewPaymentPage from '@/pages/NewPaymentPage.vue'
import PaymentsPage from '@/pages/PaymentsPage.vue'
import PaymentTypePage from '@/pages/PaymentTypePage.vue'
import SettingsPage from '@/pages/SettingsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/new-payment',
      name: 'newPayment',
      component: NewPaymentPage,
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentsPage,
    },
    {
      path: '/payment-type',
      name: 'paymentType',
      component: PaymentTypePage,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage,
    },
  ],
})

export default router
