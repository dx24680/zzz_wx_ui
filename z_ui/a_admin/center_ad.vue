<template>
    <div class="center" v-if="center_info">
        <!-- 顶部栏 -->
        <div class="top_area">
            <img
                    class="top_bg_img"
                    :src="g_common_data.img_acc_root + '/acc_top_menu_bg.jpg'"
            />
            <div class="top_pre">
                <div class="top_logo_area">
                    <img class="top_logo_img" :src="center_info.site_logo_admin"
                         onerror="this.style.visibility='hidden'"/>
                </div>
                <div class="top_main_area">
                    <div class="top_main_left_area">
                        <template v-for="(item, index) in tml_list">
                            <div class="tml_item" :key="index" @click="handle_tml_item(item)">
                                {{ item.title }}：{{ item.value }}
                            </div>
                            <div
                                    class="tm_between_line"
                                    :key="index"
                                    v-if="index !== tml_list.length - 1"
                            ></div>
                        </template>
                    </div>
                    <div class="top_main_right_area">
                        <!-- 搜索框 -->
                        <el-input
                                v-model="v_search"
                                placeholder="搜索应用ID或名称"
                                class="input-with-select inp_search"
                                @focus="if_search_focus = true"
                                @blur="if_search_focus = false"
                                :clearable="true"
                        >
                            <template #append>
                                <el-button
                                        icon="el-icon-search"
                                        @click="handle_search"
                                ></el-button>
                            </template>
                        </el-input>

                        <div class="tmr_item">
                            <i class="el-icon-s-tools tmr_icon_img_elm"></i>
                            站点设置
                            <a
                                    class="change_pwd_a"
                                    target="iframe_app"
                                    @click="handle_change_pwd"
                                    :href="`${iframe_host_re}center_re?url=${encodeURIComponent(iframe_host+'z_center_re?app_id=site')}`"
                            ></a>
                        </div>
                        <div class="tm_between_line"></div>
                        <div class="tmr_item">
                            <i class="el-icon-s-grid tmr_icon_img_elm"></i>
                            站点应用
                            <a
                                    class="change_pwd_a"
                                    target="iframe_app"
                                    @click="handle_change_pwd"
                                    :href="`${iframe_host_re}center_re?url=${encodeURIComponent(iframe_host+'z_center_re?app_id=sitezapp')}`"
                            ></a>
                        </div>
                        <div class="tm_between_line"></div>
                        <div class="tmr_item">
                            <img
                                    class="tmr_icon_img"
                                    :src="g_common_data.img_acc_root + '/icon_password.png'"
                            />
                            修改密码
                            <a
                                    class="change_pwd_a"
                                    target="iframe_app"
                                    @click="handle_change_pwd"
                                    :href="`${iframe_host_re}center_re?url=${encodeURIComponent(iframe_host+'z_center_re?app_id=password')}`"
                            ></a>
                        </div>
                        <div class="tm_between_line"></div>
                        <div class="tmr_item" @click="handle_exit">
                            <img
                                    class="tmr_icon_img"
                                    :src="g_common_data.img_acc_root + '/icon_exit.png'"
                            />
                            退出系统
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom_area">
            <!-- 菜单 -->
            <div class="menu_area">
                <el-menu
                        :default-active="0"
                        class="el-menu-vertical-demo"
                        @select="menu_select"
                        background-color="#3b426c"
                        text-color="#fff"
                        active-text-color="#fff"
                >
                    <template v-for="(item, index) in center_info.group">
                        <el-menu-item :index="index" :key="index" v-if="item.group_name">
                            <i class="el-icon-menu"></i>
                            <span slot="title">{{ item.group_name }}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </div>
            <!-- 内容区域 -->
            <div class="content_area">
                <div
                        class="app_area"
                        v-if="!app_act_item && center_info.group.length > 0"
                >
                    <div
                            class="app_item"
                            :style="`background-color: rgb(101, 108, 198,${
              (10 - (index % 6)) / 10
            });`"
                            @click="handle_app(item)"
                            v-for="(item, index) in center_info.group[menu_act].list"
                            :key="index"
                    >
                        {{ item.app_name }}
                        <!-- <a
                          class="app_item_a"
                          target="iframe_app"
                          :href="iframe_host + item.app_url"
                        ></a> -->
                        <a
                                class="app_item_a"
                                target="iframe_app"
                                :href="`${iframe_host_re}center_re?app_url=${item.app_url}`"
                        ></a>
                    </div>
                </div>
                <div class="iframe_box" :class="`${app_act_item ? '' : 'iframe_hide'}`">
                    <iframe
                            class="iframe_app"
                            src="about:blank"
                            id="iframe_app"
                            name="iframe_app"
                            frameborder="0"
                    ></iframe>
                </div>
            </div>
        </div>

        <!-- <input id="inp_site" v-model="site_copy_txt"> -->
    </div>
</template>

<script>
    module.exports = {
        data: function ()
        {
            return {
                tokenAdmin: "",
                center_info: "",
                tml_list: [], //顶部左侧信息列表
                menu_act: 0,
                app_act_item: "",
                v_search: "",
                v_search_init: "",
                if_search_focus: false,
                if_searching: false,
                site_copy_txt: "",
                if_init: true,

                iframe_host: g_config.api_root + "/zz_admin/",
                iframe_host_re: "",
            };
        },
        created()
        {
            common_noback()

            this.tokenAdmin = func_get_cookie("token_qr");
            func_loading();

            this.func_center_info();

            this.iframe_host_re = location.origin + location.pathname + `#/${g_z_ui_dir}/a_admin/`
        },
        mounted()
        {
            console.log("mt center_ad", location, this.$route);
            let that = this
            document.onkeydown = this.keyListener;

            window.addEventListener('message', function (e)
            {
                console.log("center_ad父页接收数据-data：", e.data)  //e.data为传递过来的数据
                that.func_center_info(e.data)
            })

        },
        methods: {

            // 点击站点名
            handle_tml_item(item)
            {
                if (item.title == "站点")
                {
                    this.$alert(this.center_info.acc_site_id, item.title, {
                        confirmButtonText: "关闭",
                        callback: action =>
                        {
                        }
                    });
                }
            },
            // 监听键盘回车
            keyListener(e)
            {
                if (!this.if_search_focus) return;
                if (e.keyCode == 13)
                {
                    this.handle_search();
                }
            },
            // 搜索
            handle_search(app_id)
            {
                func_loading();
                this.app_act_item = "";
                this.func_center_info();
            },
            //   退出系统
            handle_exit()
            {
                func_remove_cookie("token_login");
                func_remove_cookie("token_qr");
                func_remove_cookie("center_url");
                func_remove_cookie("center_id");
                localStorage.clear();
                let login_url = func_get_cookie("login_url");
                this.$router.replace({
                    path: login_url,
                    query: {site_id: func_get_cookie("site_id")}
                });
            },
            menu_select(index)
            {
                console.log("选中菜单", index);
                this.app_act_item = "";
                this.menu_act = index;
                $("#iframe_app").attr("src", "about:blank");
            },
            // 点击应用
            handle_app(item)
            {
                this.app_act_item = item;
                item.app_url += "1";
            },
            // 修改密码
            handle_change_pwd()
            {
                this.app_act_item = true;
                $("#iframe_app").attr("src", "about:blank");
            },
            // 外层初始化接口
            func_center_info(iframe_data)
            {
                let url = "/zz_admin/z_center/center_info";
                if (funcIsJava())
                {
                    url = "/__api_java__/zz_admin/center_info";
                }

                this.if_searching = true;
                func_get(url, {
                    tokenAdmin: func_get_cookie("token_qr"),
                    app_keyword: (iframe_data && iframe_data.app_id) || this.v_search_init || this.v_search
                })
                    .then(data =>
                    {
                        //请求成功
                        this.if_searching = false;
                        func_loading(false);
                        console.log("*** func_center_info 结果", data);
                        if (data.errcode !== 0)
                        {
                            this.$message.error(data.errmsg);
                            if (data.errcode != 0)
                            {
                                setTimeout(() =>
                                {
                                    this.handle_exit();
                                }, 500);
                            }
                        }
                        else
                        {
                            this.menu_act = 0; //先设，防报错
                            func_set_cookie("is_admin_super", data.is_admin_super ? 1 : 0);

                            if (data.group.length > 0)
                            {
                                data.group.forEach((item, index) =>
                                {
                                    if (item.group_name && item.list.length > 0)
                                    {
                                        item.list.forEach((item_app, index_app) =>
                                        {
                                            if (item_app.app_url.indexOf("?") != -1)
                                            {
                                                item_app.app_url += "&v=1";
                                            }
                                            else
                                            {
                                                item_app.app_url += "?v=1";
                                            }
                                            // item_app.app_url += `tokenAdmin=${this.tokenAdmin}&v=1`;
                                            item_app.app_url = encodeURIComponent(item_app.app_url)
                                        });
                                    }
                                });
                            }

                            if (iframe_data && iframe_data.app_id)
                            {
                                let path = encodeURIComponent(iframe_data.path);
                                let app_url = data.group[0].list[0].app_url
                                    + encodeURIComponent(`&path=${path}&test_ui=${iframe_data.test_ui}`)
                                let res_url = `${this.iframe_host_re}center_re?app_url=${app_url}`
                                console.log('res_url', res_url);
                                //return;
                                if (iframe_data.blank)
                                {
                                    window.open(res_url, '_blank');
                                }
                                else
                                {
                                    $("#iframe_app").attr("src", res_url)
                                }
                            }
                            else
                            {
                                if (this.v_search_init && this.if_init)
                                {
                                    console.log("初始化的搜索结果：", data.group[0].list[0])
                                    let res_item = data.group[0].list[0]
                                    this.handle_app(res_item)
                                    // let a_href=this.iframe_host_re + "center_re?app_url=" + res_item.app_url
                                    let a_href = func_app_url(res_item.app_url)
                                    $("#iframe_app").attr("src", a_href)

                                    this.if_init = false
                                    this.v_search_init = ""
                                }
                                else
                                {
                                    this.center_info = data;
                                    console.log("center_info", data)
                                    this.tml_list = [
                                        {
                                            title: "站点",
                                            value: data.site_id_alias
                                        },
                                        {
                                            title: "名称",
                                            value: data.site_name
                                        },
                                        {
                                            title: "账号",
                                            value: data.acc_uid
                                        },
                                        {
                                            title: "昵称",
                                            value: data.wxname
                                        }
                                    ];
                                    console.log("center_info.group：", this.center_info.group)

                                    if (g_config.ad_app_init && this.if_init)
                                    {
                                        this.v_search_init = g_config.ad_app_init
                                        this.handle_search()
                                    }
                                    else
                                    {
                                        // 选中样式
                                        $(".el-menu-item:eq(0)").click()
                                    }
                                }

                            }

                        }
                    })
                    .catch(err =>
                    {
                        this.if_searching = false;
                        func_loading(false);
                        this.$message.error(err);
                    });
            }
        }
    };
