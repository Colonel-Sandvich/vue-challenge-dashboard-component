<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { Status } from "./Card.vue";

const { status } = defineProps<{
  status: Status;
}>();
</script>

<template>
  <div class="flex self-center">
    <div
      class="flex self-center items-center gap-2 px-4 py-1 rounded-full"
      :class="{
        'bg-green-500/20 text-green-500': status === 'completed',
        'bg-yellow-500/20 text-yellow-500': status === 'pending',
        'bg-red-500/20 text-red-500': status === 'cancelled',
      }"
    >
      <Icon icon="oui:dot" />
      <span class="first-letter:capitalize">{{ status }}</span>
    </div>
  </div>
</template>
