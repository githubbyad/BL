// BEGIN: Article Redirect on Mobile Site
$(document).ready(function() {
    if ($(window).width() < 1025 && $('#divMain').length) {
        window.location.href = "/lib/mdetail.php?dm=Yes&l=" + location.href;
    }
});
// END: Article Redirect on Mobile Site

// BEGIN: Directory  $&$

$(document).ready(function() {
    var a = $('.Directory-3rd-page-map').text();
    if (a != '') {
        b = a.replace(/\s+/g, '%20');
        $('.Directory-3rd-page-map').replaceWith('<span class="Directory-3rd-page-map"><iframe width="500" height="500" src="https://maps.google.com/maps?q=' + b + '&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></span>');
    } else if (a == '') {
        $('.Directory-Tabs .tab:nth-child(3)').css('display', 'none');
    }
});

// END: Directory

/* 
    // BEGIN: Login
    
    function OpenLoginPopup(ctl) {
    var s = readCookie('loginStatus');
    var myParameters = new Array();
    var qrStr;
    if (ctl == null) {qrStr = location.href;}
    else {qrStr = ctl.href;}
    myParameters = ReadSParameters(qrStr);
    var a = myParameters['a'];
    if (a == '1' && s != 'Yes') {
    createCookie('curl', escape(qrStr));
    window.open('/target_form2.asp?pform={{Login}}', target='_parent');
    return false;
    }
    else {return true;}
    } 
    
    // END: Login */


// BEGIN: Comments
/*    
    $(document).ready(function(){
    if($('.opinionbutton').length){
    var a = location.href.split('-p');
    var b = a[a.length-1];
    var c = b.split('-', 1).toString();
    $('.art-postComment').replaceWith('<iframe id="frame1" name="frame1" scrolling="no" width="100%" onload="window.parent.parent.scrollTo(0,0);iFrameResize({log:true}, \'#frame1\');" src="https://bulletlink.one/target_form2.asp?pform={{Opinion}}&site=newspaperpal.com&sysinformationid=' + c +  '&posturlscript=process_opinion2.asp&minform=Y&as=https://bulletlink.one" frameborder="0" style="width:100%;"></iframe>');
    }
    $('.opinionbutton').css('display','none'); 
    });
    */
// END: Comments


// BEGIN: Load More

(function($) {
    $.fn.uncomment = function(recurse) {
        $(this).contents().each(function() {
            if (recurse && this.hasChildNodes()) {
                $(this).uncomment(recurse);
            } else if (this.nodeType == 8) {
                var e = $('<span>' + this.nodeValue + '</span>');
                $(this).replaceWith(e.contents());
            }
        });
    };
})(jQuery);


$(document).ready(function() {
    $(".H4.uncomment1").wrapAll("<div class='H4-blockX H4-block1 hp-parent-div1'></div>");
    $(".H4.uncomment2").wrapAll("<div class='H4-blockX H4-block2 hp-parent-div1'></div>");
    $(".H4.uncomment3").wrapAll("<div class='H4-blockX H4-block3 hp-parent-div1'></div>");
    $(".H4.uncomment4").wrapAll("<div class='H4-blockX H4-block4 hp-parent-div1'></div>");
    $(".H4.uncomment5").wrapAll("<div class='H4-blockX H4-block5 hp-parent-div1'></div>");
    $(".H4.uncomment6").wrapAll("<div class='H4-blockX H4-block6 hp-parent-div1'></div>");
    $('.load_more').click(function() {
        if ($('.uncomment1').css('display') == 'block' && $('.uncomment2').css('display') == 'none') { // Load more articles on click
            $('.uncomment2').css('display', 'block');
            $('.uncomment2').uncomment(true);
        } else if ($('.uncomment2').css('display') == 'block' && $('.uncomment3').css('display') == 'none') {
            $('.uncomment3').css('display', 'block');
            $('.uncomment3').uncomment(true);
        } else if ($('.uncomment3').css('display') == 'block' && $('.uncomment4').css('display') == 'none') {
            $('.uncomment4').css('display', 'block');
            $('.uncomment4').uncomment(true);
        } else if ($('.uncomment4').css('display') == 'block' && $('.uncomment5').css('display') == 'none') {
            $('.uncomment5').css('display', 'block');
            $('.uncomment5').uncomment(true);
        } else if ($('.uncomment5').css('display') == 'block' && $('.uncomment6').css('display') == 'none') {
            $('.uncomment6').css('display', 'block');
            $('.uncomment6').uncomment(true);
        }

        if ($('.uncomment6').length) { if ($('.uncomment6 .H4-img').length) { $('.load_more').css('display', 'none'); } } else if ($('.uncomment5').length) { if ($('.uncomment5').length) { if ($('.uncomment5 .H4-img').length) { $('.load_more').css('display', 'none'); } } } else if ($('.uncomment4').length) { if ($('.uncomment4').length) { if ($('.uncomment4 .H4-img').length) { $('.load_more').css('display', 'none'); } } } else if ($('.uncomment3').length) { if ($('.uncomment3').length) { if ($('.uncomment3 .H4-img').length) { $('.load_more').css('display', 'none'); } } }


        if ($(window).width() > 1024) {
            setTimeout(function() {
                $('.col1, .col2, .col3').css('height', 'auto');
                a = $('.col1').height();
                b = $('.col2').height();
                c = $('.col3').height();

                if (a > b && a > c) {
                    $('.col2').css('height', a);
                    $('.col3').css('height', a);
                }
                if (b > a && b > c) {
                    $('.col1').css('height', b);
                    $('.col3').css('height', b);
                }
                if (c > a && c > b) {
                    $('.col1').css('height', c);
                    $('.col2').css('height', c);
                }
            }, 500);
        }
    });
});

