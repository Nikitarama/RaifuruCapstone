<template>
     <div class="products-page">
    <h1>Have A Look at Our Collection of Rifles:</h1>
    <div class="row">
      <div
        class="card col-3"
        v-for="product in products"
        :key="product.prodID"
        style="height: 350px"
      >
        <img
          :src="product.img"
          class="card-img-top"
          alt="..."
          style="height: 200px"
        />
        <div class="card-body">
          <p class="name">{{ product.prodName }}</p>
          <p class="price">R{{ product.price }}</p>
          <!-- <RouterLink> -->

            <button class="view" href="#">View Details</button>
          <!-- </RouterLink> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    const products = computed(() => store.state.products);
    return {
      products,
    };
  },
};


</script>

<style scoped>


</style>