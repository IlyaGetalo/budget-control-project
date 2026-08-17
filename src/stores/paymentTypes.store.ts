import { defineStore } from 'pinia'

export const usePaymentTypesStore = defineStore('paymentTypes', {
  state: () => ({
    name: '',
    budget: null as number | null,
    paymentTypes: [],
  }),
})
