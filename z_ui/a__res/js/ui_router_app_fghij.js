console.log('ui_router_app_fghij.js');

ui_router_app_fghij = [
    //
    // file 文件管理
    //
    {
        path: `/:id/z_ui/z_app/file/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/file/file__item__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/file/a_index`,
                component: httpVueLoader(`/z_ui/z_app/file/a_index.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/file/file__item__list`,
                component: httpVueLoader(`/z_ui/z_app/file/file__item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/file/file__item__add`,
                component: httpVueLoader(`/z_ui/z_app/file/file__item__add.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/file/file__item__edit`,
                component: httpVueLoader(`/z_ui/z_app/file/file__item__edit.vue?${g_version}`),
            }
        ]
    },
    //
    // fun 积分
    //
    {
        path: `/:id/z_ui/z_app/fun/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/fun/fun__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/fun/fun__list`,
                component: httpVueLoader(`/z_ui/z_app/fun/fun__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun/fun__list__history`,
                component: httpVueLoader(`/z_ui/z_app/fun/fun__list__history.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun/fun_ranking__list`,
                component: httpVueLoader(`/z_ui/z_app/fun/fun_ranking__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun/fun__import`,
                component: httpVueLoader(`/z_ui/z_app/fun/fun__import.vue?${g_version}`),
            },
        ]
    },
    //
    // fun_auction_b 积分拍卖
    //
    {
        path: `/:id/z_ui/z_app/fun_auction_b/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/fun_auction_b/fun_auction_b__goods__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/fun_auction_b/fun_auction_b__goods__list`,
                component: httpVueLoader(`/z_ui/z_app/fun_auction_b/fun_auction_b__goods__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun_auction_b/fun_auction_b__goods_1__list`,
                component: httpVueLoader(`/z_ui/z_app/fun_auction_b/fun_auction_b__goods__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun_auction_b/fun_auction_b__goods__edit`,
                component: httpVueLoader(`/z_ui/z_app/fun_auction_b/fun_auction_b__goods__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun_auction_b/fun_auction_b__record__list`,
                component: httpVueLoader(`/z_ui/z_app/fun_auction_b/fun_auction_b__record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun_auction_b/fun_auction_b__setting`,
                component: httpVueLoader(`/z_ui/z_app/fun_auction_b/fun_auction_b__setting.vue?${g_version}`),
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
]
