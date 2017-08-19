/**
 * Created by Administrator on 2017/8/15.
 */
$(function () {
    menu();
    media();
    itemClick();
})

function menu() {
    $.ajax({
        url: "http://182.254.146.100:3000/api/getindexmenu",
        success: function (data) {
            console.log(data);
            var html = template("templateMenu", {data: data.result});
            $("#menu .row").html(html);
        }
    })
}
function media() {
    $.ajax({
        url: "http://182.254.146.100:3000/api/getmoneyctrl",
        success: function (data) {
            //console.log(data);
            var html = template("templateMedia", {data: data.result});
            $("#dissale .mediaList").html(html);
        }
    })
}
function itemClick() {

    $("#menu").on("click", ".item:nth-child(8)", function () {
        $(".item:nth-last-child(-n+4)").toggle();
        return false;
    })

}