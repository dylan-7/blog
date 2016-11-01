/*
* description: 自定义脚本
*/

$(function() {
  // setTimeout(function() {
  //   if($("#emotify-widget-frame")) {
  //     $("#emotify-container").addClass('emotify-mask');
  //   }
  // }, 200);

  $("#greeting-msg").lettering();

  if($("[title='知乎']")) {
    $("[title='知乎']").find('i').addClass('iconfont icon-zhihu');
  }
})
