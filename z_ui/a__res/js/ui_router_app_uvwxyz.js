console.log('ui_router_app_uvwxyz.js');

ui_router_app_uvwxyz = [
    //
    // user 用户列表
    //
    {
        path: `/:id/z_ui/z_app/user/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/user/user__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/user/user__list`,
                component: httpVueLoader(`/z_ui/z_app/user/user__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user/user__edit`,
                component: httpVueLoader(`/z_ui/z_app/user/user__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user/user__tag__list`,
                component: httpVueLoader(`/z_ui/z_app/user/user__tag__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user/user__tag__edit`,
                component: httpVueLoader(`/z_ui/z_app/user/user__tag__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user/tongji__wx_user_task_group__list`,
                component: httpVueLoader(`/z_ui/z_app/user/tongji__wx_user_task_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user/tongji__wx_user_task_group__edit`,
                component: httpVueLoader(`/z_ui/z_app/user/tongji__wx_user_task_group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user/tongji__wx_user_task__list`,
                component: httpVueLoader(`/z_ui/z_app/user/tongji__wx_user_task__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user/tongji__wx_user_task__edit`,
                component: httpVueLoader(`/z_ui/z_app/user/tongji__wx_user_task__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user/tongji__wx_user__list`,
                component: httpVueLoader(`/z_ui/z_app/user/tongji__wx_user__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user/tongji__wx_user_task__list__log`,
                component: httpVueLoader(`/z_ui/z_app/user/tongji__wx_user_task__list__log.vue?${g_version}`),
            },
        ]
    },
    //
    // user_reg 会员注册
    //
    {
        path: `/:id/z_ui/z_app/user_reg/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/user_reg/reg__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/user_reg/reg__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg_check__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_check__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg_check__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_check__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg_tag__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_tag__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg_tag__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_tag__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // user_tag 用户标签
    //
    {
        path: `/:id/z_ui/z_app/user_tag/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/user_tag/qr_sum_tag_group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/user_tag/qr_sum_tag_group__list`,
                component: httpVueLoader(`/z_ui/z_app/user_tag/qr_sum_tag_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_tag/qr_sum_tag_group__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_tag/qr_sum_tag_group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_tag/qr_sum_tag_item__list`,
                component: httpVueLoader(`/z_ui/z_app/user_tag/qr_sum_tag_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_tag/qr_sum_tag_item__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_tag/qr_sum_tag_item__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_tag/qr_sum_tag_user__list`,
                component: httpVueLoader(`/z_ui/z_app/user_tag/qr_sum_tag_user__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_tag/user_tag__list`,
                component: httpVueLoader(`/z_ui/z_app/user_tag/user_tag__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_tag/user__tag__bind`,
                component: httpVueLoader(`/z_ui/z_app/user_tag/user__tag__bind.vue?${g_version}`),
            },
        ]
    },
    //
    // wordtrans 关键词
    //
    {
        path: `/:id/z_ui/z_app/wordtrans/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/wordtrans/wordtrans__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/wordtrans/wordtrans__group__list`,
                component: httpVueLoader(`/z_ui/z_app/wordtrans/wordtrans__group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wordtrans/wordtrans__group__edit`,
                component: httpVueLoader(`/z_ui/z_app/wordtrans/wordtrans__group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wordtrans/wordtrans__reply__center`,
                component: httpVueLoader(`/z_ui/z_app/wordtrans/wordtrans__reply__center.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wordtrans/wordtrans__list`,
                component: httpVueLoader(`/z_ui/z_app/wordtrans/wordtrans__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wordtrans/wordtrans__edit`,
                component: httpVueLoader(`/z_ui/z_app/wordtrans/wordtrans__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wordtrans/wordtrans__wordtrans__list`,
                component: httpVueLoader(`/z_ui/z_app/wordtrans/wordtrans__wordtrans__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wordtrans/wordtrans__wordtrans__edit`,
                component: httpVueLoader(`/z_ui/z_app/wordtrans/wordtrans__wordtrans__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // wx_info_b 微信信息
    //
    {
        path: `/:id/z_ui/z_app/wx_info_b/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/wx_info_b/wx_info_b__tool`,
        children: [
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info_b__tool`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info_b__tool.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info_b_app__tool`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info_b_app__tool.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info__debug__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info__debug__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info__debug__edit`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info__debug__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info__debug_log__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info__debug_log__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info_data_log__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info_data_log__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info_data_log__info`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info_data_log__info.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info_push__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info_push__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info_mysql_push__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info_mysql_push__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info_tmpl__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info_tmpl__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info__job_log__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info__job_log__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info__log_00__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info__log_00__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_info_b/wx_info__log_00__exception__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_info_b/wx_info__log_00__exception__list.vue?${g_version}`),
            },
        ]
    },
    //
    // wx_msg_push 互动消息推送
    //
    {
        path: `/:id/z_ui/z_app/wx_msg_push/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/wx_msg_push/wx_msg_push__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/wx_msg_push/wx_msg_push__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_msg_push/wx_msg_push__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_msg_push/wx_msg_push__edit`,
                component: httpVueLoader(`/z_ui/z_app/wx_msg_push/wx_msg_push__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_msg_push/wx_msg_push_log__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_msg_push/wx_msg_push_log__list.vue?${g_version}`),
            },
        ]
    },
    //
    // wx_mt 微信信息
    //
    {
        path: `/:id/z_ui/z_app/wx_mt/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/wx_mt/wx_mt_manage__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/wx_mt/wx_mt_manage__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_mt/wx_mt_manage__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_mt/wx_mt_news__edit`,
                component: httpVueLoader(`/z_ui/z_app/wx_mt/wx_mt_news__edit.vue?${g_version}`),
            },
        ]
    },
]
