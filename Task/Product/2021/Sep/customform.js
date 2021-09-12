// BEGIN: Product

$(document).ready(function() {
    if (window.location.href.indexOf("PAYMENT3_PayPalStandard&cart=Y") != -1) { // PayPal
        $('#blbodymain').addClass('product-payment');
        $('#blbodymain').addClass('blbodymainx');
        $('#CustomForm').addClass('productx-credit-cart-form');
        $('#CustomForm').addClass('productx-paypal-form');
        $('.formdivider.formdivider_custom').wrap("<div class='productx-formdivider2' />");
        $('.button').text('Proceed to PayPal');
        $('#Comments__Instructions').css('display', 'none');
        $('.product-payment .custom-form footer').after('<div class="productx-ssl"><img alt="SSL Security" src="/images/ssl_security.jpg" width="100"></div>');
        purl = location.href;
        var purlarr = new URL(purl);
        var i_amnt = purlarr.searchParams.get("i_amount");
        var i_name = purlarr.searchParams.get("i_name").replace(/_/g, " ").replace(/NEXT/g, ",").replace(/AND/g, "&").replace(/HASH/g, "#");
        var i_spm = purlarr.searchParams.get("i_spm").replace(/_/g, " ").replace(/NEXT/g, ",").replace(/AND/g, "&").replace(/HASH/g, "#");
        var i_crc = purlarr.searchParams.get("i_crc");
        $('.system_text.Header_text').after('<div class="product-descs"><div class="checkout-label"><span>Order Summary</span></div><div class="pdx-wrap"><div class="pdx-name"><div class="pdxx">Items:</div><div class="pdvv">' + i_name + '</div></div><div class="pdx-amnt"><div class="pdxx">Amount:</div><div class="pdvv">' + i_crc + i_amnt + '</div></div></div></div>');
        $('#CustomForm').prepend('<input type="HIDDEN" id="item_name" name="item_name" value="' + i_name + '"><input type="HIDDEN" id="Amount" name="Amount" value="' + i_amnt + '"><input type="HIDDEN" id="Shipping" name="Shipping" value="' + i_spm + '">');
        $('.system_text.footer_text').before('<section><div class="label"><div class="inp_custom"><div class="productx-formdivider2"><div class="formdivider formdivider_custom"><span>Your Information</span></div></div></div></div></section><section><label class="input"><input name="First_Name" value="" id="First_Name" maxlength="100" placeholder="First Name" type="Text" class="formfieldinput formfieldinput_custom" required=""><b class="tooltip tooltip-top-right">First Name is required.</b></label></section><section><label class="input"><input name="Last_Name" value="" id="Last_Name" maxlength="100" placeholder="Last Name" type="Text" class="formfieldinput formfieldinput_custom" required=""><b class="tooltip tooltip-top-right">Last Name is required.</b></label></section><section><label class="input"><input name="Address" value="" id="Address" maxlength="100" placeholder="Address" type="Text" class="formfieldinput formfieldinput_custom" required=""><b class="tooltip tooltip-top-right">Address is required.</b></label></section><section><label class="input"><input name="City" value="" id="City" maxlength="100" placeholder="City" type="Text" class="formfieldinput formfieldinput_custom" required=""><b class="tooltip tooltip-top-right">City is required.</b></label></section><section><label class="input"><input name="State" value="" id="State" maxlength="100" placeholder="State" type="Text" class="formfieldinput formfieldinput_custom" required=""><b class="tooltip tooltip-top-right">State is required.</b></label></section><section><label class="input"><input name="Zip" value="" id="Zip" maxlength="100" placeholder="Zip" type="Text" class="formfieldinput formfieldinput_custom" required=""><b class="tooltip tooltip-top-right">Zip is required.</b></label></section><section><label class="input"><input name="Phone" value="" id="Phone" maxlength="100" placeholder="Phone" type="Text" class="formfieldinput formfieldinput_custom" required=""><b class="tooltip tooltip-top-right">Phone is required.</b></label></section><section><label class="input"><input name="Email" value="" id="Email" maxlength="100" placeholder="Email" type="Email" class="formfieldinput formfieldinput_custom" required=""><b class="tooltip tooltip-top-right">Email is required.</b></label></section>');
    }
    if (window.location.href.indexOf("PAYMENT1_CreditCard_Online&cart=Y") != -1) { // Credit Card - Online
        $('#blbodymain').addClass('product-payment');
        $('.product-payment .custom-form footer').after('<div class="productx-ssl"><img alt="SSL Security" src="/images/ssl_security.jpg" width="100"></div>');
        purl = location.href;
        var purlarr = new URL(purl);
        var i_amnt = purlarr.searchParams.get("i_amount");
        var i_name = purlarr.searchParams.get("i_name").replace(/_/g, " ").replace(/NEXT/g, ",").replace(/AND/g, "&").replace(/HASH/g, "#");
        var i_spm = purlarr.searchParams.get("i_spm").replace(/_/g, " ").replace(/NEXT/g, ",").replace(/AND/g, "&").replace(/HASH/g, "#");
        var i_crc = purlarr.searchParams.get("i_crc");
        $('.system_text.Header_text').after('<div class="product-descs"><div class="checkout-label"><span>Order Summary</span></div><div class="pdx-wrap"><div class="pdx-name"><div class="pdxx">Items:</div><div class="pdvv">' + i_name + '</div></div><div class="pdx-amnt"><div class="pdxx">Amount:</div><div class="pdvv">' + i_crc + i_amnt + '</div></div></div></div>');
        $('#CustomForm').prepend('<input type="HIDDEN" id="item_name" name="item_name" value="' + i_name + '"><input type="HIDDEN" id="Total_Amount" name="Total_Amount" value="' + i_amnt + '"><input type="HIDDEN" id="Shipping" name="Shipping" value="' + i_spm + '">');
        $('#CustomForm').addClass('productx-credit-cart-form');
        $('#blbodymain').addClass('blbodymainx');
        $('.formdivider.formdivider_custom').wrap("<div class='productx-formdivider2' />");
        $('.button').text('Pay Now');
    }
});
$(document).ready(function() {
    if (window.location.href.indexOf("/cartcheckout.htm") != -1) {
        if (readCookie('cart') != null) {
            var l = readCookie('cart');
            var c = readCookie('currency');
            var st = readCookie('salestax');
            var ttx = readCookie('total').replace(/[^\d\.\-]/g, "");
            $(".checkout-total .pright p").text(parseFloat(ttx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
            $(".checkout-total b").text(l);
            $(".checkout-total .pright div").text(c);
            $(".checkout-shipping .pright b").text(c);
            $(".checkout-tax .pright b").text(c);
            $(".checkout-tax span .salex").text(st);
            $(".checkout-total-amount .pright b").text(c);
            for (var y = 1; y <= l; y++) {
                var i = readCookie('item' + y);
                var v = readCookie('value' + y);
                var p = readCookie('pic' + y);
                var w = readCookie('weight' + y);
                $(".checkout-load ol").append("<li><div class='li-line1'><span class='hidden-pimg'>" + p + "</span><div class='productx-img'><img src='" + p + "'></div></div><div class='li-line2'><div class='productx-name'>" + i + "</div><span class='productx-curr'>" + c + "</span><span data-value='" + v + "' class='eachPrice productx-price'>" + v + "</span><div class='qty-count'><div class='qty-div'>Quantity: </div><select name='qty' id='qty'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select></div><div class='sx-weight' style='display:none;'>" + w + "</div><div title='Click to Remove' class='productx-remove'><img src='/lib/images/trash2.png'></div></li>");
            }
            var tx = parseFloat($('.checkout-total .pright p').text().replace(/[^\d\.\-]/g, ""));
            var sx = parseFloat($('.checkout-shipping .pright p').text().replace(/[^\d\.\-]/g, ""));
            var stx = (tx * st) / 100;
            $('.checkout-tax .pright p').text(parseFloat(stx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
            var stxx = parseFloat($('.checkout-tax .pright p').text().replace(/[^\d\.\-]/g, ""));
            var fx = parseFloat(tx + sx + stxx);
            $('.checkout-total-amount .pright p').text(parseFloat(fx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
            createCookie('orderx-amount', parseFloat(fx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
            $('.li-line2').each(function() {
                $(this).children('.qty-count').attr('name', $(this).children('.qty-count').children('#qty').val());
            });
            var orderx = $('.li-line2 .productx-name').map(function() {
                return $(this).text();
            }).get().join(', ');
            createCookie('orderx-textarea', orderx);
        }
    }
});
$(window).bind('load', function() {
    if (window.location.href.indexOf("/cartcheckout.htm") != -1) {
        document.title = "Checkout";
        $('.pro-loader').animate({ opacity: 0 }, 500, function() { $('.loader').css('display', 'none'); });
        $('.checkout-container').css('visibility', 'visible');
        $('.checkout-container').animate({ opacity: 1 }, 1000);
        $('.checkout-load ol li').each(function() {
            $(this).children('.li-line2').children('.qty-count').children('#qty').attr('data-index', $(this).index() + 1)
        });
        var a = setInterval(function() {
            if ($('.ShippingMethods').length) {
                $(".hcdiv").clone().appendTo(".li-line2");
                $('.sx-weight').each(function() {
                    $(this).siblings('.hcdiv').prepend($(this).clone());
                });

                $('.li-line2 .hcdiv').each(function() {
                    var w = $(this).children('.sx-weight').text();
                    $(this).children('.ShippingMethods').children('.s-rates').children('p').each(function() {
                        if (parseFloat(w) === parseFloat($(this).attr('name'))) {
                            $(this).addClass('p-matched');
                        } else if (parseFloat(w) < parseFloat($(this).attr('name'))) {
                            $(this).addClass('p-more');
                        } else if (parseFloat(w) > parseFloat($(this).attr('name'))) {
                            $(this).addClass('p-less');
                        }
                    });
                });
                $('.s-rates').each(function() {
                    if ($(this).children('p.p-matched').length) {
                        $(this).children('p.p-less').remove();
                        $(this).children('p.p-more').remove();
                    } else if ($(this).children('p.p-less').length && $(this).children('p.p-more').length) {
                        $(this).children('p.p-less').remove();
                        $(this).children('p.p-more').addClass('pm-remove');
                        $(this).children('p.p-more:first-child').removeClass('pm-remove');
                        $(this).children('p.pm-remove').remove();
                    } else if ($(this).children('p.p-less').length && !$(this).children('p.p-more').length) {
                        $(this).children('p.p-less').addClass('pl-remove');
                        $(this).children('p.p-less:last-child').removeClass('pl-remove');
                        $(this).children('p.pl-remove').remove();
                    } else if (!$(this).children('p.p-less').length && $(this).children('p.p-more').length) {
                        $(this).children('p.p-more').addClass('pl-remove');
                        $(this).children('p.p-more:first-child').removeClass('pl-remove');
                        $(this).children('p.pl-remove').remove();
                    }
                });
                $('.li-line2 .hcdiv .ShippingMethods').each(function() {
                    var k = $(this).children('.s-method').text();
                    var v = $(this).children('.s-rates').children('p').text();
                    $(this).after('<option value="' + v + '">' + k + '</option>');
                });
                $('.li-line2 .hcdiv .ShippingMethods').remove();
                $('.hcdiv .sx-weight').remove();
                $('.li-line2 .hcdiv').each(function() {
                    $(this).children('option').wrapAll('<select class="ss-select" />');
                    $(this).prepend('<div class="shipping-div">Choose Shipping Method: </div><div class="eachPrice2" style="display:none;"></div>');
                });
                $('.li-line2 .hcdiv').css('display', 'block');
                $('.eachPrice2').each(function() {
                    $(this).text($(this).siblings('.ss-select').val());
                });
                $('.hcdiv').each(function() {
                    $(this).attr('data', $(this).children('.ss-select').val());
                });
                var t = 0;
                $(".hcdiv .ss-select").each(function() {
                    var p = parseFloat($(this).val());
                    t += p;
                });
                $(".checkout-shipping p").text(parseFloat(t).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                var tx = parseFloat($('.checkout-total .pright p').text().replace(/[^\d\.\-]/g, ""));
                var sx = parseFloat($('.checkout-shipping .pright p').text().replace(/[^\d\.\-]/g, ""));
                var st = readCookie('salestax');
                var stx = (tx * st) / 100;
                $('.checkout-tax .pright p').text(parseFloat(stx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                var stxx = parseFloat($('.checkout-tax .pright p').text().replace(/[^\d\.\-]/g, ""));
                var fx = parseFloat(tx + sx + stxx);
                $('.checkout-total-amount .pright p').text(parseFloat(fx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                createCookie('orderx-amount', parseFloat(fx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                $('.checkout-choose').append($("li:first-child .li-line2 .hcdiv .ss-select").clone());
                if ($('.checkout-choose .ss-select option').length == 1) {
                    $('.checkout-choose .ss-select').css('display', 'none');
                    $('.checkout-choose .shipping-divx').css('display', 'none');
                    $('.checkout-choose').append('<span>' + $(".checkout-choose .ss-select option").text() + '</span>');
                }
                createCookie('orderx-shipping', $('.checkout-choose .ss-select option:selected').text());
                $('.checkout-choose .ss-select').change(function() {
                    createCookie('orderx-shipping', $('.checkout-choose .ss-select option:selected').text());
                    var sn = $(".checkout-choose .ss-select").prop('selectedIndex');
                    $('.li-line2').each(function() {
                        $(this).children('.hcdiv').children('.ss-select').children('option:eq(' + sn + ')').attr('selected', 'selected');
                        $(this).children('.hcdiv').attr('data', $(this).children('.hcdiv').children('.ss-select').val());
                        var sq = parseFloat($(this).children('.qty-count').attr('name'));
                        var ss = parseFloat($(this).children('.hcdiv').attr('data'));
                        var sr = ss * sq;
                        $(this).children('.hcdiv').children('.eachPrice2').text(parseFloat(sr).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                        setTimeout(function() {
                            var totalPrice = 0;
                            $(".eachPrice2").each(function() {
                                var p = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
                                totalPrice += p;
                            });
                            $(".checkout-shipping .pright p").text(parseFloat(totalPrice).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                            var tx = parseFloat($('.checkout-total .pright p').text().replace(/[^\d\.\-]/g, ""));
                            var sx = parseFloat($('.checkout-shipping .pright p').text().replace(/[^\d\.\-]/g, ""));
                            var st = readCookie('salestax');
                            var stx = (tx * st) / 100;
                            $('.checkout-tax .pright p').text(parseFloat(stx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                            var stxx = parseFloat($('.checkout-tax .pright p').text().replace(/[^\d\.\-]/g, ""));
                            var fx = parseFloat(tx + sx + stxx);
                            $('.checkout-total-amount .pright p').text(parseFloat(fx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                            createCookie('orderx-amount', parseFloat(fx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                        }, 500);
                    });
                });
            }

            if ($('.checkout-choose .ss-select').length == 0) {
                $('.checkout-choose .ss-select').css('display', 'none');
                $('.checkout-choose .shipping-divx').css('display', 'none');
                $('.li-line2').append('<span style="display: none;" id="hcdiv" name="hcdiv" class="hcdiv" data="0"><div class="eachPrice2" style="display:none;">0</div></span>');
                $('.checkout-choose').append('<span>Free Shipping</span>');
                createCookie('orderx-shipping', 'Free Shipping');
                $('.checkout-shipping, .checkout-shipping-div, .checkout-choose').css('display', 'none');
            }

            if (readCookie('salestax') == "" || readCookie('salestax') == "0") {
                $('.checkout-tax').css('display', 'none');
            }

            $('.li-line2').each(function() {
                var vq = $(this).children('.productx-price').text().replace(/[^\d\.\-]/g, "");
                $(this).children('.qty-count').children('#qty').change(function() {
                    $(this).parents('.qty-count').attr('name', $(this).val());
                    if ($(this).val() > 1) {
                        $(this).parents('.qty-count').siblings('.productx-name').text($(this).parents('.qty-count').siblings('.productx-name').text().split(' -- (').shift() + ' -- (' + $(this).val() + ')');
                    }
                    if ($(this).val() == 1) {
                        $(this).parents('.qty-count').siblings('.productx-name').text($(this).parents('.qty-count').siblings('.productx-name').text().split(' -- (').shift());
                    }
                    var orderx = $('.li-line2 .productx-name').map(function() {
                        return $(this).text();
                    }).get().join(', ');
                    createCookie('orderx-textarea', orderx);
                    var sq = parseFloat($(this).parents('.qty-count').siblings('.hcdiv').attr('data'));
                    var qq = $(this).val();
                    var px = vq * qq;
                    var sx = sq * qq;
                    $(this).parents('.qty-count').siblings('.productx-price').text(parseFloat(px).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                    $(this).parents('.qty-count').siblings('.hcdiv').children('.eachPrice2').text(parseFloat(sx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                    setTimeout(function() {
                        var x = 0;
                        $(".eachPrice").each(function() {
                            var p = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
                            x += p;
                        });
                        $(".checkout-total .pright p").text(parseFloat(x).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                        var y = 0;
                        $(".eachPrice2").each(function() {
                            var z = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
                            y += z;
                        });
                        $(".checkout-shipping .pright p").text(parseFloat(y).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                        var tx = parseFloat($('.checkout-total .pright p').text().replace(/[^\d\.\-]/g, ""));
                        var sx = parseFloat($('.checkout-shipping .pright p').text().replace(/[^\d\.\-]/g, ""));
                        var st = readCookie('salestax');
                        var stx = (tx * st) / 100;
                        $('.checkout-tax .pright p').text(parseFloat(stx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                        var stxx = parseFloat($('.checkout-tax .pright p').text().replace(/[^\d\.\-]/g, ""));
                        var fx = parseFloat(tx + sx + stxx);
                        $('.checkout-total-amount .pright p').text(parseFloat(fx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                        createCookie('orderx-amount', parseFloat(fx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                    }, 500);
                });
                $(this).children('.productx-remove').click(function() {
                    $(this).siblings('.productx-price').text('0');
                    $(this).siblings('.hcdiv').children('.eachPrice2').text('0');
                    setTimeout(function() {
                        var x = 0;
                        $(".eachPrice").each(function() {
                            var p = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
                            x += p;
                        });
                        $(".checkout-total .pright p").text(parseFloat(x).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                        var y = 0;
                        $(".eachPrice2").each(function() {
                            var z = parseFloat($(this).text().replace(/[^\d\.\-]/g, ""));
                            y += z;
                        });
                        $(".checkout-shipping .pright p").text(parseFloat(y).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                        var tx = parseFloat($('.checkout-total .pright p').text().replace(/[^\d\.\-]/g, ""));
                        var sx = parseFloat($('.checkout-shipping .pright p').text().replace(/[^\d\.\-]/g, ""));
                        var st = readCookie('salestax');
                        var stx = (tx * st) / 100;
                        $('.checkout-tax .pright p').text(parseFloat(stx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                        var stxx = parseFloat($('.checkout-tax .pright p').text().replace(/[^\d\.\-]/g, ""));
                        var fx = parseFloat(tx + sx + stxx);
                        $('.checkout-total-amount .pright p').text(parseFloat(fx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                        createCookie('orderx-amount', parseFloat(fx).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
                    }, 500);
                    $(this).parents('.li-line2').parents('li').remove();
                    $('.checkout-total b').text($('.checkout-load ol li').length);
                    var orderx = $('.li-line2 .productx-name').map(function() {
                        return $(this).text();
                    }).get().join(', ');
                    createCookie('orderx-textarea', orderx);
                    var n = readCookie('cart');
                    for (var m = 1; m <= n; m++) {
                        eraseCookie('item' + m);
                        eraseCookie('value' + m);
                        eraseCookie('pic' + m);
                        eraseCookie('weight' + m);
                    }
                    createCookie('cart', $('.checkout-load ol li').length);
                    var o = readCookie('cart');
                    for (var p = 1; p <= o; p++) {
                        createCookie('item' + p, $('.checkout-load ol li:nth-child(' + p + ') .li-line2 .productx-name').text());
                        createCookie('value' + p, $('.checkout-load ol li:nth-child(' + p + ') .li-line2 .eachPrice').attr('data-value'));
                        createCookie('pic' + p, $('.checkout-load ol li:nth-child(' + p + ') .li-line1 .hidden-pimg').text());
                        createCookie('weight' + p, $('.checkout-load ol li:nth-child(' + p + ') .li-line2 .sx-weight').text());
                    }
                    setTimeout(function() {
                        if ($(".checkout-total-amount .pright p").text() == "0.00" || $(".checkout-total-amount .pright p").text() == "0.0" || $(".checkout-total-amount .pright p").text() == "0") {
                            $('.checkout-container').css('display', 'none');
                            $('.checkout-empty').css('display', 'block');
                        }
                    }, 700);
                });
            });
            clearTimeout(a);
        }, 500);
    }
});
$(document).ready(function() {
    if (window.location.href.indexOf("/cartorder.htm") != -1) {
        document.title = "Order Summary";
        var c = readCookie('currency');
        $('.order-currency b').text(c);
        $('#item_amount').attr('value', readCookie('orderx-amount'));
        createCookie('orderx-amount', readCookie('orderx-amount').replace(/[^\d\.\-]/g, ""));
        $('#item_shipping').attr('value', readCookie('orderx-shipping'));
        $('.order-row.order-text').append('<textarea class="order-textarea" id="item_names" name="item_names" rows="5" cols="50" disabled>' + readCookie("orderx-textarea").replace(/-- [(]/g, "- (Quantity - ") + '<\/textarea>');
        var as = readCookie('AppServer'); // "https://bulletlink.one"; /* App Server URL */
        var st = "{{PutDomain}}";
        var i_spm = $('#item_shipping').val().replace(/ /g, "_").replace(/,/g, "NEXT").replace(/&/g, "AND");
        var i_amount = readCookie('orderx-amount');
        var i_name = $('#item_names').val().replace(/ /g, "_").replace(/,/g, "NEXT").replace(/&/g, "AND").replace(/#/g, "HASH");
        var i_crc = readCookie('currency');
        var stx = st.split('//').pop().split('/').shift();
        var pp = as + "target_form2.asp?smenu=&minForm=Y&pform=PAYMENT3_PayPalStandard&cart=Y&site=" + stx + "&i_name=" + i_name + "&i_amount=" + i_amount + "&i_crc=" + i_crc + "&i_spm=" + i_spm;
        var cc = as + "target_form2.asp?app=&twindow=Form&smenu=&minform=Y&x_amount=" + readCookie('orderx-amount') + "&x_invoice_num=&x_description=Shopping&pform=PAYMENT1_CreditCard_Online&cart=Y&sc=&site=" + stx + "&i_name=" + i_name + "&i_amount=" + i_amount + "&i_crc=" + i_crc + "&i_spm=" + i_spm;
        $('.OrderFormx').attr('href', cc);
        createCookie('orderx-payment', $('#payment').val());
        $('#payment').change(function() {
            createCookie('orderx-payment', $('#payment').val());
            if (readCookie('orderx-payment') == "PayPal") {
                $('.OrderFormx').attr('href', pp);
            } else if (readCookie('orderx-payment') == "Credit Card") {
                $('.OrderFormx').attr('href', cc);
            }
        });
    }
});
$(window).bind('load', function() {
    if (window.location.href.indexOf("/cartorder.htm") != -1) {
        $('.pro-loader').animate({ opacity: 0 }, 500, function() { $('.loader').css('display', 'none'); });
        $('.order-container').css('visibility', 'visible');
        $('.order-container').animate({ opacity: 1 }, 1000);
    }
});
// END: Product
