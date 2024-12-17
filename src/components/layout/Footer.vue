<template>
  <footer class="bg-secondary text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-primary">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.text">
              <a :href="link.url" class="hover:text-accent-green transition-colors">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-primary">Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-primary">Follow Us</h3>
          <div class="flex space-x-4">
            <a v-for="social in socialLinks" 
               :key="social.platform" 
               :href="social.url"
               class="text-accent-yellow hover:text-accent-green transition-colors">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-primary text-center">
        <p>&copy; {{ new Date().getFullYear() }} The Dog's Bone. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { text: 'About Us', url: '#' },
  { text: 'Services', url: '#' },
  { text: 'Privacy Policy', url: '#' },
  { text: 'Terms of Service', url: '#' }
]

const socialLinks = [
  { platform: 'facebook', url: '#', icon: 'fab fa-facebook text-2xl' },
  { platform: 'twitter', url: '#', icon: 'fab fa-twitter text-2xl' },
  { platform: 'instagram', url: '#', icon: 'fab fa-instagram text-2xl' },
  { platform: 'linkedin', url: '#', icon: 'fab fa-linkedin text-2xl' }
]
</script>