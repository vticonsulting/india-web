<template>
  <section class="hero bg-bottom" style="background-image: url(/img/hero-background.jpg)">
    <header class="hero-head">
    </header>

    <div class="hero-body">
      <div class="">
        <slot />
      </div>
    </div>

    <footer class="hero-foot">
      <SiteNavigation />
    </footer>
  </section>
</template>

<script>
import SiteNavigation from '~/components/SiteNavigation'

export default {
  name: 'HeroSection',
  components: { SiteNavigation }
}
</script>
