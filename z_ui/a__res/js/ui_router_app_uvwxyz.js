console.log('ui_router_app_uvwxyz.js');

ui_router_app_uvwxyz = [
    //
    // user_reg
    //
    {
        path: `/:id/z_ui/z_app/user_reg/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/user_reg/reg__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/user_reg/reg__list`,
                component: httpVueLoader(`/z_ui/z_app/user_reg/reg__list.vue?${g_version}`),
              //meta: {keepAlive: true}
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
]
