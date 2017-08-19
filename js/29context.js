/**
 * Created by Administrator on 2017/8/18.
 */
$(function () {
    var arr = getRequest();
    var productName = arr['category'];
    var productId = arr['categoryId'];
    $('#productCla').html(productName);
    var pageid = 1;
    var totalCount = 100;
    productList(productId, pageid);
});


function productList(productId, pageid, totalCount) {
    $.ajax({
        url: "http://182.254.146.100:3000/api/getproductlist",
        data: {
            categoryid: productId,
            pageid: pageid
        },
        success: function (data) {
            var html = template("productList", {data: data.result});
            $("#product .productList").html(html);
            totalCount = Math.ceil(data.totalCount / data.pagesize);
            var str = "";
            for (var i = 1; i <= totalCount; i++) {
                str += "<option value='" + i + "'>" + i + "</option>";
            }
            $("#select").html(str);
        },
        complete: function () {
            $("#lbtn").off().on("click", function () {
                if (pageid === 1) return false;
                pageid--;
                productList(productId, pageid);
            });
            $("#rbtn").off().on("click", function () {
                if (pageid === totalCount) return false;
                pageid++;
                productList(productId, pageid, totalCount);
            });
            $("#select").off().change(function () {
                pageid=$(this).val();
                console.log(pageid);
                productList(productId, pageid);
            });
        }
    });
}


function getRequest() {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            //就是这句的问题
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
            //之前用了unescape()
            //才会出现乱码
        }
    }
    return theRequest;
}