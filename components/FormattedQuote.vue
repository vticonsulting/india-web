<<template>
  <!-- Blockquote Component -->
  <blockquote class="mb-8 md:flex-grow md:flex md:flex-col">
    <div class="relative text-lg leading-7 font-medium text-gray-800 md:flex-grow">
      <!-- Quotation Mark -->
      <svg
        class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-purple-200" fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>

      <!-- Quote -->
      <p class="relative font-semibold font-serif italic">
        {{ quote }}
      </p>
      <!-- end Quote -->
    </div>

    <!-- Quote Footer -->
    <footer class="mt-2">
      <div class="flex">
        <div class="ml-4">
          <div class="text-base leading-6 font-medium text-gray-700">
            — {{ credit }}
          </div>
        </div>
      </div>
    </footer>
    <!-- end Quote Footer -->
  </blockquote>
  <!-- end Blockquote Component -->
</template>

<script>
export default {
  name: 'FormattedQuote',
  props: {
    quote: {
      type: String,
      default: ''
    },
    credit: {
      type: String,
      default: ''
    }
  }
}
</script>
