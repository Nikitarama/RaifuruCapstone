<template>
    
        <div class="admin">
    <h1>Admin Page:</h1>
  <td>
    <table class="list" id="adminList">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Origin</th>
          <th>Type</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.ID">
          <td>{{ product.prodID }}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.origin }}</td>
          <td>{{ product.typeGun }}</td>
          <td>R{{ product.price }}</td>
          <td>
            <img
              :src="product.img"
              class="card-img-top"
              alt="..."
              style="width: 90px; height: 60px"
            />
          </td>
          <td>
            <button id="{{product.ID}}" class="btn btn-danger">Delete</button>
          </td>
          <td>
            <button id="{{product.ID}}" class="btn btn-success">Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </td>

  <h1 class="user">User Profiles:</h1>
  <td>
    <table class="userlist" id="userList">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>EmailAdd</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.emailAdd }}</td>
         
        </tr>
      </tbody>
    </table>
  </td>
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

* {
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.list {
  width: 94rem;
  margin-bottom: 1rem;
  border: 2px solid lightgrey;
  background-image: url(https://i.postimg.cc/br7140Vf/4535695-army-girl-short-hair-purple-eyes-lying-on-front-anime-anime-girls-gun-weapon-silver-hair-smi.jpg);
  background-size: cover;
}

.userlist {
    width: 94rem; 
    margin-bottom: 4rem;
    border: 2px solid lightgrey;
    margin-top: 10px;
    margin-top: 1rem;
}

.list th{
    border-bottom: 2px solid lightgrey;
}

.list td {
    border-bottom: 2px solid lightgrey;
    color: black;
}

.userlist th {
    border-bottom: 2px solid lightgrey;
    
}
.user {
  margin-top: 10px;
}

h1 {
    background-color: lavender;
    padding: 10px;
    margin-top: 15rem;
}

</style>