<template>
    <div class="index_class" :style="`background-image: url('${g_common_data.img_time_root}/pre_bg.jpg');`">
        <img class="logo" :src="`${g_common_data.img_time_root}/pre_logo.png`">
        <div class="title_txt">{{g_config.title}}</div>
        <div class="btn_area">
            <div class="btn_item_area" @click="handle_jump_a" @mouseenter="act_1=true" @mouseleave="act_1=false">
                <img :class="`btn_item ${act_1?'':'op_0'}`" :src="`${g_common_data.img_time_root}/pre_btn_1_act.png`">
                <img :class="`btn_item ${act_1?'op_0':''}`" :src="`${g_common_data.img_time_root}/pre_btn_1.png`">
            </div>
            <div class="btn_item_area" @click="handle_jump_b" @mouseenter="act_2=true" @mouseleave="act_2=false">
                <img :class="`btn_item ${act_2?'':'op_0'}`" :src="`${g_common_data.img_time_root}/pre_btn_2_act.png`">
                <img :class="`btn_item ${act_2?'op_0':''}`" :src="`${g_common_data.img_time_root}/pre_btn_2.png`">
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function ()
        {
            return {
                act_1: false,
                act_2: false,
            };
        },
        created()
        {
            console.log("ct index_class")
        },
        mounted()
        {
            console.log("mt index_class")
        },
        methods: {
            func_get_site_id()
            {
                if (funcIsDevUat())
                {
                    return 'app.jmeii';
                }
                return 'app.timesmba';
            },
            handle_jump_a()
            {
                location.href = "/z_ui/#/z_ui/a_admin/index/acc?site_id=" + this.func_get_site_id();
            },
            handle_jump_b()
            {
                location.href = "/z_ui_user/#/z_ui_user/a_admin/index/user?site_id=" + this.func_get_site_id();
            }
        }
    };
</script>

<style scoped>
    .op_0 {
        opacity: 0;
    }

    .index_class {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .logo {
        width: 2.925rem;
    }

    .title_txt {
        margin-top: 0.75rem;
        color: #fff;
        font-size: 1.05rem;
        font-family: Source Han Sans CN;
    }

    .btn_area {
        margin-top: 1.375rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn_item_area {
        position: relative;
        width: 6.65rem;
        margin: 0 0.3rem;
        cursor: pointer;
    }

    .btn_item {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
    }
</style>