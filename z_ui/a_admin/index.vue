<template>
    <div class="index_ad">
        <el-form
                ref="form"
                :model="form"
                :rules="loginRules"
                class="login-form"
                auto-complete="on"
                label-position="left"
        >
            <div class="main_box">
<!--                <img-->
<!--                        class="main_bg_img"-->
<!--                        :src="`${g_common_data.img_acc_root}/acc_login_bg.jpg`"-->
<!--                />-->
                <div class="main_pre_left">
                    <div class="main_pre_left_txt">
                        <!-- 名称 -->
                    </div>
                </div>
                <div class="main_pre">
                    <div class="login_title">{{g_config.title?g_config.title:"登录"}}</div>
                    <div class="inp_area">
                        <div class="inp_item">
                            <div class="inp_title">站点</div>
                            <div class="inp_line">
                                <img
                                        class="inp_icon"
                                        :src="`${g_common_data.img_acc_root}/acc_icon_site.png`"
                                />
                                <el-input
                                        class="realinp"
                                        ref="site_id"
                                        v-model="form.site_id"
                                        placeholder="站点"
                                        name="site_id"
                                        type="text"
                                        tabindex="1"
                                        auto-complete="on"
                                />
                                <br/>
                            </div>
                        </div>
                        <div class="inp_item">
                            <div class="inp_title">账号</div>
                            <div class="inp_line">
                                <img
                                        class="inp_icon"
                                        :src="`${g_common_data.img_acc_root}/acc_icon_username.png`"
                                />
                                <el-input
                                        class="realinp"
                                        ref="uid"
                                        v-model="form.uid"
                                        placeholder="账号"
                                        name="uid"
                                        type="text"
                                        tabindex="1"
                                        auto-complete="on"
                                />
                                <br/>
                            </div>
                        </div>
                        <div class="inp_item">
                            <div class="inp_title">密码</div>
                            <div class="inp_line">
                                <img
                                        class="inp_icon"
                                        :src="`${g_common_data.img_acc_root}/acc_icon_psw.png`"
                                />
                                <el-input
                                        class="realinp"
                                        :key="passwordType"
                                        ref="pwd"
                                        v-model="form.pwd"
                                        show-password
                                        placeholder="密码"
                                        name="pwd"
                                        tabindex="2"
                                        auto-complete="on"
                                        @keyup.enter.native="handleLogin"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="btn_login_img butt" @click="handleLogin"></div>
<!--                    <img-->
<!--                            class="btn_login_img butt"-->
<!--                            :src="`${g_common_data.img_acc_root}/acc_btn_login.png`"-->
<!--                            @click="handleLogin"-->
<!--                    />-->
                </div>
            </div>
        </el-form>

        <div class="login-main">
            <input type="text" v-model="form.site_id"/>
            <input type="text" v-model="form.uid"/>
            <input type="text" v-model="form.pwd"/>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function ()
        {
            // 各输入框的规则
            const validateSiteid = (rule, value, callback) =>
            {
                if (value.length === 0)
                {
                    callback(new Error("请输入站点"));
                }
                else
                {
                    callback();
                }
            };
            const validateUsername = (rule, value, callback) =>
            {
                if (value.length === 0)
                {
                    callback(new Error("请输入用户名"));
                }
                else
                {
                    callback();
                }
            };
            const validatePassword = (rule, value, callback) =>
            {
                if (value.length === 0)
                {
                    callback(new Error("请输入密码"));
                }
                else
                {
                    callback();
                }
            };
            return {
                if_loging: false,
                form: {
                    site_id: "",
                    uid: "",
                    pwd: ""
                },
                loginRules: {
                    site_id: [
                        {required: true, trigger: "blur", validator: validateSiteid}
                    ],
                    uid: [{required: true, trigger: "blur", validator: validateUsername}],
                    pwd: [{required: true, trigger: "blur", validator: validatePassword}]
                },
                passwordType: "pwd"
            };
        },
        watch: {
            $route: {
                handler: function (route)
                {
                    console.log("index 监听路由", route);
                    this.form.site_id = func_get_url_query("site_id");
                    func_set_cookie("site_id");
                    router_set_url();
                },
                immediate: true
            },
            form: {
                handler: function (val)
                {
                    g_vue.form = this.form;
                },
                deep: true
            }
        },
        created()
        {
            console.log("ct index")
            // clearTimeout(g_vue.st_qr_check)
            this.form.site_id = func_get_cookie("site_id") || "";
        },
        mounted()
        {
            document.onkeydown = this.keyListener;
            // 初始/ad?site_id=xxx这样监听不到，手动设一下
            if (func_get_url_query("site_id"))
            {
                this.form.site_id = func_get_url_query("site_id");
                func_set_cookie("site_id");
                g_vue.form = this.form;
            }
        },
        methods: {
            // 当按下回车键，执行我们的代码
            keyListener(e)
            {
                if (e.keyCode == 13)
                {
                    this.handleLogin();
                }
            },
            showPwd()
            {
                if (this.passwordType === "pwd")
                {
                    this.passwordType = "";
                }
                else
                {
                    this.passwordType = "pwd";
                }
                this.$nextTick(() =>
                {
                    this.$refs.pwd.focus();
                });
            },
            // 登录方法
            handleLogin()
            {
                console.log("handleLogin");
                if (this.if_loging) return;
                this.$refs.form.validate(valid =>
                {
                    if (valid)
                    {
                        func_loading();
                        this.if_loging = true;
                        this.func_login(this.form);
                    }
                    else
                    {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            // 登录接口
            func_login(userInfo)
            {
                const {site_id, uid, pwd} = userInfo;
                func_post("/zz_admin/index/login", {
                    uid: uid,
                    pwd: pwd,
                    site_id: site_id
                })
                    .then(data =>
                    {
                        //请求成功
                        this.if_loging = false;
                        func_loading(false);
                        console.log("*** func_login结果", data);
                        if (data.errcode !== 0)
                        {
                            this.$message.error(data.errmsg);
                        }
                        else
                        {
                            func_set_cookie("token_login", data.tokenAdmin);
                            func_set_cookie("site_id", this.form.site_id);
                            g_common_data.auth_qr = data.auth_qr;
                            g_common_data.auth_id = data.auth_id;
                            g_common_data.login_skip = data.login_skip;
                            //清除自动登陆 setTimeout
                            clearInterval(g_vue.st_login_click);
                            //
                            localStorage.clear()
                            this.$router.push({path: "/z_ui/a_admin/index_qr"});
                        }
                    })
                    .catch(err =>
                    {
                        //清除自动登陆 setTimeout
                        clearInterval(g_vue.st_login_click);
                        //
                        this.if_loging = false;
                        func_loading(false);
                        this.$message.error(err);
                    });
            }
        }
    };
</script>

<style scoped>
    .el-input__inner {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
</style>