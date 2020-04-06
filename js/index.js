$(document).ready(function () {
  //这里我采用了continue的方法；主要是避免第一项为“首页”没有二级列表的问题；
  //当然也可以使用var i = 1 ；来直接选择避免它——；
  function close(e) {
    for (var i = 0; i < $(".draw_box02").length; i++) {
      // if (i == 0) {
      //   continue;
      // }
      $(".draw_box02").eq(i).next().hide(200);
      $(".draw_box02").children('.toggle').removeClass('active');
    }
  };
  //这里在ready中，直接调用函数，并且关闭蒙版层（这里有弊端）——
  $(".mask").hide();
  close();


  //	抽屉打开事件---------------------------------------

  //这里没什么，主要就是运用jq的animate来动画控制开关——以及蒙版层的显示与隐藏
  $(".head_more").click(function () {
    $(".mask").show();
    $(".draw").animate({
      left: "0px"
    }, 200);
  });
  //	抽屉关闭事件
  $(".mask").click(function () {
    $(".mask").hide();
    $(".draw").animate({
      left: "-90%"
    }, 200);
  });
  //其他的是展开二级列表页面
  //is(":hidden")方法是用来判定元素是否处于隐藏状态；
  $(".draw_box02").click(function () {


    // if ($(this).siblings().hasClass('two')) {
    //   $(this).parent().toggleClass("pos2");
    // }
    // if ($(this).siblings().hasClass('three')) {
    //   $(this).parent().toggleClass("pos3");
    // }

    if ($(this).next().is(":hidden")) {
      close();
      $(this).next().slideToggle(200);
      $(this).children('.toggle').toggleClass('active');
    } else {
      $(this).next().slideToggle(200);
      $(this).children('.toggle').toggleClass('active');
    }
  });

});