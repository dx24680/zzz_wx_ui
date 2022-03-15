console.log('ui_common.js', g_version);

function funcIsDev()
{
    if (g_config.env == 'DEV')
    {
        return true;
    }
    return false;
}

function funcIsJava()
{
    if (g_config.api_type)
    {
        return true;
    }
    return false;
}


var g_z_ui_dir = 'z_ui';
var g_z_app_dir = 'admin';
if (location.pathname.indexOf('/z_ui_user/') == 0)
{
    g_z_ui_dir = 'z_ui_user';
    g_z_app_dir = 'web';
}
console.log('g_z_ui_dir', g_z_ui_dir);


var g_vue;

var g_common_data = {

    timeout_index_qr: 0,

    //axios
    tokenAdmin: null,

    // 紫色样式图片路径
    img_acc_root: "https://img.wx.xiao-bo.com/_ftp/a_res_app/php/admin/img.acc",
    // 登录二维码相关
    auth_qr: "",
    auth_id: "",
    // 是否跳过二维码
    login_skip: 0,

    // 报错提示
    STR_ACTION_ERROR_CONFIRM: '系统繁忙，请稍后重试\n\n是否查看更多系统信息？',

    picker_options: {
        shortcuts: [{
            text: '今天',
            onClick(picker)
            {
                picker.$emit('pick', new Date());
            }
        }, {
            text: '昨天',
            onClick(picker)
            {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
            }
        },
            {
                text: '30天前',
                onClick(picker)
                {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', date);
                }
            }]
    },
    //无效一些日期
    picker_options_end_date: {
        disabledDate(time)
        {
            if (typeof (picker_options_end_date_key) === 'undefined')
            {
                //pass
            }
            else
            {
                let day = new Date(time.toLocaleDateString());
                if (!g_vue.form[picker_options_end_date_key])
                {
                    return true;
                }
                else
                {
                    let end_time = new Date(g_vue.form[picker_options_end_date_key]);
                    let end_day = new Date(end_time.toLocaleDateString());
                    return day.getTime() < end_day.getTime();
                }
            }
        }
    },
}


function func_get_url_query(key)
{
    let query_all = location.href.split("?")[1]
    let query_list = []
    if (query_all)
    {
        query_list = query_all.split("&")
    }
    let query_site = query_list.filter((item) =>
    {
        return item.split("=")[0] == key
    })
    if (query_site.length > 0)
    {
        return query_site[0].split("=")[1]
    }
    else
    {
        return ""
    }
}


function func_init_rem_diy(diy_w = 1920 / 2)
{
    let doc = document;
    let win = window;
    let docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function ()
        {
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            //docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
            $("body").css('cssText', 'font-size: ' + 20 * (clientWidth / diy_w) + 'px !important;');
            $("html").css('cssText', 'font-size: ' + 20 * (clientWidth / diy_w) + 'px !important;');
            if (window.innerHeight / window.innerWidth > 1.8)
            {
                document.body.className = 'fullScreen'
            }
            else
            {
                document.body.className = ''
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
    recalc()
}

function func_set_cookie(cname, cvalue, time)
{
    _.cookie.set(cname, cvalue, {path: `/${g_z_ui_dir}`});
}

function func_get_cookie(cname)
{
    return _.cookie.get(cname);
    // return localStorage.getItem(cname)
}

function func_remove_cookie(name)
{
    _.cookie.remove(name, {path: `/${g_z_ui_dir}`});
    // localStorage.removeItem(name)
}

function func_random_string(n)
{
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let tmp = '',
        i = 0,
        l = str.length;
    for (i = 0; i < n; i++)
    {
        tmp += str.charAt(Math.floor(Math.random() * l));
    }
    tmp += new Date().valueOf();
    return tmp;
}

function func_loading(toggle = true)
{
    console.log("func_loading")
    if (toggle)
    {
        g_vue.loading = g_vue.$loading()
    }
    else
    {
        if (g_vue.loading)
        {
            g_vue.loading.close()
        }
    }
}


function func_frameError_show()
{
    let frameError = window.frames['frameError'];
    if (frameError)
    {
        $('#frameError').css('display', '');
    }
}

function func_frameError_msg(msg, pre = false)
{
    let frameError = window.frames['frameError'];
    if (frameError)
    {
        frameError.document.open();
        if (pre) frameError.document.write(`<pre>`);
        frameError.document.write(msg);
        if (pre) frameError.document.write(`</pre>`);
        frameError.document.close();
    }
}


function func_confirm_e(msg, func_then, func_catch)
{
    if (typeof (func_then) == 'undefined')
    {
        func_then = function ()
        {
            console.log('确定');
        }
    }
    if (typeof (func_catch) == 'undefined')
    {
        func_catch = function ()
        {
            console.log('取消');
        }
    }
    g_vue.$confirm(msg, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => func_then()).catch(() => func_catch());
}

//图片预览
function func_img_preview(img_url, title = '预览')
{
    //需要预览
    g_vue.$confirm(`<a href="${img_url}" target="_blank"><img src="${img_url}" style="width: 100%;" /></a>`, title, {
        dangerouslyUseHTMLString: true,
        showCancelButton: false,
        showConfirmButton: false,
        showClose: true
    }).catch(() =>
    {
    })
}

function func_get_id()
{
    let v = new Date().getTime() + 'x' + parseInt(Math.random() * 100000 + 100000);
    return v;
}


func_get_id_incr__val = 1000;

function func_get_id_incr()
{
    func_get_id_incr__val++;
    return func_get_id_incr__val;
}

//获取图片路径
function funcGetImgUrl(url)
{
    if (!url)
    {
        return ''
    }
    if (url.indexOf('http') == 0)
    {
        return url
    }

    return g_config.img_root + url
}


//=================保存后停留处理===================
var key_checked = location.href + "checked";
if (sessionStorage[key_checked])
{
    g_vue.form.checked = sessionStorage[key_checked] == 'true' ? true : false;
}

function funcChecked(e)
{
    sessionStorage[key_checked] = e;
}
