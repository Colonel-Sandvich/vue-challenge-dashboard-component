<script setup lang="ts">
type Status = "completed" | "pending" | "cancelled";

type PaymentType = {
  name: "Visa card" | "Mastercard" | "Amex card" | (string & {});
  digits: string;
  type: "Card" | "Bank";
};
// Assume everything is $USD and number is cents
type Currency = number;

export type Transaction = {
  status: Status;
  paymentType: PaymentType;
  currency: Currency;
  date: Date;
  retailer: string;
};

const { transaction } = defineProps<{
  transaction: Transaction;
}>();

const { status, paymentType, currency, date, retailer } = transaction;
// If we had different currencies we would use something other than a hard
// coded 100
const dollarsAndCents = currency;

const currencyFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
</script>

<template>
  <div class="grid grid-flow-row grid-cols-[2fr_3fr_2fr_2fr_1fr]">
    <span class="flex items-center">{{ status }}</span>
    <div class="flex flex-col">
      <span class="font-bold">{{ paymentType.name }} ****{{ paymentType.digits }}</span>
      <span class="font-extralight">{{ paymentType.type }} payment</span>
    </div>
    <span class="flex items-center">{{ currencyFormatter.format(dollarsAndCents) }}</span>
    <span class="flex items-center">{{ retailer }}</span>
    <button>...</button>
  </div>
</template>
