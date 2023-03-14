<template>
  <div class="body">
    
  <div class="home">
    
    <h1>Raifuru Artillery</h1>
    <p>“Wouldn’t you like to get a full historical background on the arson you’re
 planning on buying?”</p>

<p>“Wouldn’t you want to know how far your firearm of choice has come? And, who designed it?
As well as, which era your arsenal belongs to and what kind of battlefields they were used on?”
</p>
<p>“Well, here at Raifuru Artillery (which is rifle in Japanese/Cantonese), we specialise in giving
a full historical background on every rifle, as well as trying to create an environment
for mostly women that want to become bad asses and protect themselves without the help of anyone!” 
</p>
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
                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button> -->
</div>
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

.body {
  /* background-image: url(https://i.postimg.cc/sXzmMDvD/rifles.jpg); */
  background-size: contain;
  background-repeat: no-repeat;
  width: 70vh;
  
}

.carousel {
  left: 38rem;
  bottom: 160px;
  height: 1px;
  width: 22rem;
  
}

h1 {
  font-size: 70px;
  border-bottom: 2px solid darkkhaki;
  color:darkkhaki;
}

.anime-girl {
  margin-top: -450px;
  z-index: -2;

}

.home {
  margin: 1rem;
  margin-left: 300px;
  margin-top: -90px;
  width: 55rem;
  box-shadow: 10px 10px 10px 10px grey;
  padding: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
  color: white;
  background-image: url(https://i.postimg.cc/4x4t7ytg/download.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
 
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
