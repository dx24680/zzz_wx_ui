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
            {
                path: `/:id/z_ui/z_app/fun/fun__setting`,
                component: httpVueLoader(`/z_ui/z_app/fun/fun__setting.vue?${g_version}`),
            },
        ]
    },
    //
    // fun_win 积分夺宝
    //
    {
        path: `/:id/z_ui/z_app/fun_win/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/fun_win/funw_prize__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/fun_win/funw_prize__list`,
                component: httpVueLoader(`/z_ui/z_app/fun_win/funw_prize__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun_win/funw_prize__edit`,
                component: httpVueLoader(`/z_ui/z_app/fun_win/funw_prize__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun_win/fun_win__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun_win/funw__setting`,
                component: httpVueLoader(`/z_ui/z_app/fun_win/funw__setting.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun_win/funw_prize_launch__list`,
                component: httpVueLoader(`/z_ui/z_app/fun_win/funw_prize_launch__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun_win/funw_prize_win__list`,
                component: httpVueLoader(`/z_ui/z_app/fun_win/funw_prize_win__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/fun_win/funw_sale__list`,
                component: httpVueLoader(`/z_ui/z_app/fun_win/funw_sale__list.vue?${g_version}`),
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
            {
                path: `/:id/z_ui/z_app/fun_auction_b/fun_auction_b__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
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
    // groupchat_fun 圈福利金
    //
    {
        path: `/:id/z_ui/z_app/groupchat_fun/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__setting`,
        children: [
            {
                path: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__type__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_fun/groupchat_fun__type__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__type__edit`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_fun/groupchat_fun__type__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__setting`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_fun/groupchat_fun__setting.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__goods__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_fun/groupchat_fun__goods__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__goods__edit`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_fun/groupchat_fun__goods__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__order__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_fun/groupchat_fun__order__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__order_item__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_fun/groupchat_fun__order_item__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__group__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_fun/groupchat_fun__group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__record__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_fun/groupchat_fun__record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_fun/groupchat_fun__import`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_fun/groupchat_fun__import.vue?${g_version}`),
            },
        ]
    },

    //
    // groupchat_level 圈等级
    //
    {
        path: `/:id/z_ui/z_app/groupchat_level/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/groupchat_level/groupchat_level__setting`,
        children: [
            {
                path: `/:id/z_ui/z_app/groupchat_level/groupchat_level__setting`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_level/groupchat_level__setting.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_level/groupchat_level__level__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_level/groupchat_level__level__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_level/groupchat_level__level__edit`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_level/groupchat_level__level__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_level/groupchat_level__level_prize__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_level/groupchat_level__level_prize__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_level/groupchat_level__level_prize__edit`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_level/groupchat_level__level_prize__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_level/groupchat_level__group__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_level/groupchat_level__group__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_level/groupchat_level__task__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_level/groupchat_level__task__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_level/groupchat_level__task__edit`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_level/groupchat_level__task__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_level/groupchat_level__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // groupchat_wish 群主心愿
    //
    {
        path: `/:id/z_ui/z_app/groupchat_wish/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/groupchat_wish/wish_act__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_act__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_act__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_act__edit`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_act__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_group__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_group__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_group__edit`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_group__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_prize__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_prize__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_prize__edit`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_prize__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_prize_open__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_prize_open__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/groupchat_wish_design__edit`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_stock__edit`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_stock__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_launch__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_launch__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_prize_record__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_prize_record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_exclude__add`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_exclude__add.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_exclude__list`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_exclude__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/groupchat_wish/wish_prize__copy`,
                component: httpVueLoader(`/z_ui/z_app/groupchat_wish/wish_prize__copy.vue?${g_version}`),
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
