<template>
    <div class="center_re">
        <!-- <a target="iframe_app" :href="iframe_host + app_url"
          ><span class="btn_a"></span
        ></a>
        <iframe
          class="iframe_app"
          src="about:blank"
          id="iframe_app"
          name="iframe_app"
          frameborder="0"
        ></iframe> -->
    </div>
</template>

<script>
    module.exports = {
        data: function ()
        {
            return {
                iframe_host: g_config.api_root + "/zz_admin/",
            };
        },
        created()
        {
            console.log("created center_re", this.$route);
            setTimeout(() =>
            {
                let url_res
                if (this.$route.query.app_url)
                {
                    if (funcIsUiUser())
                    {
                        location.replace(`app.html#/admin?&tokenAdmin=${func_get_cookie("token_qr")}&site_id=${func_get_cookie("site_id")}&site_id_alias=${func_get_cookie("site_id_alias")}&app_id=${this.$route.query.app_id}&path=${this.$route.query.app_url}`)
                    }
                    else
                    {
                        url_res = `${this.$route.query.app_url}&tokenAdmin=${func_get_cookie("token_qr")}`
                        console.log("center_re url_res", this.iframe_host + url_res)
                        location.replace(this.iframe_host + url_res)
                    }
                }
                else if (this.$route.query.url)
                {
                    url_res = `${this.$route.query.url}&tokenAdmin=${func_get_cookie("token_qr")}`
                    location.replace(url_res)
                }
            }, 100)


        },
        mounted()
        {
            $(".btn_a").click()
        },
        methods: {}
    };
</script>

<style scoped>
    .iframe_app {
        width: 100%;
        height: 100%;
    }
</style>
