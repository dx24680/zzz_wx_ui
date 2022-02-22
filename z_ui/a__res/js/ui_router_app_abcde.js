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
        ]
    },
]
