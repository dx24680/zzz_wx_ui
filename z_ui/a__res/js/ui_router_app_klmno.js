console.log('ui_router_app_klmno.js');

ui_router_app_klmno = [
    //
    // multi_info
    //


    {
        path: `/:id/z_ui/z_app/news_info/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/news_info/group__list`,
        children: [{
                path: `/:id/z_ui/z_app/news_info/group__list`,
                component: httpVueLoader(`/z_ui/z_app/news_info/group__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/news_info/group__edit`,
                component: httpVueLoader(`/z_ui/z_app/news_info/group__edit.vue?${g_version}`),
            },

        ]
    },


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
]