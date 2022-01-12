console.log('ui_common_app.js');


/*
g_form = { "__t": "" };
g_list_data = null;
g_list_data_offline = 0;
g_page_url = '';
g_page_current = 0;
g_page_size = 0;
g_page_total = 0;
g_v_errors = { __t: '' };
*/

g_vue_methods = {}


function func_vue_new_data()
{
    let data = {
        vue_this: null,
        route_id: '', // /route_id/z_ui/z_app/test_ui/list
        did_first_run_list: true, //列表页面，是否已经第一次运行，如用于列表的后退刷新
        did_init: false, //是否已经初始化，如 编辑页面 调用接口后设置 true
        //
        cookie_data: {},
        form: {
            // compKw: "",
            // check_status: "",
        },
        form_rules: {},
        page_current: 1,
        page_size: 10,
        page_total: 0,
        v_errors: {}, // { abc_name: ["不能为空"], abc_key: ["不能为空"] }, //验证错误数据
        /*
        g_list_data: null,
        g_list_data_offline: 0,
        g_page_url: "",
        g_page_current: 0,
        g_page_size: 0,
        g_page_total: 0,
        g_v_errors: {},
        */
        admin_page: {},
        list_data: [], //表格数据列表
        page_data: {}, //分页器数据
        app_title: "", //应用标题
        selected_data: "", //选中列表

        ajax_url_list: "", //列表接口
        ajax_url_delete: "", //删除接口-删除选中
        ajax_url_export: "", //导出接口-导出选中
        ajax_url_export_all: "", //导出接口-导出全部
        ajax_url_export_custom: "", //导出接口-自定义，不带form数据
        ajax_url_edit: "", //编辑接口
        ajax_url_save: "", //保存接口
        ajax_url_import: "", //导入接口

        func_set_page_data: function (page_data)
        {
            this.page_data = page_data;
            this.page_current = page_data.page_current;
            this.page_size = page_data.page_size;
            this.page_total = page_data.total;
        }
    }

    return data;
}


function func_vue_new_methods()
{
    return {
        func_query_ad: function ()
        {
            if (this.$route.query.ad == 1)
            {
                return true;
            }

            return false;
        },
        func_navigate: function (path)
        {
            this.$router.push({path: path});
        },
        //curr_path: http://ui.test.xiao-bo.com/z_ui/app.html#/1640583660333/z_ui/z_app/xxx/yyy
        //to_path: zzz
        //返回
        //http://ui.test.xiao-bo.com/z_ui/app.html#/1640583660333/z_ui/z_app/xxx/zzz
        func_get_path: function (curr_path, to_path)
        {
            //console.log('func_get_path', this.$route);
            let arr = curr_path.split('/');
            arr.pop();
            return arr.join('/') + '/' + to_path;
        },
        func_validator: function (rule, value, callback)
        {
            //console.log(rule);
            let err = this.v_errors[rule.field];
            //console.log(err);
            if (err)
            {
                callback(new Error(err.join(' / ')));
            }
            else
            {
                callback();
            }
        },
        //
        //
        //
        //通用，请求
        func_ajax: function (settings)
        {
            console.log('func_ajax');
            func_vue_ajax(this, settings);
        },
        func_list_submit: function (page)
        {
            console.log("func_list_submit", page);
            let path_res = g_vue.$route.path
            let query_res = this.form
            delete query_res.tokenAdmin
            delete query_res.is_admin_add
            delete query_res.is_admin_edit
            delete query_res.is_admin_other
            this.did_first_run_list = false
            query_res.page = page;
            g_vue.$router.replace({path: path_res, query: query_res})
        },
        func_list: function (page)
        {
            console.log("func_list", page);
            if (typeof (page) == 'undefined')
            {
                page = this.$route.query.page;
            }
            func_vue_list(this, page);
        },
        func_reload: function ()
        {
            console.log('func_reload');
            this.func_list();
        },
        funcTableSelectionChange: function (val)
        {
            console.log("funcTableSelectionChange", val);
            this.selected_data = val;
        },
        func_delete: function ()
        {
            console.log('func_delete');
            let ids = func_vue_get_selected_ids(this);
            if (ids == '')
            {
                return;
            }
            let settings = func_vue_ajax_settings();
            settings.url = this.ajax_url_delete;
            settings.msg_confirm = '确定删除吗？';
            settings.msg_success = '删除成功';
            settings.form_data = {ids: ids};
            func_vue_ajax(this, settings);
        },
        func_export: function ()
        {
            console.log("func_export");
            let form_data = func_vue_get_form_data(this);
            let ids = func_vue_get_selected_ids(this);
            console.log('ids', ids);
            if (ids == '')
            {
                return;
            }

            form_data.ids = ids;
            let url = g_config.api_root + this.ajax_url_export;
            if (url.indexOf('?') > 0)
            {
                url += '&';
            }
            else
            {
                url += '?';
            }
            url += _.query.stringify(form_data);
            console.log(url);
            window.open(url);
        },
        //bg: 后台导出
        func_export_all: function (bg = false)
        {
            console.log("func_export_all");
            let form_data = func_vue_get_form_data(this);
            form_data.__export = 1;
            let url = g_config.api_root + this.ajax_url_export_all;
            if (url.indexOf('?') > 0)
            {
                url += '&';
            }
            else
            {
                url += '?';
            }
            url += _.query.stringify(form_data);
            console.log("func_export_all", url);
            if (bg)
            {
                func_vue_export_all(this, url);
            }
            else
            {
                window.open(url);
            }
        },
        func_export_custom: function ()
        {
            console.log("func_export_custom");
            let url = g_config.api_root + this.ajax_url_export_custom;
            if (url.indexOf('?') > 0)
            {
                url += '&';
            }
            else
            {
                url += '?';
            }
            let form_data = func_vue_get_form_data(this);
            url += 'tokenAdmin=' + form_data.tokenAdmin;
            console.log(url);
            window.open(url);
        },
        //
        //
        //
        func_back: function ()
        {
            console.log("func_back")
            this.$router.go(-1)
        },
        func_edit: function (query, callback)
        {
            console.log("func_edit", query);
            func_vue_edit(this, query, callback);
        },
        funcSubmit: function ()
        {
            func_vue_save(this);
        },
        funcImport: function ()
        {
            g_vue.$prompt('请输入内容', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputType: 'textarea',
                closeOnClickModal: false,
            }).then(({value}) =>
            {
                func_vue_import(this, value)
            }).catch(() =>
            {
                // this.$message({
                //     type: 'info',
                //     message: '取消输入'
                // });
            });
        },
        funcApply: function (apply)
        {
            let errmsg = "不通过，确定吗？";
            if (apply == 1)
            {
                errmsg = "通过，确定吗？";
            }
            let ids = func_vue_get_selected_ids(this);
            if (ids == '')
            {
                g_vue.$alert(`至少选择一项`, '提示', {
                    type: "error"
                });
                return;
            }

            let settings = func_vue_ajax_settings();
            settings.url = this.apply_url;
            settings.msg_confirm = errmsg;
            settings.msg_success = '成功';
            settings.form_data = {ids: ids, apply: apply};
            this.func_ajax(settings);
        },
    }
}

