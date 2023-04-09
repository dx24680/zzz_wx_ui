console.log('ui_common_app_func.js');


function func_vue_created(vue)
{
    //console.log("func_vue_created", vue, vue.$route);
    vue.vue_this = vue;
}


function func_vue_mounted(vue, do_validation_init = true)
{
    //console.log("func_vue_mounted", vue, vue.$route);
    vue.vue_this = vue;
    vue.route_path = vue.$route.path;
    vue.route_id = vue.$route.params.id;
    vue.cookie_data = JSON.parse(localStorage.getItem(`data_${vue.route_id}`));
    if (do_validation_init)
    {
        func_vue_validation_init(vue);
    }
}


function func_vue_validation_init(vue)
{
    console.log('func_vue_validation_init', vue.$refs);
    let form_rules = {}
    $('.el-form-item__label').each(function ()
    {
        //console.log(this);
        let jq = $(this);
        if (jq.attr('for'))
        {
            form_rules[jq.attr('for')] = [{validator: vue.func_validator}];
        }
    });
    console.log('form_rules', form_rules);
    vue.form_rules = form_rules;
}

function func_vue_get_form_data(vue)
{
    console.log("func_vue_get_form_data", vue.cookie_data);
    let form_data = {}
    form_data.tokenAdmin = vue.cookie_data.tokenAdmin;
    for (let key in vue.form)
    {
        let val = vue.form[key];
        if (val != null && typeof (val) != 'undefined')
        {
            form_data[key] = val;
        }
    }
    return form_data;
}


function func_vue_list_watch_route_handler(vue, callback)
{
    console.log('func_vue_list_watch_route_handler', vue.did_first_run_list);
    //console.log("did_first_run_list", vue.did_first_run_list, vue.$route.path);
    if (vue.did_first_run_list)
    {
        vue.did_first_run_list = false;
    }
    else if (vue.$route.path.indexOf(vue.route_path) != -1)
    {
        console.log("first_run 页面返回", vue.$route.path, vue.route_path);
        if (callback)
        {
            callback();
        }
        else
        {
            vue.func_reload();
        }
    }
}


function func_vue_get_selected_ids(vue, key = "id")
{
    let ids = ""
    if (vue.selected_data.length > 0)
    {
        vue.selected_data.forEach((item, index) =>
        {
            ids += item[key]
            if (index != vue.selected_data.length - 1)
            {
                ids += ","
            }
        })
    }
    console.log("func_vue_get_selected_ids", ids)
    return ids;
}

function func_vue_save_after(vue, data)
{
    console.log("func_vue_save_after", data);
    if (data.errcode !== 0)
    {
        vue.$message.error(data.errmsg);
    }
    else
    {
        vue.$message.success("保存成功");
    }
}


// 对某input组件光标位置插入指定内容：组件名ref=xxx  插入内容
function funcSetKeyword(ref_name, keyword, vue)
{
    console.log("input_set_keyword");
    if (keyword.length <= 0)
    {
        console.log("keyword IS NULL");
        return;
    }
    var __ref = vue.$refs[ref_name];
    if (typeof (__ref) == 'undefined')
    {
        console.log("组件没找到，请在组件标签加入ref=" + ref_name);
        return;
    }
    if (__ref.type == 'text' || __ref.type == 'textarea')
    {
        //pass
    }
    else
    {
        console.log("组件只能是input");
        return;
    }
    var focus_index = __ref.$el.firstElementChild.selectionStart;
    console.log('最后一次坐光标：' + focus_index);
    var val = __ref.value;
    if (typeof (val) == 'undefined')
    {
        val = '';
    }
    var start = val.substring(0, focus_index);
    var end = val.substring(focus_index, val.length);
    __ref.value = start + keyword + end;
    vue.form[ref_name] = __ref.value;
    setTimeout(function ()
    {
        console.log('重新设置焦点位置');
        var index = focus_index + keyword.length;

        __ref.$el.firstElementChild.focus();
        __ref.$el.firstElementChild.setSelectionRange(index, index);
    }, 100)
}

// 图片测试发送
function funcSendImg__(vue)
{
    vue.$prompt('请输入openid', '密码', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: '',
        inputErrorMessage: ''
    }).then(({value}) =>
    {
        funcSendImg(value, vue);
    }).catch(() =>
    {

    });
}

function funcSendImg(wx_from, vue)
{
    // func_loading();
    let form_data = func_vue_get_form_data(vue);
    form_data.id = vue.form.id;
    form_data.wx_from = wx_from
    func_post('/z_app/lucky_card/admin/lucky_card__poster__edit__funcSendImg', form_data)
        .then(data =>
        {
            //请求成功
            func_loading(false);
            if (data.errcode !== 0)
            {
                vue.$message.error(data.errmsg);
            }
            else
            {
                vue.$message.success('成功');

            }
        })
        .catch(err =>
        {
            func_loading(false);
            vue.$message.error(err);
        });

    // func_ajax({
    //     url: "{{ funcWebServerGet('PATH_INFO') }}__funcSendImg",
    //     data: {
    //         id: vue.form.id,
    //         wx_from: wx_from,
    //     },
    //     success: function (data)
    //     {
    //         console.log(data);
    //         if (data.errcode == 0)
    //         {
    //             vue.$message.success("成功");
    //         }
    //         else
    //         {
    //             vue.$message.error(data.errmsg);
    //         }
    //     }
    // });
}



