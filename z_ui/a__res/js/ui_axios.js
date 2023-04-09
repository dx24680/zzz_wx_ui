console.log('ui_axios.js')

// 请求前检查
axios.interceptors.request.use(function (config)
{
    console.log("请求前检查", config)
    // let userToken = localStorage.getItem('userToken')
    // if (userToken) {
    //     config.headers.Authorization = "Bearer " + userToken
    // }
    return config
}, function (error)
{
    return Promise.reject(error)
})

// 请求公告处理
axios.interceptors.response.use(
    res =>
    {
        return res
    },
    error =>
    {
        if (error.response)
        {
            if (error.response.status == 422)
            {
                //pass
            }
            //else if (funcIsUiUser())
            else if (typeof (error.response.data) == 'object')
            {
                if (error.response.data.errmsg_ex)
                {
                    let errmsg_ex_copy = JSON.parse(JSON.stringify(error.response.data.errmsg_ex))
                    error.response.data.errmsg_ex = errmsg_ex_copy.split(";")
                }
                func_frameError_msg(JSON.stringify(error.response.data, null, 2), true);
            }
            else
            {
                func_frameError_msg(error.response.data);
            }

            if (error.response.status != 422)
            {
                if (confirm(g_common_data.STR_ACTION_ERROR_CONFIRM))
                {
                    func_frameError_show();
                }
            }
        }
        return Promise.reject(error);
    }
)

axios.defaults.baseURL = g_config.api_root;
axios.defaults.headers['apixAuth'] = 1;

function func_data_nocache(data)
{
    if (data)
    {
        //pass
    }
    else
    {
        data = {}
    }

    data.__d = new Date().valueOf();
    return data;
}

function func_post(url, data)
{
    data = func_data_nocache(data);
    return new Promise((resolve, reject) =>
    {
        //* 数组数据 会转成逗号分隔
        let params = new URLSearchParams();
        for (let key in data)
        {
            let val = data[key];
            if (val !== null)
            {
                params.append(key, data[key]);
            }
        }
        //
        //url += '?&XDEBUG_SESSION_START=18237';
        //
        axios({
            method: 'POST',
            data: params,
            //data: _.query.stringify(data), //数组数据 会不正确
            url,
        })
            .then(res =>
            {
                resolve(res.data)
            })
            .catch(err =>
            {
                reject(err)
            });
    })
}

function func_get(url, data, timeout)
{
    data = func_data_nocache(data);
    return new Promise((resolve, reject) =>
    {
        axios({
            method: 'GET',
            params: data,
            url,
            timeout: timeout
        })
            .then(res =>
            {
                resolve(res.data)
            })
            .catch(err =>
            {
                reject(err)
            })
    })
}

// 如商品中心-商品列表-编辑保存下一步-添加规格属性，data需要传json字符串
function func_post_json(url, data)
{
    return new Promise((resolve, reject) =>
    {
        //*/
        axios({
            method: 'POST',
            data: data,
            headers: {"Content-Type": "application/json;charset=utf-8"},
            url,
        })
            .then(res =>
            {
                resolve(res.data)
            })
            .catch(err =>
            {
                reject(err)
            });
    })
}