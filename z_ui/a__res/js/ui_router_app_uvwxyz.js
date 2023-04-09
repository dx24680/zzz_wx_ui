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
    // user_attr_up 指标有礼
    //
    {
        path: `/:id/z_ui/z_app/user_attr_up/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/user_attr_up/item__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/user_attr_up/item__list`,
                component: httpVueLoader(`/z_ui/z_app/user_attr_up/item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_attr_up/item__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_attr_up/item__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_attr_up/item_get__list`,
                component: httpVueLoader(`/z_ui/z_app/user_attr_up/item_get__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_attr_up/setting__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_attr_up/setting__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_attr_up/article__list`,
                component: httpVueLoader(`/z_ui/z_app/user_attr_up/article__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_attr_up/article__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_attr_up/article__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_attr_up/picture__list`,
                component: httpVueLoader(`/z_ui/z_app/user_attr_up/picture__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_attr_up/picture__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_attr_up/picture__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_attr_up/launch__list`,
                component: httpVueLoader(`/z_ui/z_app/user_attr_up/launch__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_attr_up/item_pv__list`,
                component: httpVueLoader(`/z_ui/z_app/user_attr_up/item_pv__list.vue?${g_version}`),
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
                path: `/:id/z_ui/z_app/user_reg/reg__reg_item__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg__reg_item__edit.vue?${g_version}`),
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
            {
                path: `/:id/z_ui/z_app/user_reg/reg_tag_group__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_tag_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg_tag_group__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_tag_group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg_tag__import`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_tag__import.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg__setting`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg__setting.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg_status__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_status__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg_status__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_status__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg_status_record__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_status_record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/user_reg/reg_reset__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg_reset__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // user_reg_level 会员等级
    //
    {
        path: `/:id/z_ui/z_app/user_reg_level/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/user_reg_level/user_reg_level__level__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__level__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__level__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__level__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__level__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__level_prize__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__level_prize__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__level_prize__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__level_prize__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__user__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__user__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__task__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__task__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__task__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__task__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__level_benefit__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__level_benefit__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__level_benefit__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__level_benefit__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__medal_group__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__medal_group__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__medal_group__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__medal_group__edit.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__medal__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__medal__list.vue?${g_version}`)
            },
            {
                path: `/:id/z_ui/z_app/user_reg_level/user_reg_level__medal__edit`,
                component: httpVueLoader(`/z_ui/z_app/user_reg_level/user_reg_level__medal__edit.vue?${g_version}`)
            }
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
    // wx_bc 微信支付商圈
    //
    {
        path: `/:id/z_ui/z_app/wx_bc/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/wx_bc/wx_bc__shop_cat__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/wx_bc/wx_bc__config`,
                component: httpVueLoader(`/z_ui/z_app/wx_bc/wx_bc__config.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_bc/wx_bc__shop_cat__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_bc/wx_bc__shop_cat__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_bc/wx_bc__shop_cat__edit`,
                component: httpVueLoader(`/z_ui/z_app/wx_bc/wx_bc__shop_cat__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_bc/wx_bc__shop__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_bc/wx_bc__shop__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_bc/wx_bc__shop__edit`,
                component: httpVueLoader(`/z_ui/z_app/wx_bc/wx_bc__shop__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_bc/wx_bc__pay__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_bc/wx_bc__pay__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_bc/wx_bc__refund__list`,
                component: httpVueLoader(`/z_ui/z_app/wx_bc/wx_bc__refund__list.vue?${g_version}`),
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
                path: `/:id/z_ui/z_app/wx_mt/wx_mt_manage__edit`,
                component: httpVueLoader(`/z_ui/z_app/wx_mt/wx_mt_manage__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wx_mt/wx_mt_news__edit`,
                component: httpVueLoader(`/z_ui/z_app/wx_mt/wx_mt_news__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // wxg_tools 群事务
    //
    {
        path: `/:id/z_ui/z_app/wxg_tools/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/wxg_tools/act_group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/wxg_tools/wxg_tools__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/wxg_tools__act__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/wxg_tools__bill__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/wxg_tools__count__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/wxg_tools__chain__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/wxg_tools__status__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/wxg_tools__booking__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/wxg_tools__clock__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/wxg_tools__debate__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/act_group__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/act_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/act__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/act__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/act_join__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/act_join__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/act_item__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/act_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/act_record__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/act_record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/master_user__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/master_user__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/user_auth__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/user_auth__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/bill_group__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/bill_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/bill__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/bill__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/bill_join__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/bill_join__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/bill_order_user__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/bill_order_user__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/bill_order__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/bill_order__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/count_group__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/count_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/count__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/count__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/count_join__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/count_join__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/count_record__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/count_record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/chain_group__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/chain_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/chain_item__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/chain_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/chain__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/chain__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/chain_join__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/chain_join__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/chain_record__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/chain_record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/chain_record_sub__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/chain_record_sub__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/status__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/status__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/status_group__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/status_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/status_join__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/status_join__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/status_item__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/status_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/status_record__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/status_record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/booking_group__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/booking_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/booking_item__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/booking_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/booking__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/booking__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/booking_join__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/booking_join__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/booking_record__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/booking_record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/booking_record_sub__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/booking_record_sub__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/clock_group__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/clock_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/clock__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/clock__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/clock_join__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/clock_join__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/clock_record__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/clock_record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/debate_group__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/debate_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/debate_item__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/debate_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/debate__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/debate__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/debate_join__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/debate_join__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/wxg_tools/debate_record__list`,
                component: httpVueLoader(`/z_ui/z_app/wxg_tools/debate_record__list.vue?${g_version}`),
            },
        ]
    },
    //
    // web_page 页面配置
    //
    {
        path: `/:id/z_ui/z_app/web_page/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/web_page/web_page__dir__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/web_page/web_page__comp__list`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__comp__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/web_page/web_page__comp__edit`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__comp__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/web_page/web_page__dir__list`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__dir__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/web_page/web_page__dir__edit`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__dir__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/web_page/web_page__page__list`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__page__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/web_page/web_page__page__edit`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__page__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/web_page/web_page__page_comp__list`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__page_comp__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/web_page/web_page__page_comp__edit`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__page_comp__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/web_page/web_page__page_comp__x_test__edit`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__page_comp__x_test__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/web_page/web_page__page_comp__x_banner__edit`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__page_comp__x_banner__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/web_page/web_page__page_comp__x_cmy__edit`,
                component: httpVueLoader(`/z_ui/z_app/web_page/web_page__page_comp__x_cmy__edit.vue?${g_version}`),
            },
        ]
    },
]
