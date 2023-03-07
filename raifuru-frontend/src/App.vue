<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/AboutView">About</router-link> |
    <router-link to="/AdminView">Admin</router-link> |
    <router-link to="/ProductsView">Wishlist</router-link> |
    <router-link to="/ContactView">Contact</router-link> |
    <router-link to="/CheckoutView">Checkout</router-link> |
    <router-link to="/LoginView">Login</router-link> |
    <router-link to="/RegisterView">Register</router-link> |

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a:hover {
  color:palevioletred;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
