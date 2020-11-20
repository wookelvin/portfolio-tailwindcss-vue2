<template>
  <Banner bgSrc="work.jpg" bgAlt="Work sprawled across a desk" ratio="33.333">
    <h1>Portfolio</h1>
  </Banner>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';

@Component({
  components: {
    Banner,
  },
})
export default class PortfolioBanner extends Vue {}
</script>
