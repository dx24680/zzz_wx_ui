console.log('ui_router_app_z_mall.js');

ui_router_app_z_mall = [
    //
    // mall_ticket_coupon 卡券中心
    //
    {
        path: `/:id/z_ui/z_app/mall_ticket_coupon/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/mall_ticket_coupon/mall_ticket_coupon__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/mall_ticket_coupon/mall_ticket_coupon__list`,
                component: httpVueLoader(`/z_ui/z_app_mall/mall_ticket_coupon/mall_ticket_coupon__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_ticket_coupon/mall_ticket_coupon__edit`,
                component: httpVueLoader(`/z_ui/z_app_mall/mall_ticket_coupon/mall_ticket_coupon__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_ticket_coupon/mall_ticket_coupon__setting`,
                component: httpVueLoader(`/z_ui/z_app_mall/mall_ticket_coupon/mall_ticket_coupon__setting.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_ticket_coupon/mall_ticket_code__list`,
                component: httpVueLoader(`/z_ui/z_app_mall/mall_ticket_coupon/mall_ticket_code__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_ticket_coupon/mall_ticket_code__edit`,
                component: httpVueLoader(`/z_ui/z_app_mall/mall_ticket_coupon/mall_ticket_code__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_ticket_coupon/mall_ticket_coupon_pay_get__edit`,
                component: httpVueLoader(`/z_ui/z_app_mall/mall_ticket_coupon/mall_ticket_coupon_pay_get__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_ticket_coupon/mall_ticket_coupon_buy_use__edit`,
                component: httpVueLoader(`/z_ui/z_app_mall/mall_ticket_coupon/mall_ticket_coupon_buy_use__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_ticket_coupon/mall_ticket_record__list`,
                component: httpVueLoader(`/z_ui/z_app_mall/mall_ticket_coupon/mall_ticket_record__list.vue?${g_version}`),
            },
        ]
    },
]
