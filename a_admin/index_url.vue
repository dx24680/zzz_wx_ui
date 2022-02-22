<template>
    <div class="center">
        <span v-if="if_404">404</span>
    </div>
</template>

<script>
    module.exports = {
        data: function ()
        {
            return {
                if_404: false
            };
        },
        created()
        {
            console.log("ct index_url", this.$route)
            if (this.$route.path != "/404")
            {
                this.if_404 = true
            }
        },
        mounted()
        {
        },
        methods: {}
    };
</script>

<style scoped>
</style>
