<template>
    <div class="single row">
        <h1>Single View Product</h1>
        <div
        class="card col-3">
        <img v-bind:src="product?.img" class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="name">{{ product.prodName }}</p>
          <p class="name">{{ product.caliber }}</p>
          <p class="price">R{{ product.price }}</p>
        </div>
        </div>

        <div class="background col-5">
            <h2>The background history</h2>
            <p class="descrip">{{ product.descrip }}</p>
            <button class="cart">Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id"],
    computed: {
        product() {
            return this.$store.state.singleProduct
        }
    },
    created() {
        console.log(this.id)
        this.$store.dispatch('singleProduct', this.id)
    }
}

</script>

<style scoped>

h1 {
    font-family:  Georgia, "Times New Roman", Times, serif;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: slategray;
    border-bottom: 2px solid darkkhaki;
    
}
.card {
    width: 40rem;
    height: 35rem;
    font-family:  Georgia, "Times New Roman", Times, serif;
}

.background {
    border: 2px solid darkkhaki;
    color: darkslategray;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 10px;
    height: 20rem;
}

.background h2 {
    border-bottom: 2px solid darkkhaki;
    font-size: 33px;
    font-weight: bolder;
    color: darkkhaki;
    margin-bottom: 50px;
   
}

.background p {
    font-size: 18px;
}

.background button {
    border-radius: 10px;
    background-color: darkkhaki;
    color: black;
    margin-top: 30px;
}

.background button:hover {
    background-color: seagreen;
    color: white;
    
}

</style>