<template>
  <div class="hello">

    <div class="top">
      <div class="logo"><a href="Index.html"><img src="/static/images/logo.png" /></a></div>
      <div class="search">
        <form>
          <input type="text" value="" class="s_ipt" />
          <input type="submit" value="搜索" class="s_btn" />
        </form>
        <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
      </div>
      <div class="i_car">
        <div class="car_t">购物车 [ <span>3</span> ]</div>
        <div class="car_bg">
          <!--Begin 购物车未登录 Begin-->
          <div class="un_login">还未登录！<a href="Login.html" style="color:#ff4e00;">马上登录</a> 查看购物车！</div>
          <!--End 购物车未登录 End-->
          <!--Begin 购物车已登录 Begin-->
          <ul class="cars">
            <li>
              <div class="img"><a href="#"><img src="/static/images/car1.jpg" width="58" height="58" /></a></div>
              <div class="name"><a href="#">法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只</a></div>
              <div class="price"><font color="#ff4e00">￥399</font> X1</div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="/static/images/car2.jpg" width="58" height="58" /></a></div>
              <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
              <div class="price"><font color="#ff4e00">￥399</font> X1</div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="/static/images/car2.jpg" width="58" height="58" /></a></div>
              <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
              <div class="price"><font color="#ff4e00">￥399</font> X1</div>
            </li>
          </ul>
          <div class="price_sum">共计&nbsp; <font color="#ff4e00">￥</font><span>1058</span></div>
          <div class="price_a"><a href="#">去购物车结算</a></div>
          <!--End 购物车已登录 End-->
        </div>
      </div>
    </div>
    <!--End Header End-->
    <!--Begin Menu Begin-->
    <div class="menu_bg">
      <div class="menu">
        <!--Begin 商品分类详情 Begin-->
        <div class="nav">
          <div class="nav_t">全部商品分类</div>
          <div class="leftNav">
            <ul>
              <li v-for="qw in str">
                <div class="fj">
                  <span class="n_img"><span></span><img src="/static/images/nav1.png" /></span>
                  <span class="fl" >{{qw.class_name}}</span>
                </div>
                <div class="zj">
                  <div class="zj_l">
                    <div class="zj_l_c">
                      <a v-for="sos in qw.sos">{{sos.class_name}}</a>
                    </div>
                  </div>
                  <div class="zj_r">
                    <a href="#"><img src="/static/images/n_img1.jpg" width="236" height="200" /></a>
                    <a href="#"><img src="/static/images/n_img2.jpg" width="236" height="200" /></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--End 商品分类详情 End-->
        <ul class="menu_r">
          <li><a href="Index.html">首页</a></li>
          <li><a href="Food.html">美食</a></li>
          <li><a href="Fresh.html">生鲜</a></li>
          <li><a href="HomeDecoration.html">家居</a></li>
          <li><a href="SuitDress.html">女装</a></li>
          <li><a href="MakeUp.html">美妆</a></li>
          <li><a href="Digital.html">数码</a></li>
          <li><a href="GroupBuying.html">团购</a></li>
        </ul>
        <div class="m_ad">中秋送好礼！</div>
      </div>
    </div>
    <!--End Menu End-->
    <div class="i_bg bg_color">
      <div class="i_ban_bg">
        <!--Begin Banner Begin-->
        <div class="banner">
          <div class="top_slide_wrap">
            <ul class="slide_box bxslider">
              <li><img src="/static/images/ban1.jpg" width="740" height="401" /></li>
              <li><img src="/static/images/ban1.jpg" width="740" height="401" /></li>
              <li><img src="/static/images/ban1.jpg" width="740" height="401" /></li>
            </ul>
            <div class="op_btns clearfix">
              <a href="#" class="op_btn op_prev"><span></span></a>
              <a href="#" class="op_btn op_next"><span></span></a>
            </div>
          </div>
        </div>

        <!--End Banner End-->
        <div class="inews">
          <div class="news_t">
            <span class="fr"><a href="#">更多 ></a></span>新闻资讯
          </div>
          <ul>
            <li><span>[ 特惠 ]</span><a href="#">掬一轮明月 表无尽惦念</a></li>
            <li><span>[ 公告 ]</span><a href="#">好奇金装成长裤新品上市</a></li>
            <li><span>[ 特惠 ]</span><a href="#">大牌闪购 · 抢！</a></li>
            <li><span>[ 公告 ]</span><a href="#">发福利 买车就抢千元油卡</a></li>
            <li><span>[ 公告 ]</span><a href="#">家电低至五折</a></li>
          </ul>
          <div class="charge_t">
            话费充值<div class="ch_t_icon"></div>
          </div>
          <form>
            <table border="0" style="width:205px; margin-top:10px;" cellspacing="0" cellpadding="0">
              <tr height="35">
                <td width="33">号码</td>
                <td><input type="text" value="" class="c_ipt" /></td>
              </tr>
              <tr height="35">
                <td>面值</td>
                <td>
                  <select class="jj" name="city">
                    <option value="0" selected="selected">100元</option>
                    <option value="1">50元</option>
                    <option value="2">30元</option>
                    <option value="3">20元</option>
                    <option value="4">10元</option>
                  </select>
                  <span style="color:#ff4e00; font-size:14px;">￥99.5</span>
                </td>
              </tr>
              <tr height="35">
                <td colspan="2"><input type="submit" value="立即充值" class="c_btn" /></td>
              </tr>
            </table>
          </form>
        </div>
      </div>

      <!--Begin 热门商品 Begin-->
      <div class="i_t mar_10">
        <span class="fl">热门商品</span>
        <span class="i_mores fr"><a href="javascript:void(0)">更多</a></span>
      </div>
      <div class="like">
        <div id="featureContainer1">
          <div id="feature1">
            <div id="block1">
              <div id="botton-scroll1" style="visibility: visible; overflow: hidden; position: relative; z-index: 2; left: 0px; width: 1200px;">
                <ul class="featureUL" style="margin: 0px; padding: 0px; position: relative; list-style-type: none; z-index: 1; width: 3600px; left: -2400px;">
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;v-for="npm in msg">
                    <div class="box">
                      <div class="h_icon"><img width="50" height="50" src="/static/images/hot.png">
                      </div>
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="/static/images/hot1.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>德国进口</h2>
                          德亚全脂纯牛奶200ml*48盒
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>189</span></font> &nbsp; 26R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="h_icon"><img width="50" height="50" src="/static/images/hot.png">
                      </div>
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="/static/images/hot2.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>iphone 6S</h2>
                          Apple/苹果 iPhone 6s Plus公开版
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>5288</span></font> &nbsp; 25R
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
            <a href="javascript:void();" class="l_prev">Previous</a>
            <a href="javascript:void();" class="l_next">Next</a>
          </div>
        </div>
      </div>

      <div class="content mar_20">
        <img src="/static/images/mban_1.jpg" width="1200" height="110" />
      </div>
      <!--Begin 进口 生鲜 Begin-->
      <div class="i_t mar_10">
        <span class="floor_num">1F</span>
        <span class="fl">进口 <b>·</b> 生鲜</span>
        <span class="i_mores fr"><a href="#">进口咖啡</a>&nbsp; &nbsp; &nbsp; <a href="#">进口酒</a>&nbsp; &nbsp; &nbsp; <a href="#">进口母婴</a>&nbsp; &nbsp; &nbsp; <a href="#">新鲜蔬菜</a>&nbsp; &nbsp; &nbsp; <a href="#">新鲜水果</a></span>
      </div>
      <div class="content">

        <div class="fresh_mid">
          <ul>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_1.jpg" width="185" height="155" /></a></div>
            </li>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_2.jpg" width="185" height="155" /></a></div>
            </li>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_3.jpg" width="185" height="155" /></a></div>
            </li>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_4.jpg" width="185" height="155" /></a></div>
            </li>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_1.jpg" width="185" height="155" /></a></div>
            </li>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_5.jpg" width="185" height="155" /></a></div>
            </li>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_6.jpg" width="185" height="155" /></a></div>
            </li>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_5.jpg" width="185" height="155" /></a></div>
            </li>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_5.jpg" width="185" height="155" /></a></div>
            </li>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_5.jpg" width="185" height="155" /></a></div>
            </li>
            <li>
              <div class="name"><a href="#">新鲜美味  进口美食</a></div>
              <div class="price">
                <font>￥<span>198.00</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#"><img src="/static/images/fre_5.jpg" width="185" height="155" /></a></div>
            </li>

          </ul>
        </div>

      </div>
      <!--End 进口 生鲜 End-->

      <!-- Begin 广告 Begin -->
      <div class="content mar_20">
        <img width="1200" height="110" src="/static/images/mban_1.jpg">
      </div>
      <!-- End 广告 End -->

      <!--Begin 食品饮料 Begin-->
      <div v-for="(value, name) in str1">

      <div class="i_t mar_10">
        <span class="floor_num">2F</span>
        <span class="fl">{{name}}</span>
        <span class="i_mores fr"><a href="#">咖啡</a>&nbsp; &nbsp; | &nbsp; &nbsp;<a href="#">休闲零食</a>&nbsp; &nbsp; | &nbsp; &nbsp;<a href="#">饼干糕点</a>&nbsp; &nbsp; | &nbsp; &nbsp;<a href="#">冲饮谷物</a>&nbsp; &nbsp; | &nbsp; &nbsp;<a href="#">营养保健</a></span>
      </div>
      <div class="content">
        <div class="fresh_mid">
          <ul>
            <li  v-for="qwa in value">
              <div class="name" ><span>{{qwa[0]}}</span></div>
              <div class="price">
                <font>￥<span>96.00</span></font> &nbsp; 25R
              </div>
              <div class="img"><router-link tag="a" :to="{path: '/shop', query: {id:qwa[1]}}" class="thumbnail"><img src="/static/images/food_1.jpg" width="185" height="155" /></router-link></div>
        </li>
          </ul>
        </div>
      </div>
      </div>
      <!--End 食品饮料 End-->

      <!-- Begin 广告 Begin -->
      <div class="content mar_20">
        <img width="1200" height="110" src="/static/images/mban_1.jpg">
      </div>
      <!-- End 广告 End -->
      <!--Begin 个人美妆 Begin-->
      <div class="b_btm_bg b_btm_c">
        <div class="b_btm">
          <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
            <tr>
              <td width="72"><img src="/static/images/b1.png" width="62" height="62" /></td>
              <td><h2>正品保障</h2>正品行货  放心购买</td>
            </tr>
          </table>
          <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
            <tr>
              <td width="72"><img src="/static/images/b2.png" width="62" height="62" /></td>
              <td><h2>满38包邮</h2>满38包邮 免运费</td>
            </tr>
          </table>
          <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
            <tr>
              <td width="72"><img src="/static/images/b3.png" width="62" height="62" /></td>
              <td><h2>天天低价</h2>天天低价 畅选无忧</td>
            </tr>
          </table>
          <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
            <tr>
              <td width="72"><img src="/static/images/b4.png" width="62" height="62" /></td>
              <td><h2>准时送达</h2>收货时间由你做主</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="b_nav">
        <dl>
          <dt><a href="#">新手上路</a></dt>
          <dd><a href="#">售后流程</a></dd>
          <dd><a href="#">购物流程</a></dd>
          <dd><a href="#">订购方式</a></dd>
          <dd><a href="#">隐私声明</a></dd>
          <dd><a href="#">推荐分享说明</a></dd>
        </dl>
        <dl>
          <dt><a href="#">配送与支付</a></dt>
          <dd><a href="#">货到付款区域</a></dd>
          <dd><a href="#">配送支付查询</a></dd>
          <dd><a href="#">支付方式说明</a></dd>
        </dl>
        <dl>
          <dt><a href="#">会员中心</a></dt>
          <dd><a href="#">资金管理</a></dd>
          <dd><a href="#">我的收藏</a></dd>
          <dd><a href="#">我的订单</a></dd>
        </dl>
        <dl>
          <dt><a href="#">服务保证</a></dt>
          <dd><a href="#">退换货原则</a></dd>
          <dd><a href="#">售后服务保证</a></dd>
          <dd><a href="#">产品质量保证</a></dd>
        </dl>
        <dl>
          <dt><a href="#">联系我们</a></dt>
          <dd><a href="#">网站故障报告</a></dd>
          <dd><a href="#">购物咨询</a></dd>
          <dd><a href="#">投诉与建议</a></dd>
        </dl>
        <div class="b_tel_bg">
          <a href="#" class="b_sh1">新浪微博</a>
          <a href="#" class="b_sh2">腾讯微博</a>
          <p>
            服务热线：<br />
            <span>400-123-4567</span>
          </p>
        </div>
        <div class="b_er">
          <div class="b_er_c"><img src="/static/images/er.gif" width="118" height="118" /></div>
          <img src="/static/images/ss.png" />
        </div>
      </div>
      <div class="btmbg">
        <div class="btm">
          备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
          <img src="/static/images/b_1.gif" width="98" height="33" /><img src="/static/images/b_2.gif" width="98" height="33" /><img src="/static/images/b_3.gif" width="98" height="33" /><img src="/static/images/b_4.gif" width="98" height="33" /><img src="/static/images/b_5.gif" width="98" height="33" /><img src="/static/images/b_6.gif" width="98" height="33" />
        </div>
      </div>
      <!--End Footer End -->
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg:[],
        str:10,
        str1:[],
        name:localStorage.getItem("name")
      }
    },
    mounted() {
      var name = localStorage.getItem("name");
      axios.post("http://localhost/laravel/blog/public/api/shpp")
          .then(response => (this.msg = response.data))
      axios.post('http://localhost/laravel/blog/public/api/ation')
        .then(response => (this.str = response.data))
      axios.post('http://localhost/laravel/blog/public/api/floor')
        .then(response => (this.str1 = response.data))
          .catch(function (error) {
          console.log(error)
        })
    }
  }
  // 为给定 ID 的 user 创建请求
</script>
