/**
 * Created by C on 2017/8/16.
 */
$(function(){
    getCategoryTitle();
    bindLiClick();
})

//异步渲染title
function getCategoryTitle(){
    $.ajax({
        url:url+'api/getcategorytitle',
        success:function(data){
            console.log(data);
            var html = template('categoryTitleTpl' , {data:data.result})
            $('#categoryMenuUU').html(html);
        }
    })
}

//给title绑定点击事件
function bindLiClick(){
    $('#categoryMenuUU').on('click' , '.categoryTitle' ,function(){
        var tid = parseInt($(this).attr('titleId'));

        //    发ajax请求，请求content 添加到tid对应的div中
        $.ajax({
            url:url+'api/getcategory',
            data:{titleid : tid},
            success:function(data){
                var html = template('categoryListTpl' , {data:data.result})
                $(".categoryList" + tid).html(html);
            },
            complete:function(){
                $('.categoryList').hide();
                $('.categoryList'+ tid).show();
            }
        })

    })
}

function paiTa(){
}