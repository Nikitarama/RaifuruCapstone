<template>
  <div class="body">
    <div class="animate_animated animate__fadeInLeft">
      <h1>Welcome to</h1>
    </div>

  <div class="home">  
    <h1>Raifuru Artillery</h1>
    <button class="login">Login</button><button class="register">Create an Account</button>
    <img src="https://i.postimg.cc/7LgGRh06/pngegg-7.png">
    </div>

  
  <div class="carousel">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="2000">
                    <img src="https://i.postimg.cc/26Jc5SY7/t38bookw.jpg" style="height: 300px;" class="d-block rounded mx-auto d-block w-75" alt="CapeTown">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://i.postimg.cc/QMFcdkdv/t30earlyarisakas.jpg" style="height: 300px;" class="d-block rounded mx-auto d-block w-75" alt="...">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://i.postimg.cc/HLt1j5v4/61v-JFg5wuq-L-AC-UF1000-1000-QL80.jpg" style="height: 300px;" class="d-block rounded mx-auto d-block w-75" alt="...">
                  </div>
                  
                </div>
                <h5>Everything you need to know about guns</h5>
                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button> -->
</div>
<div class="image">
  <img src="https://i.postimg.cc/GhL104Kz/anatomy-arisaka-type99.png">
</div>
  </div>

  <div class="social-icons">
  <a href="#"><i class="fab-fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-twitch"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a> 
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
</div>

  <div class="anime-girl">
    <img src="https://i.postimg.cc/7YzJYF9H/pngegg.png">
  </div>

  <div class="row">
    <div class="col-sml-4 d-flex">
      
      <img src="https://i.postimg.cc/QM7vT5gR/9hs69sf02it31.webp"/>
     
    
      <img src="https://i.postimg.cc/PqVDD3hq/bjxhnie02it31.webp"/>
    
   
      <img src="https://i.postimg.cc/fyPZjdym/2910bad104ec054f0c39a6347c498fa0.jpg"/>
    </div>

  </div>

</div>


</template>

<script>
// @ is an alias to /src
// import Home from '@/components/HomeView.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     NavBar, Footer
//   }
// }
</script>

<style scoped>

 * {
  font-family: Georgia, 'Times New Roman', Times, serif;
  
}
body{
  overflow-x: hidden;
}
.body {
  background-image: url(https://i.postimg.cc/4x4t7ytg/download.jpg);
  /* background-image: url(https://i.postimg.cc/sXzmMDvD/rifles.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
  width: 26rem;
  background-position-x: 40px;
}

/* .ad {
  z-index: -3;
  width: 1rem;
  height: 10rem;
  margin-top: 4rem;
} */

.carousel {
  position: relative;
  left: 36.5rem;
  bottom: 150px;
  height: 1px;
  width: 22rem;
  
}

.image img {
  position: relative;
  width: 24rem;
  height: 14rem;
  left: 10rem;
  top: 170px;
}

.home h1 {
  font-weight: bold;
  font-size: 80px;
  border:3px solid darkkhaki;
  color:orange;
  background-color: rgba(96, 92, 92, 0.5);
}

.animate_animated> h1 {
  position: relative;
  left: 21rem;
  top: 5rem;
  font-size: 3rem;
  animation-name: fadeInLeft;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  border-bottom: 3px solid darkkhaki;
  color: darkkhaki;
  text-shadow: 1px 1px 2px grey;
}

.anime-girl {
  margin-top: -30rem;
  margin-right: 12rem;

}

.home {
  
  margin: 1rem;
  margin-left: 300px;
  margin-top: 13rem;
  width: 55rem;
  height: 14rem;
  box-shadow: 10px 10px 10px 10px grey;
  padding: 40px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
  color: white;
  background-image: url(https://i.postimg.cc/4x4t7ytg/download.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: -60px;
}

.home img {
  position: relative;
  width: 40rem;
  right: 10rem;
  bottom: 24rem;
}

.home> button {
  background-color: rgba(96, 92, 92, 0.2);
  margin: 10px;
  border: 2px solid orange;
  color: whitesmoke;
  font-size: 20px;
}

.home >button:hover {
  background-color: orange;
}

.login {
  margin-left: 10rem;
}

.login:hover {

  background-color: orange;
}

.col-sml-4 img {
  width: 500px;
}

.col-sml-4 {
  margin: 1px;
  margin-left: 10px;
}
.row {
   row-gap: 10px;
   grid-template-rows: 1fr 1fr;
}


</style>