// END: Load More



// BEGIN: Google Custom Search

$(document).ready(function() {
    $('.search-link, .searchIcons').click(function() {
        $('.search_content').addClass('search-flex');
        $('.search_remove').css('display', 'block');
        $('.gsib_a > input').attr('value', 'Search for...');
        $('.gsib_a > input').focus(function() {
            if (this.value == 'Search for...')
                this.value = '';
        });
        $('.gsib_a > input').blur(function() {
            if (this.value === '')
                this.value = 'Search for...';
        });
    });
    $('.search_remove').click(function() {
        $('.search_content').removeClass('search-flex');
        $('.search_remove').css('display', 'none');
    });
    $('.gsib_a > input').attr('value', 'Search for...');

    setInterval(function() {
        $('.gsc-results-close-btn-visible').click(function() {
            $('.search_content').removeClass('search-flex');
            $('.gsib_a > input').attr('value', 'Search for...');
        });
    }, 10);
});

$(window).bind('load', function() {
    $('.gsib_a > input').attr('value', 'Search for...');
    $('.gsib_a > input').focus(function() {
        if (this.value == 'Search for...')
            this.value = '';
    });
    $('.gsib_a > input').blur(function() {
        if (this.value === '')
            this.value = 'Search for...';
    });
});

// END: Google Custom Search


// BEGIN: Menus

$(document).ready(function() {
    $('.submenubodyhorizontal').each(function() { // Remove unused sub-menus
        if ($(this).css('display') == 'none') {
            $(this).remove();
        }
    });

    $('.SubMenuContainer1').each(function() { // Add arrows
        if ($(this).children('.submenubodyhorizontal').length) {
            $(this).parents('.menubodyhorizontal').addClass('arrow-active');
        }
    });

});

$(document).ready(function() {
    if ($(document).width() < 1025) { // Mobile Menu
        $('.hpe-in-menu > a').unwrap(); // Remove Homepage Editor Divs
        $('div.menubodyhorizontal > a[href="#"]').each(function() {
            $(this).attr('href', 'javascript:void(0);');
        });
        $('.mobile-wrap').toggle(function() {
            $('.mobile-wrap').addClass('mw');
            $('.icon-menu-bars').addClass('openm');
            $('.column6').slideDown(400);
        }, function() {
            $('.mobile-wrap').removeClass('mw');
            $('.icon-menu-bars').removeClass('openm');
            $('.column6').slideUp(200);
        });
        $('div.menubodyhorizontal > a').each(function() {
            if ($(this).attr('href') == 'javascript:void(0);') {
                $(this).toggle(function() {
                    //$(this).css({'color':'white', 'background-color':'black'});
                    $(this).siblings('.SubMenuContainer1').slideDown(300);
                }, function() {
                    //$(this).css({'color':'black', 'background-color':'transparent'});
                    $(this).siblings('.SubMenuContainer1').slideUp(200);
                });
            }
        });
    }
});

