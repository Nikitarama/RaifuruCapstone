<template>
<nav class="nav">
    <router-link to="/"> Home

</router-link> | 

 
    <router-link to="/about"> About

</router-link> |
    
  
    <router-link to="/admin"> Admin

</router-link> | 
    
 
    <router-link to="/products"> Guns
      
</router-link> |

    <router-link to="/register"> Register
      
</router-link> |

    <router-link to="/login"> Login
      
</router-link> |
    

    <router-link to="/contact"> Contact
      
</router-link> |

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

nav.nav {
    color:darkkhaki;
    font-size: 30px;
    padding: 0;
}

nav {
    margin-left: 25rem;
}

.nav-anime {
    padding-left: 55rem;
    margin-bottom: -100px;
    margin-top: -10px;
}

div.nav-anime {
    margin: 0;

}

</style>