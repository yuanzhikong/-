/**
 * Created by Administrator on 2017/8/16.
 */
$(function () {
    listMenu();
    listContext();
    //addClick();
})

function listMenu() {
    $.ajax({
        url: "http://182.254.146.100:3000/api/getcategorytitle",
        success: function (data) {
            console.log(data);
            var html = template("listText", {data: data.result});
            $("#listMenu .uu").html(html);
        }
    });
}

function listContext() {

    $(".listTitle0").trigger("click");
    $("#listMenu").on("click", ".listTitle", function () {
        var that = this;
        var tid = parseInt($(this).attr("titleId"));
        $.ajax({
            url: "http://182.254.146.100:3000/api/getcategory",
            data: {
                titleid: tid
            },
            success: function (data) {
                console.log(data);
                var html = template("listContext", {data: data.result});
               $(that).next('.listContext').html(html).toggle().siblings('.listContext').hide();

                //console.log($(".listContext" + tid));
            },
            complete: function () {
                //$('.listContext').hide();
                //$('.listContext' + tid).toggle();
                //$('.listContext' + tid).siblings('.listContext').hide().show();
            }
        });
    });
}

function addClick() {

}