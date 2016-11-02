/*
* description: 自定义脚本
*/

$(function() {
  "use strict";

  // setTimeout(function() {
  //   if($("#emotify-widget-frame")) {
  //     $("#emotify-container").addClass('emotify-mask');
  //   }
  // }, 200);

  $("#greeting-msg").lettering();

  if($("[title='知乎']")) {
    $("[title='知乎']").find('i').addClass('iconfont icon-zhihu');
  }

  try{
    if(window.console && window.console.log) {
      console.log(`%c` + `亲，要不要到火星做做客？`, `font-size:1.4em;
                font-family: "microsoft yahei";
                padding-left:2.2em;
                padding-top:2em;
                padding-bottom:2em;
                line-height:4em;
                background:url("http://7xwkxy.com1.z0.glb.clouddn.com/ufo-3.png") no-repeat left center;
                background-size:12%;`);
      console.log(`%c` + `http://www.dylan100.com`,`color:gray;`);
    }
  } catch(e) {}
})
