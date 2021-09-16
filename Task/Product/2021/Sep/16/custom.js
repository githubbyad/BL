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
        $(this).text(parseFloat($(this).text()).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
    });
    $('.pc-cart').each(function() {
        $(this).attr('value', (parseFloat($(this).attr('value')).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")));
    });
    $('.pc-cart').each(function() {
        $(this).attr('data-name', (parseFloat($(this).attr('data-name')).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")));
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
            }
            if (sfee.indexOf('%') != -1) { // If Server Fee is having %
                sfee = sfee.replace(/%/g, "").replace(/[^\d\.\-]/g, "");
                sfee = (parseFloat($(this).attr("value").replace(/[^\d\.\-]/g, "")).toFixed(2).replace(/[^\d\.\-]/g, "") * parseFloat(sfee).toFixed(2)) / 100;
            }
            var remove = "<button title='Remove from Cart' class='product1-remove'><img src='/lib/images/trash2.png'></button>";
            var weight = "<div class='productx-weight' style='display:none'>" + $(this).siblings('.product1-weight').text() + "</div>";
            var sfxx = "<div class='productx-sfeel' style='display:none'>" + sfee + "</div>";
            var cena = "<span class='eachPrice productx-price'>" + $(this).attr("value") + "</span>";
            var pic = "<span class='hidden-pimg'>" + $(this).attr('data') + "</span><div class='productx-img'><img src='" + $(this).attr('data') + "'></div>";
            $("#list-item").append("<li>" + pic + "<div class='productx-name'>" + name + "</div>" + c + cena + remove + weight + sfxx + "</li>");
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
            $("#total-price span").text(parseFloat(totalPrice).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
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
            $("#total-price span").text(parseFloat(totalPrice).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
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
            var cc = readCookie('currency');
            $("#list-item").append("<li><span class='hidden-pimg'>" + p + "</span><div class='productx-img'><img src='" + p + "'></div><div class='productx-name'>" + i + "</div>" + cc + "<span class='eachPrice productx-price'>" + v + "</span><button title='Remove from Cart' class='product1-remove'><img src='/lib/images/trash2.png'></button><div class='productx-weight' style='display:none'>" + w + "</div><div class='productx-sfeel' style='display:none'>" + sfyy + "</div></li>");
        }
        var totalPrice = 0;
        $(".eachPrice").each(function() {
            var cenaEach = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
            totalPrice += cenaEach;
        });
        $("#total-price span").text(parseFloat(totalPrice).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
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
        $("#total-price span").text(parseFloat(totalPrice).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
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
        $(this).text(parseFloat($(this).text()).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
    });
    $('.product2-value').each(function() { /* Remove Blank fields */
        if ($(this).css('display') == 'none') {
            $(this).parent('.product2-box').css('display', 'none');
        }
    });
});
// END: Product
