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

    <router-link to="/register"> Register
      
</router-link> |

    <router-link to="/login"> Login
      
</router-link> |
<router-link to="/admin"> Admin

</router-link> | 
  </div>
</div>
    <div class="col-5">
    <router-link to="/"> Home

</router-link> | 

 
    <router-link to="/about"> About

</router-link> |
    
 
    <router-link to="/products"> Guns
      
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
    margin-left: 25rem;
    padding: 0px;
    width: 100%;
}

.nav-anime {
    margin-left: 55rem;
    padding: 0;    
}

.btn {
   position: relative;
   top: 3rem;
   right: 5rem;
   background-color: darkkhaki;
   border: 2px solid antiquewhite;
}

.btn:hover {
    color: darkkhaki;
    background-color: gray;
    border: 2px solid darkkhaki;
    box-shadow: 2px 2px 10px lightgrey;
}

.material-symbols-outlined {
    font-size: 30px;
}
</style>