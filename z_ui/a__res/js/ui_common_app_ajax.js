console.log('ui_common_app_ajax.js');


function func_vue_ajax_settings()
{
    return {
        url: 'about:blank',
        form_data: null,
        msg_confirm: '确定吗？',
        msg_success: '操作成功',
        success_callback: function (vue, data)
        {
            console.log('func_vue_ajax_settings success_callback', vue, data);
            vue.func_reload();
        },
    };
}

function func_vue_ajax(vue, settings)
{
    console.log("func_vue_ajax", settings);


    if (settings.msg_confirm != '')
    {
        if (!confirm(settings.msg_confirm))
        {
            return;
        }
    }

    func_loading();
    let form_data = func_vue_get_form_data(vue);
    Object.assign(form_data, settings.form_data);
    func_post(settings.url, form_data)
        .then(data =>
        {
            //请求成功
            console.log("*** func_vue_ajax 结果", data, settings);
            func_loading(false);
            if (data.errcode !== 0)
            {
                vue.$message.error(data.errmsg);
            }
            else
            {
                if (settings.msg_success != '')
                {
                    vue.$message.success(settings.msg_success);
                }
                if (settings.success_callback)
                {
                    settings.success_callback(vue, data);
                }
            }
        })
        .catch(err =>
        {
            func_loading(false);
            vue.$message.error(err);
        });
}


function func_vue_list(vue, page)
{
    console.log("func_vue_list", page);

    func_loading();

    let form_data = func_vue_get_form_data(vue);

    let query = vue.$route.query; //链接参数
    form_data = Object.assign(form_data, query)

    form_data.page = page;
    func_get(vue.ajax_url_list, form_data)
        .then(data =>
        {
            //请求成功
            console.log("*** func_vue_list 结果", data);
            func_loading(false);
            if (data.errcode !== 0)
            {
                vue.$message.error(data.errmsg);
            }
            else
            {
                vue.app_title = data.app_title;
                vue.admin_page = data.admin_page;
                vue.list_data = data.list_data;
                vue.func_set_page_data(data.page_data);
                if (data.form)
                {
                    let v_form = {};
                    Object.assign(v_form, vue.form)
                    Object.assign(v_form, data.form) //接口优先级最高
                    vue.form = v_form;
                }
            }
        })
        .catch(err =>
        {
            func_loading(false);
            vue.$message.error(err);
        });
}


function func_vue_edit(vue, query, callback)
{
    console.log("func_vue_edit", query);
    func_loading();
    let form_data = func_vue_get_form_data(vue);
    Object.assign(form_data, query);
    func_get(vue.ajax_url_edit, form_data)
        .then(data =>
        {
            //请求成功
            console.log("*** func_vue_edit 结果", data);
            func_loading(false);
            if (data.errcode !== 0)
            {
                vue.$message.error(data.errmsg);
            }
            else
            {
                vue.app_title = data.app_title;
                vue.admin_page = data.admin_page;
                for (let key in data.form)
                {
                    vue.$set(vue.form, key, data.form[key])
                }
                callback(data);
            }
            //
            setTimeout(function ()
            {
                func_vue_validation_init(vue);
            }, 100);
        })
        .catch(err =>
        {
            func_loading(false);
            vue.$message.error(err);
        });
}


function func_vue_save(vue)
{
    console.log('func_vue_save');
    func_loading();
    let form_data = func_vue_get_form_data(vue);
    if (typeof (vue.func_vue_save_before) !== "undefined")
    {
        //自定义保存前操作
        try
        {
            vue.func_vue_save_before(form_data);
        }
        catch (e)
        {
            console.error(e);
        }
    }

    console.log('func_vue_save', form_data);
    func_post(vue.ajax_url_save, form_data)
        .then(data =>
        {
            func_loading(false);
            if (typeof (vue.func_vue_save_after) !== "undefined")
            {
                //自定义保存后操作
                vue.func_vue_save_after(data);
            }
            else
            {
                //请求成功
                console.log("*** func_vue_save 结果", data);
                if (data.errcode !== 0)
                {
                    vue.$message.error(data.errmsg);
                }
                else
                {
                    vue.$message.success("保存成功");
                    if(form_data.checked) return
                    vue.func_back();
                }
            }

        })
        .catch(err =>
        {
            func_loading(false);
            if (err.response.status == 422)
            {
                console.log('err', err.response);
                vue.v_errors = err.response.data.errors;
                console.log('v_errors', vue.v_errors);
                vue.$refs['form'].validate(function ()
                {
                });
                g_vue.$alert(`提交的数据不正确，请重新输入`, '提示', {
                    type: "error",
                    dangerouslyUseHTMLString: true,
                });
            }
            else
            {
                vue.$message.error(err);
            }
        });
}


function func_vue_import(vue, content)
{
    console.log("func_vue_import");
    func_loading();
    let form_data = func_vue_get_form_data(vue);
    form_data.content = content
    func_post(vue.ajax_url_import, form_data)
        .then(data =>
        {
            //请求成功
            console.log("*** func_vue_import 结果", data);
            func_loading(false);
            if (data.errcode !== 0)
            {
                vue.$message.error(data.errmsg);
            }
            else
            {
                if (data.errcode == 0)
                {
                    g_vue.$message({
                        message: '导入成功',
                        type: 'success'
                    });
                    location.reload();
                }
                else
                {
                    g_vue.$message.error(data.errmsg);
                }
            }
        })
        .catch(err =>
        {
            func_loading(false);
            vue.$message.error(err);
        });
}


function func_vue_export_all(vue, url)
{
    func_loading();
    let target_url = `${location.origin + location.pathname}#/${g_vue.$route.params.id}/export_list`
    func_get(url, {}, 1000 * 10)
        .then(data =>
        {
            //请求成功
            console.log("*** func_vue_export_all 结果", data);
            func_loading(false);
            if (data.errcode !== 0)
            {
                g_vue.$message.error(data.errmsg);
            }
            else
            {
                g_vue.$alert(`即将前往导出列表 <a href="${target_url}" target=_blank>【立即打开】</a>`, '提示', {
                    type: "warning",
                    dangerouslyUseHTMLString: true,
                });
            }
        })
        .catch(err =>
        {
            func_loading(false);
            if (err.message.indexOf("timeout") != -1)
            {
                console.log("超时")
                g_vue.$alert(`即将前往导出列表 <a href="${target_url}" target=_blank>【立即打开】</a>`, '提示', {
                    type: "warning",
                    dangerouslyUseHTMLString: true,
                });
            }
            else
            {
                g_vue.$message.error(err);
            }
        });
}

