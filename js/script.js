var faqButtons = document.querySelectorAll('.faq-button');

for (var i = 0; i < faqButtons.length; i++) {
    faqButtons[i].addEventListener('click', function () {
        var content = this.nextElementSibling; 

        if (this.classList.contains('active')) {
            this.classList.remove('active');
            content.style.display = 'none'; 
            this.querySelector('.plus-minus').textContent = '+'; 
        } else {
            this.classList.add('active');
            content.style.display = 'block'; 
            this.querySelector('.plus-minus').textContent = '-'; 
        }
    });
}
//   ViewPort ------------------
var gag = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

//images
$(window).on("load", function () {
    if ($('img[srcset=\"' + gag + '\"].lazy').is(':in-viewport')) {
        $('img[srcset=\"' + gag + '\"].lazy:in-viewport').each(function () {
            var attr = $(this).attr('src');
            $(this).attr('srcset', attr);
        });

    }
    $(window).scroll(function () {
        if ($('img[srcset=\"' + gag + '\"].lazy').is(':in-viewport(600)')) {
            $('img[srcset=\"' + gag + '\"].lazy:in-viewport(600)').each(function () {
                var attr = $(this).attr('src');
                $(this).attr('srcset', attr);
            });
        }
    });


});
//iframe
$(window).on("load", function () {
    if ($('iframelazy').is(':in-viewport')) {
        $('iframelazy:in-viewport').each(function () {
            var attr = $(this).attr('data-src');
            $(this).attr('src', attr);
        });

    }
    $(window).scroll(function () {
        if ($('iframelazy').is(':in-viewport(600)')) {
            $('iframelazy:in-viewport(600)').each(function () {
                var attr = $(this).attr('data-src');
                $(this).attr('src', attr);
                $(this).removeAttr('data-src');
            });
        }
    });
});