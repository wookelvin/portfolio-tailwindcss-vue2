<template>
  <Banner bgSrc="coffee-computer.jpg" bgAlt="Computer at a coffee shop" ratio="33.333">
    <h1>Contact Me</h1>
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
export default class ContactBanner extends Vue {}
</script>
