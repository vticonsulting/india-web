<template>
  <header>
    <HeroSection class="text-center">
        <h1 class="font-black text-6xl">
          Ms. Lyons
        </h1>

        <h2 class="text-3xl">
          Math Class
        </h2>
    </HeroSection>
  </header>
</template>

<script>
import HeroSection from '~/components/HeroSection'

export default {
  name: 'PagesHeader',
  components: { HeroSection }
}
</script>
