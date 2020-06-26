// FIXED VALUEs
var HEADER_HEIGHT = 50;
var BUTTON_EXECUTING_TEXT = '処理中...';

// SELECTORs
var ID_CONTENTS = 'contents';
var ID_AP_LOGO = 'ap-logo';
var ID_NOTICE_ICON = 'notice-icon-img';
var ID_SETTING_ICON = 'setting-icon-img';
var CLASS_LABEL = 'label';
var CLASS_SUBMIT_BUTTON = 'submit_button';
var CLASS_SUBMIT_BUTTON_CLICKED = 'submit_button_clicked';
var CLASS_BALLOON_TIP = 'balloonTip';

$(document).ready(function() {
    adjustContentsScrollbar();
    bindCommonLink();
    bindSubmitButtons();
    bindLabelBalloon();
});

$(window).resize(function() {
    adjustContentsScrollbar();
});

// コンテンツ部のスクロールバー自動調整
function adjustContentsScrollbar() {
    $('#' + ID_CONTENTS).css('height', ($(window).height() - HEADER_HEIGHT) + 'px');
}

// 共通 入力項目ラベルのバルーン生成
function bindLabelBalloon() {
    $('.' + CLASS_LABEL).balloon({ html:true, position:"top left", offsetX:10 ,showDuration: 50, hideDuration: 10, classname: CLASS_BALLOON_TIP,css: {color: "#f0f0f0",backgroundColor: "#50c0f0",opacity: "0.90",textAlign: "left"}});
// TODO: 出したり消したりずらしたりいろいろ
/*
    $('.' + CLASS_LABEL).each(function(){
        $(this).on('click', function(){
            console.log('trigger balloon');
//            $(this).showBalloon({ html:true, position:"top left", offsetX:10 ,showDuration: 100, hideDuration: 50, classname: CLASS_BALLOON_TIP,css: {color: "#f0f0f0",backgroundColor: "#50c0f0",opacity: "0.90",textAlign: "left"}});
        });
    });
*/
}

// 共通 リンク設定
function bindCommonLink() {
    $('#' + ID_AP_LOGO).on('click', function(){
        mvPage('index.html');        
    });
    $('#' + ID_NOTICE_ICON).on('click', function(){
        window.alert('未実装');
    });
    $('#' + ID_SETTING_ICON).on('click', function(){
        window.alert('未実装');
    });
}

// 共通 リンクによる画面遷移
function mvPage(url) {
    location.href=url;
}

// 共通 疑似SubmitボタンへのSubmit処理
function bindSubmitButtons() {
    var btns = $('.' + CLASS_SUBMIT_BUTTON);
    $(btns).each(function(){
        $(this).on('click', function(){
            $(this).removeClass(CLASS_SUBMIT_BUTTON);
            $(this).text(BUTTON_EXECUTING_TEXT);
            $(this).addClass(CLASS_SUBMIT_BUTTON_CLICKED);
            var form = $(this).parent('form');
            var url = $(this).attr('action');
            $(form).attr('action',url);
            // TODO: mockup用 GitHub Pages対応
            // $(form).submit();
            location.href=$(form).attr('action');
        });
    });
}

// 共通 API呼び出し
// TODO:共通 API呼び出し
function callApi(url, params) {
    // TODO: spiner
    $(body).css('cursor', 'wait');
    // TODO: .ajax
    $(body).css('cursor', 'default');
}