</script>

<style scoped>
    .center {
        --navbar_h: 70px;
        --menu_w: 140px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .top_area {
        position: relative;
        width: 100%;
        height: var(--navbar_h);
        color: #fff;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top_bg_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .top_pre {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
    }

    .top_logo_area {
        width: var(--menu_w);
        height: 100%;
        padding: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top_logo_img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .top_main_area {
        flex: 1;
        padding-left: 0.875rem;
        padding-right: 1.125rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .top_main_left_area,
    .top_main_right_area {
        height: fit-content;
        margin-bottom: 0.6rem;
        display: flex;
        align-items: center;
    }

    .top_main_right_area {
        height: 100%;
        margin-bottom: unset;
        align-items: center;
    }

    .tml_item:first-child {
        cursor: pointer;
    }

    .tm_between_line {
        width: 1px;
        height: 20px;
        margin: 0 0.75rem;
        background-color: #fff;
    }

    .tmr_item {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .change_pwd_a {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    .tmr_icon_img {
        width: 25px;
        /* width: 0.625rem;
        height: 0.625rem;
        object-fit: contain; */
    }

    .tmr_icon_img_elm {
        font-size: 20px;
        margin-right: 8px;
    }

    .bottom_area {
        width: 100%;
        height: calc(100vh - var(--navbar_h));
        display: flex;
    }

    .menu_area {
        width: var(--menu_w);
        height: 100%;
        background-color: #3b426c;
        overflow-y: scroll;
    }

    .el-menu {
        border: none;
    }

    .el-menu-vertical-demo {
        width: 100%;
    }

    .el-menu .is-active {
        background-color: #4c5486 !important;
    }

    .el-menu-item:focus,
    .el-menu-item:hover {
        background-color: #4c5486 !important;
    }

    .content_area::-webkit-scrollbar {
        width: 0;
    }

    .menu_area::-webkit-scrollbar {
        /* width: 0.2rem; */
        width: 0;
    }

    /*修改 滚动条的 下面 的 样式*/
    .menu_area::-webkit-scrollbar-track {
        background-color: #3b426c;
        -webkit-border-radius: 0.2rem;
        -moz-border-radius: 0.2rem;
        border-radius: 0.2rem;
    }

    /*修改 滑块 */
    .menu_area::-webkit-scrollbar-thumb {
        background-color: #010f1a;
        -webkit-border-radius: 0.2rem;
        -moz-border-radius: 0.2rem;
        border-radius: 0.2rem;
    }

    .content_area {
        flex: 1;
        padding: 0.25rem;
        overflow-y: scroll;
    }

    .app_area {
        width: 100%;
        padding: 0.25rem;
        display: flex;
        flex-wrap: wrap;
    }

    .app_item {
        position: relative;
        width: 200px;
        height: 100px;
        cursor: pointer;
        margin: 0.25rem;
        font-size: 18px;
        color: #fff;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .app_item_a {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
    }

    .iframe_box,
    .iframe_app {
        width: 100%;
        height: 100%;
    }

    .iframe_hide {
        position: absolute;
        width: 0;
        height: 0;
        overflow: hidden;
    }

    .inp_search {
        width: 200px;
        margin-right: 0.75rem;
    }

    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>