$(document).ready(function() {
    if ($(window).width() > 1024) {
        $('.SubMenuContainer1').each(function() { // For Menu without sub-menus
            if ($(this).css('display') == 'none') {
                $(this).addClass('NONEUL');
            }
        });
        $('.SubMenuContainer1.NONEUL').siblings('a').addClass('BlankSibling');
        $('a.BlankSibling').each(function() {
            var myParameters = new Array();
            myParameters = ReadSParameters();
            var smenu = myParameters["smenu"];
            if (this.href.indexOf('index' + smenu + '.htm') != -1) {
                $(this).css('background', '#05a2d3');
            }
            if (this.href.indexOf('home-' + smenu + '.htm') != -1) {
                $(this).css('background', '#05a2d3');
            }
        });
        $('div.submenubodyhorizontal a').each(function() { // For Menu with sub-menus
            var myParameters = new Array();
            myParameters = ReadSParameters();
            var smenu = myParameters["smenu"];
            if (this.name.indexOf('S_' + smenu + '_S') != -1) {
                $(this).parent('div.submenubodyhorizontal').addClass('ActiveLI');
                $('.ActiveLI').parent('.SubMenuContainer1').addClass('ActiveUL');
                $('.ActiveUL').siblings('a').css('background', '#05a2d3');
            }
        });
    }
});

$(window).bind('load', function() {
    if ($(document).width() > 1025) { // Submenu top height
        var mh = $('.menu-block').outerHeight(true); // Sticky menu
        var lh = $('.logo-block').offset().top + $('.logo-block').outerHeight(true);
        $(document).scroll(function() {
            if ($(document).scrollTop() > lh) {
                $('.mainbody').css('padding-top', mh);
                $('.menu-block').addClass('MenuStyleSticky');
            } else {
                $('.mainbody').css('padding-top', 0);
                $('.menu-block').removeClass('MenuStyleSticky');
            }
        });
    }
});


// END: Menus 


// BEGIN: 3 Column Borders

$(window).bind('load', function() {
    if ($(window).width() > 1024) {
        setTimeout(function() {
            a = $('.col1').height();
            b = $('.col2').height();
            c = $('.col3').height();

            if (a > b && a > c) {
                $('.col2').css('height', a);
                $('.col3').css('height', a);
            }
            if (b > a && b > c) {
                $('.col1').css('height', b);
                $('.col3').css('height', b);
            }
            if (c > a && c > b) {
                $('.col1').css('height', c);
                $('.col2').css('height', c);
            }
        }, 2000);
    }
});

// END: 3 Column Borders



// BEGIN: Section Layout

$(document).ready(function() {
    $('.article-section-body').each(function() {
        $('.article-section-image img[src^=\'/images/blank.gif\']').parents('.article-section-image').css('display', 'none');
        if ($(window).width() > 1025) {
            $('.article-section-image img[src^=\'/images/blank.gif\']').parents('.article-section-image').siblings('.article-section-heading').css('width', '100%');
            $('.article-section-image img[src^=\'/images/blank.gif\']').parents('.article-section-image').siblings('.article-section-date').css('width', '100%');
            $('.article-section-image img[src^=\'/images/blank.gif\']').parents('.article-section-image').siblings('.article-section-body').css('width', '100%');
        }
    });
    $('.article-section-archive-label > span').click(function() {
        $('.article-section-archive-block').css('display', 'none');
        $('.article-section-archive-list').css('display', 'block');
    });
});

$(window).bind('load', function() {
    if ($(window).width() > 1024) {
        setTimeout(function() {
            $('.col1, .col2, .col3').css('height', 'auto');
            a = $('.col1').height();
            b = $('.col2').height();
            c = $('.col3').height();

            if (a > b && a > c) {
                $('.col2').css('height', a);
                $('.col3').css('height', a);
            }
            if (b > a && b > c) {
                $('.col1').css('height', b);
                $('.col3').css('height', b);
            }
            if (c > a && c > b) {
                $('.col1').css('height', c);
                $('.col2').css('height', c);
            }
        }, 500);
    }
});

