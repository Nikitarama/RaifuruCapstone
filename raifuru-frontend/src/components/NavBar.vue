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

      
</router-link> <br>

    <router-link to="/login"><span class="material-symbols-outlined">
login
</span> Login 
      
</router-link> <br>
<router-link to="/admin"><span class="material-symbols-outlined">
format_list_bulleted_add
</span> Admin 

</router-link>  
  </div>
</div>
    <div class="col-5">
    <router-link to="/"> Home

</router-link> | 

 
    <router-link to="/about"> About

</router-link> |
    
 
    <router-link to="/products"> Rifles
      
</router-link> |
    

    <router-link to="/contact"> Contact
      
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
    height: 4rem;
    padding: 1rem;
    width: 100%;
    background-image: url(https://i.postimg.cc/BbD45wK8/241327033-4918064558210241-5214000303005563559-n.jpg);
    background-position-y: 35rem ;
    background-size: cover;
}
.offcanvas-body {
    background-image: url(https://i.postimg.cc/W3dXHBS4/pngegg-10.png);
}

.col-5 {
    margin-bottom: 2rem;
    position: relative;
    left: 30rem;
    
}

.nav-anime {
    position: relative;
    margin-left: 80rem;
    margin-top: 2rem;
    padding: 0;    
}

.btn {
   position: relative;
   top: 3.7rem;
   right: 5rem;
   background-color: darkkhaki;
   border: 3px solid darkkhaki;
   color: darkkhaki;
   background-color: rgba(96, 92, 92, 0.5);

}

.btn:hover {
    background-color: darkkhaki;
    border: 2px solid antiquewhite;
    color: antiquewhite;
    border: 3px solid antiquewhite;
    /* box-shadow: 2px 2px 10px lightgrey; */
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