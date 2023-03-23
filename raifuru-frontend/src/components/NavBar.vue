<template>
    <div class="col-3">
    <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><span class="material-symbols-outlined">
menu
</span></button>
</div>
    <nav class="nav">

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Raifuru Artillery</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <router-link to="/register"> <span class="material-symbols-outlined">
assignment_add
</span> Register  

      
</router-link> 
<br>

    <router-link to="/login"><span class="material-symbols-outlined">
login
</span> Login 
      
</router-link> 
<br>

<router-link to="/admin"><span class="material-symbols-outlined">
format_list_bulleted_add
</span> Admin 

</router-link> 
 
  </div>
</div>
    <div class="col-5">
    <router-link to="/"><span class="material-symbols-outlined"> home
</span> Home

</router-link> | 

 
    <router-link to="/about"><span class="material-symbols-outlined">
account_box
</span> About

</router-link> |
    
 
    <router-link to="/products"><span class="material-symbols-outlined">
lab_profile
</span> Rifles
      
</router-link> |
    

    <router-link to="/contact"><span class="material-symbols-outlined">
contact_mail
</span> Contact
      
</router-link> |
<router-link to="/cart"><span class="material-symbols-outlined">
shopping_cart
</span> Cart 

</router-link>  
</div>
<div class="nav-anime">
    <img src="https://i.postimg.cc/FRMRZzfz/RAifuru-Artillery.gif" style="width: 250px; height:250px; margin-bottom: 30px;">
</div>
</nav>

</template>

<style scoped>


a {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20px;
    padding: 10px;
    color: darkkhaki;
    text-decoration: none;
}

.nav {
    
    color:darkkhaki;
    font-size: 30px;
    align-items: center;
    height: 5rem;
    padding-left: 22rem;
    padding-bottom: 1rem;
    width: 100%;
    padding-bottom: 2rem;
    background-image: url(https://i.postimg.cc/BbD45wK8/241327033-4918064558210241-5214000303005563559-n.jpg);
    background-position-y: 40rem ;
    background-size: cover;
}
.offcanvas-body {
    background-image: url(https://i.postimg.cc/W3dXHBS4/pngegg-10.png);
}

.col-5 {
    margin-bottom: 2rem;
    position: relative;
    left: 25rem;
    bottom: 2.8rem;
    width: 44rem;
}

.nav-anime {
    position: relative;
    margin-left: 79.5rem;
    margin-top: -30px;
    padding: 0;    
}

.btn {
   position: relative;
   top: 4.3rem;
   right: 7.5rem;
   background-color: darkkhaki;
   border: 3px solid darkkhaki;
   color: darkkhaki;
   background-color: rgba(0, 0, 0, 0);

}

.btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px solid burlywood;
    color: burlywood;
    border: 3px solid burlywood;
}

.material-symbols-outlined {
    font-size: 30px;
}

.offcanvas-title {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 30px;
    font-weight: bold;
    /* color: linear-gradient(to right(lightgrey, darkkhaki, yellow)); */
}
</style>