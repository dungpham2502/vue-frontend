<template>
  <li
    class="bg-gray-50 p-4 rounded-md shadow flex items-center justify-between hover:bg-gray-100 transition duration-150"
  >
    <span class="text-lg text-gray-800">{{ product.name }}</span>
    <button
      @click="$emit('delete', product.id)"
      class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-150"
    >
      Delete
    </button>
  </li>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>
