<template>
    
    <div class="register">
        
        <div class="heading">
            <h1>Create an Account Here:</h1>
        </div>

        <form class="form">
        
            <div class="mb-3">
    <label for="exampleInputName" class="form-label">First Name</label>
    <input type="name" class="form-control" id="exampleInputName">
  </div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Last Name</label>
    <input type="name" class="form-control" id="exampleInputName">
  </div>
  <div class="md-3 mb-2">              
    <label for="validationDefault04" class="form-label">Province</label>              
    <select class="form-select" id="validationDefault04" name="name" required>                
      <option selected disabled value="">Choose One</option>                
      <option>Western Cape</option>                
      <option>Eastern Cape</option>                
      <option>Free State</option>                
      <option>KwaZulu-Natal</option>                
      <option>Limpopo</option>                
      <option>Northern Cape</option>                
      <option>North West</option>                
      <option>Gauteng</option>                
      <option>Mpumalanga</option>              
    </select>            
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember My Password</label>
  </div>
  <button type="submit" class="btn btn-secondary">Submit</button>
</form>

    </div>
</template>

<style scoped>

* {
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.register {
    margin-top: 3rem;  
}

form {
    width: 60rem;
    margin-left: 16rem;
    background-color: lavender;
    padding: 30px;
    line-height: 10px;
    margin-bottom: 30px;
    margin-top: 50px;
    background-image: url("https://i.postimg.cc/3xzk5qy4/anime-girls-with-big-guns-8k-rf-1125x2436.jpg");
    background-repeat: no-repeat;
    background-size: contain;
}

.heading {
    border-bottom: 2px solid darkkhaki;
    width: 40rem;
    margin-left: 26rem;
}



</style>