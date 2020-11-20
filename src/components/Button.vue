<template>
  <button class="hover:bg-blue-800 bg-blue-900 text-gray-300 dark:bg-blue-200 dark:text-gray-800 uppercase tracking-wider font-semibold text-sm flex items-center">
    <div class="text-base px-3 border-gray-300 dark:border-gray-500 border-r" v-if="hasIconSlot">
      <slot name="icon"></slot>
    </div>
    <div class="py-2 px-9">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  get hasIconSlot(){ 
    return !!this.$slots.icon;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
