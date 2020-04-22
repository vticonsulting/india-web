<template>
  <div class="font-cursive">
    <figure class="bg-gray-400">
      <img
        class="object-cover object-bottom h-48 w-full"
        src="/hero.jpg"
      />
    </figure>

    <nav class="flex justify-between w-full max-w-4xl mx-auto sm:text-2xl mb-12">
      <nuxt-link class="inline-block w-1/6 text-center py-2 px-2 text-gray-600 hover:border-b-4 hover:text-gray-700 sm:px-6 border-b-2 border-gray-500" exact to="/">
        Home
      </nuxt-link>
      <nuxt-link class="inline-block w-1/6 text-center py-2 px-2 text-gray-600 hover:border-b-4 hover:text-gray-700 sm:px-6 border-b-2 border-gray-500" exact to="/syllabus">
        Syllabus
      </nuxt-link>
      <nuxt-link class="inline-block w-1/6 text-center py-2 px-2 text-gray-600 hover:border-b-4 hover:text-gray-700 sm:px-6 border-b-2 border-gray-500" exact to="/resources">
        Resources
      </nuxt-link>
      <nuxt-link class="inline-block w-1/6 text-center py-2 px-2 text-gray-600 hover:border-b-4 hover:text-gray-700 sm:px-6 border-b-2 border-gray-500" exact to="/standards">
        Standards
      </nuxt-link>
      <nuxt-link class="inline-block w-1/6 text-center py-2 px-2 text-gray-600 hover:border-b-4 hover:text-gray-700 sm:px-6 border-b-2 border-gray-500" exact to="/portfolio">
        Portfolio
      </nuxt-link>
      <nuxt-link class="inline-block w-1/6 text-center py-2 px-2 text-gray-600 hover:border-b-4 hover:text-gray-700 sm:px-6 border-b-2 border-gray-500" exact to="/contact">
        Contact
      </nuxt-link>
    </nav>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.media-container {
  position: relative;
  overflow: hidden;
  padding-top: 26.25%;
}

.media-container iframe,
.media-container video,
.media-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.nuxt-link-active {
  color: #111;
  border-bottom: 4px solid #111;
}
.content {
  margin: 0 !important;
  padding: 0;
}
</style>
