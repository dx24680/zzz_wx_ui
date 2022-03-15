console.log('ui_router_app_pqrst.js');

ui_router_app_pqrst = [
    //
    // password
    //
    {
        path: `/:id/z_ui/z_app/password/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/password/password__edit`,
        children: [
            {
                path: `/:id/z_ui/z_app/password/password__edit`,
                component: httpVueLoader(`/z_ui/z_app/password/password__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // play_multi 每日开奖
    //
    {
        path: `/:id/z_ui/z_app/play_multi/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/play_multi/play_multi_act__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_act__list`,
                component: httpVueLoader(`/z_ui/z_app/play_multi/play_multi_act__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_act__edit`,
                component: httpVueLoader(`/z_ui/z_app/play_multi/play_multi_act__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_design__edit`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_prize_group__list`,
                component: httpVueLoader(`/z_ui/z_app/play_multi/play_multi_prize_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_prize_group__edit`,
                component: httpVueLoader(`/z_ui/z_app/play_multi/play_multi_prize_group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_prize__list`,
                component: httpVueLoader(`/z_ui/z_app/play_multi/play_multi_prize__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_prize__edit`,
                component: httpVueLoader(`/z_ui/z_app/play_multi/play_multi_prize__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_chou__list`,
                component: httpVueLoader(`/z_ui/z_app/play_multi/play_multi_chou__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_prize_stock__edit`,
                component: httpVueLoader(`/z_ui/z_app/play_multi/play_multi_prize_stock__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_prize__copy_edit`,
                component: httpVueLoader(`/z_ui/z_app/play_multi/play_multi_prize__copy_edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/play_multi/play_multi_launch__list`,
                component: httpVueLoader(`/z_ui/z_app/play_multi/play_multi_launch__list.vue?${g_version}`),
            },
        ]
    },
    //
    // prize_b 我的宝箱
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
    // prize_pool 奖品池
    //
    {
        path: `/:id/z_ui/z_app/prize_pool/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/prize_pool/prize_pool__item__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/prize_pool/prize_pool__item__list`,
                component: httpVueLoader(`/z_ui/z_app/prize_pool/prize_pool__item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/prize_pool/prize_pool__item__edit`,
                component: httpVueLoader(`/z_ui/z_app/prize_pool/prize_pool__item__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/prize_pool/prize_pool__prize__list`,
                component: httpVueLoader(`/z_ui/z_app/prize_pool/prize_pool__prize__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/prize_pool/prize_pool__prize__edit`,
                component: httpVueLoader(`/z_ui/z_app/prize_pool/prize_pool__prize__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/prize_pool/prize_pool__win_data__list`,
                component: httpVueLoader(`/z_ui/z_app/prize_pool/prize_pool__win_data__list.vue?${g_version}`),
            },
        ]
    },
    //
    // prize_stock 库存导入
    //
    {
        path: `/:id/z_ui/z_app/prize_stock/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/prize_stock/prize_stock_code__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/prize_stock/prize_stock_code__list`,
                component: httpVueLoader(`/z_ui/z_app/prize_stock/prize_stock_code__list.vue?${g_version}`),
            }, {
                path: `/:id/z_ui/z_app/prize_stock/prize_stock_code__import`,
                component: httpVueLoader(`/z_ui/z_app/prize_stock/prize_stock_code__import.vue?${g_version}`),
            },
        ]
    },
    //
    // push 手动推送
    //
    {
        path: `/:id/z_ui/z_app/push/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/push/push__custom`,
        children: [
            {
                path: `/:id/z_ui/z_app/push/push__custom`,
                component: httpVueLoader(`/z_ui/z_app/push/push__custom.vue?${g_version}`),
            },
        ]
    },
    //
    // push_history_c 历史推送
    //
    {
        path: `/:id/z_ui/z_app/push_history_c/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/push_history_c/push_history__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/push_history_c/push_history__list`,
                component: httpVueLoader(`/z_ui/z_app/push_history_c/push_history__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/push_history_c/push_history__edit`,
                component: httpVueLoader(`/z_ui/z_app/push_history_c/push_history__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // qr 二维码
    //
    {
        path: `/:id/z_ui/z_app/qr/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/qr/a_index`,
        children: [
            {
                path: `/:id/z_ui/z_app/qr/a_index`,
                component: httpVueLoader(`/z_ui/z_app/qr/a_index.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/qr/qr__list`,
                component: httpVueLoader(`/z_ui/z_app/qr/qr__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/qr/qr__edit`,
                component: httpVueLoader(`/z_ui/z_app/qr/qr__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/qr/qr__datedata__export`,
                component: httpVueLoader(`/z_ui/z_app/qr/qr__datedata__export.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/qr/qr__wxapp__list`,
                component: httpVueLoader(`/z_ui/z_app/qr/qr__wxapp__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/qr/qr__wxapp__edit`,
                component: httpVueLoader(`/z_ui/z_app/qr/qr__wxapp__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // quan_info 企业朋友圈
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
    // redbook 小红书
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
    // sheet_b 表单
    //
    {
        path: `/:id/z_ui/z_app/sheet_b/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/sheet_b/sheet_b__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/sheet_b/sheet_b__list`,
                component: httpVueLoader(`/z_ui/z_app/sheet_b/sheet_b__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sheet_b/sheet_b__edit`,
                component: httpVueLoader(`/z_ui/z_app/sheet_b/sheet_b__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sheet_b/sheet_b_item__list`,
                component: httpVueLoader(`/z_ui/z_app/sheet_b/sheet_b_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sheet_b/sheet_b_item__edit`,
                component: httpVueLoader(`/z_ui/z_app/sheet_b/sheet_b_item__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sheet_b/sheet_b_record__list`,
                component: httpVueLoader(`/z_ui/z_app/sheet_b/sheet_b_record__list.vue?${g_version}`),
            },
        ]
    },
    //
    // sign_in 签到
    //
    {
        path: `/:id/z_ui/z_app/sign_in/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/sign_in/sign_in__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/sign_in/sign_in__list`,
                component: httpVueLoader(`/z_ui/z_app/sign_in/sign_in__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sign_in/sign_in__edit`,
                component: httpVueLoader(`/z_ui/z_app/sign_in/sign_in__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sign_in/sign_in__user_list`,
                component: httpVueLoader(`/z_ui/z_app/sign_in/sign_in__user_list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sign_in/sign_in__log`,
                component: httpVueLoader(`/z_ui/z_app/sign_in/sign_in__log.vue?${g_version}`),
            },
        ]
    },
    //
    // site 站点设置
    //
    {
        path: `/:id/z_ui/z_app/site/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/site/site__edit`,
        children: [
            {
                path: `/:id/z_ui/z_app/site/site__edit`,
                component: httpVueLoader(`/z_ui/z_app/site/site__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/site/site__alias__edit`,
                component: httpVueLoader(`/z_ui/z_app/site/site__alias__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/site/site__other`,
                component: httpVueLoader(`/z_ui/z_app/site/site__other.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/site/a__export__list`,
                component: httpVueLoader(`/z_ui/z_app/site/a__export__list.vue?${g_version}`),
            },
        ]
    },
    //
    // sitezapp 站点应用
    //
    {
        path: `/:id/z_ui/z_app/sitezapp/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/sitezapp/sitezapp__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/sitezapp/sitezapp__list`,
                component: httpVueLoader(`/z_ui/z_app/sitezapp/sitezapp__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/sitezapp/sitezapp__edit`,
                component: httpVueLoader(`/z_ui/z_app/sitezapp/sitezapp__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // sms 短信
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
    // star_invite 邀请好友
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
    // subscribemsg 订阅消息
    //
    {
        path: `/:id/z_ui/z_app/subscribemsg/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/subscribemsg/subscribemsg__wxapp__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/subscribemsg/subscribemsg__wxapp__list`,
                component: httpVueLoader(`/z_ui/z_app/subscribemsg/subscribemsg__wxapp__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/subscribemsg/subscribemsg__wxapp__edit`,
                component: httpVueLoader(`/z_ui/z_app/subscribemsg/subscribemsg__wxapp__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/subscribemsg/subscribemsg__log`,
                component: httpVueLoader(`/z_ui/z_app/subscribemsg/subscribemsg__log.vue?${g_version}`),
            },
        ]
    },
    //
    // task_wx_user_update
    //
    {
        path: `/:id/z_ui/z_app/task_wx_user_update/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: {path: `/:id/z_ui/z_app/task_wx_user_update/task_wx_user_update__list`},
        children: [
            {
                path: `/:id/z_ui/z_app/task_wx_user_update/task_wx_user_update__list`,
                component: httpVueLoader(`/z_ui/z_app/task_wx_user_update/task_wx_user_update__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/task_wx_user_update/task_wx_user_update__edit`,
                component: httpVueLoader(`/z_ui/z_app/task_wx_user_update/task_wx_user_update__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // test_java
    //
    {
        path: `/:id/z_ui/z_app/test_java/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/test_java/list`,
        //redirect: {path: `/:id/z_ui/z_app/test_java/list`, query: {__api_java__: 1}},
        children: [
            {
                path: `/:id/z_ui/z_app/test_java/list`,
                component: httpVueLoader(`/z_ui/z_app/test_java/list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/test_java/edit`,
                component: httpVueLoader(`/z_ui/z_app/test_java/edit.vue?${g_version}`),
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
    //
    // tmplmsg
    //
    {
        path: `/:id/z_ui/z_app/tmplmsg/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/tmplmsg/tmplmsg__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/tmplmsg/tmplmsg__list`,
                component: httpVueLoader(`/z_ui/z_app/tmplmsg/tmplmsg__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/tmplmsg/tmplmsg__edit`,
                component: httpVueLoader(`/z_ui/z_app/tmplmsg/tmplmsg__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/tmplmsg/tmplmsg__push_tmplmsg__list`,
                component: httpVueLoader(`/z_ui/z_app/tmplmsg/tmplmsg__push_tmplmsg__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/tmplmsg/tmplmsg__push_tmplmsg__edit`,
                component: httpVueLoader(`/z_ui/z_app/tmplmsg/tmplmsg__push_tmplmsg__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/tmplmsg/tmplmsg__send_log__list`,
                component: httpVueLoader(`/z_ui/z_app/tmplmsg/tmplmsg__send_log__list.vue?${g_version}`),
            },
        ]
    },
    //
    // transfer_customer_service
    //
    {
        path: `/:id/z_ui/z_app/transfer_customer_service/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/transfer_customer_service/transfer_customer_service__account`,
        children: [
            {
                path: `/:id/z_ui/z_app/transfer_customer_service/transfer_customer_service__account`,
                component: httpVueLoader(`/z_ui/z_app/transfer_customer_service/transfer_customer_service__account.vue?${g_version}`),
            },
        ]
    },
]
