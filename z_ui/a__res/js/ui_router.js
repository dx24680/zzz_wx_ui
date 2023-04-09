console.log('ui_router.js')

g_router_data = {
    whiteList: [`/${g_z_ui_dir}/a_admin/index_qr`, '/404', `/${g_z_ui_dir}/a_admin/center_re`, `/index_class`],
    center_list: funcIsUiUser() ? ["user", "xxx"] : ["ad", "acc", "cash"],
}


g_routes = [
    {
        path: `/${g_z_ui_dir}/a_admin/index_qr`,
        component: httpVueLoader(`/${g_z_ui_dir}/a_admin/index_qr.vue?${g_version}`),
        meta: {title: "扫描二维码"}
    },
    {
        path: '/index_class',
        component: httpVueLoader(`/${g_z_ui_dir}/a_admin/index_class.vue?${g_version}`),
        meta: {title: g_config.title}
    },
    {
        path: '/',
        component: httpVueLoader(`/${g_z_ui_dir}/a_admin/center.vue?${g_version}`),
        meta: {title: "app"}
    },
    {
        path: `/${g_z_ui_dir}/a_admin/center_re`,
        component: httpVueLoader(`/${g_z_ui_dir}/a_admin/center_re.vue?${g_version}`),
        meta: {title: "center_re"}
    },
    {
        path: '/404',
        component: httpVueLoader(`/${g_z_ui_dir}/a_admin/index_url.vue?${g_version}`),
        meta: {title: "404"}
    },
    {
        path: '*',
        component: httpVueLoader(`/${g_z_ui_dir}/a_admin/index_url.vue?${g_version}`),
        meta: {title: "404"}
    },
]

g_router_data.center_list.forEach((item, index) =>
{
    let add_list = [
        {
            path: `/${g_z_ui_dir}/a_admin/index/${item}`,
            component: httpVueLoader(`/${g_z_ui_dir}/a_admin/index.vue?${g_version}`),
            meta: {title: g_config.title}
        },
        {
            path: `/${g_z_ui_dir}/a_admin/center_${item}`,
            component: httpVueLoader(`/${g_z_ui_dir}/a_admin/center_${item}.vue?${g_version}`),
            meta: {title: g_config.title},
            // children: [
            // 	{
            // 		path: `/${g_z_ui_dir}/a_admin/center_re`,
            // 		component: httpVueLoader(`/${g_z_ui_dir}/a_admin/center_re.vue?${g_version}`),
            // 		meta: { title: "center_re" }
            // 	},
            // ]
        },
        {
            path: `/${item}`,
            component: httpVueLoader(`/${g_z_ui_dir}/a_admin/center_${item}.vue?${g_version}`),
            meta: {title: "首页"}
        }
    ]
    g_routes = g_routes.concat(add_list)
})

g_router = new VueRouter({
    routes: g_routes
})


