<template>
    <div class="center">
        <!-- center中转页 -->
    </div>
</template>

<script>
    module.exports = {
        data: function ()
        {
            return {
                center_url: ""
            };
        },
        created()
        {
            console.log("ct center", func_get_cookie("center_url"))
            this.center_url = func_get_cookie("center_url")
            // 二维码扫完都会来这里中转，存首页id
            let center_id = this.center_url.split(`/${g_z_ui_dir}/a_admin/center_`)[1]
            func_set_cookie("center_id", center_id)
            this.$router.push({path: this.center_url})
        },
        mounted()
        {
        },
        methods: {}
    };
</script>

<style scoped>
</style>
