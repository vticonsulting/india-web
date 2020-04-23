<template>
  <div class="font-sans">
    <PagesHeader class="mb-16"/>

    <main class="flex-1">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import PagesHeader from '~/components/PagesHeader'

export default {
  name: 'DefaultLayout',
  components: { PagesHeader }
}
</script>

<style lang="stylus">
.markdown {
  h1 {
    @apply text-4xl font-bold
  }
  h2 {
    @apply text-2xl font-bold mb-4
  }

  p {
    @apply mb-6
  }
}
</style>
