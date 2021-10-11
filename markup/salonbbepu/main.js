
$(function () {
    // スクロール抑止
    let noScroll = function () {
        if ($(".no-scroll").length) {
            // PCでマウスホイールでのスクロール操作の制御
            $(window).on('wheel', function (e) {
                e.preventDefault();
            });

            // モバイル端末でのタッチスクロール操作の制御
            $(window).on('touchmove.noScroll', function (e) {
                e.preventDefault();
            });

            // 全てのスクロール操作の制御（ウィンドウ表示域で固定）
            $("body").css('overflow', 'hidden');

        } else {
            $(window).off('wheel');
            $(window).off('.noScroll');
            $("body").css('overflow', 'auto');
        }
    };

    // スクロール抑止のクラスをつける
    $('#ham-open').on('click', function () {
        if ($(this).prop('checked') == false) {
            $(".menu").removeClass("no-scroll");
        } else {
            $(".menu").addClass("no-scroll");
        }
        noScroll();
    });


    // アンカー移動時、ハンバーガーメニューを閉じる
    $('.menu li a').on('click', function (event) {
        $('#ham-open').prop('checked', false);
        $(".menu").removeClass("no-scroll");
        noScroll();
    });
});
