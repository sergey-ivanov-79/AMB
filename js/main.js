(function($) {

  // var wow = new WOW({
  //   boxClass: 'wow',
  //   animateClass: 'animated',
  //   offset: 0,
  //   mobile: false,
  //   live: true,
  //   scrollContainer: null,
  //   });
  // wow.init();

  $(document).ready(function () {
    $('.row-variant-options').each(function() {
        var block = $(this);
        block.find('.color_clock').click(function () {
            block.find('.color_clock').removeClass('active');
            $(this).addClass('active');
        });
    });
  });

  var btnminusProduct  = $(".qtyminus");
  var btnplusProduct = $(".qtyplus");

  var incrementPlusProduct = btnplusProduct.click(function() {
    var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
    $n.val(Number($n.val())+1 );
  });

  var incrementMinusProduct = btnminusProduct.click(function() {
    var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount-1);
    }
  });

  $(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
    template += '</div></div>';
    
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });

  $(window).scroll(function() {
    var blockOffset = $('#faq').offset().top;
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= blockOffset) {
        $('.bottom_block').addClass('fixed_block');
    } else {
        $('.bottom_block').removeClass('fixed_block');
    }
  });

})(jQuery);