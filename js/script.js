$(document).ready(function () {
    console.log("document ready");
    $('.tagline .container h1').load("aboutme.txt");
    //$('.tagline .container h1').html(txtAsp);
    //$('.container .logo:nth-child(2)').click(function () {
        //console.log("click logo 2");
        //$(this).append('<iframe src="https://profiles.generalassemb.ly/profiles/mallabonikki"></iframe>');
        //$('.container:eq(2) *').detach();
        //$('.container:eq(2)').append('<iframe src="https://profiles.generalassemb.ly/profiles/mallabonikki"></iframe>');
    //});

    $('nav a').on('click', function () {
        // Current class assignment
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');
        
        //Set heading text
        $('h1#heading').text($(this).text());

        // Get and filter link text
        var category = $(this).text().toLowerCase().replace(' ', '-');

        // Remove hidden class if 'all-projects' is selected
        if (category == 'all-projects') {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function () {
                if(!$(this).hasClass(category)) {
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        // Stop link behaviour 
        return false;
    });

    $('ul#gallery li').mouseenter(function () {
        console.log('mouse enter event');
        //Get the data attribute values
        var title = $(this).children(':nth-child(2)').data('title');
        var desc = $(this).children(':nth-child(2)').data('desc');
         
        //validation
        if (desc == null) {
            desc = 'Click To Enlarge';
        }

        if (title == null) {
            title = '';
        }

        // create overlay div
        $(this).append('<div class="overlay"></div>');

        // get the overlay div
        var overlay = $(this).children('.overlay');

        //add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
        
        overlay.fadeIn(800);
    });

    // Mouseleave overlay
    $('ul#gallery li').mouseleave(function () {
        // create overlay div
        $(this).append('<div class="overlay"></div>');

        // get the overlay div
        var overlay = $(this).children('.overlay');

        //fade out overlay
        overlay.fadeOut(500);
        overlay.detach();
    });
});