<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">LOGO</div>
      <ul class="nav-links">
        <li><a href="#" class="nav-link">Home</a></li>
        
        <!-- Bar/Venue Dropdown -->
        <li class="group relative inline-block">
          <a href="#" class="nav-link inline-flex items-center">
            Bar & Venue
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
          <ul class="dropdown-container">
            <li><a href="#" class="dropdown-link">Events</a></li>
            <li><a href="#" class="dropdown-link">Menu</a></li>
            <li><a href="#" class="dropdown-link">Open Mic</a></li>
          </ul>
        </li>

        <!-- Coffee Section -->
        <li class="group relative inline-block">
          <a href="#" class="nav-link inline-flex items-center">
            Coffee
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
          <ul class="dropdown-container">
            <li><a href="#" class="dropdown-link">Coffee Cart</a></li>
            <li><a href="#" class="dropdown-link">In-Store Coffee</a></li>
          </ul>
        </li>

        <li><a href="#" class="nav-link">Kimchi & Ferments</a></li>
        <li><a href="#" class="nav-link">Vintage Store</a></li>
        <li><a href="#" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  @apply bg-secondary p-4;
}

.navbar-container {
  @apply container mx-auto flex justify-between items-center;
}

.logo {
  @apply text-xl font-bold text-primary;
}

.nav-links {
  @apply flex space-x-6 items-center;
}

.nav-link {
  @apply text-white hover:text-accent-green transition-colors;
}

/* Dropdown container with hover buffer */
.group {
  @apply pb-8 -mb-8;
}

.dropdown-container {
  @apply invisible opacity-0 group-hover:visible group-hover:opacity-100
         absolute left-0 mt-2 w-48 
         bg-secondary rounded-lg shadow-lg 
         py-2 z-50
         transform transition-all duration-300
         pt-4 -top-2;
}

.dropdown-link {
  @apply block px-4 py-2 text-white hover:text-accent-green 
         transition-colors text-sm;
}
</style>