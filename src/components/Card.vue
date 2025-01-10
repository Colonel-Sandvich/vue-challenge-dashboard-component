<script setup lang="ts">
import { currencyFormatter, dateFormat } from "@/utils/formatters";
import StatusChip from "./StatusChip.vue";

export type Status = "completed" | "pending" | "cancelled";

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
const dollarsAndCents = currency / 100;
</script>

<template>
  <div
    class="grid grid-flow-row grid-cols-[2fr_3fr_2fr_2fr_0.5fr] hover:bg-gray-100 px-8 last:border-b-0 py-6 border-b cursor-pointer"
  >
    <StatusChip :status />
    <div class="flex flex-col">
      <span class="font-bold">{{ paymentType.name }} ****{{ paymentType.digits }}</span>
      <span class="font-extralight">{{ paymentType.type }} payment</span>
    </div>
    <div class="flex flex-col">
      <span class="flex items-center font-bold">{{
        currencyFormatter.format(dollarsAndCents)
      }}</span>
      <span>{{ dateFormat.format(date) }}</span>
    </div>
    <span class="flex items-center">{{ retailer }}</span>
    <button class="font-extrabold">...</button>
  </div>
</template>
