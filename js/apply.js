$("#subject").on('click', function() {
    console.log($(this).height() + ':' + $(this).parent().height());
    $(this).parent().css('height', $(this).height()+500 + 'px');
});

$("#add_approver").on('click', function() {
    console.log('click!');
    alert('フッタに追加される予定');
});

$("#add_cc").on('click', function() {
    console.log('click!');
    alert('フッタに追加される予定');
});

