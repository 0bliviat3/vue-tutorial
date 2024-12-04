<template>
    <div>
        <v-btn
        @click="toRedisTest"
        >
        ResdisTest
        </v-btn>
    </div>
</template>

<script>
export default {
    
    methods: {
        toRedisTest() {
            this.$router.push('/redisTest')
        }
    }
}
</script>

<style>

</style>