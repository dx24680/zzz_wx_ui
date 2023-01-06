<template>
    <div class="index_qr">
        <div class="content_box">
            <div class="qr_title">微信登录</div>
            <div class="qr_img_wrap">
                <img class="qr_img" :src="auth_qr" v-if="auth_qr"/>
            </div>
            <div class="qr_tip">请使用微信扫描二维码登录</div>
            <div class="qr_btn_area">
                <el-button
                        type="info"
                        class="qr_btn"
                        @click="func_login_skip"
                        v-if="g_common_data.login_skip"
                >跳过
                </el-button>
                <el-button
                        type="success"
                        class="qr_btn"
                        @click="func_reload_qr"
                >刷新
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function ()
        {
            return {
                login_url: "",
                if_skiping: false,
                auth_qr: "",
            };
        },
        created()
        {
            console.log("ct index_qr");
            this.login_url = func_get_cookie("login_url");
            if (!g_common_data.auth_id || !g_common_data.auth_qr)
            {
                if (!funcIsJava())
                {
                    this.$router.replace(this.login_url || func_get_cookie("login_url"));
                    return;
                }
            }
            this.func_index_qr()
        },
        mounted()
        {
            if (g_common_data.login_skip)
            {
                document.onkeydown = this.keyListener;
            }
        },
        onunload()
        {
            clearTimeout(g_common_data.timeout_index_qr);
        },
        methods: {
            func_reload_qr()
            {
                func_loading()
                this.auth_qr = ""
                this.func_index_qr()
            },
            keyListener(e)
            {
                if (e.keyCode == 13)
                {
                    //this.func_login_skip();
                }
            },
            func_qr_check()
            {
                if (this.$route.path !== "/z_ui/a_admin/index_qr") return

                let url = "zz_admin/index_qr/check";
                if (funcIsJava())
                {
                    url = "/__api_java__/zz_admin/check_qr";
                }
                func_post(url, {
                    auth_id: g_common_data.auth_id,
                    tokenAdmin: func_get_cookie("token_login")
                })
                    .then(data =>
                    {
                        //请求成功
                        console.log("*** func_qr_check 结果", data);
                        if (data.errcode !== 0)
                        {
                            if (data.errcode === -100)
                            {
                                // 等待扫码，定时触发
                                g_common_data.timeout_index_qr = setTimeout(() =>
                                {
                                    this.func_qr_check();
                                }, 1000);
                            }
                            else
                            {
                                this.$message.error(data.errmsg);
                            }
                        }
                        else
                        {
                            console.log("检查二维码成功");
                            func_set_cookie("token_qr", data.tokenAdmin);
                            this.$router.replace({path: "/"});
                        }
                    })
                    .catch(err =>
                    {
                        this.$message.error(err);
                    });
            },
            func_login_skip()
            {
                if (this.if_skiping) return;
                this.if_skiping = true;
                //func_loading();

                let url = "zz_admin/index_qr/login_skip";
                if (funcIsJava())
                {
                    url = "/__api_java__/zz_admin/login_skip";
                }
                func_post(url, {
                    auth_id: g_common_data.auth_id
                })
                    .then(data =>
                    {
                        //请求成功
                        //func_loading(false);
                        console.log("*** func_login_skip结果", data);
                        this.if_skiping = false;
                        if (data.errcode !== 0)
                        {
                            this.$message.error(data.errmsg);
                        }
                        else
                        {
                            console.log("skip成功");
                        }
                    })
                    .catch(err =>
                    {
                        //func_loading(false);
                        this.if_skiping = false;
                        this.$message.error(err);
                    });
            },
            func_index_qr()
            {
                let url = "zz_admin/index_qr";
                if (funcIsJava())
                {
                    url = "/__api_java__/zz_admin/index_qr";
                }

                func_get(url, {
                    auth_id: g_common_data.auth_id,
                    tokenAdmin: func_get_cookie("token_login")
                })
                    .then(data =>
                    {
                        //请求成功
                        func_loading(false)
                        console.log("*** func_index_qr 结果", data);
                        if (data.errcode !== 0)
                        {
                            this.$message.error(data.errmsg);
                        }
                        else
                        {
                            console.log("获取二维码成功");
                            this.auth_qr = data.auth_qr
                            if (data.auth_id)
                            {
                                g_common_data.auth_id = data.auth_id;
                            }
                            if (data.login_skip)
                            {
                                g_common_data.login_skip = data.login_skip;
                            }

                            this.func_qr_check();
                        }
                    })
                    .catch(err =>
                    {
                        func_loading(false)
                        this.$message.error(err);
                    });
            },
        }
    };
</script>

<style scoped>
    .index_qr {
        min-height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .content_box {
        background-color: #fff;
        padding: 10px 50px;
        border-radius: 10px;
        box-shadow: 0 0 0 10px grey;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .qr_title {
        font-size: 20px;
        text-align: center;
        margin: 20px 0px;
    }

    .index_qr .qr_img_wrap {
        width: 324px;
        height: 324px;
        margin: 0px 80px;
        border: 2px solid rgb(237, 237, 237);
    }

    .index_qr .qr_img {
        width: 100%;
    }

    .qr_tip {
        font-size: 14px;
        text-align: center;
        margin: 10px;
    }

    .qr_btn_area {
        display: flex;
    }

    .qr_btn {
        margin: 0 10px;
    }
</style>
