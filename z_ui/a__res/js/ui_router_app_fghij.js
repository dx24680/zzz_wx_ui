console.log('ui_router_app_fghij.js');

ui_router_app_fghij = [
    //
    // join_setting 参与条件设置
    //
    {
        path: `/:id/z_ui/z_app/join_setting/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/join_setting/join_group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/join_setting/join_group__list`,
                component: httpVueLoader(`/z_ui/z_app/join_setting/join_group__list.vue?${g_version}`),
              //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/join_setting/join_group__edit`,
                component: httpVueLoader(`/z_ui/z_app/join_setting/join_group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/join_setting/join_setting__list`,
                component: httpVueLoader(`/z_ui/z_app/join_setting/join_setting__list.vue?${g_version}`),
              //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/join_setting/join_setting__edit`,
                component: httpVueLoader(`/z_ui/z_app/join_setting/join_setting__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/join_setting/join_setting_app__list`,
                component: httpVueLoader(`/z_ui/z_app/join_setting/join_setting_app__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/join_setting/join_setting_act__list`,
                component: httpVueLoader(`/z_ui/z_app/join_setting/join_setting_act__list.vue?${g_version}`),
            },
        ]
    },
    //
    // guess_act 竞猜活动
    //
    {
        path: `/:id/z_ui/z_app/guess_act/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/guess_act/guess__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/guess_act/guess__list`,
                component: httpVueLoader(`/z_ui/z_app/guess_act/guess__list.vue?${g_version}`),
              //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/guess_act/guess__edit`,
                component: httpVueLoader(`/z_ui/z_app/guess_act/guess__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/guess_act/guess_design__edit`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/guess_act/guess_answer_announce`,
                component: httpVueLoader(`/z_ui/z_app/guess_act/guess_answer_announce.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/guess_act/guess_answer__list`,
                component: httpVueLoader(`/z_ui/z_app/guess_act/guess_answer__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
        ]
    },
]
