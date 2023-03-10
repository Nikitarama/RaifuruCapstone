<template>
  <div class="body">
  <div class="home">
    
    <h1>Raifuru Artillery</h1>
    <p>“Wouldn’t you like to get a full historical background on the arson you’re
 planning on buying?”</p>

<p>“Wouldn’t you want to know how far your pistol of choice has come? And, who designed it?
As well as, which era your arsenal belongs to and what kind of battlefields they were used on?”
</p>
<p>“Well, here at Raifuru Artillery (which is rifle in Japanese/Cantonese), we specialise in giving
a full historical background on every pistol, rifle, etc., as well as trying to create an environment
For mostly women that want to become bad asses and protect themselves without the help of anyone!” 
</p>
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
  width: 100vh;
  
}


h1 {
  font-size: 70px;
  border-bottom: 2px solid darkkhaki;
  color:darkkhaki;
}

.anime-girl {
  margin-top: -500px;
  z-index: -2;

}

.home {
  margin: 1rem;
  margin-left: 300px;
  margin-bottom: 100px;
  width: 55rem;
  box-shadow: 10px 10px 10px 10px grey;
  padding: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
  color: darkolivegreen;
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
