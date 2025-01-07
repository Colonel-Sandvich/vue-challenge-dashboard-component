<script setup lang="ts">
import type { Transaction } from "./Card.vue";
import Card from "./Card.vue";

const data: Array<Transaction> = [
  {
    status: "completed",
    paymentType: {
      name: "Visa card",
      digits: "4831",
      type: "Card",
    },
    currency: 18294,
    date: new Date(),
    retailer: "Amazon",
  },
  {
    status: "completed",
    paymentType: {
      name: "Mastercard",
      digits: "6442",
      type: "Card",
    },
    currency: 9900,
    date: new Date(),
    retailer: "Facebook",
  },
  {
    status: "pending",
    paymentType: {
      name: "Account",
      digits: "882",
      type: "Bank",
    },
    currency: 24994,
    date: new Date(),
    retailer: "Netflix",
  },
  {
    status: "cancelled",
    paymentType: {
      name: "Amex card",
      digits: "5666",
      type: "Card",
    },
    currency: 18294,
    date: new Date(),
    retailer: "AmazonPrime",
  },
];
</script>

<template>
  <div class="flex flex-col gap-6 bg-white p-8 rounded-3xl w-full">
    <div>
      <h2 class="font-bold">Transactions</h2>
    </div>
    <div class="flex flex-col gap-4">
      <Card v-for="transaction in data" :transaction />
    </div>
  </div>
</template>
