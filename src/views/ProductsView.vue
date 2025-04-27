<template>
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
    <h1 class="text-3xl font-bold text-center text-indigo-700 mb-8">Products</h1>

    <form @submit.prevent="addProduct" class="mb-8 flex justify-center space-x-2">
      <input
        v-model="newProductName"
        placeholder="Add a new product"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow max-w-md"
      />
      <button
        type="submit"
        class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex-shrink-0"
      >
        Add Product
      </button>
    </form>

    <div v-if="products.length > 0" class="mt-8">
      <ul class="space-y-3">
        <li
          v-for="product in products"
          :key="product.id"
          class="bg-gray-50 p-4 rounded-md shadow flex items-center justify-between hover:bg-gray-100 transition duration-150"
        >
          <span class="text-lg text-gray-800">{{ product.name }}</span>
        </li>
      </ul>
    </div>
    <p v-else class="text-center text-gray-500 italic mt-6">No products available.</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductsView',
  data() {
    return {
      products: [],
      newProductName: '',
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5144/api/Product')
        this.products = response.data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    async addProduct() {
      try {
        await axios.post('http://localhost:5144/api/Product', {
          name: this.newProductName,
        })
        this.newProductName = ''
        this.fetchProducts()
      } catch (error) {
        console.error('Error adding product:', error)
      }
    },
  },
}
</script>
