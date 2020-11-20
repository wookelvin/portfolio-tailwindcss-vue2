<template>
  <div class="mb-2">
    <label :for="inputId" class="block text-sm uppercase font-semibold text-gray-500">{{label}}</label>
    <input type="text" :id="inputId" class="border block rounded-md w-full p-2"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FormInput extends Vue {
  @Prop({required: true})
  inputId!: string;

  @Prop({required: true})
  label!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>