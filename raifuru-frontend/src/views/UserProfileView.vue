<template>
    <div>
        <h1>User Profile Page</h1>
        <div class="card col-5">
            <img v-bind:src="user?.imgURL" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="name">{{ user?.firstName }}</p>
                <p class="last">{{ user?.lastName }}</p>
                <p class="email">{{ user?.emailAdd }}</p>
                <p class="province">{{ user?.province }}</p>

            </div>
        </div>
    </div>
</template>

<script>

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    setup() {
        const store = useStore();
        store.dispatch("userProfile");
        const user = computed(() => $store.state.userProfile);
        console.log(user);
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    created() {
        // console.log(id)
        this.$store.dispatch('userProfile', this.id)
    }
}

</script>

<style scoped>
h1 {
    margin-top: 4rem;
    margin-left: 18rem;
    border-bottom: 2px solid darkkhaki;
    width: 60rem;
    color: slategray;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

</style>