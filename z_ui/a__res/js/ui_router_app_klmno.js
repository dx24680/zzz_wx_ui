console.log('ui_router_app_klmno.js');

ui_router_app_klmno = [

    //
    // mall_fun_b 积分商城
    //
    {
        path: `/:id/z_ui/z_app/mall_fun_b/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/mall_fun_b/mall_fun__group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/mall_fun_b/a__wx`,
                component: httpVueLoader(`/z_ui/z_app/a_tmpl/a__wx.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_fun_b/mall_fun__group__list`,
                component: httpVueLoader(`/z_ui/z_app/mall_fun_b/mall_fun__group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_fun_b/mall_fun__group__edit`,
                component: httpVueLoader(`/z_ui/z_app/mall_fun_b/mall_fun__group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_fun_b/mall_fun__goods__list`,
                component: httpVueLoader(`/z_ui/z_app/mall_fun_b/mall_fun__goods__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_fun_b/mall_fun__goods__edit`,
                component: httpVueLoader(`/z_ui/z_app/mall_fun_b/mall_fun__goods__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_fun_b/mall_fun__goods__info__edit`,
                component: httpVueLoader(`/z_ui/z_app/mall_fun_b/mall_fun__goods__info__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // media 多媒体上传
    //
    {
        path: `/:id/z_ui/z_app/media/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/media/media__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/media/media__list`,
                component: httpVueLoader(`/z_ui/z_app/media/media__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/media/media__edit`,
                component: httpVueLoader(`/z_ui/z_app/media/media__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // menu 自定义菜单
    //
    {
        path: `/:id/z_ui/z_app/menu/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/menu/menu__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/menu/menu__list`,
                component: httpVueLoader(`/z_ui/z_app/menu/menu__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/menu/menu__edit`,
                component: httpVueLoader(`/z_ui/z_app/menu/menu__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/menu/menu_stat__list`,
                component: httpVueLoader(`/z_ui/z_app/menu/menu_stat__list.vue?${g_version}`),
            },
        ]
    },
    //
    // multi_info 企业视频分享
    //
    {
        path: `/:id/z_ui/z_app/multi_info/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/multi_info/multi_info__quan_1__list`,
        children: [{
            path: `/:id/z_ui/z_app/multi_info/multi_info__quan_1__list`,
            component: httpVueLoader(`/z_ui/z_app/multi_info/multi_info__quan_1__list.vue?${g_version}`),
        },
            {
                path: `/:id/z_ui/z_app/multi_info/multi_info__comment__list`,
                component: httpVueLoader(`/z_ui/z_app/multi_info/multi_info__comment__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/multi_info/multi_info__comment_sub__list`,
                component: httpVueLoader(`/z_ui/z_app/multi_info/multi_info__comment_sub__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/multi_info/multi_info__setting__edit`,
                component: httpVueLoader(`/z_ui/z_app/multi_info/multi_info__setting__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/multi_info/multi_info__quan__edit`,
                component: httpVueLoader(`/z_ui/z_app/multi_info/multi_info__quan__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // news_info 文章资讯
    //
    {
        path: `/:id/z_ui/z_app/news_info/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/news_info/group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/news_info/group__list`,
                component: httpVueLoader(`/z_ui/z_app/news_info/group__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/news_info/group__edit`,
                component: httpVueLoader(`/z_ui/z_app/news_info/group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/news_info/article__list`,
                component: httpVueLoader(`/z_ui/z_app/news_info/article__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/news_info/article__edit`,
                component: httpVueLoader(`/z_ui/z_app/news_info/article__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/news_info/article_read__list`,
                component: httpVueLoader(`/z_ui/z_app/news_info/article_read__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },

        ]
    },
]