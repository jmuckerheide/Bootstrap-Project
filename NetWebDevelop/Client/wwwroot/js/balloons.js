var animate = ["lightSpeedIn", "flipOutX", "jello", "jackInTheBox", "zoomOut", "rollIn"];
var randomAnimation = animate[Math.floor(Math.random() * 6)];

$('h1.animated').addClass(randomAnimation);

$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');

    $('#submit').on('click',
            function (e) {
                // preload audio
                var toast = new Audio('media/toast.wav');
                var checkbox = 0;
                $('.form-check-input').each(function (e) {
                    if ($(this).prop('checked') == true) {
                        checkbox = checkbox + 1;
                    }
                });
                if (checkbox == 0) {
                    e.preventDefault();
                    // first pause the audio (in case it is still playing)
                    toast.pause();
                    // reset the audio
                    toast.currentTime = 0;
                    // play audio
                    toast.play();
                    $('#toast').toast({ autohide: false }).toast('show');
                }

            });

        $(document).on('keyup',
            function (e) {
                if (e.key === "Escape") {
                    $('#toast').toast('hide');
                }
            });
        $('#checkAll').on('click',
            function () {

                $('.form-check-input').each(function (e) {
                    $(this).prop('checked', true);
                    $('#' + this.id + 'Img').css('visibility', 'visible');
                    // animate balloon in/out based on checkbox
                    $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown');
                });

            });
        $('#checkNone').on('click',
            function () {

                $('.form-check-input').each(function (e) {
                    $(this).prop('checked', false);
                    $('#' + this.id + 'Img').css('visibility', 'visible');
                    // animate balloon in/out based on checkbox
                    $('#' + this.id + 'Img').removeClass().addClass('animated bounceOutUp');
                });

            });

        $('.form-check-label').mouseover(function () {
            $('#change').css("color", $(this).data('color'));
        });
        $('.form-check-label').mouseleave(function () {
            $('#change').css("color", 'black');
        });
    });
});