$(document).ready(function() {
    $('.article-section-body').each(function() {
        if ($(this).children('span').hasClass('pagemore')) {
            $(this).next('.article-section-more').css('display', 'inline-block');
        } else {
            $(this).next('.article-section-more').css('display', 'none');
        }
        $('.article-section-body').css('max-height', 'none');
        if ($(this).height() > 100) {
            $(this).next('.article-section-more').css('display', 'inline-block');
            $(this).addClass('article-shadow');
        } else {
            if ($(this).children('span').hasClass('pagemore')) {
                $(this).next('.article-section-more').css('display', 'inline-block');
                $(this).addClass('article-shadow');
            } else
                $(this).next('.article-section-more').css('display', 'none');
        }
        $('.article-section-body').css('max-height', '100px');
    });
});

// END: Section Layout

// BEGIN: PagePhoto Space and Size

$(window).bind('load', function() {
    if ($(document).width() > 1025) {
        $('.pagephoto.layout_pagephoto').each(function() {
            if ($(this).parent('span').parent('td').attr('align') == 'Right') { $(this).addClass('LeftSpace'); }
            if ($(this).parent('span').parent('td').attr('align') == 'Left') { $(this).addClass('RightSpace'); }
            if ($(this).width() > 640) {
                $(this).addClass('fullpagephoto');
                $(this).removeClass('LeftSpace');
                $(this).removeClass('RightSpace');
            }
        });
    }
});

// END: PagePhoto Space and Size


// BEGIN: Highlight 5

$(document).ready(function() {
    if ($(document).width() > 1025) {
        $('.H5-date.H5-mid-date script').remove();
        $('.H5-date.H5-small-date script').remove();
        setTimeout(function() {
            $('.H5-b-2').wrapAll('<div class="H5-mid hp-parent-div1"></div>');
            $('.H5-b-3').wrapAll('<div class="H5-small hp-parent-div1"></div>');
        }, 200);
    }
});

// END: Highlight 5


// BEGIN: Preview

function GetPreviewGroup1() { document.write('{{PutPreview109}}{{PutPreview110}}'); }

// END: Preview

// BEGIN: Script scroll top 

$(window).bind('load', function() {
    var offset = 600;
    var duration = 300;
    $(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').slideDown(duration);
        } else {
            jQuery('.back-to-top').slideUp(duration);
        }
    });
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });
});

// END: Script scroll top


// BEGIN: Product 

function PutGroup1() { document.write('<div id="group1" name="group1" class="group1"><script type="text/javascript" language="JavaScript">LoadDoc("{{PutDomain}}product-group1.htm", "group1", "");<\/script></div>'); }

function PutGroup2() { document.write('<div id="group2" name="group2" class="group2"><script type="text/javascript" language="JavaScript">LoadDoc("{{PutDomain}}product-group2.htm", "group2", "");<\/script></div>'); }

