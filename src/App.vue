<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <nav class="bg-indigo-600 text-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-xl font-bold">Product Manager</router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
              Home
            </router-link>
            <router-link to="/products" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
              Products
            </router-link>
            <router-link to="/about" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
              About
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="py-10">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center">
          <p>© 2025 Product Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
