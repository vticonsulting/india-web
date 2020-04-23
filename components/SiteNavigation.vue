<template>
  <nav class="flex justify-between w-full max-w-4xl mx-auto sm:text-2xl medium">
    <NuxtLink
      v-for="(page, index) in pages"
      :key="index"
      class="inline-block w-1/6 text-center py-2 px-2 text-purple-900 hover:border-b-4 hover:text-gray-700 sm:px-6 border-b-2 border-gray-500"
      exact
      :to="page.path"
    >
      {{ page.title }}
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavigation',
  data() {
    return {
      pages: [
        {
          path: '/',
          title: 'Home',
        },
        {
          path: '/syllabus',
          title: 'Syllabus',
        },
        {
          path: '/resources',
          title: 'Resources',
        },
        {
          path: '/standards',
          title: 'Standards',
        },
        {
          path: '/portfolio',
          title: 'Portfolio',
        },
        {
          path: '/contact',
          title: 'Contact',
        },
      ],
    }
  }
}
</script>
