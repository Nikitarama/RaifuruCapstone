<template>
    <div class="head">
        <h1 class="animate__animate__fadeInLeft">Welcome Back, Login Here: </h1>
    </div>

    <form class="form">
        
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
</template>

<style scoped>

* {
    font-family: Georgia, 'Times New Roman', Times, serif;

}

.form {
    margin-top: 2rem;
    margin-bottom: 5rem;
    width: 60rem;
    margin-left: 18rem;
    padding: 40px;
}

.head h1 {
    animation: fadeInLeft ;
    border-bottom: 2px solid darkkhaki;
}

input {
    background-color: lavender;
}
</style>