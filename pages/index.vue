<template>
  <div
    class="my-4 mx-16 mb-12 max-w-3xl mx-auto px-6 text-xl"
    style="background: url(/img/bitmoji-3.png) no-repeat 124% 0"
  >
    <div class="font-body">
      <FormattedQuote
        quote="To teach is to touch a life forever."
        credit="Anonymous"
      />

      <h2 class="text-2xl mb-4">About me</h2>

      <div class="mb-4">
        <p class="mb-4 pr-56"> My name is India Lyons.  I teach sixth-grade mathematics. For ten years, I’ve worked with students from kindergarten to 8th grade in the classroom, and as a tutor and after-school counselor and director.</p>

        <p class="mb-4 pr-56">Currently, I'm a student at Georgia State University and I am a candiate for a Masters of Arts in Teaching Middle Grades. I also have a BA in Political Science with a minor in Economics from Howard University.</p>

        <p>This is my 2nd year as a Math teacher at Stone Mountain Middle school, and I could not be any happier to work with the best and the brightest students that Dekalb County has to offer.</p>
      </div>

      <h2 class="text-2xl mb-4">Teaching Philosophy</h2>

      <p class="mb-4">
          All students have a right to an equitable education. I believe in creating a positive environment for all students of different learning styles to flourish and reach their highest learning potential. My classroom is a community that consists of a teacher, students, administration, and parents working together to maintain order and a positive space. In my class, mistakes are to be made. We learn from our mistakes, discuss them, and plan better strategies as a community. I believe students can become their own facilitators in the quest of knowledge as well as peer teachers. The goal is to have a classroom that creates cooperative ownership of the learning process.
      </p>

      <h2 class="text-2xl mb-4">Class Expectations</h2>

      <p class="mb-4">
          Please encourage your child to come each day prepared and ready to learn. Students should bring <em>Math Binder</em>, <em>Paper</em>, <em>Pencil</em>, and <em>Chromebook</em> to every class.
      </p>

      <p class="mb-4">We expect students to:</p>

      <ul class="list-inside mb-4 ml-4">
          <li type="circle">Be respectful and courteous.</li>
          <li type="circle">Follow all rules, rituals, and routines.</li>
          <li type="circle">Focus and pay attention in class.</li>
          <li type="circle">Do not be afraid to ask questions and for help.</li>
          <li type="circle">Complete and turn in all assignments on time.</li>
      </ul>

      <p>Parents, please encourage your child to complete their homework daily.</p>
    </div>
  </div>
</template>

<script>
import FormattedQuote from '~/components/FormattedQuote'

export default {
  name: 'HomePage',
  components: { FormattedQuote }
}
</script>
