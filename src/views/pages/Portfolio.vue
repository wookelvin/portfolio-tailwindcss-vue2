<template>
  <div>
    <PortfolioBanner/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PortfolioBanner from '@/views/PortfolioBanner.vue';

@Component({
  components: {
    PortfolioBanner
  },
})
export default class Portfolio extends Vue {}
</script>
