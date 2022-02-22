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


function func_vue_get_selected_ids(vue, key)
{
    let ids = ""
    if (vue.selected_data.length > 0)
    {
        vue.selected_data.forEach((item, index) =>
        {
            ids += item.id
            if (index != vue.selected_data.length - 1)
            {
                ids += ","
            }
        })
    }
    console.log("func_vue_get_selected_ids", ids)
    return ids;
}

