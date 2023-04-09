console.log('ui_router_app.js');

g_router_data = {
    whiteList: ['/404'],
}

g_routes = [
    {
        path: '/admin',
        component: httpVueLoader(`/${g_z_ui_dir}/z_app/a_tmpl/admin.vue?${g_version}`),
    },
    {
        path: '/:id/export_list',
        component: httpVueLoader(`/${g_z_ui_dir}/z_app/a_tmpl/export_list.vue?${g_version}`),
    },
    {
        path: '*',
        component: httpVueLoader(`/${g_z_ui_dir}/a_admin/index_url.vue?${g_version}`),
        meta: {title: "404"}
    }
]

g_routes = g_routes.concat(ui_router_app_abcde);
g_routes = g_routes.concat(ui_router_app_fghij);
g_routes = g_routes.concat(ui_router_app_klmno);
g_routes = g_routes.concat(ui_router_app_pqrst);
g_routes = g_routes.concat(ui_router_app_uvwxyz);
g_routes = g_routes.concat(ui_router_app_z_class);
if (typeof (ui_router_app_z_mall) != 'undefined')
{
    g_routes = g_routes.concat(ui_router_app_z_mall);
}


g_router = new VueRouter({
    routes: g_routes
})


// 导航守卫
g_router.beforeEach((to, from, next) =>
{
    console.log("app 导航守卫：", to, from)
    next()
})
