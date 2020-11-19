<template>
  <div>
    <div class="bgimg bg-gray-100 relative overflow-hidden" style="padding-bottom:56.25%">
      <img :src="bgImg(bgSrc)" :alt="bgAlt" class="object-cover w-full h-full absolute"/>  
      <div class="bg-white pt-8 pr-8 absolute bottom-0 w-2/5">
        <div class="text-4xl font-serif font-bold">
          <slot></slot>
        </div>
        <slot name="cta"></slot>
      </div>
    </div>
    
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Banner extends Vue {
  @Prop({required: true})
  bgSrc!: string;

  @Prop({required: true})
  bgAlt!: string;

  bgImg(AssetImg: string){ 
    if (this.bgSrc){
      const images = require.context('../assets/', false, /\.jpg$/);
      return images('./'+AssetImg);
    }else{ 
      return '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
