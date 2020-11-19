<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <ImageFixedRatio src="profile.jpg" alt="profile" ratio="133.333"/>
    </div>
    
    <div class="px-20 flex items-center border-t border-b  justify-center border-gray-300">
      <div class="py-10">
        <h2 class="text-4xl font-serif font-bold mb-6">About Me</h2>
        <p>I'm a intermediate front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use Vue, but I can adapt to whatever tools are required. I'm based in Vancouver WA, but I'm happy working remotely and have experience in remote teams. When I'm not coding, you'll find me outdoors. I love being out in nature whether that's going for a walk, run or cycling. I'd love for yout o check out my work.</p>
        <Button role="button" class="mt-8">Go To portfolio</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import ImageFixedRatio from '@/components/ImageFixedRatio.vue';

@Component({ 
  components:{
    ImageFixedRatio, 
    Button
  }
})
export default class AboutMe extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