$(document).ready(function() {

    createCookie('product_page', location.href);
    // Set full width to product page
    if (window.location.href.indexOf("/product-") != -1 && $('.product1-container').length) {
        $('.mainbody').addClass('mainbodyx');
        document.title = $('.product1-label').text();
    }

    // Sales Tax value
    createCookie('salestax', $('.product1-salestax').text());

    // Remove blank Categories
    $('.product1-category').each(function() {
        if ($(this).children('span').css('display') == 'none') {
            $(this).css('display', 'none');
        }
    });

    // If Sale price not set
    $('.product1-price').each(function() {
        var rv = $(this).children('.product1-regular-price').attr('name');
        if ($(this).children('.product1-sale-price').attr('name') == '0') {
            $(this).children('.product1-sale-price').attr('name', rv);
        }
    });
    $('.product1-sale-price').each(function() {
        $(this).children('.product1-sale').text($(this).attr('name'));
    });


    $('.pc-cart').each(function() {
        if ($(this).attr('value') == '0') {
            $(this).attr('value', $(this).attr('data-name'));
        }
    });

    // Calculate Percentages
    $('.product1-price').each(function() {
        var d = 100 - (($(this).children('.product1-sale-price').attr('name') * 100) / $(this).children('.product1-regular-price').attr('name'));
        $(this).children('.product1-discount').children('span').text(parseInt(d));
    });
    $('.product1-price, .product2-price').css('visibility', 'visible');
    $('.pc-cart').removeClass('pc-cartx');

    // Page 2 Category
    if ($('.product2-category').length) {
        $('.product1-label more').after(" <span>></span> " + $('.product2-category').text());
        $('#blbodymain').addClass('product-blbody');
    }
    // Remove Regular Price if its same as Sales
    $('.product1-regular-price').each(function() {
        $(this).attr('data', $(this).siblings('.product1-sale-price').attr('name'));
        if ($(this).attr('name') == $(this).attr('data')) {
            $(this).css('display', 'none');
        }
    });

    // Remove Percentages if its 0%
    $('.product1-discount').each(function() {
        if ($(this).children('span').text() == '0') {
            $(this).css('display', 'none');
        }
    });

    // Add coma in Amount
    $('.product1-sale, .product1-reg s').each(function() {
        $(this).text(parseFloat($(this).text()).toLocaleString('en-US', {maximumFractionDigits:2}));
    });
    $('.pc-cart').each(function() { 
        $(this).attr('value', (parseFloat($(this).attr('value')).toLocaleString('en-US', {maximumFractionDigits:2})));
    });
    $('.pc-cart').each(function() {
        $(this).attr('data-name', (parseFloat($(this).attr('data-name')).toLocaleString('en-US', {maximumFractionDigits:2})));
    });

    // Click on Add to Cart button
    $('.product1-cart').each(function() {
        $(this).children('.pc-cart').click(function() {
            $(this).addClass('cart-added');
            $(this).addClass('cart-addedx');
        });
    });

    // Table border
    $('.product2-box').each(function() {
        var a = $(this).children('.product2-label').innerHeight();
        var b = $(this).children('.product2-value').innerHeight();
        if (a > b) {
            $(this).children('.product2-value').css('height', a);
        }
    });
    // Cart process
    $(".product1-cart-count").on("click", function() {
        if ($("#total-price span").text() == "0.00" || $("#total-price span").text() == "0") {
            $(".product1-empty").slideToggle();
        } else {
            $(".product-cart-items").slideToggle();
        }
    });
    setInterval(function() {
        if ($('.product-cart-items').css('display') != 'none' || $('.product1-empty').css('display') != 'none') {
            $(".product1-cart-count").addClass('cartx-open');
        }
        if ($('.product-cart-items').css('display') == 'none' || $('.product1-empty').css('display') == 'none') {
            $(".product1-cart-count").removeClass('cartx-open');
        }
    }, 10);
    $(".product-checkout-link a").on("click", function() {
        $(".product-cart-items").slideToggle();
    });
    $('.product1-continue').on("click", function() {
        $(".product1-empty").slideToggle();
        $('.pc-cart').removeClass('cart-added cart-addedx');
    });
    $('.mainbody').click(function() { // CHANGE THIS CLICK WHEN WORK AGAIN ON PRODUCT TASK
        $(".product-cartx").click(function() {
            $('.product-cartx').data('clicked', true);
        });
        // Close cart when click on site area
        if ($('.product-cartx').data('clicked')) {
            $('.product-cartx').data('clicked', false);
        } else {
            $('.product1-cart-count.cartx-open').removeClass('cartx-open');
            if ($('.product-cart-items').css('display') != 'none') {
                $(".product-cart-items").slideUp();
            }
            if ($('.product1-empty').css('display') != 'none') {
                $(".product1-empty").slideUp();
            }
        }
    });


    // Cart Numbers
    var c = $('.productx-currency').text();
    $(".pc-count").text("(" + ($("#list-item").children().length) + ")");

    // Add items to cart
    $(".pc-cart").on("click", function() {
        $(this).each(function() {
            var name = $(this).children('p').text();
            var sfee = $(this).attr('data-sfee'); // Service Fee
            if (sfee == '') {
                sfee = 0;
            } else if (sfee.indexOf('%') != -1) { // If Server Fee is having %
                sfee = sfee.replace(/%/g, "").replace(/[^\d\.\-]/g, "");
                sfee = (parseFloat($(this).attr("value").replace(/[^\d\.\-]/g, "")).toFixed(2).replace(/[^\d\.\-]/g, "") * parseFloat(sfee).toFixed(2)) / 100;
            }
            var dsc = $(this).attr('data-discount'); // Discounts
            if (dsc == '') {
                dsc = 0;
            }
            var dsct = $(this).attr('data-discount-table');
            if (dsct == undefined) {
                dsct = '';
            }
            var remove = "<button title='Remove from Cart' class='product1-remove'><img src='/lib/images/trash2.png'></button>";
            var weight = "<div class='productx-weight' style='display:none'>" + $(this).siblings('.product1-weight').text() + "</div>";
            var sfxx = "<div class='productx-sfeel' style='display:none'>" + sfee + "</div>";
            var dscx = "<div class='productx-dscx' style='display:none'>" + dsc + "</div>";
            var dsctx = "<div class='productx-dsctx' style='display:none' data-dsctx='" + dsct + "'></div>";
            var cena = "<span class='eachPrice productx-price'>" + $(this).attr("value") + "</span>";
            var pic = "<span class='hidden-pimg'>" + $(this).attr('data') + "</span><div class='productx-img'><img src='" + $(this).attr('data') + "'></div>";
            $("#list-item").append("<li>" + pic + "<div class='productx-name'>" + name + "</div>" + c + cena + remove + weight + sfxx + dscx + dsctx + "</li>");
            //number of items in cart
            $(".pc-count").text("(" + ($("#list-item").children().length) + ")");
            $(".pc-count").text();

            // cookies
            createCookie('cart', $("#list-item").children().length);
            setTimeout(function() {
                var n = readCookie('cart');
                for (var x = 1; x <= n; x++) {
                    createCookie('item' + x, $('#list-item li:nth-child(' + x + ') .productx-name').text());
                    createCookie('value' + x, $('#list-item li:nth-child(' + x + ') .productx-price').text());
                    createCookie('pic' + x, $('#list-item li:nth-child(' + x + ') .hidden-pimg').text());
                    createCookie('weight' + x, $('#list-item li:nth-child(' + x + ') .productx-weight').text());
                    createCookie('service_fee' + x, $('#list-item li:nth-child(' + x + ') .productx-sfeel').text());
                    createCookie('discount' + x, $('#list-item li:nth-child(' + x + ') .productx-dscx').text());
                    createCookie('discount_table' + x, $('#list-item li:nth-child(' + x + ') .productx-dsctx').attr('data-dsctx'));
                    createCookie('currency', $('.productx-currency').text());
                }
                createCookie('total', $('#total-price span').text());
            }, 500);

            //calculate total price
            var totalPrice = 0;
            $(".eachPrice").each(function() {
                var cenaEach = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
                totalPrice += cenaEach;
            });
            $("#total-price span").text(parseFloat(totalPrice).toLocaleString('en-US', {maximumFractionDigits:2}));
        });

        // Name Process
        var nameb = $('.product-cart-items .productx-name').map(function() {
            return $(this).text();
        }).get().join(', ');
        $('.pc-cart b').text(nameb);
        $('.pc-cart').each(function() {
            if ($(this).children('b').text().indexOf($(this).children('p').text()) >= 0) {
                $(this).addClass('cart-added');
            }
        });
        createCookie('nameb', nameb);

        // Notification
        setTimeout(function() {
            $('.cart-addedx').siblings(".productx-notification").addClass('pxn-up');
        }, 100);
        setTimeout(function() {
            $('.cart-addedx').siblings(".productx-notification").addClass('pxn-down');
        }, 1500);
        setTimeout(function() {
            $('.cart-addedx').siblings(".productx-notification").removeClass('pxn-up');
            $('.cart-addedx').siblings(".productx-notification").removeClass('pxn-down');
            $('.cart-added').removeClass('cart-addedx');
        }, 1600);

        //remove items from basket
        $(".product1-remove").click(function() {
            $(this).parent().remove();
            var totalPrice = 0;
            $(".eachPrice").each(function() {
                var cenaEach = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
                totalPrice += cenaEach;
            });
            $("#total-price span").text(parseFloat(totalPrice).toLocaleString('en-US', {maximumFractionDigits:2}));
            $(".pc-count").text("(" + ($("#list-item").children().length) + ")");
            if ($("#total-price span").text() != "0.00" || $("#total-price span").text() != "0") {
                $(".product1-empty").css('display', 'none');
                $(".product-cart-items").css('display', 'block');
            } else if ($("#total-price span").text() == "0.00" || $("#total-price span").text() == "0") {
                $(".product1-empty").css('display', 'block');
                $(".product-cart-items").css('display', 'none');
            }

            // cookies
            createCookie('cart', $("#list-item").children().length);
            var r = parseInt(readCookie('cart')) + 1;
            eraseCookie('item' + r);
            eraseCookie('value' + r);
            eraseCookie('pic' + r);
            eraseCookie('weight' + r);
            eraseCookie('service_fee' + r);
            eraseCookie('discount' + r);
            eraseCookie('discount_table' + r);
            createCookie('total', $('#total-price span').text());

            // zero cart
            if ($("#total-price span").text() == "0.00" || $("#total-price span").text() == "0") {
                $('.pc-cart').removeClass('cart-added cart-addedx');
                $('.product-cart-items').css('display', 'none');
                $('.product1-empty').css('display', 'block');
            }
            var nameb = $('.product-cart-items .productx-name').map(function() {
                return $(this).text();
            }).get().join(', ');
            $('.pc-cart b').text(nameb);
            createCookie('nameb', nameb);
            $('.pc-cart').each(function() {
                if ($(this).children('b').text().indexOf($(this).children('p').text()) >= 0) {
                    $(this).addClass('cart-added');
                } else {
                    $(this).removeClass('cart-added cart-addedx');
                }
            });
        });

        if ($("#total-price span").text() != "0" || $("#total-price span").text() != "0.00") {
            $(".product1-empty").css('display', 'none');
        }
        if ($("#total-price span").text() == "0.00" || $("#total-price span").text() == "0") {
            $(".product-cart-items").css('display', 'none');
        }
    });

    // Load cookie cart
    if (readCookie('cart') != null) {
        var l = readCookie('cart');
        $(".pc-count").text("(" + l + ")");
        for (var y = 1; y <= l; y++) {
            var i = readCookie('item' + y);
            var v = readCookie('value' + y);
            var p = readCookie('pic' + y);
            var w = readCookie('weight' + y);
            var sfyy = readCookie('service_fee' + y);
            var dscy = readCookie('discount' + y);
            var dscty = readCookie('discount_table' + y);
            var cc = readCookie('currency');
            $("#list-item").append("<li><span class='hidden-pimg'>" + p + "</span><div class='productx-img'><img src='" + p + "'></div><div class='productx-name'>" + i + "</div>" + cc + "<span class='eachPrice productx-price'>" + v + "</span><button title='Remove from Cart' class='product1-remove'><img src='/lib/images/trash2.png'></button><div class='productx-weight' style='display:none'>" + w + "</div><div class='productx-sfeel' style='display:none'>" + sfyy + "</div><div class='productx-dscx' style='display:none'>" + dscy + "</div><div class='productx-dsctx' style='display:none' data-dsctx='" + dscty + "'></div></li>");
        }
        var totalPrice = 0;
        $(".eachPrice").each(function() {
            var cenaEach = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
            totalPrice += cenaEach;
        });
        $("#total-price span").text(parseFloat(totalPrice).toLocaleString('en-US', {maximumFractionDigits:2}));
        var nameb = $('.product-cart-items .productx-name').map(function() {
            return $(this).text();
        }).get().join(', ');
        $('.pc-cart b').text(nameb);
        $('.pc-cart').each(function() {
            if ($(this).children('b').text().indexOf($(this).children('p').text()) >= 0) {
                $(this).addClass('cart-added');
            }
        });
    }

    // Remove 2
    $(".product1-remove").click(function() {
        $(this).parent().remove();
        var totalPrice = 0;
        $(".eachPrice").each(function() {
            var cenaEach = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
            totalPrice += cenaEach;
        });
        $("#total-price span").text(parseFloat(totalPrice).toLocaleString('en-US', {maximumFractionDigits:2}));
        $(".pc-count").text("(" + ($("#list-item").children().length) + ")");
        if ($("#total-price span").text() != "0") {
            $(".product1-empty").css('display', 'none');
            $(".product-cart-items").css('display', 'block');
        } else if ($("#total-price span").text() == "0") {
            $(".product1-empty").css('display', 'block');
            $(".product-cart-items").css('display', 'none');
        }

        // cookies
        createCookie('cart', $("#list-item").children().length);
        var r = parseInt(readCookie('cart')) + 1;
        eraseCookie('item' + r);
        eraseCookie('value' + r);
        eraseCookie('pic' + r);
        eraseCookie('weight' + r);
        eraseCookie('service_fee' + r);
        eraseCookie('discount' + r);
        eraseCookie('discount_table' + r);
        createCookie('total', $('#total-price span').text());

        // zero cart
        if ($("#total-price span").text() == "0.00" || $("#total-price span").text() == "0") {
            $('.pc-cart').removeClass('cart-added cart-addedx');
            $('.product-cart-items').css('display', 'none');
            $('.product1-empty').css('display', 'block');
        }
        var nameb = $('.product-cart-items .productx-name').map(function() {
            return $(this).text();
        }).get().join(', ');
        $('.pc-cart b').text(nameb);
        createCookie('nameb', nameb);
        $('.pc-cart').each(function() {
            if ($(this).children('b').text().indexOf($(this).children('p').text()) >= 0) {
                $(this).addClass('cart-added');
            } else {
                $(this).removeClass('cart-added cart-addedx');
            }
        });
    });

    // Reload browser while clicking on close icon
    $('.product-checkout-link, .pc-go-to-cart').click(function() {
        $('.product1-popup .mfp-close').click(function() {
            // location.reload();
            window.location.href = window.location.href;
        });
    });
    $('.product1-box1 a').click(function() {
        $('.product1-popup .mfp-close').click(function() {
            // location.reload();
            window.location.href = window.location.href;
        });
    });
});
// Quick Product View
$(window).bind('load', function() {
    $('.product1-price, .product2-price').css('visibility', 'visible');
    $('.pc-cart').removeClass('pc-cartx');
    $('.product2-price').each(function() {
        var rvv = $(this).children('.product2-regular-price').attr('name');
        if ($(this).children('.product2-sale-price').attr('name') == '0') {
            $(this).children('.product2-sale-price').attr('name', rvv);
        }
    });
    $('.product2-sale-price').each(function() {
        $(this).children('.product2-sale').text($(this).attr('name'));
    });
    $('.product2-regular-price').each(function() {
        $(this).attr('data', $(this).siblings('.product2-sale-price').attr('name'));
        if ($(this).attr('name') == $(this).attr('data')) {
            $(this).css('display', 'none');
        }
    });
    var d = 100 - (($('.product2-sale').text() * 100) / $('.product2-reg s').text());
    $('.product2-discount').children('span').text(parseInt(d));
    $('.product2-discount').each(function() {
        if ($(this).children('span').text() == '0') {
            $(this).css('display', 'none');
        }
    });
    var a = $('#p2img1 img').height();
    var b = $('#p2img2 img').height();
    if (a > b) {
        $('.product2-image-big').css('height', a);
    }
    if (a < b) {
        $('.product2-image-big').css('height', b);
    }
    if (a == b) {
        $('.product2-image-big').css('height', a);
    }
    if ($('.p2img2 img').attr('src') == '') {
        $('.p2img2, .product2-image-small').css('display', 'none');
    }
    $('.p2img1').click(function() {
        $('.p2img1').addClass('p2active');
        $('.p2img2').removeClass('p2active');
        $('#p2img1').css('display', 'block');
        $('#p2img2').css('display', 'none');
    });
    $('.p2img2').click(function() {
        $('.p2img2').addClass('p2active');
        $('.p2img1').removeClass('p2active');
        $('#p2img2').css('display', 'block');
        $('#p2img1').css('display', 'none');
        var a = $('#p2img1 img').height();
        var b = $('#p2img2 img').height();
        if (a > b) {
            $('.product2-image-big').css('height', a);
        }
        if (a < b) {
            $('.product2-image-big').css('height', b);
        }
        if (a == b) {
            $('.product2-image-big').css('height', a);
        }
    });
    $('.product2-sale, .product2-reg s').each(function() {
        $(this).text(parseFloat($(this).text()).toLocaleString('en-US', {maximumFractionDigits:2}));
    });
    $('.product2-value').each(function() { /* Remove Blank fields */
        if ($(this).css('display') == 'none') {
            $(this).parent('.product2-box').css('display', 'none');
        }
    });
    $('.product2-discount-table-inner table tbody tr').each(function() {
        if ($(this).children('td:last-child').text().indexOf('%') == -1) {
            $(this).children('td:last-child').addClass('dsc_amount');
        }
    });
    if (readCookie('currency')) {
        $('body').append('<style>.dsc_amount::before {content: "' + readCookie("currency") + '";}</style>');
    }
});
// END: Product
