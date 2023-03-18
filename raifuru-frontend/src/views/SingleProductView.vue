<template>
    <div class="single">
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


</style>