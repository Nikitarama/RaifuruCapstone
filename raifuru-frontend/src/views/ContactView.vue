<template>
    <div class="heading">
        <h1>If you have any questions, Contact Me:</h1>
        
    </div>
    <form action="https://formspree.io/f/xzbqvyyd"
  method="POST">
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Full Name</label>
    <input type="name" class="form-control" id="exampleInputName">
  </div>
        
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea name="message" class="form-control" id="message"></textarea>
        </div>
        <button type="submit" class="btn btn-secondary">Send</button>
</form>    


</template>

<style scoped>

* {
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.heading h1 {
    margin-bottom: 6rem;
}

h1 {
    margin-top: 4rem;
    margin-left: 18rem;
    border-bottom: 2px solid darkkhaki;
    width: 60rem;
    color: slategray;
}


form {
    background-color: darkgrey;
    margin-bottom: 1rem;
    margin-left: 23rem;
    width: 50rem;
    height: 30rem;
    padding: 2rem;
    border-radius: 10px;
    background-image: url(https://i.postimg.cc/fyFMtXvy/pngegg-1.png);
    background-repeat: no-repeat;
}



</style>