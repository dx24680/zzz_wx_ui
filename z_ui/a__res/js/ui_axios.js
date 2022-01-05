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
            func_frameError_msg(error.response.data);
            if (error.response.status != 422)
            {
                {
                    if (confirm(g_common_data.STR_ACTION_ERROR_CONFIRM))
                    {
                        func_frameError_show();
                    }
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
        //*/
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
