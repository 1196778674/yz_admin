window.jQuery = window.$ = require('jquery');
$(function() {
    // 进入自执行的一些方法
    Public.autoLeftNav();
    $(window).resize(function() {
        Public.autoLeftNav();
    });
});
