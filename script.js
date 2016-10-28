




$(document).ready(function () {

    /*(if (typeof jQuery != "undefined") {

    	alert('jQuery is installed!');

       } else {

        alert('jQuery is not installed!');

    }*/
    var overlay1 = document.getElementById('overlay-1');
    var overlay2 = document.getElementById('overlay-2');
    var overlay3 = document.getElementById('overlay-3');
    var overlay4 = document.getElementById('overlay-4');

    var closeIcon = document.getElementsByClassName('close-icon');
    var closeOverlay = '';

    var a = $(overlay1).css('-webkit-clip-path');
    var b = $(overlay2).css('-webkit-clip-path');
    var c = $(overlay3).css('-webkit-clip-path');
    var d = $(overlay4).css('-webkit-clip-path');

    openCloseOverlay = function (closeIconValue, overlayElement, initialClipPathValue) {
        $(overlayElement).click(function () {
            $(this).css({
                'z-index': '10',
                opacity: 1,
                '-webkit-clip-path': 'inset(0% 0% 0% 0%)'
            })
        });

        $(closeIconValue).click(function () {
            var x = $(overlayElement).css({
                '-webkit-clip-path': initialClipPathValue
            });
            console.log($(overlayElement).css('-webkit-clip-path'));
        });
    };

    // closeOverlay = function (closeIconValue, overlaySelected, initialClipPathValue) {
    //     $(closeIconValue).click(function () {
    //         console.log(initialClipPathValue);
    //         console.log(overlaySelected)
    //         var x = $(overlaySelected).css({ '-webkit-clip-path': 'inset(0% 0% 55% 50%)' });
    //         console.log($(x).css('-webkit-clip-path'));
    //     });
    // };

    openCloseOverlay(closeIcon[0], overlay1, a);
    openCloseOverlay(closeIcon[1], overlay2, b);
    openCloseOverlay(closeIcon[2], overlay3, c);
    openCloseOverlay(closeIcon[3], overlay4, d);

    // closeOverlay(closeIcon[0], overlay1, a);
    // closeOverlay(closeIcon[1], overlay2, b);
    // closeOverlay(closeIcon[2], overlay3, c);
    // closeOverlay(closeIcon[3], overlay4, d);


});



