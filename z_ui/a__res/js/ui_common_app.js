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
        list: [],
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

            if (page_data.first_page_url)
            {
                this.page_current = page_data.current_page;
                this.page_size = page_data.per_page;
            }
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
            if (!curr_path)
            {
                curr_path = location.href;
            }
            if (!to_path)
            {
                to_path = '';
            }
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
            console.log("func_list_submit", page, this.page_size);
            let path_res = g_vue.$route.path
            let query_res = this.form
            delete query_res.tokenAdmin
            delete query_res.is_admin_add
            delete query_res.is_admin_edit
            delete query_res.is_admin_other

            this.did_first_run_list = false
            query_res.page = 1; //this.page_current;
            if (page)
            {
                query_res.page = page;
            }
            query_res.page_size = this.page_size;
            console.log("func_list_submit", query_res.page, query_res.page_size);
            query_res.ran = Math.random()
            g_vue.$router.replace({path: path_res, query: query_res});
            window.scrollTo(0, 0);
        },
        func_list_page_size: function (page_size)
        {
            console.log("func_list_page_size", page_size);
            this.page_size = page_size;
            this.func_list_submit(1);
        },
        func_list: function (page, callback)
        {
            console.log("func_list", page);
            if (typeof (page) == 'undefined')
            {
                page = this.$route.query.page;
            }
            func_vue_list(this, page, callback);
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
        func_delete: function (ids_diy)
        {
            console.log('func_delete');
            let ids = "";
            if (ids_diy && typeof(ids_diy)!="object")
            {
                ids = ids_diy
            }
            else
            {
                ids = func_vue_get_selected_ids(this);
            }
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
            if (bg)
            {
                form_data.__export_bg = 1;
            }
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
        func_edit: function (query, callback, query_diy)
        {
            console.log("func_edit", query);
            func_vue_edit(this, query, callback, query_diy);
        },
        funcSubmit: function ()
        {
            func_vue_save(this);
        },
        //清除错误信息
        funcResetErrors: function ()
        {
            this.v_errors = {};
            this.$refs['form'].validate(function ()
            {
            });
        },
        //重置字段
        funcResetFields: function ()
        {
            this.$refs['form'].resetFields();
            this.v_errors = {};
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
        funcUploadBefore__img(file)
        {
            console.log('funcUploadBefore_img');
            console.log(file);
            if (file.type != 'image/jpeg' && file.type != 'image/png' && file.type != 'image/gif')
            {
                this.$message.error('只能上传 png | jpg | gif 格式的图片');
                return false;
            }
            if (file.size > 1024 * 1024)
            {
                this.$message.error('上传文件大小不能超过 1M');
                return false;
            }
            return true;
        },
        //权限判断
        funcIsAuth: function (path)
        {
            if (!this.admin_page.auth)
            {
                //防止前端报错
                return false;
            }
            if (this.admin_page.auth.is_admin)
            {
                //管理员
                return true;
            }
            // debugger
            return this.admin_page.auth.path[path] == 1;
        },
        funcUserPageChange: function (page_index)
        {
            let g_vue_data = this
            console.log('funcUserPageChange', page_index);
            g_vue_data.user_page_total = g_vue_data.list_data.length; //总页数
            let begin = (page_index - 1) * g_vue_data.user_page_size;
            let end = begin + g_vue_data.user_page_size;
            //清空，再填充
            g_vue_data.user_list_data = [];
            for (var i = begin; i < end; i++)
            {
                if (i >= g_vue_data.user_page_total) return;
                //
                let data = g_vue_data.list_data[i];
                g_vue_data.user_list_data.push(data);
            }
        },
        funcExport: function (data, f_name)
        {
            console.log('funcExport')
            // var data = [
            //     ['姓名', '性别', '年龄', '注册时间'],
            //     ['张三', '男', 18, new Date()],
            //     ['李四', '女', 22, new Date()]
            // ];
            try
            {
                var sheet = XLSX.utils.aoa_to_sheet(data)

                var sheet_name = 'data'
                var workbook_obj = {
                    SheetNames: [sheet_name],
                    Sheets: {}
                }
                workbook_obj.Sheets[sheet_name] = sheet

                var workbook = XLSX.write(workbook_obj, {
                    bookType: 'csv',
                    bookSST: false,
                    type: 'binary'
                })
                // console.log(workbook);

                var blob = this.funcWorkBookToBlob(workbook)


                let file_name = `${(new Date()).valueOf()}.csv`
                if (f_name)
                {
                    file_name = `${f_name}.csv`
                }
                saveAs(blob, file_name)
            }
            catch (e)
            {
                console.error(e)
            }
        },
        funcWorkBookToBlob: function (s)
        {
            var buf = new ArrayBuffer(s.length)
            var view = new Uint8Array(buf)
            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF

            var b = new Blob([buf], {type: 'application/octet-stream'})

            return b
        },
        funcChangeDate: function (e)
        {
            let g_vue_data = this
            console.log('funcChangeDate', e);
            let compDateBegin = '';
            let compDateEnd = '';
            if (typeof (e) == 'string')
            {
                compDateBegin = e;
                compDateEnd = e;
            }
            else
            {
                compDateBegin = e[0];
                compDateEnd = e[1];
            }

            //群ID
            let compGroupID = '';
            if (g_vue_data.form.compGroupID)
            {
                compGroupID = g_vue_data.form.compGroupID;
            }

            func_loading();
            let form_data = func_vue_get_form_data(g_vue_data);
            form_data.compDateBegin = compDateBegin
            form_data.compDateEnd = compDateEnd
            form_data.compGroupID = compGroupID
            func_post(`${this.ajax_url_list.split('?')[0]}__funcSearch`, form_data)
                .then(data =>
                {
                    //请求成功
                    func_loading(false);
                    if (data.errcode !== 0)
                    {
                        g_vue_data.$message.error(data.errmsg);
                    }
                    else
                    {
                        if (data.errcode == 0)
                        {
                            //先清空
                            g_vue_data.list_data = [];
                            //倒序
                            for (const key in data.list)
                            {
                                let val = data.list[key];
                                g_vue_data.list_data.unshift(val);

                            }
                            //设置分布
                            g_vue_data.funcUserPageChange(1);
                            //画图
                            g_vue_data.funcSetChart(data.list);
                        }
                        else
                        {
                            g_vue_data.$message.error(data.errmsg);
                        }
                    }
                })
                .catch(err =>
                {
                    func_loading(false);
                    g_vue_data.$message.error(err);
                });
        }
    }
}

