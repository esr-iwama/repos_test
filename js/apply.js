$(document).ready(function() {
    // TODO:
    $("#subject").on('click', function() {
        // console.log($(this).height() + ':' + $(this).parent().height());
        $(this).parent().css('height', $(this).height()+500 + 'px');
    });

    // TODO:
    $("#add_approver").on('click', function() {
        console.log('click!');
    });

    // TODO:
    $("#add_cc").on('click', function() {
        console.log('click!');
    });

    $('.price').each(function(){
        calcAmount(this);
        calcTotalAmount();
    });
    $('.price').each(function(){
        $(this).on('click, change, blur', function() {
            calcAmount(this);
            calcTotalAmount();
        });
    })
    
    $('.quantity').each(function(){
        $(this).on('click, change, blur', function() {
            calcAmount(this);
            calcTotalAmount();
        });
    })
    calcTotalAmount();
});


function calcAmount(obj) {
    var parent = $(obj).parent().parent();
    var price = $(parent).find('.price')[0];
    var quantity = $(parent).find('.quantity')[0];
    var amount = $(parent).find('.amount')[0];
    var replaced_price = Number($(price).val().replace('\\','').replace('$','').replace('€','').replace('\,',''));
    var replaced_quantity = Number($(quantity).val());
    if ( ($(price).val() == '' || $(quantity).val() == '') || (isNaN(replaced_price) || isNaN(replaced_quantity)) ) {
        if (isNaN(replaced_price) || replaced_price < 0) $(price).val([]);
        if (isNaN(replaced_quantity) || replaced_quantity < 0) $(quantity).val([]);
        $(amount).val([0]);
        return false;
    }
    $(amount).val(replaced_price * replaced_quantity);
}

function calcTotalAmount(){
    var totalAmount = 0;
    $('.amount').each(function(){
        totalAmount+=Number($(this).val().replace('\\','').replace('$','').replace('€','').replace('\,',''));
    })
    $($('#total_amount').find('.input')[0]).text('\\' + totalAmount);
}