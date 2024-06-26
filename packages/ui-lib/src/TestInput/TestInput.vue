<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue'

export interface ButtonProps {
  type?: InputTypeHTMLAttribute
}
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'color',
})
</script>

<template>
  <input
    class="border-red-1 hover:bg-opacity-90"
    :type="props.type"
  >
</template>
