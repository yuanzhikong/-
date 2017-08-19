/**
 * Created by C on 2017/8/16.
 */
$(function(){
    getCategoryTitle();
    bindLiClick();
})

//�첽��Ⱦtitle
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

//��title�󶨵���¼�
function bindLiClick(){
    $('#categoryMenuUU').on('click' , '.categoryTitle' ,function(){
        var tid = parseInt($(this).attr('titleId'));

        //    ��ajax��������content ��ӵ�tid��Ӧ��div��
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