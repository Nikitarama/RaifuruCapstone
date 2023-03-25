<template>
  <div class="all">
       <img src="https://i.postimg.cc/mDLZvJQ4/pngegg-3.png" class="ani-img">
    <div class="anime">
  </div>
    <div class="about d-flex">
    <img src="https://i.postimg.cc/VN56HKrd/56164181-2459897407354092-3884515211599675392-n.jpg">
    <div class="head">
    <h1 class="header">This is the creator of Raifuru Artillery</h1>
    <div class="content">
    <p>"I decided to come up with the idea of a shooting range for just women,</p> 
     <p> when I started to see the situation of safety for women in our country get</p>
       <p>exponentially worse by the day. I thought to myself that something needs to </p>
       <p>be done. And if I don't, then who will?..."</p>
      </div>
      </div>
    </div>
    <div class="contact-info">
      <h1>Contact Me:</h1>
      <p><span class="material-symbols-outlined">
account_circle
</span> Name: Nikita Ramawoothar</p>
      <p><span class="material-symbols-outlined">
mail
</span> Email: crazyscientist996@gmail.com</p>
      <p><span class="material-symbols-outlined">
phone_iphone
</span> Contact: 079 333 7610</p>
      
     </div>
    <div class="anime-img">
      <img src="https://i.postimg.cc/FRMRZzfz/RAifuru-Artillery.gif">
    </div> 
  
    </div>

</template>

<style scoped>
.all{
  height: 100vh;
  overflow-y:hidden;
  /* background-image: url(https://i.postimg.cc/SRqyF9tj/Arisaka-evolution.jpg); */
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 0px;
}
.about img {
  height: 500px;
  margin-right: -2rem;
  padding: 0;
  z-index: 1;
  border-radius: 10px;
  margin-top: 35px;
}
.about {
 font-family: Georgia, 'Times New Roman', Times, serif;
 line-height: 15px;
 margin-left: 20px;
 margin-bottom: 20px;
 margin-top: -52rem;
 
}

.ani-img {
  
  z-index: 3;
  padding-right: 34rem;
  padding-top: -1rem;
  
}
.head {
  /* background-image: url(https://i.postimg.cc/q7F8zjHh/pngegg-16.png); */
  width: 33rem;
  height: 5rem;
  font-size: 18px;
  margin-top: 96px;
  margin-left: 18rem;
  border-radius: 10px;
  background-size: cover;
  background-position-y: 400px;
  z-index: 1;
}

.header {
  position: relative;
  width: 43rem;
  border-bottom: 4px solid darkkhaki;
  font-weight: bold;
  /* background-image: url(https://i.postimg.cc/mDLZvJQ4/pngegg-3.png); */
  color: slategrey;
  font-size: 53px;
  right: 30px;
  bottom: 20px;
  text-shadow: 2px 1px 3px black;
}

.anime-img {
  margin-left: 48rem;
  z-index: -2;
  margin-top: -28rem;
}

.content {
  border-radius: 10px;
  padding: 20px;
  color: #fff;
  text-shadow: 1px 1px 3px grey;
  font-weight: bold;
  background-color: darkkhaki;
  box-shadow: 2px 2px 10px 2px grey;
  font-size: 18px;
  background-image: url();
  background-position-y: 19rem;
  
}

.contact-info {
  
  background-color: rgb(11, 10, 10, 0.9);
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: darkkhaki;
  width: 23rem;
  margin-top: -10px;
  margin-left: 20px;
  margin-bottom: 2rem;
  padding-bottom: 10px;
  line-height: 1px;
  box-shadow: 2px 2px 10px 2px grey;
  border-radius: 10px;
}

.material-symbols-outlined:hover {
  color: darkkhaki;
}


@media(max-width: 400px) {
  .all {
    width: 30rem;
  }
}

</style>
