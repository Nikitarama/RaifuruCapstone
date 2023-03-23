<template>
    <div class="body">
        <h1>The Cart</h1>
        
    <table class="cart">
      <thead>
        <tr>
        <th>Product</th>
          <th>Name</th>
          <th>Origin</th>
          <th>Type</th>
          <th>Price</th>
          <th>Quantity</th>
          
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product.ID">
          <td>
            <img
              :src="product.imgURL"
              class="card-img-top"
              alt="..."
              style="width: 120px; height: 70px"
            />
          </td>
        
          <td>{{ product.prodName }}</td>
          <td>{{ product.origin }}</td>
          <td>{{ product.typeGun }}</td>
          <td>R{{ product.price }}</td>
          <td><label for="quantity">#</label>
<input type="number" id="quantity" name="quantity" min="1" max="5"></td>
          
        </tr>
        </tbody>
        <div class="checkout">
            <button>Checkout</button><h5 class="total">Total: R</h5>
        </div>
    </table>
    
          
        
    </div>
</template>


<script>

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    store.dispatch("fetchUsers");
    const products = computed(() => store.state.products);
    const users = computed(() => store.state.users);
    console.log(users);
    return {
      products,
      users,
    };
  },
};

</script>

<style scoped>

.body {
    background-image: url(https://i.postimg.cc/bJ8wnVb6/241327033-4918064558210241-5214000303005563559-n.jpg);
    background-position-y: 16rem;
    background-position-x: 44rem;
    background-position: cover;
    background-repeat: no-repeat;
    height: 123vh;
    overflow: hidden;
}

.body h1 {
    position: relative;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: slategrey;
    border-bottom: 2px solid darkkhaki;
    width: 55rem;
    left: 17rem;
}

.cart {
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-left: 1rem;
    width: 43rem;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 0px;
}

.cart th {
    border-bottom: 1px solid grey;
    color: darkkhaki;
}

.cart td {
    border-bottom: 1px solid lightgrey;
}

.cart img {
    background-color: white;
}

.cart button {
    position: relative;
    left: 17rem;
    top: 10px;
    border-radius: 10px;
    background-color: darkkhaki;
    border: 2px solid white;
    color: white;
}

.cart button:hover {
    background-color: seagreen;
    border: 2px solid seagreen;
}

.total {
    position: relative;
    bottom: 1rem;
    left: 27rem;
}

</style>