// 导航守卫
g_router.beforeEach((to, from, next) =>
{
    console.log("导航守卫：", to.path, from)
    clearTimeout(g_common_data.timeout_index_qr)
    // if (from.path == `/${g_z_ui_dir}/a_admin/index_qr`) {
    // 	console.log("来自二维码页，清掉check定时")
    // }
    document.title = to.meta.title
    if (g_router_data.whiteList.indexOf(to.path) !== -1)
    {
        // 白名单
        console.log("白名单")
        next()
        return
    }
    let token_login = func_get_cookie("token_login")
    let token_qr = func_get_cookie("token_qr")
    let login_url = func_get_cookie("login_url")
    let center_url = func_get_cookie("center_url")
    let site_id = func_get_cookie("site_id")
    let center_id = func_get_cookie("center_id")
    if (token_qr)
    {
        console.log('存在token_qr')
        if (to.path === login_url)
        {
            // 自动跳首页
            console.log("自动跳首页", center_url)
            next({path: center_url})
        }
        else
        {
            let new_center_id = ""
            if (to.path.indexOf(`/${g_z_ui_dir}/a_admin/center_`) != -1)
            {
                new_center_id = to.path.split(`/${g_z_ui_dir}/a_admin/center_`)[1]
            }
            else
            {
                new_center_id = to.path.split("/")[1]
            }
            if (center_id && new_center_id != center_id)
            {
                console.log("去不同首页也要重新登录", to.path)
                let new_center_id = ""
                if (to.path.indexOf(`/${g_z_ui_dir}/a_admin/center_`) != -1)
                {
                    new_center_id = to.path.split(`/${g_z_ui_dir}/a_admin/center_`)[1]
                }
                else
                {
                    new_center_id = to.path.split("/")[1]
                }
                func_remove_cookie("token_login")
                func_remove_cookie("token_qr")
                func_remove_cookie("center_id")
                login_url = `/${g_z_ui_dir}/a_admin/index/${new_center_id}`
                func_set_cookie("login_url", login_url)
                next({path: login_url, query: {site_id: site_id}})
            }
            else
            {
                if (g_router_data.center_list.indexOf(to.path.split("/")[1]) != -1)
                {
                    console.log("进缩写首页，换完整路径", to.path.split("/")[1])
                    next(`/${g_z_ui_dir}/a_admin/center_` + to.path.split("/")[1])
                    return
                }
                next()
            }
        }
    }
    else
    {
        console.log('未有token_qr', token_login, g_router_data.whiteList)
        if (to.path.indexOf(`/${g_z_ui_dir}/a_admin/index/`) != -1)
        {
            // 去登录（多一步记录）
            func_set_cookie("login_url", to.path)
            next()
        }
        else
        {
            if (token_login && g_common_data.auth_qr)
            {
                // 已登录且有二维码
                if (from.path == `/${g_z_ui_dir}/a_admin/index_qr`)
                {
                    console.log("在二维码页改路径跳转的，先去登录", to.path)
                    func_remove_cookie("token_login")
                    if (g_router_data.center_list.indexOf(to.path.split("/")[1]) != -1 || g_router_data.center_list.indexOf(to.path.split(`/${g_z_ui_dir}/a_admin/center_`)[1]) != -1)
                    {
                        login_url = `/${g_z_ui_dir}/a_admin/index/${to.path.split("/")[1]}`
                        func_set_cookie("login_url", login_url)
                        next({path: login_url, query: {site_id: site_id}})
                    }
                    else
                    {
                        func_remove_cookie("login_url")
                        next("/404")
                    }
                    // login_url=
                    // func_set_cookie("login_url",login_url)
                }
                else
                {
                    // 去二维码的，放行
                    next(`/${g_z_ui_dir}/a_admin/index_qr`)
                }
            }
            else
            {
                if (to.path == "/")
                {
                    // 要求初始只输入域名时进空白监听路由变化（阻止死循环）
                    next(`/404`)
                }
                else
                {
                    console.log("未登录，先去登录页")
                    // 在404直接改路径进入时，这里处理
                    if (g_router_data.center_list.indexOf(to.path.split("/")[1]) != -1)
                    {
                        login_url = `/${g_z_ui_dir}/a_admin/index/${to.path.split("/")[1]}`
                        func_set_cookie("login_url", login_url)
                    }
                    next({path: login_url, query: to.query || ""})
                }
            }
        }
    }
})


function router_set_url()
{
    let now_url
    // 有没有带路径
    if (location.hash)
    {
        now_url = location.hash.split("?")[0].split("#")[1]
    }
    if (now_url)
    {
        console.log("now_url", now_url)
        // 是不是登录页
        if (now_url.indexOf(`/${g_z_ui_dir}/a_admin/index/`) != -1)
        {
            func_set_cookie("login_url", now_url)
            func_set_cookie("center_url", `/${g_z_ui_dir}/a_admin/center_${now_url.split("/" + g_z_ui_dir + "/a_admin/index/")[1]}`)
        }
        else
        {
            // 非登录页，有种情况是清缓存后刷新
            if (g_router_data.whiteList.indexOf(now_url) != -1) return
            if (!func_get_cookie("login_url"))
            {
                func_set_cookie("login_url", `/${g_z_ui_dir}/a_admin/index/${now_url.split("/" + g_z_ui_dir + "/a_admin/center_")[1] || now_url.split("/")[1]}`)
            }
        }
    }
    else
    {
        // 没路径，只有域名不给默认
        // if (!func_get_cookie("login_url")) {
        // 	func_set_cookie("login_url", `/${g_z_ui_dir}/a_admin/index/ad`)
        // }
        // if (!func_get_cookie("center_url")) {
        // 	func_set_cookie("center_url", `/${g_z_ui_dir}/a_admin/center_ad`)
        // }
    }

    console.log("记录登录页面路径：", func_get_cookie("login_url"))
    console.log("记录首页路径：", func_get_cookie("center_url"))
}

router_set_url();

