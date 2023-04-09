console.log('ui_router_app_klmno.js');

ui_router_app_klmno = [
    //
    // lucky_card 幸运集卡
    //
    {
        path: `/:id/z_ui/z_app/lucky_card/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        children: [
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__card__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__card__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__collect__getcard`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__collect__getcard.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__collect__getcard__user`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__collect__getcard__user.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__collect__month`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__collect__month.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__patch__friend`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__patch__friend.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__patch__friend__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__patch__friend__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__patch_session__card__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__patch_session__card__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__patch_session__card__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__patch_session__card__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__patch_session__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__patch_session__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__patch_session__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__patch_session__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__poster__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__poster__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__poster__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__poster__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session__prize__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session__prize__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session__prize__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session__prize__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session__prize_handle__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session__prize_handle__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session__win__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session__win__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session__win__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session__win__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session__win_random__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session__win_random__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session_group__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session_group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session_group__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__prize_session_group__random__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__prize_session_group__random__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__ranking__month`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__ranking__month.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__ranking__total`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__ranking__total.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__setting__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__setting__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__type__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__type__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__type__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__type__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__type__send_msg__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__type__send_msg__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__type__send_msg__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__type__send_msg__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_card/lucky_card__poster__card__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_card/lucky_card__poster__card__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // m2mall 商品中心
    //
    {
        path: `/:id/z_ui/z_app/m2mall/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        // redirect: `/:id/z_ui/z_app/m2mall/m2mall__spu__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__spu__detail`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__spu__detail.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__spu__edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__spu__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__spu__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__spu__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__spu_e1__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__spu__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__spu_attr__edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__spu_attr__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__spu_attr__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__spu_attr__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__spu_attr__sku__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__spu_attr__sku__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/M2mall__spu_group__edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/M2mall__spu_group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/M2mall__spu_group__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/M2mall__spu_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/M2mall__spu_hot__edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/M2mall__spu_hot__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/M2mall__spu_hot__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/M2mall__spu_hot__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__freight__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__freight__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__freight__edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__freight__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__freight_item__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__freight_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall/m2mall__freight_item__edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall/m2mall__freight_item__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // m2mall_freight 运费管理
    //
    {
        path: `/:id/z_ui/z_app/m2mall_freight/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        // redirect: `/:id/z_ui/z_app/m2mall_order/m2mall_order__main__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/m2mall_freight/m2mall__freight__setting`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_freight/m2mall__freight__setting.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall_freight/m2mall__freight__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_freight/m2mall__freight__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall_freight/m2mall__freight__edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_freight/m2mall__freight__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall_freight/m2mall__freight_item__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_freight/m2mall__freight_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall_freight/m2mall__freight_item__edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_freight/m2mall__freight_item__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // m2mall_order 订单中心
    //
    {
        path: `/:id/z_ui/z_app/m2mall_order/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        // redirect: `/:id/z_ui/z_app/m2mall_order/m2mall_order__main__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/m2mall_order/m2mall_order__item__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_order/m2mall_order__item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall_order/m2mall_order__main__detail`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_order/m2mall_order__main__detail.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall_order/m2mall_order__main__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_order/m2mall_order__main__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall_order/m2mall_order__order__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_order/m2mall_order__order__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall_order/m2mall_order__order_item__edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_order/m2mall_order__order_item__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // m2mall_store 商家中心
    //
    {
        path: `/:id/z_ui/z_app/m2mall_store/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        // redirect: `/:id/z_ui/z_app/m2mall_store/m2mall_store__store__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/m2mall_store/m2mall_store__store__edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_store/m2mall_store__store__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall_store/m2mall_store__store__list`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_store/m2mall_store__store__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/m2mall_store/m2mall_store__store__pwd_edit`,
                component: httpVueLoader(`/z_ui/z_app/m2mall_store/m2mall_store__store__pwd_edit.vue?${g_version}`),
            },
        ]
    },
    //
    // mall_fun_b 积分商城
    //
    {
        path: `/:id/z_ui/z_app/mall_fun_b/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/mall_fun_b/mall_fun__group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/mall_fun_b/a__wx`,
                component: httpVueLoader(`/z_ui/z_app/a_tmpl/a__wx.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_fun_b/mall_fun__group__list`,
                component: httpVueLoader(`/z_ui/z_app/mall_fun_b/mall_fun__group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_fun_b/mall_fun__group__edit`,
                component: httpVueLoader(`/z_ui/z_app/mall_fun_b/mall_fun__group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_fun_b/mall_fun__goods__list`,
                component: httpVueLoader(`/z_ui/z_app/mall_fun_b/mall_fun__goods__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_fun_b/mall_fun__goods__edit`,
                component: httpVueLoader(`/z_ui/z_app/mall_fun_b/mall_fun__goods__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/mall_fun_b/mall_fun__goods__info__edit`,
                component: httpVueLoader(`/z_ui/z_app/mall_fun_b/mall_fun__goods__info__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // media 多媒体上传
    //
    {
        path: `/:id/z_ui/z_app/media/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/media/media__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/media/media__list`,
                component: httpVueLoader(`/z_ui/z_app/media/media__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/media/media__edit`,
                component: httpVueLoader(`/z_ui/z_app/media/media__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // menu 自定义菜单
    //
    {
        path: `/:id/z_ui/z_app/menu/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/menu/menu__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/menu/menu__list`,
                component: httpVueLoader(`/z_ui/z_app/menu/menu__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/menu/menu__edit`,
                component: httpVueLoader(`/z_ui/z_app/menu/menu__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/menu/menu_stat__list`,
                component: httpVueLoader(`/z_ui/z_app/menu/menu_stat__list.vue?${g_version}`),
            },
        ]
    },
    //
    // multi_info 企业视频分享
    //
    {
        path: `/:id/z_ui/z_app/multi_info/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/multi_info/multi_info__quan_1__list`,
        children: [{
            path: `/:id/z_ui/z_app/multi_info/multi_info__quan_1__list`,
            component: httpVueLoader(`/z_ui/z_app/multi_info/multi_info__quan_1__list.vue?${g_version}`),
        },
            {
                path: `/:id/z_ui/z_app/multi_info/multi_info__comment__list`,
                component: httpVueLoader(`/z_ui/z_app/multi_info/multi_info__comment__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/multi_info/multi_info__comment_sub__list`,
                component: httpVueLoader(`/z_ui/z_app/multi_info/multi_info__comment_sub__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/multi_info/multi_info__setting__edit`,
                component: httpVueLoader(`/z_ui/z_app/multi_info/multi_info__setting__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/multi_info/multi_info__quan__edit`,
                component: httpVueLoader(`/z_ui/z_app/multi_info/multi_info__quan__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // news_info 文章资讯
    //
    {
        path: `/:id/z_ui/z_app/news_info/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/news_info/group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/news_info/group__list`,
                component: httpVueLoader(`/z_ui/z_app/news_info/group__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/news_info/group__edit`,
                component: httpVueLoader(`/z_ui/z_app/news_info/group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/news_info/article__list`,
                component: httpVueLoader(`/z_ui/z_app/news_info/article__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/news_info/article__edit`,
                component: httpVueLoader(`/z_ui/z_app/news_info/article__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/news_info/article_read__list`,
                component: httpVueLoader(`/z_ui/z_app/news_info/article_read__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },

        ]
    },
    //
    // lucky_num 幸运号码
    //
    {
        path: `/:id/z_ui/z_app/lucky_num/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/lucky_num/lucky_num__group__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__design`,
                component: httpVueLoader(`/z_ui/z_app/star_act/star_act__design__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__setting`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__setting.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__group__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__group__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__group__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__num__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__num__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__num_win__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__num_win__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__num_win__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__num_win__list.vue?${g_version}`),
                //meta: {keepAlive: true}
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__session__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__session__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__session__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__session__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__session__win`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__session__win.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__session_prize__list`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__session_prize__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/lucky_num/lucky_num__session_prize__edit`,
                component: httpVueLoader(`/z_ui/z_app/lucky_num/lucky_num__session_prize__edit.vue?${g_version}`),
            },
        ]
    },
]
