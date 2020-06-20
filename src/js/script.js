 //jQuery 中  $(function() 的作用类似于传统 JavaScript 中的 window.onload 方法
 //当 HTML 中的 DOM（文档对象模型）已经加载，并且页面（包括图像）已经完全呈现时，将会触发此事件
 $(function() {
     //在这里编写JavaScript脚本

     // 初始化 tab 组件
     $('#myTab2 li:eq(0) a').tab('show');

     // 初始化 popover 组件
     $("[data-toggle='popover']").popover();

     // 初始化 collapse 组件展开回调事件
     $('#collapseOne').on('show.bs.collapse', function() { //在调用 show 方法后触发该事件
         alert('hi，我要展开咯！');
     });

 });
