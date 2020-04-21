<template>
  <div>
    <figure class="bg-gray-400">
      <img
        class="object-cover object-bottom h-48 w-full"
        src="/hero.jpg"
      />
    </figure>

    <nav class="flex justify-center sm:text-2xl">
      <nuxt-link class="inline-block py-2 px-2 sm:px-6 border-b-2 border-gray-500" exact to="/">
        Home
      </nuxt-link>
      <nuxt-link class="inline-block py-2 px-2 sm:px-6 border-b-2 border-gray-500" exact to="/syllabus">
        Syllabus
      </nuxt-link>
      <nuxt-link class="inline-block py-2 px-2 sm:px-6 border-b-2 border-gray-500" exact to="/resources">
        Resources
      </nuxt-link>
      <nuxt-link class="inline-block py-2 px-2 sm:px-6 border-b-2 border-gray-500" exact to="/contact">
        Standards
      </nuxt-link>
      <nuxt-link class="inline-block py-2 px-2 sm:px-6 border-b-2 border-gray-500" exact to="/contact">
        Contact
      </nuxt-link>
      <nuxt-link class="inline-block py-2 px-2 sm:px-6 border-b-2 border-gray-500" exact to="/portfolio">
        Portfolio
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
</style>
