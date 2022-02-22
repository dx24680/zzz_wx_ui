console.log('ui_router_app_z_class.js');

ui_router_app_z_class = [
    //
    // class_act
    //
    {
        path: `/:id/z_ui/z_app/class_act/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/class_act/class_act__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/class_act/class_act__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_act/class_act__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_act/class_act__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_act/class_act__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // class_product 产品
    //
    {
        path: `/:id/z_ui/z_app/class_resource/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/class_resource/class_product__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/class_resource/class_product__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_product__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_product__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_product__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_course__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_course__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_course__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_course__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_course_group__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_course_group__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_course_group__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_course_group__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_room__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_room__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_room__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_room__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_teacher__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_teacher__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_teacher__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_teacher__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_resource__honor__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource__honor__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_resource__honor__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource__honor__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_resource__honor__get__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource__honor__get__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_teacher__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_teacher__edit.vue?${g_version}`),
            },
        ]
    },
]
