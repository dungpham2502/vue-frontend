<template>
  <div class="max-w-6xl mx-auto p-6">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Welcome to Product Manager</h1>
          <p class="text-xl mb-8">The simplest way to manage your product inventory</p>
          <router-link
            to="/products"
            class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition duration-200 inline-block"
          >
            View Products
          </router-link>
        </div>
      </div>

      <!-- Features Section -->
      <div class="py-12 px-6 md:px-12">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Our Features</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200">
            <div class="text-indigo-600 text-4xl mb-4">📋</div>
            <h3 class="text-xl font-semibold mb-2">Simple Management</h3>
            <p class="text-gray-600">
              Easily add, update, and track your products with our intuitive interface.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200">
            <div class="text-indigo-600 text-4xl mb-4">🔍</div>
            <h3 class="text-xl font-semibold mb-2">Quick Access</h3>
            <p class="text-gray-600">
              Find any product instantly with our powerful search and filter tools.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200">
            <div class="text-indigo-600 text-4xl mb-4">📊</div>
            <h3 class="text-xl font-semibold mb-2">Analytics</h3>
            <p class="text-gray-600">
              Gain insights into your product inventory with detailed analytics.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-gray-100 p-12 text-center">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Ready to get started?</h2>
        <p class="text-gray-600 mb-6">Join thousands of businesses already using our platform</p>
        <router-link
          to="/products"
          class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 inline-block"
        >
          Get Started Now
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
