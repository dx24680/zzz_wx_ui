console.log('ui_router_app_pqrst.js');

ui_router_app_pqrst = [
    //
    // prize_b
    //
    {
        path: `/:id/z_ui/z_app/prize_b/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/prize_b/prize__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/prize_b/prize__list`,
                component: httpVueLoader(`/z_ui/z_app/prize_b/prize__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/prize_b/prize__details`,
                component: httpVueLoader(`/z_ui/z_app/prize_b/prize__details.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/prize_b/prize__use`,
                component: httpVueLoader(`/z_ui/z_app/prize_b/prize__use.vue?${g_version}`),
            },
        ]
    },
    //
    // quan_info
    //
    {
        path: `/:id/z_ui/z_app/quan_info/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/quan_info/quan_info__quan_1__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/quan_info/quan_info__quan_1__list`,
                component: httpVueLoader(`/z_ui/z_app/quan_info/quan_info__quan_1__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/quan_info/quan_info__setting__edit`,
                component: httpVueLoader(`/z_ui/z_app/quan_info/quan_info__setting__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // redbook
    //
    {
        path: `/:id/z_ui/z_app/redbook/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/redbook/redbook__quan_1__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/redbook/redbook__quan_1__list`,
                component: httpVueLoader(`/z_ui/z_app/redbook/redbook__quan_1__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/redbook/redbook__comment__list`,
                component: httpVueLoader(`/z_ui/z_app/redbook/redbook__comment__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/redbook/redbook__comment_sub__list`,
                component: httpVueLoader(`/z_ui/z_app/redbook/redbook__comment_sub__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/redbook/redbook__quan__list`,
                component: httpVueLoader(`/z_ui/z_app/redbook/redbook__quan__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/redbook/redbook__topic__list`,
                component: httpVueLoader(`/z_ui/z_app/redbook/redbook__topic__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/redbook/redbook__topic__edit`,
                component: httpVueLoader(`/z_ui/z_app/redbook/redbook__topic__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/redbook/redbook__setting__edit`,
                component: httpVueLoader(`/z_ui/z_app/redbook/redbook__setting__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/redbook/redbook__topic__rank__list`,
                component: httpVueLoader(`/z_ui/z_app/redbook/redbook__topic__rank__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/redbook/redbook__topic__rank__edit`,
                component: httpVueLoader(`/z_ui/z_app/redbook/redbook__topic__rank__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // star_act 快乐星球活动
    //
    {
        path: `/:id/z_ui/z_app/star_act/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/star_act/star_act__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/star_act/act_design__list`,
                component: httpVueLoader(`/z_ui/z_app/star_act/act_design__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/star_act/act_design__edit`,
                component: httpVueLoader(`/z_ui/z_app/star_act/act_design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/star_act/star_act__list`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/star_act/star_act__edit`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/star_act/star_act__prize__list`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__prize__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/star_act/star_act__prize__edit`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__prize__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/star_act/star_act__prize__stock__edit`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__prize__stock__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/star_act/star_act_type__design__edit`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/star_act/star_act__master__list`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__master__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/star_act/star_act__chou__list`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__chou__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/star_act/star_act__help__list`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__help__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
        ]
    },
    //
    // star_invite
    //
    {
        path: `/:id/z_ui/z_app/star_invite/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/star_invite/star_invite__setting__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/star_invite/star_invite__setting__list`,
                component: httpVueLoader(`/z_ui/z_app/star_invite/star_invite__setting__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/star_invite/star_invite__setting__edit`,
                component: httpVueLoader(`/z_ui/z_app/star_invite/star_invite__setting__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/star_invite/star_invite__log__list`,
                component: httpVueLoader(`/z_ui/z_app/star_invite/star_invite__log__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/star_invite/star_invite__handle__list`,
                component: httpVueLoader(`/z_ui/z_app/star_invite/star_invite__handle__list.vue?${g_version}`),
            }
        ]
    },
    //
    // sms
    //
    {
        path: `/:id/z_ui/z_app/sms/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/sms/sms_setting__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/sms/sms_setting__list`,
                component: httpVueLoader(`/z_ui/z_app/sms/sms_setting__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/sms/sms_setting__edit`,
                component: httpVueLoader(`/z_ui/z_app/sms/sms_setting__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sms/sms_log__list`,
                component: httpVueLoader(`/z_ui/z_app/sms/sms_log__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sms/sms__option__list`,
                component: httpVueLoader(`/z_ui/z_app/sms/sms__option__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sms/sms__option__edit`,
                component: httpVueLoader(`/z_ui/z_app/sms/sms__option__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // test_ui
    //
    {
        path: `/:id/z_ui/z_app/test_ui/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/test_ui/list`,
        children: [
            {
                path: `/:id/z_ui/z_app/test_ui/list`,
                component: httpVueLoader(`/z_ui/z_app/test_ui/list.vue?${g_version}`),
                // meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/test_ui/edit`,
                component: httpVueLoader(`/z_ui/z_app/test_ui/edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/test_ui/a_abc`,
                component: httpVueLoader(`/z_ui/z_app/test_ui/a_abc.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/test_ui/a_test`,
                component: httpVueLoader(`/z_ui/z_app/test_ui/a_test.vue?${g_version}`),
            },
        ]
    },
]
