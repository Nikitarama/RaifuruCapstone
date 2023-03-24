<template>
    <div>
        <h1>User Profile Page</h1>
        <div
        class="card col-5">
        <img v-bind:src="$user?.imgURL" class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="name">{{ $user.firstName }}</p>
          <p class="last">{{ $user.lastName }}</p>
          <p class="email">{{ $user.emailAdd }}</p>
          <p class="province">{{ $user.province }}</p>
         
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id"],
    computed: {
        user() {
            return this.$store.state.UserProfile
        }
    },
    created() {
        console.log(this.id)
        this.$store.dispatch('UserProfile', this.id)
    }
}

</script>