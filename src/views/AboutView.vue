<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Header Section -->
      <div class="bg-indigo-600 text-white p-12 text-center">
        <h1 class="text-4xl font-bold mb-4">About Us</h1>
        <p class="text-xl">Learn more about our mission and team</p>
      </div>

      <!-- Company Description -->
      <div class="p-8 md:p-12">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Our Story</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Product Manager was founded in 2023 with a simple mission: to make product inventory
          management accessible to businesses of all sizes. What started as a small project has
          grown into a comprehensive platform used by thousands of companies worldwide.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          We believe that managing your product catalog shouldn't require complex software or
          extensive training. Our intuitive interface and powerful features make it easy for anyone
          to keep track of their products, analyze inventory, and make data-driven decisions.
        </p>

        <h2 class="text-2xl font-bold mt-10 mb-6 text-gray-800">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="border-l-4 border-indigo-500 pl-4">
            <h3 class="font-semibold text-lg mb-2 text-gray-800">Simplicity</h3>
            <p class="text-gray-600">
              We strive to create tools that are intuitive and easy to use, without sacrificing
              functionality.
            </p>
          </div>
          <div class="border-l-4 border-indigo-500 pl-4">
            <h3 class="font-semibold text-lg mb-2 text-gray-800">Reliability</h3>
            <p class="text-gray-600">
              Our platform is built on robust technology to ensure your data is always safe and
              accessible.
            </p>
          </div>
          <div class="border-l-4 border-indigo-500 pl-4">
            <h3 class="font-semibold text-lg mb-2 text-gray-800">Innovation</h3>
            <p class="text-gray-600">
              We continuously improve our platform with new features and capabilities based on user
              feedback.
            </p>
          </div>
          <div class="border-l-4 border-indigo-500 pl-4">
            <h3 class="font-semibold text-lg mb-2 text-gray-800">Customer Focus</h3>
            <p class="text-gray-600">
              Our users are at the center of everything we do, and their success is our success.
            </p>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="bg-gray-50 p-8 md:p-12">
        <h2 class="text-2xl font-bold mb-8 text-center text-gray-800">Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div class="text-center">
            <div
              class="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden flex items-center justify-center text-4xl"
            >
              👩‍💼
            </div>
            <h3 class="font-semibold text-lg">Jane Doe</h3>
            <p class="text-indigo-600">CEO & Founder</p>
          </div>

          <!-- Team Member 2 -->
          <div class="text-center">
            <div
              class="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden flex items-center justify-center text-4xl"
            >
              👨‍💻
            </div>
            <h3 class="font-semibold text-lg">John Smith</h3>
            <p class="text-indigo-600">CTO</p>
          </div>

          <!-- Team Member 3 -->
          <div class="text-center">
            <div
              class="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden flex items-center justify-center text-4xl"
            >
              👨‍🎨
            </div>
            <h3 class="font-semibold text-lg">Michael Brown</h3>
            <p class="text-indigo-600">Lead Designer</p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="p-8 md:p-12 text-center">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
        <p class="text-gray-700 mb-6">Have questions or feedback? We'd love to hear from you!</p>
        <a
          href="mailto:info@productmanager.com"
          class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 inline-block"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>
