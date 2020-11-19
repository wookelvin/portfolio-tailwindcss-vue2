<template>
  <div id="app">
    <header>
      <nav id="nav">
        <div class="px-2 container mx-auto flex flex-row justify-between py-5">
          <div class="font-bold text-3xl">KW</div>
          <div class="">
            <router-link 
              v-for="(l,li) of links" 
              :key="'router-link'+li" 
              :to="l.to"
              class="font-bold uppercase ml-8 text-gray-500 tracking-wide hover:text-indigo-700"
              active-class="text-indigo-500"
            >{{l.label}}</router-link>
          </div>
        </div>
      </nav>
    </header>

    <main class="px-2 container mx-auto">
      <router-view/>
    </main>

    <section class="px-2 container mx-auto my-20">
      <div class="flex items-center">
        <Heading2 class="w-96 mr-10">Interested in doing a project together?</Heading2>
        <div class="flex-1 border-t border-gray-300"></div>
        <div class="ml-10">
          <Button>Contact Me</Button>
        </div>
      </div>
    </section>

    <footer class="bg-gray-800 text-white">
      <div class="px-2 container mx-auto py-5">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <div class="font-bold text-3xl">KW</div>
            <div>
              <router-link 
                    v-for="(l,li) of links" 
                    :key="'router-link'+li" 
                    :to="l.to"
                    class="font-bold uppercase ml-8 text-gray-300 tracking-wide hover:text-indigo-400"
                    active-class="text-indigo-300"
                  >{{l.label}}</router-link>
            </div>
          </div>

          <div class="flex">
            <IconFile class="ml-3" src="github.svg" alt="GitHub" style="filter: invert(1)"></IconFile>
            <IconFile class="ml-3" src="twitter.svg" alt="Twitter" style="filter: invert(1)"></IconFile>
            <IconFile class="ml-3" src="linkedin.svg" alt="LinkedIn" style="filter: invert(1)"></IconFile>

          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Heading2 from '@/components/Heading2.vue';
import Button from '@/components/Button.vue';
import IconFile from '@/components/IconFile.vue';

@Component({ 
  components:{ 
    Heading2,
    Button, 
    IconFile
  }
})
export default class App extends Vue {
  links = [
    { to: '/', label: 'Home' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact Me' },
  ]
}
</script>

<style>
</style>
