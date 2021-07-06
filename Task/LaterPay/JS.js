// BEGIN: LaterPay 

function LaterPay() { document.write('<div class="lp-footer" id="lp-footer"><div class="footer-top"><div class="lp-footer-close"><img width="100%" height="100%" src="/clients/bulletlink/staff-aai-51702/footer-close.png"></div><p class="lp-footer-text-header"></p><p class="lp-footer-text"></p></div><div class="footer-bottom"><div class="lp-buttons"><form action="#" id="contribute-form" class="contribute-form"><div class="lp-amount lp-amount-other"><input pattern="^[0-9]*$" type="text" id="amount-other" style="color: white;" value="OTHER"></div></form></div><p class="lp-amount lp-amount-contribute" id="submit"></p><div class="lp-powered-by">Powered by <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 933 124.7" style="fill: currentcolor; height: calc(10px); margin: -2px 2px; width: calc(84px);"><path d="M165.5 4.7h19.2v97.5h48.4v16.6h-67.7l.1-114.1zm186 114.1h-20.9l-9.5-27.6h-45l-9.5 27.6h-20.9L287.9 4.7h21.5l42.1 114.1zm-69.6-44.2h33.6l-16.8-48.9-16.8 48.9zm94.6-53.3h-30.6V4.7h80.5v16.6h-30.7v97.5h-19.2V21.3zm67.8-16.6h69.5v16.6h-50.2v31.8h46.3v16.6h-46.3v32.4h51.7v16.6h-70.9V4.7h-.1zm131.4 0c24.6 0 39.5 14.3 39.5 36.4 0 18.1-10 31-27.2 35.1l29.5 42.7h-21.2l-28.4-41.4h-11.3v41.4h-19.2V4.7h38.3zm-19.2 16.6v39.5h18.4c13.5 0 20.7-7.7 20.7-19.7 0-12.1-7.2-19.7-20.7-19.7l-18.4-.1zm98.9 56.1v41.4h-19.2V4.7h38.5c24.6 0 39.5 14.3 39.5 36.4s-14.8 36.4-39.5 36.4l-19.3-.1zm18.5-56.1h-18.4v39.5h18.4c13.5 0 20.7-7.7 20.7-19.7 0-12.1-7.2-19.8-20.7-19.8zm144.7 97.5h-20.9l-9.5-27.6h-45l-9.5 27.6h-20.9L755 4.7h21.5l42.1 114.1zM749 74.6h33.6l-16.8-48.9L749 74.6zm110.6-21.3l28.9-48.6H909L869.2 72v46.8H850V72L810.2 4.7h20.5l28.9 48.6zM67 108.5c0 5.6-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1S67 102.9 67 108.5zm61.1 0c0 5.6-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.5 10.1 10.1zm9.8-88L109.8 4.8l1.1 7H22.1l34.7 82.6h61.3l9.5-57.7L107.9 48l-4.7 29.4-34.5.1-20.1-48.2H111l-1.2 7"></path></svg></a></div></div></div>'); }

function lp_id() {
    return "12345";
}

function lp_header() {
    return "The Bulletlink needs your support";
}

function lp_desc() {
    return "We are working hard to bring you news that matters to the Houston Jewish community. Your contribution will help the JHV continue to provide vital coverage during these important times.";
}

function lp_othertext() {
    return "OTHER";
}

function lp_button() {
    return "CONTRIBUTE";
}

function lp_amount() {
    return "4,8,12,15,20,25";
}

$(document).ready(function() {
    var n = lp_amount();
    var arr = n.split(",");
    var amnt;
    for (amnt = 0; amnt < arr.length; amnt++) {
        var i = amnt + 1;
        var v = arr[amnt] * 100;
        $('.contribute-form .lp-amount-other').before('<input type="radio" name="amount" id="amount-' + i + '" class="lp-radio-amount" value="' + v + '"><label id="label-' + i + '" for="amount-' + i + '" class="lp-amount">$' + arr[amnt] + '</label>');
    }
    $("#amount-2").prop("checked", true);
    var footerOptions = {
        "lpid": lp_id(),
        "ctaHeader": lp_header(),
        "ctaText": lp_desc(),
        "otherText": lp_othertext(),
        "buttonText": lp_button()
    }

    //Set up the footer based on the footerOptions object.
    $('.lp-footer-text-header').text(footerOptions.ctaHeader);
    $('.lp-footer-text').text(footerOptions.ctaText);
    $('#amount-other').val(footerOptions.otherText);
    $('#submit').text(footerOptions.buttonText);

    // If the laterPayFooter cookie is not set, show the footer.
    if (document.cookie.indexOf("laterpayFooter") === -1) {
        $('#footer-header').css("display", "block");
    }

    $('#amount-other').click(function() {
        $('#amount-other').val('$ ');
        $(".lp-radio-amount").prop('checked', false);
    });

    $('#amount-other').blur(function() {
        //$('#amount-other').val('OTHER');
        //$("#amount-3").prop('checked', true);
    });

    // Close the footer if the user clicks on the X
    $(".lp-footer-close").click(function() {
        document.cookie = "laterpayFooter";
        $("#lp-footer").css("display", "none");
    });

    // What happens when they click on the "contirbute" button
    $('.lp-amount-contribute').click(function() {

        if ($('#amount-other').val() == 'OTHER') {
            var amount = $('input[name="amount"]:checked').val();
        } else {
            var amount = $('#amount-other').val();
            amount = amount.replace("$", "");
            amount = amount.replace(/\.\d+/g, "");
            amount = amount.replace(".", "");
            amount = parseInt(amount) * 100;
        }


        var now = new Date();
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000 * 1209600;
        now.setTime(expireTime);

        document.location = "https://jwt.laterpay.net/test/?amount=" + amount;

        /*if ($('input[name="type"]:checked').val() == 'single') {
            //document.cookie = 'laterpayFooter;expires='+now.toGMTString()+';path=/';
            document.location = "https://web.uselaterpay.com/dialog/contribute/pay_now?url=https%3A%2F%2Fjhvonline.com%2F&campaign_id=0cb6df18-eafc-4a16-91aa-dcec43ddba7d&permalink=1&cp=HwAA74fyGR8MKh7zNZ5JPK&title=Contribution+to+Jewish+Herald-Voice&hmac=499ce6740061cb4458b394e400544ee43d83e88a8d15029f83a60376&custom_pricing=USD" + amount;
        } else {
            //contribute(500);
        }*/
        //document.cookie = 'laterpayFooter;expires='+now.toGMTString()+';path=/';

    });
});

// END: LaterPay
