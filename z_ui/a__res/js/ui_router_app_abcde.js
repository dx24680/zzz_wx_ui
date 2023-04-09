console.log('ui_router_app_abcde.js');

ui_router_app_abcde = [
    //
    // account 管理员账号
    //
    {
        path: `/:id/z_ui/z_app/account/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/account/account__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/account/account__list`,
                component: httpVueLoader(`/z_ui/z_app/account/account__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account/account__edit`,
                component: httpVueLoader(`/z_ui/z_app/account/account__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account/account__menu__list`,
                component: httpVueLoader(`/z_ui/z_app/account/account__menu__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account/account__menu__edit`,
                component: httpVueLoader(`/z_ui/z_app/account/account__menu__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account/account__menu__son__list`,
                component: httpVueLoader(`/z_ui/z_app/account/account__menu__son__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account/account__menu__son__edit`,
                component: httpVueLoader(`/z_ui/z_app/account/account__menu__son__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account/account__role__list`,
                component: httpVueLoader(`/z_ui/z_app/account/account__role__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account/account__role__edit`,
                component: httpVueLoader(`/z_ui/z_app/account/account__role__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account/account__auth_path__list`,
                component: httpVueLoader(`/z_ui/z_app/account/account__auth_path__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account/account__auth_path__edit`,
                component: httpVueLoader(`/z_ui/z_app/account/account__auth_path__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // account_pwd 核销密码
    //
    {
        path: `/:id/z_ui/z_app/account_pwd/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/account_pwd/account__pwd__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/account_pwd/account__pwd__list`,
                component: httpVueLoader(`/z_ui/z_app/account_pwd/account__pwd__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_pwd/account__pwd__edit`,
                component: httpVueLoader(`/z_ui/z_app/account_pwd/account__pwd__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_pwd/account__prize__list`,
                component: httpVueLoader(`/z_ui/z_app/account_pwd/account__prize__list.vue?${g_version}`),
            },
        ]
    },
    //
    // account_se 高级管理员
    //
    {
        path: `/:id/z_ui/z_app/account_se/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/account_se/account_se__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/account_se/account_se__setting`,
                component: httpVueLoader(`/z_ui/z_app/account_se/account_se__setting.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_se/account_se__list`,
                component: httpVueLoader(`/z_ui/z_app/account_se/account_se__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_se/account_se__add`,
                component: httpVueLoader(`/z_ui/z_app/account_se/account_se__add.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_se/account_se__edit`,
                component: httpVueLoader(`/z_ui/z_app/account_se/account_se__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_se/account_se__sub__info`,
                component: httpVueLoader(`/z_ui/z_app/account_se/account_se__sub__info.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_se/account_se__siteid__list`,
                component: httpVueLoader(`/z_ui/z_app/account_se/account_se__siteid__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_se/account_se__siteid__edit`,
                component: httpVueLoader(`/z_ui/z_app/account_se/account_se__siteid__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_se/account_ex__list`,
                component: httpVueLoader(`/z_ui/z_app/account_se/account_ex__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_se/account_ex__edit`,
                component: httpVueLoader(`/z_ui/z_app/account_se/account_ex__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_se/account_ex__ad__edit`,
                component: httpVueLoader(`/z_ui/z_app/account_se/account_ex__ad__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // account_site 当前站点管理员
    //
    {
        path: `/:id/z_ui/z_app/account_site/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/account_site/account_site__item__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/account_site/account_site__item__list`,
                component: httpVueLoader(`/z_ui/z_app/account_site/account_site__item__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/account_site/account_site__edit`,
                component: httpVueLoader(`/z_ui/z_app/account_site/account_site__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/account_site/account_site__add`,
                component: httpVueLoader(`/z_ui/z_app/account_site/account_site__add.vue?${g_version}`),
            },
        ]
    },
    //
    // admin_site 站点管理
    //
    {
        path: `/:id/z_ui/z_app/admin_site/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/admin_site/admin_site__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/admin_site/admin_site__list`,
                component: httpVueLoader(`/z_ui/z_app/admin_site/admin_site__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/admin_site/admin_site__edit`,
                component: httpVueLoader(`/z_ui/z_app/admin_site/admin_site__edit.vue?${g_version}`),
            }
        ]
    },
    //
    // banner
    //
    {
        path: `/:id/z_ui/z_app/banner/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/banner/banner__banner__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/banner/banner__banner__list`,
                component: httpVueLoader(`/z_ui/z_app/banner/banner__banner__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/banner/banner__banner__edit`,
                component: httpVueLoader(`/z_ui/z_app/banner/banner__banner__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/banner/banner__item__list`,
                component: httpVueLoader(`/z_ui/z_app/banner/banner__item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/banner/banner__item__edit`,
                component: httpVueLoader(`/z_ui/z_app/banner/banner__item__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // booking_b
    //
    {
        path: `/:id/z_ui/z_app/booking_b/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/booking_b/booking__group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/booking_b/booking__group__list`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/booking_b/booking__group__edit`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/booking_b/booking__list`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/booking_b/booking__edit`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/booking_b/booking__field__list`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__field__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/booking_b/booking__field__edit`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__field__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/booking_b/booking__item__list`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/booking_b/booking__item__edit`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__item__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/booking_b/booking__item_day__list`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__item_day__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/booking_b/booking__item_day__add`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__item_day__add.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/booking_b/booking__record__list`,
                component: httpVueLoader(`/z_ui/z_app/booking_b/booking__record__list.vue?${g_version}`),
            }
        ]
    },

    //
    // clock_act 打卡活动
    //
    {
        path: `/:id/z_ui/z_app/clock_act/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/clock_act/clock__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/clock_act/clock__list`,
                component: httpVueLoader(`/z_ui/z_app/clock_act/clock__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/clock_act/clock__edit`,
                component: httpVueLoader(`/z_ui/z_app/clock_act/clock__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/clock_act/clock_check__list`,
                component: httpVueLoader(`/z_ui/z_app/clock_act/clock_check__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/clock_act/clock_check__detail`,
                component: httpVueLoader(`/z_ui/z_app/clock_act/clock_check__detail.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/clock_act/clock_count__list`,
                component: httpVueLoader(`/z_ui/z_app/clock_act/clock_count__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/clock_act/clock_group_chat__list`,
                component: httpVueLoader(`/z_ui/z_app/clock_act/clock_group_chat__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/clock_act/clock_group_chat_users__list`,
                component: httpVueLoader(`/z_ui/z_app/clock_act/clock_group_chat_users__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/clock_act/clock_rank__list`,
                component: httpVueLoader(`/z_ui/z_app/clock_act/clock_rank__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
        ]
    },
    //
    // corp_groupchat 企业微信-群管理
    //
    {
        path: `/:id/z_ui/z_app/corp_groupchat/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat__site`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat__site.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat__welcome__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat__welcome__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat__welcome__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat__welcome__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data_group__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data_group__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_app_data_tab`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_app_data_tab.vue?${g_version}`),
                //meta: {keepAlive: true}
                children: [
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__app_super__01`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__app_super__01.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__app_super__02`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__app_super__02.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__chain__01`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__chain__01.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__chain__02`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__chain__02.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__kan__01`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__kan__01.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__kan__02`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__kan__02.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__lucky_card__01`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__lucky_card__01.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__lucky_card__02`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__lucky_card__02.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__pin__01`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__pin__01.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__pin__02`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__pin__02.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__play_new__01`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__play_new__01.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__play_new__02`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__play_new__02.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                ]
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data_tab`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data_tab.vue?${g_version}`),
                //meta: {keepAlive: true}
                children: [
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data_group__info`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data_group__info.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data_group_list__info`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data_group_list__info.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data_source_group__info`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data_source_group__info.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data_source_group_list__info`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data_source_group_list__info.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data_source_time__info`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data_source_time__info.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data_stats__info`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data_stats__info.vue?${g_version}`),
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data_time__info`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data_time__info.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                ]
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data_tab_user`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data_tab_user.vue?${g_version}`),
                //meta: {keepAlive: true}
                children: [
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__user__01`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__user__01.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__user__02`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__user__02.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__user__03`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__user__03.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                    {
                        path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_data__user__04`,
                        component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_data__user__04.vue?${g_version}`),
                        //meta: {keepAlive: true}
                    },
                ]
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_group__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_group__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_group__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_group__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_group_tag__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_group_tag__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_group_user__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_group_user__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_tag__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_tag__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat/corp_groupchat_tag__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat/corp_groupchat_tag__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
        ]
    },
    //
    // corp_groupchat_center 企业微信-群中心
    //
    {
        path: `/:id/z_ui/z_app/corp_groupchat_center/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__setting`,
        children: [
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__topic__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__topic__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/act_design__edit`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/act_design__list`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act_type__design__list.vue?${g_version}`),
            },
            // {
            //     path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__design`,
            //     component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            // },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__corp__group__check`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__corp__group__check.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__corp__account__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__corp__account__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__corp__account__add`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__corp__account__add.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_user__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_user__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group__chat__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group__chat__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__m2mall__spu__add`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__m2mall__spu__add.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__m2mall__spu__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__m2mall__spu__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group__add`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group__add.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group__fun_record__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group__fun_record__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__tag__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__tag__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__tag__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__tag__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__tag__add`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__tag__add.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__tag__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__tag__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__tag__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__tag__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__qr__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__qr__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__qr__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_msg__qr__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_user__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__group_user__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__master__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__master__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__master__fun_add`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__master__fun_add.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__master__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__master__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack__copy`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack__copy.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack__cover`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack__cover.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack__type_get__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack__type_get__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack__type_share__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack__type_share__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack_get__get__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack_get__get__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack_get__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack_get__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack_share__collect__group__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack_share__collect__group__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack_share__collect__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__pack_share__collect__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__setting`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__setting.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__wx__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__wx__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__wx__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__wx__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__wx__master__edit`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__wx__master__edit.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__inv_code__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__inv_code__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__inv_code__add`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__inv_code__add.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__join_pay__spu`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__join_pay__spu.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__order_item__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_groupchat_center/corp_groupchat_center__order_item__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
        ]
    },
    //
    // corp_pay_b 企业付款
    //
    {
        path: `/:id/z_ui/z_app/corp_pay_b/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/corp_pay_b/corp_pay_b__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/corp_pay_b/corp_pay_b__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_pay_b/corp_pay_b__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/corp_pay_b/corp_pay_b__log__list`,
                component: httpVueLoader(`/z_ui/z_app/corp_pay_b/corp_pay_b__log__list.vue?${g_version}`),
            },
        ]
    },
    //
    // dialog 对话监控
    //
    {
        path: `/:id/z_ui/z_app/dialog/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/dialog/dialog_mdb__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/dialog/dialog_mdb__list`,
                component: httpVueLoader(`/z_ui/z_app/dialog/dialog_mdb__list.vue?${g_version}`),
            },

        ]
    },
    //
    // dist_center
    //
    {
        path: `/:id/z_ui/z_app/dist_center/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/dist_center/dist_center__group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__group__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__group__edit`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__tag__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__tag__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__tag__edit`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__tag__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__poster__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__poster__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__poster__edit`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__poster__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__poster__group__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__poster__group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__poster__group__edit`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__poster__group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__member__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__member__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__bind__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__bind__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__member_data__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__member_data__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__setting`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__setting.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center/dist_center__poster_data__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center/dist_center__poster_data__list.vue?${g_version}`),
            },
        ]
    },
    //
    // dist_center_sales 营销中心-销售
    //
    {
        path: `/:id/z_ui/z_app/dist_center_sales/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__sku__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__setting__edit`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__setting__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__sku__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__sku__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__sku__edit`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__sku__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__order_item__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__order_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__team__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__team__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__team__edit`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__team__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__team_user__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__team_user__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__money_record__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__money_record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__user__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__user__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__team_apply__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__team_apply__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__rank__u`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__rank__u.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__rank_pv__u`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__rank_pv__u.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__rank__team`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__rank__team.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__rank_pv__team`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__rank_pv__team.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/dist_center_sales/dist_center_sales__order_item__use__list`,
                component: httpVueLoader(`/z_ui/z_app/dist_center_sales/dist_center_sales__order_item__use__list.vue?${g_version}`),
            },
        ]
    },
    //
    // distributor 经销商
    //
    {
        path: `/:id/z_ui/z_app/distributor/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/distributor/distributor__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/distributor/distributor__list`,
                component: httpVueLoader(`/z_ui/z_app/distributor/distributor__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/distributor/distributor__edit`,
                component: httpVueLoader(`/z_ui/z_app/distributor/distributor__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/distributor/distributor_group__list`,
                component: httpVueLoader(`/z_ui/z_app/distributor/distributor_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/distributor/distributor_group__add`,
                component: httpVueLoader(`/z_ui/z_app/distributor/distributor_group__add.vue?${g_version}`),
            },
        ]
    },
    //
    // distributor_group 经销商-群查看
    //
    {
        path: `/:id/z_ui/z_app/distributor_group/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/distributor_group/dg_group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/distributor_group/dg_group__list`,
                component: httpVueLoader(`/z_ui/z_app/distributor_group/dg_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/distributor_group/dg_group_user__list`,
                component: httpVueLoader(`/z_ui/z_app/distributor_group/dg_group_user__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/distributor_group/dg_reg__list`,
                component: httpVueLoader(`/z_ui/z_app/distributor_group/dg_reg__list.vue?${g_version}`),
            }
        ]
    },
    //
    // english_study 英语学习
    //
    {
        path: `/:id/z_ui/z_app/english_study/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/english_study/english_study__type__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/english_study/english_study__type__list`,
                component: httpVueLoader(`/z_ui/z_app/english_study/english_study__type__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/english_study/english_study__type__edit`,
                component: httpVueLoader(`/z_ui/z_app/english_study/english_study__type__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/english_study/english_study__group__list`,
                component: httpVueLoader(`/z_ui/z_app/english_study/english_study__group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/english_study/english_study__group__edit`,
                component: httpVueLoader(`/z_ui/z_app/english_study/english_study__group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/english_study/english_study__word__list`,
                component: httpVueLoader(`/z_ui/z_app/english_study/english_study__word__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/english_study/english_study__word__edit`,
                component: httpVueLoader(`/z_ui/z_app/english_study/english_study__word__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/english_study/english_study__word__add`,
                component: httpVueLoader(`/z_ui/z_app/english_study/english_study__word__add.vue?${g_version}`),
            },
        ]
    },
]
