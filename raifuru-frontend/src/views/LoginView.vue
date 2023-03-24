<template>
    <div v-if="spinner">
        <Spinner/>
    </div>
    <div class="head">
        <h1 class="animate__animate__fadeInLeft">Welcome Back, Login Here: </h1>
    </div>

    <form class="form" @submit.prevent="login">
        
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" v-model="payload.emailAdd" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="payload.userPass" class="form-control" id="exampleInputPassword1">
    </div>

    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Remember My Password</label>
        </div>
        <button id="{{user.ID}}" @click.prevent="login" type="submit" class="btn btn-secondary">Submit</button>
        
        <p>If you don't have an account. <router-link to="/register">Create an Account?</router-link></p>
</form>

    
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import Spinner  from '../components/Spinner.vue';
import { ref } from "vue";
export default {
    components: {
        Spinner
    }, 
  setup() {
    const spinner = ref(false);
    const payload = {
    
    emailAdd: '',
    userPass: '',
  };

  const store = useStore();
  const login = () => {
    spinner.value = !spinner.value;
    store.dispatch("login", payload);
    spinner.value = !spinner.value;
    store.dispatch("fetchUsers");
  }

  const msg = computed( () => store.state.message)
   return {
    payload, login, spinner
   }
  },
}



</script>

<style scoped>

* {
    font-family: Georgia, 'Times New Roman', Times, serif;

}

.form {
    margin-top: 3rem;
    margin-bottom: 5rem;
    width: 60rem;
    margin-left: 18rem;
    padding: 40px;
}

.head h1 {
    animation: fadeInLeft ;
    border-bottom: 2px solid darkkhaki;
    margin-top: 12rem;
}

input {
    background-color: lavender;
}

.form p {
    margin-top: 40px;
}
</style>