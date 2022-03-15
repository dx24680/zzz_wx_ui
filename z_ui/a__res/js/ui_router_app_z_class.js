console.log('ui_router_app_z_class.js');

ui_router_app_z_class = [
    //
    // class_account 账号管理
    //
    {
        path: `/:id/z_ui/z_app/class_account/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/class_account/class_account__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/class_account/class_head__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_account/class_head__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_account/class_head__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_account/class_head__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_account/class_account__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_account/class_account__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_account/class_account__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_account/class_account__edit.vue?${g_version}`),
            }
        ]
    },
    //
    // class_act 活动中心
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
    // class_corp 企业中心
    //
    {
        path: `/:id/z_ui/z_app/class_corp/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/class_corp/class_company__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/class_corp/class_company__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_corp/class_company__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_corp/class_company__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_corp/class_company__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_corp/class_company_staff__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_corp/class_company_staff__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_corp/class_edp_order__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_corp/class_edp_order__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_corp/class_edp_order__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_corp/class_edp_order__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // class_finance 财务中心
    //
    {
        path: `/:id/z_ui/z_app/class_finance/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/class_finance/class_order__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/class_finance/class_order__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_finance/class_order__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_finance/class_order__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_finance/class_order__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_finance/class_edp_order__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_finance/class_edp_order__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_finance/class_edp_order__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_finance/class_edp_order__edit.vue?${g_version}`),
            },
        ]
    },
    //
    // class_promote 推广中心
    //
    {
        path: `/:id/z_ui/z_app/class_promote/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/class_promote/class_channel__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/class_promote/class_channel__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_promote/class_channel__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_promote/class_channel__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_promote/class_channel__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_promote/class_customer__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_promote/class_customer__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_promote/class_customer__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_promote/class_customer__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_promote/class_setting__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_promote/class_setting__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_promote/class_customer__detail`,
                component: httpVueLoader(`/z_ui/z_app_class/class_promote/class_customer__detail.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_promote/class_customer__import`,
                component: httpVueLoader(`/z_ui/z_app_class/class_promote/class_customer__import.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_promote/class_customer_apply__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_promote/class_customer_apply__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_promote/class_customer_signup__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_promote/class_customer_signup__list.vue?${g_version}`),
            }
        ]
    },
    //
    // class_resource 资源中心
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
                path: `/:id/z_ui/z_app/class_resource/class_teacher_duty__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_teacher_duty__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_teacher_duty__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_teacher_duty__edit.vue?${g_version}`),
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
                path: `/:id/z_ui/z_app/class_resource/class_resource_file__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource_file__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_resource_file__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource_file__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_resource_sheet__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource_sheet__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_resource_sheet__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource_sheet__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_resource_sheet_item__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource_sheet_item__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_resource_sheet_item__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource_sheet_item__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_resource_sheet_record__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource_sheet_record__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_resource_sheet_record__count`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_resource_sheet_record__count.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_resource/class_timetable__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_resource/class_timetable__list.vue?${g_version}`),
            },
        ]
    },
    //
    // class_teach 教学中心
    //
    {
        path: `/:id/z_ui/z_app/class_teach/a_index`,
        component: httpVueLoader(`/z_ui/z_app/a_tmpl/a_index.vue?${g_version}`),
        redirect: `/:id/z_ui/z_app/class_teach/class_class__list`,
        children: [
            {
                path: `/:id/z_ui/z_app/class_teach/class_class__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_teach/class_class__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_teach/class_class__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_teach/class_class__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_teach/class_class_student__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_teach/class_class_student__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_teach/class_class_student_add__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_teach/class_class_student_add__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_teach/class_student__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_teach/class_student__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_teach/class_student__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_teach/class_student__edit.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_teach/class_timetable__list`,
                component: httpVueLoader(`/z_ui/z_app_class/class_teach/class_timetable__list.vue?${g_version}`),
            },
            {
                path: `/:id/z_ui/z_app/class_teach/class_timetable__edit`,
                component: httpVueLoader(`/z_ui/z_app_class/class_teach/class_timetable__edit.vue?${g_version}`),
            },
        ]
    },
]
