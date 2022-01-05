console.log('ui_router_app_abcde.js');

ui_router_app_abcde = [
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
]
