<template>
  <div class="center" v-if="center_info">
    <!-- 顶部栏 -->
    <div class="top_area">
      <img
        class="top_bg_img"
        :src="g_common_data.img_acc_root + '/acc_top_menu_bg.jpg'"
      />
      <div class="top_pre">
        <div class="top_logo_area">
          <img class="top_logo_img" :src="center_info.site_logo_admin" onerror="this.style.visibility='hidden'" />
        </div>
        <div class="top_main_area">
          <div class="top_main_left_area">
            <template v-for="(item, index) in tml_list">
              <div class="tml_item" :key="index" @click="handle_tml_item(item)">
                {{ item.title }}：{{ item.value }}
              </div>
              <div
                class="tm_between_line"
                :key="index"
                v-if="index !== tml_list.length - 1"
              ></div>
            </template>
          </div>
          <div class="top_main_right_area">
            <div class="tmr_item">
              <img
                class="tmr_icon_img"
                :src="g_common_data.img_acc_root + '/icon_password.png'"
              />
              修改密码
              <a
                class="change_pwd_a"
                target="iframe_app"
                @click="handle_change_pwd"
                :href="`${iframe_host_re}center_re?url=${encodeURIComponent(iframe_host+'z_center_re?app_id=password')}`"
              ></a>
            </div>
            <div class="tm_between_line"></div>
            <div class="tmr_item" @click="handle_exit">
              <img
                class="tmr_icon_img"
                :src="g_common_data.img_acc_root + '/icon_exit.png'"
              />
              退出系统
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_area">
      <!-- 菜单 -->
      <div class="menu-contain menu_area">
        <!-- <el-menu
          :default-active="0"
          class="el-menu-vertical-demo"
          @select="menu_select"
          background-color="#3b426c"
          text-color="#fff"
          active-text-color="#fff"
        >
          <template v-for="(item, index) in center_info.group.menu_1">
            <el-menu-item :index="index" :key="index" :title="item.name">
              <i class="el-icon-menu"></i>
              <span slot="title" class="menu_title_txt">{{ item.name }}</span>
            </el-menu-item>
          </template>
        </el-menu> -->
        <template v-for="(item, index) in center_info.group.menu_1">
          <template v-if="item.son_list && item.son_list.length > 0">
            <!-- 有子列表的选项 -->
            <div
              :key="index"
              :class="`primary_menu_item _class primary_menu_item_one primary_menu_item_one_${index}`"
              :data-index="index"
              target="iframe_app"
              @click="funcMenuOne(index, item.son_list.length)"
            >
              <img class="primary_menu_icon" :src="item.logo_pic" />
              <p class="primary_menu_txt">{{ item.name }}</p>
              <img
                :class="`menu_icon_right menu_icon_right_${index}`"
                :src="`${g_common_data.img_acc_root}/icon_right.png`"
              />
            </div>
            <div
              :key="index"
              :class="`primary_menu_son_box primary_menu_son_box_${index}`"
            >
              <a
                v-for="(son_item, son_index) in item.son_list"
                :key="son_index"
                :class="`primary_menu_item primary_menu_item_son _class primary_menu_item_son_${son_index}`"
                :data-index="son_index"
                :data-url="son_item.url"
                :href="son_item.url"
                :data-parentindex="index"
                target="iframe_app"
                @click="funcUrlClick(index, son_index)"
              >
                <div class="son_icon_area"><div class="son_icon"></div></div>
                <p class="primary_menu_txt">{{ son_item.name }}</p>
              </a>
            </div>
          </template>
          <!-- 无子列表的选项 -->
          <a
            v-else
            :key="index"
            :class="`primary_menu_item _class primary_menu_item_one_${index}`"
            :data-index="index"
            :data-url="item.url"
			:href="`${iframe_host_re}center_re?url=${item.url}`"
            target="iframe_app"
            @click="funcUrlClick(index)"
          >
            <span></span>

            <!-- <img class="primary_menu_icon" :src="item.logo_pic" /> -->
            <p class="primary_menu_txt">{{ item.name }}</p>
            <!-- <img
              class="menu_icon_right"
              :src="`${g_common_data.img_acc_root}/icon_right.png`"
            /> -->
          </a>
        </template>
      </div>

      <!-- 内容区域 -->
      <div class="content_area">
        <!-- <div
          class="app_area"
          v-if="!app_act_item && center_info.group.length > 0"
        >
          <div
            class="app_item"
            :style="`background-color: rgb(101, 108, 198,${
              (10 - (index % 6)) / 10
            });`"
            @click="handle_app(item)"
            v-for="(item, index) in center_info.group[menu_act].list"
            :key="index"
          >
            {{ item.app_name }}
            <a
              class="app_item_a"
              target="iframe_app"
              :href="iframe_host + item.app_url"
            ></a>
          </div>
        </div> -->
        <iframe
          :class="`iframe_app`"
          src="about:blank"
          id="iframe_app"
          name="iframe_app"
          frameborder="0"
        ></iframe>
      </div>
    </div>

    <!-- <input id="inp_site" v-model="site_copy_txt"> -->
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      tokenAdmin: "",
      center_info: "",
      tml_list: [], //顶部左侧信息列表
      menu_act: 0,
      app_act_item: "",
      v_search: "",
      if_search_focus: false,
      if_searching: false,
      site_copy_txt: "",

      iframe_host: g_config.api_root + "/zz_admin/",
      iframe_host_re: "",
    };
  },
  created() {
    this.tokenAdmin = func_get_cookie("token_qr");
    func_loading();
    this.func_center_info();

    this.iframe_host_re = location.origin + location.pathname + "#/z_ui/a_admin/"
  },
  mounted() {
    console.log("mt center_cash");
    document.onkeydown = this.keyListener;
  },
  methods: {
    func_set_menu(data) {
      $(".accordion-group").eq(0).addClass('active');
      $(".jump_item").click(function () {
        var _url = $(this).attr('data-url');
        $('#iframe_app')[0].src = 'about:blank';
        $('.container').css('display', 'block');
        setTimeout(function () {
          $('#iframe_app')[0].src = _url;
        }, 100);
      });
      $(".secondary_menu_item").click(function () {
        $(".secondary_menu_item").siblings('.secondary_menu_item').removeClass('active');
        $(this).addClass('active');
      })
    },
    funcMenuOne(index, sonlen) {
      console.log("funcMenuOne", index, sonlen)
      if ($(`.primary_menu_item_one_${index}`).hasClass('active')) {
        console.log("重复点击大选项")
        // return false;
      }
      // $(".primary_menu_item").removeClass('active')
      // $(`.primary_menu_item_one`).removeClass('active')
      // $(`.primary_menu_item_one_${index}`).addClass('active');

      $(".primary_menu_son_box").css("height", "0px")
      $(".menu_icon_right").css("transform", "rotateZ(0deg)")

      let el = $(`.primary_menu_son_box_${index}`)
      let el_icon = $(`.menu_icon_right_${index}`)
      if (el.css("height") == "0px") {
        el.css("height", sonlen * 60 + "px")
        el_icon.css("transform", "rotateZ(90deg)")
      }
      else {
        el.css("height", "0px")
        el_icon.css("transform", "rotateZ(0deg)")
      }
    },
    funcUrlClick(index_a, index_b) {
      console.log("funcUrlClick", index_a, index_b)
      $(".primary_menu_item").removeClass('active')
      $(`.primary_menu_item_one`).removeClass('active')
      $(`.primary_menu_item_one_${index_a}`).addClass('active');
      if (index_b !== undefined) {
        $(`.primary_menu_item_son`).removeClass('active')
        $(`.primary_menu_son_box_${index_a} .primary_menu_item_son_${index_b}`).addClass('active');
      } else {
        $(".primary_menu_son_box").css("height", "0px")
      }
      $("#iframe_app").attr("src", "about:blank");
    },
    // 点击站点名
    handle_tml_item(item) {
      if (item.title == "站点") {
        this.$alert(this.center_info.acc_site_id, item.title, {
          confirmButtonText: "关闭",
          callback: action => { }
        });
      }
    },
    // 监听键盘回车
    keyListener(e) {
      if (!this.if_search_focus) return;
      if (e.keyCode == 13) {
        this.handle_search();
      }
    },
    // 搜索
    handle_search() {
      this.app_act_item = "";
      func_loading();
      this.func_center_info();
    },
    // 退出系统
    handle_exit() {
      func_remove_cookie("token_login");
      func_remove_cookie("token_qr");
      func_remove_cookie("center_url");
      func_remove_cookie("center_id");
      localStorage.clear();
      let login_url = func_get_cookie("login_url");
      this.$router.replace({
        path: login_url,
        query: { site_id: func_get_cookie("site_id") }
      });
    },
    menu_select(index) {
      console.log("选中菜单", index);
      this.app_act_item = "";
      this.menu_act = index;
      $("#iframe_app").attr("src", "about:blank");
    },
    // 点击应用
    handle_app(item) {
      this.app_act_item = item;
      item.app_url += "1";
    },
    // 修改密码
    handle_change_pwd() {
      this.app_act_item = true;
      $("#iframe_app").attr("src", "about:blank");
    },
    // 外层初始化接口
    func_center_info() {
      this.if_searching = true;
      func_get("/zz_admin_cash/z_center/center_info", {
        tokenAdmin: func_get_cookie("token_qr"),
        app_keyword: this.v_search
      })
        .then(data => {
          //请求成功
          this.if_searching = false;
          func_loading(false);
          console.log("*** func_center_info 结果", data);
          if (data.errcode !== 0) {
            this.$message.error(data.errmsg);
            if (data.errcode == -100 || data.errcode == -200) {
              setTimeout(() => {
                this.handle_exit();
              }, 500);
            }
          } else {
            // if (data.group.length > 0) {
            //   data.group.forEach((item, index) => {
            //     if (item.group_name && item.list.length > 0) {
            //       item.list.forEach((item_app, index_app) => {
            //         if (item_app.app_url.indexOf("?") != -1) {
            //           item_app.app_url += "&";
            //         } else {
            //           item_app.app_url += "?";
            //         }
            //         item_app.app_url += `tokenAdmin=${this.tokenAdmin}&v=1`;
            //       });
            //     }
            //   });
            // }

            data.group.menu_1.forEach((item, index) => {
              if (item.son_list && item.son_list.length > 0) {
                item.son_list.forEach((item2, index2) => {
                  item2.url = encodeURIComponent(`${this.iframe_host}z_center_re?css=client&app_id=${item2.app_id}`)
                })
              }
              else {
                item.url = encodeURIComponent(`${this.iframe_host}z_center_re?css=client&app_id=${item.app_id}`)
              }
            })
            this.func_set_menu(data);
            $(".accordion-group").eq(0).addClass('active');
            $(".primary_menu_item").click(function () {
              if ($(this).hasClass('active')) {
                return false;
              }
              if ($(this).hasClass('primary_menu_item_one')) {
                return false;
              }

              $(".primary_menu_item").removeClass('active');
              $(".primary_menu_item_son").removeClass('active');
              if ($(this).hasClass('primary_menu_item_son')) {
                // 点击子类选项
                let parentindex = $(this).data("parentindex")
                $(`.primary_menu_item_one_${parentindex}`).addClass('active');
              }
              else {
                // 点击一级选项
                $(".primary_menu_son_box").css("height", "0px")
                $(".menu_icon_right").css("transform", "rotateZ(0deg)")
              }

              $('#iframe_app')[0].src = 'about:blank';
              $(this).addClass('active');
              $("#accordion").empty();
              // var _index = $(this).attr('data-index');
              // var _data = prop_list_app_data[parseInt(_index)];

              // func_set_menu(_data);
              var _url = $(this).attr('data-url');
              console.log(_url)

              $('#iframe_app')[0].src = 'about:blank';
              $('.container').css('display', 'block');
              setTimeout(function () {
                $('#iframe_app')[0].src = _url;
              }, 100);
            });

            this.center_info = data;
            this.tml_list = [
              {
                title: "站点",
                value: data.site_id_alias
              },
              {
                title: "名称",
                value: data.site_name
              },
              {
                title: "账号",
                value: data.acc_uid
              },
              {
                title: "昵称",
                value: data.wxname
              }
            ];

            setTimeout(() => {
              $(".primary_menu_item:eq(0)>span").click()
            }, 300)
          }
        })
        .catch(err => {
          this.if_searching = false;
          func_loading(false);
          this.$message.error(err);
        });
    }
  }
};
</script>

<style scoped>
.center {
  --navbar_h: 70px;
  --menu_w: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.top_area {
  position: relative;
  width: 100%;
  height: var(--navbar_h);
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top_bg_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.top_pre {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
}
.top_logo_area {
  width: var(--menu_w);
  height: 100%;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top_logo_img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.top_main_area {
  flex: 1;
  padding-left: 0.875rem;
  padding-right: 1.125rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.top_main_left_area,
.top_main_right_area {
  height: fit-content;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
}
.top_main_right_area {
  margin-bottom: 0.6rem;
}
.tml_item:first-child {
  cursor: pointer;
}
.tm_between_line {
  width: 1px;
  height: 20px;
  margin: 0 0.75rem;
  background-color: #fff;
}
.tmr_item {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.change_pwd_a {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.tmr_icon_img {
  width: 25px;
  /* width: 0.625rem;
  height: 0.625rem;
  object-fit: contain; */
}
.tmr_icon_img_elm {
  font-size: 20px;
  margin-right: 8px;
}

.bottom_area {
  width: 100%;
  height: calc(100vh - var(--navbar_h));
  display: flex;
  flex-direction: column;
}
.menu_area {
  width: 100%;
  height: 1.75rem;
  width: 100%;
  height: 1.75rem;
  background: #ffffff;
  overflow-x: scroll;
  overflow-y: unset;
  display: flex;
}

.menu_area::-webkit-scrollbar {
  /* width: 0.2rem; */
  width: 0;
  height: 0;
}
/*修改 滚动条的 下面 的 样式*/
.menu_area::-webkit-scrollbar-track {
  background-color: #3b426c;
  -webkit-border-radius: 0.2rem;
  -moz-border-radius: 0.2rem;
  border-radius: 0.2rem;
}

/*修改 滑块 */
.menu_area::-webkit-scrollbar-thumb {
  background-color: #010f1a;
  -webkit-border-radius: 0.2rem;
  -moz-border-radius: 0.2rem;
  border-radius: 0.2rem;
}
.content_area::-webkit-scrollbar {
  width: 0;
}
.content_area {
  flex: 1;
  padding: 0.25rem;
  background-color: #fafafa;
  overflow-y: scroll;
}

.app_area {
  width: 100%;
  padding: 0.25rem;
  display: flex;
  flex-wrap: wrap;
}

.app_item {
  position: relative;
  width: 200px;
  height: 100px;
  cursor: pointer;
  margin: 0.25rem;
  font-size: 18px;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app_item_a {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
}

.iframe_app {
  width: 100%;
  height: 100%;
}
.iframe_hide {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}

.inp_search {
  width: 200px;
  margin-right: 0.75rem;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.menu_title_txt {
  width: 80px;
  display: inline-block;
  /* overflow: hidden;
    text-overflow: ellipsis; */
}
</style>





























<style>
.primary_menu_box::-webkit-scrollbar,
.secondary_menu_box::-webkit-scrollbar {
  display: none;
}

.secondary_menu_box * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.secondary_menu_box a {
  text-decoration: none;
  color: #354052;
}

.primary_menu_box {
  width: 160px;
  /*width: 240px;*/
  height: 710px;
  overflow-y: scroll;
  /*background: #354053;*/
  background: #3b426c;
  font-size: 14px;
  color: white;
  text-align: left;
}

.primary_menu_item {
  width: 100%;
  height: 60px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  /*-webkit-justify-content: center;*/
  /*justify-content: center;*/
  /*-webkit-flex-direction: column;*/
  /*flex-direction: column;*/
  /*border-bottom: 1px solid #414e61;*/
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}

.primary_menu_icon {
  width: 20px;
  margin-right: 6px;
  /*margin: 0 auto;*/
}

.son_icon_area {
  width: 20px;
  height: 20px;
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.son_icon {
  width: 4px;
  height: 4px;
  border: 1px solid #fff;
  border-radius: 50%;
}

.active .son_icon {
  background-color: #fff;
}

.primary_menu_txt {
  margin: 0;
}

.primary_menu_item_son {
  border-top: 1px solid #3b426c;
}

.primary_menu_item_son .primary_menu_txt {
  color: #b0b8eb;
}

.active .primary_menu_txt {
  color: #ffffff;
}

.primary_menu_item {
  box-sizing: border-box;
  padding: 0 20px;
  padding-right: 15px;
  color: #ffffff;
}

.primary_menu_son_box {
  box-sizing: border-box;
  width: 100%;
  height: 0;
  background-color: #4c5486;
  transition: all 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.primary_menu_item:hover {
  color: #ffffff;
  background: #4c5486;
  text-decoration: none;
}

.primary_menu_item.active {
  background: #4c5486;
  color: #ffffff;
  text-decoration: none;
}

/*.primary_menu_item_son:hover {*/
/*    background: red;*/
/*}*/

/*.primary_menu_item_son.active {*/
/*    background: red;*/
/*}*/

.primary_menu_item p {
  /*width: 60px;*/
  flex: 1;
}

.secondary_menu_box {
  width: 16.5%;
  box-sizing: border-box;
  background: #354052;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  padding: 10px 0;
  overflow-y: scroll;
}

.secondary_menu_box_main {
  width: 90%;
  height: 710px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}

.secondary_menu_item {
  width: 100%;
  background: #eff2f7;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 2px;
  margin-bottom: 7px;
}

.secondary_menu_item_cont li,
.secondary_menu_item_tt {
  height: 45px;
  font-size: 14px;
  padding-left: 12px;
  line-height: 45px;
  font-weight: 400;
  color: #354052;
  cursor: pointer;
}

.secondary_menu_item_tt {
  border-radius: 10px;
}

.secondary_menu_item_tt a {
  position: relative;
  display: block;
  width: 100%;
  height: 45px;
}

.accordion-group.active .secondary_menu_item_tt a:after {
  content: "";
  height: 0;
  width: 0;
  display: block;
  border: 5px transparent solid;
  border-bottom-width: 0;
  border-top-color: #333;
  position: absolute;
  top: 50%;
  right: 7%;
  transition: all ease 0.3s;
  -webkit-transform: translateY(-50%) rotate(-90deg);
  transform: translateY(-50%) rotate(-90deg);
}

.secondary_menu_item_tt a:after {
  content: "";
  height: 0;
  width: 0;
  transition: all ease 0.3s;
  display: block;
  border: 5px transparent solid;
  border-bottom-width: 0;
  border-top-color: #333;
  position: absolute;
  top: 50%;
  right: 7%;
  -webkit-transform: translateY(-50%) rotate(0deg);
  transform: translateY(-50%) rotate(0deg);
}

/*.accordion-group.active .secondary_menu_item_tt a.collapsed:after{
            content: '';
            height: 0;
            width: 0;
            transition: all ease .3s;
            display: block;
            border: 5px transparent solid;
            border-bottom-width: 0;
            border-top-color: #333;
            position: absolute;
            top: 50%;
            right: 7%;
            -webkit-transform: translateY(-50%) rotate(-90deg);
            transform: translateY(-50%) rotate(-90deg);
        }*/
.secondary_menu_item_cont li {
  border: 1px solid #e8e7ec;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom: none;
  font-size: 13px;
}

.secondary_menu_item_cont li:last-child {
  border-bottom: 1px solid #e8e7ec;
}

.accordion-group {
  border: none;
}

.accordion-group.active {
  background: white;
}

.accordion-group.active .secondary_menu_item_tt {
  background: white;
}

.accordion-body.collapse.in {
  background: white;
  margin-bottom: 5px;
}

.accordion-heading .accordion-toggle {
  margin: 0;
  padding: 0;
}

.secondary_menu_icon {
  width: 15.6px;
  margin-right: 6px;
}

.iframe_cont {
}

.iframe_cont {
  -webkit-flex: 1;
  flex: 1;
  position: relative;
  top: 0;
  left: 0;
  background: white;
  margin-left: 0;
}

.accordion-inner {
  border: none;
}

.menu-contain-right {
  -webkit-flex: 1;
  flex: 1;
  display: -webkit-flex;
  display: flex;
}

@media screen and (max-width: 700px) {
  .menu-contain {
    position: relative;
    overflow: scroll;
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  .primary_menu_box {
    width: 100%;
    height: 108px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .primary_menu_item {
    width: 80px;
  }

  .menu-contain-right {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    overflow: scroll;
  }

  .secondary_menu_box {
    min-width: 100px;
  }
}

#compLogo {
  box-sizing: border-box;
  width: 160px;
  height: 100%;
  padding: 0 20px;
  /*margin-left: 35px;*/
  display: flex;
  align-items: flex-end;
}

.compLogo_img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.m-head .m-top .info {
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.top_nav_left_item {
  height: 20px;
  padding: 0 20px;
  border-right: 1px solid #fff;
  display: flex;
  align-items: center;
}

.top_nav_left_item:last-child {
  border-right: none;
}

.menu_icon_right {
  width: 5px;
  padding-top: 2px;
  transition: all 0.2s;
}

.site_info_area {
  /*margin-left: 20px;*/
  line-height: 26px;
  display: flex;
  align-items: center;
}

.top_nav_right_out {
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.top_nav_right {
  /*height: 100%;*/
  display: flex;
  align-items: center;
}

.exit_img {
  width: 32px;
  height: auto;
  margin-right: 5px;
  object-fit: contain;
}

.exit_a {
  display: flex;
  align-items: center;
}

.exit_area {
  position: relative;
  width: 130px;
  display: flex;
  justify-content: center;
}

.exit_area::before {
  content: "";
  background: #e7eef6;
  height: 20px;
  width: 1px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.exit_area:last-child::before {
  display: none;
}

.user_info_area {
  padding: 0 20px;
  line-height: 26px;
  display: flex;
  flex-direction: column;
}

.m-top_area {
  position: relative;
  width: 100%;
  background: url("https://img.wx.xiao-bo.com/_ftp/a_res_app/php/admin/img.acc/acc_top_menu_bg.jpg")
    center/cover no-repeat;
}

.btn_close_nav {
  position: absolute;
  width: 67px;
  height: auto;
  left: 50%;
  margin-left: -33.5px;
  bottom: 0;
  cursor: pointer;
  z-index: 9;
}

.btn_close_nav_close {
  transform: rotate(180deg);
  bottom: -25px;
}

#form1 {
  height: 100%;
}

.m-head {
  height: 100%;
}

.menu-contain {
  height: calc(100% - 80px);
}

.primary_menu_box {
  height: 100%;
}

.menu-contain-right {
  height: 100%;
}

/*做收银台更新样式————————————————————————————————————————*/
/*最顶部*/
.m-top_area {
  height: 2.75rem;
}

.m-head .m-top {
  height: 100%;
  padding: 0.5rem 0;
  font-size: 0.45rem;
}

#compLogo {
  box-sizing: content-box;
  width: 4rem;
  padding: 0 1rem;
}

.exit_area {
  width: auto;
  padding: 0 0.75rem;
}

/*菜单栏*/
.menu-contain {
  --menu_main_color: #4558ce;
}

.primary_menu_box {
  width: 100%;
  height: 1.75rem;
  background: #ffffff;
  overflow-x: scroll;
  overflow-y: unset;
  display: flex;
}

.menu-contain-right {
  width: 100%;
}

.primary_menu_item {
  width: auto;
  height: 100%;
  margin: 0 1.5rem;
  padding: 0 0.5rem;
  font-size: 0.55rem;
  line-height: 0.55rem;
  color: #363636;
}

.primary_menu_icon,
.menu_icon_right {
  display: none;
}

.primary_menu_item.active {
  height: 100%;
  background: #ffffff;
  border-bottom: 0.1rem solid var(--menu_main_color);
}

.active .primary_menu_txt {
  color: var(--menu_main_color);
}
.primary_menu_item:hover {
  color: var(--menu_main_color);
  background: #ffffff;
}
</style>