/**
 * Created by C on 2017/8/15.
 */
$(function () {
    //首页菜单动态渲染
    getIndexMenu();
    getDissale();
})
//首页菜单动态渲染
function getIndexMenu(){
    $.ajax({
        url: url + "api/getindexmenu",
        success: function (result) {
            //准备模板
            //绑定数据和模板
            var indexMenuHtml = template('indexMenuTpl',result);
            //html
            $('#menu .row').html(indexMenuHtml);
        }
    })
}
//首页折扣
function getDissale(){
    $.ajax({
        url:url+"api/getmoneyctrl",
        success:function(data){
            console.log(data);
            var html = template('indexDissaleTpl' , {data:data.result});
            console.log(html);
            $('#dissale .dissaleList').html(html);
        }
    })
}

