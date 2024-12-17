<template>
  <div class="min-h-screen flex items-center justify-center bg-secondary p-4">
    <div class="border-2 border-primary rounded-lg p-8 max-w-2xl mx-auto text-center">
      <h1 class="text-3xl font-bold text-white mb-4">
        {{ title || 'Oops! Something went wrong' }}
      </h1>
      
      <p class="text-gray-300 mb-8">
        {{ description || 'An error occurred while loading the page. Please try again.' }}
      </p>

      <button 
        @click="refreshPage"
        class="bg-primary text-white px-6 py-3 rounded-lg 
               hover:bg-opacity-80 transition-colors
               inline-flex items-center gap-2"
      >
        <svg 
          class="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Refresh Page
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  }
});

const refreshPage = () => {
  window.location.reload();
};
</script>
