<template>
  <Banner bgSrc="computer-on-desk.jpg" bgAlt="Computer on Desk">
    <p>Hey, I'm Kelvin Woo and I love building beautiful websites</p>
    <template v-slot:cta>
      <Button role="button" class="mt-8"><template v-slot:icon><IconChevronDown/></template>About Me</Button>
    </template>
  </Banner>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import Button from '@/components/Button.vue';
import IconChevronDown from '@/components/Icons/IconChevronDown.vue';

@Component({
  components: {
    Banner,
    Button, 
    IconChevronDown, 
  },
})
export default class HomeBanner extends Vue {}
</script>
