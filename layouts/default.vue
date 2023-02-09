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
