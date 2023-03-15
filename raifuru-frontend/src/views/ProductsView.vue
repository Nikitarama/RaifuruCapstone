<template>
      

     <div class="products-page">

        <h1>Have A Look at Our Collection of Rifles:</h1>
       
    <div class="row">
      <div
        class="card col-3"
        v-for="product in products"
        :key="product.prodID"
        
      >
        <img
          :src="product.img"
          class="card-img-top"
          alt="..."
          
        />
        <div class="card-body">
          <p class="name">{{ product.prodName }}</p>
          <p class="name">{{ product.caliber }}</p>
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

* {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.products-page {
    margin-top: 16rem;
    padding: 20px;
    background-position: center 40px;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #F5F5F5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    background-image: url(https://i.postimg.cc/zBYsRgdG/pngegg-9.png);
}
.card {
    margin: auto;
    width: 280px;
    padding: 0;
    background-color: rgba(223, 222, 222, 0.7);
}
 img {
    
    height: 170px;
}
.view {
    border-radius: 10px;
    border-color: grey;
    background-color: darkslategrey;
    color: lightyellow;
}

.price {
  
  font-weight: bold;
  font-size: 19px;
  border-top: 1px solid grey;
}
.view:hover {
    background-color: seagreen;
    border-color: darkseagreen;
    color: wheat;
}
.row {
   row-gap: 10px;
}

.products-page h1 {
  margin-bottom: 10rem;
  border-bottom: 2px solid darkkhaki;
}

</style>