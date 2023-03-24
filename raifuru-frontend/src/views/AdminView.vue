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
              :src="product.imgURL"
              class="card-img-top"
              alt="..."
              style="width: 90px; height: 60px"
            />
          </td>
          <td>
            <button @click="this.$store.dispatch('deleteProduct', product.ID)" id="{{product.ID}}" class="btn btn-danger"><span class="material-symbols-outlined">
delete
</span></button>
          </td>
          <td>
            <button @click="this.$store.dispatch('addProduct', product.ID)" id="{{product.ID}}" class="btn btn-success"><span class="material-symbols-outlined">
edit
</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </td>

  <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add a Product
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add a Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="form" @submit.prevent="addProduct">
        
        <div class="mb-3">
            <label for="productName" class="form-label">Gun Name:</label>
            <input type="text" v-model="payload.prodName" class="form-control" id="productName" aria-describedby="Help">
            
        </div>
        <div class="mb-3">
            <label for="origin" class="form-label">Origin:</label>
            <input type="text" v-model="payload.origin" class="form-control" id="origin">
        </div>
        <div class="mb-3">
            <label for="year" class="form-label">Year Model:</label>
            <input type="text" v-model="payload.yearModel" class="form-control" id="year">
        </div>
        <div class="mb-3">
            <label for="type" class="form-label">Type Gun:</label>
            <input type="text" v-model="payload.typeGun" class="form-control" id="type">
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Price:</label>
            <input type="number" v-model="payload.price" class="form-control" id="price">
        </div>
        <div class="mb-3">
            <label for="imgURL" class="form-label">ImgURL:</label>
            <input type="text" v-model="payload.imgURL" class="form-control" id="url">
        </div>
        <div class="mb-3">
            <label for="roundCap" class="form-label">Round Capacity:</label>
            <input type="text" v-model="payload.roundCapacity" class="form-control" id="round">
        </div>
        <div class="mb-3">
            <label for="caliber" class="form-label">Caliber:</label>
            <input type="text" v-model="payload.caliber" class="form-control" id="round">
        </div>
        <div class="mb-3">
            <label for="descrip" class="form-label">Background History:</label>
            <input type="text" v-model="payload.descrip" class="form-control" id="background">
        </div>
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class = "btn btn-primary" type="submit" @click= "($event) => addProduct()">Add</button>
      </div>
    </div>
  </div>
</div>


  <h1 class="user">User Profiles:</h1>
  <td>
    <table class="userlist" id="userList">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>EmailAdd</th>
          <th>Province</th>
          <th>User Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.province }}</td>
          <td>
            <RouterLink :to="{name: 'userProfile', params:{id:user.userID}}">
              <button @click="($event) => this.$store.dispatch('UserProfile', user.ID)" id="{{user.ID}}" class="btn btn-warning">View</button>
            </RouterLink>
          </td>
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

    
      const payload = {
        prodName: '',
        origin: '',
        yearModel: '',
        typeGun: '',
        price: '',
        imgURL: '',
        roundCapacity: '',
        caliber: '',
        descrip: ''
      }
    

    const message = computed( () => store.state.message)

    return {
      products,
      users,
      payload
    }
  },
  methods: {
    addProduct(){
      this.$store.dispatch("addProduct", this.payload)
    }
  }
};



</script>

<style scoped>
.admin {
  margin-top: -15rem;
}
.list {
  width: 94rem;
  margin-bottom: 1rem;
  border: 2px solid lightgrey;
  background-image: url(https://i.postimg.cc/br7140Vf/4535695-army-girl-short-hair-purple-eyes-lying-on-front-anime-anime-girls-gun-weapon-silver-hair-smi.jpg);
  background-size: cover;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.userlist {
    width: 94rem; 
    margin-bottom: 4rem;
    border: 2px solid lightgrey;
    margin-top: 10px;
    margin-top: 1rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.userlist button {
  border-radius: 20px;
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

.userlist td {
  border-bottom: 2px solid lightgrey;
}
.user {
  margin-top: 10px;
}

 h1 {
    background-color: lavender;
    padding: 10px;
    margin-top: 15rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.modal-header {
  margin-top: -15rem;
  margin-left: 20rem;
  
}

.modal-content {
  position: relative;
  width: 50rem;
  right: 10rem;
  background-color: lavender;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

</style>