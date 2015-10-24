
/* plugin */
/* =========================================================================== */

blahSlider = {

  theme: 'default', /* can be 'trendy' or 'default' */
  animation: 'animated fadeInRight', /* any animation of animate.css can be applied */

  themeSwitcher: function(themeValue) {
    var elems = 'a, body, .container, .nav-tabs, .nav-tabs>li>a, .nav-tabs>li.active>a';
    if(themeValue == 'trendy') {
      $(elems).addClass('trendy');
    }
    else {
      $(elems).removeClass('trendy');
    }
  },

  tabChanger: function(menuID) {
    $('.tab-pane').hide();
    $(menuID).css({
      'opacity': '1',
      'display': 'block'
    }).addClass(blahSlider.animation);
  }
};

$('.nav-tabs li').on('click', function() {
  $('.nav-tabs li').removeClass('active');
  $(this).addClass('active');
  var menuID = $(this).find('a').attr('href');
  blahSlider.tabChanger(menuID);
});

$('.nav-select').change(function() {
  var menuID = $(".nav-select option:selected").val();
  blahSlider.tabChanger(menuID);
});


/* ============================================================================= */
/* testing themes */

$('.theme-btn').on('click', function() {
  $('.theme-btn').removeClass('active');
  $(this).addClass('active');
  var btnText = $(this).text();
  blahSlider.themeSwitcher(btnText);
  blahSlider.tabToSelect();
});

/* ============================================================================= */
/* testing consistency of state on viewport resize */

$(window).resize(function () {

  var width = $(window).width();
  var activeTab = $('li.active').find('a').attr('href');

  if(width <= 480) {
    var selectedIndex = $(".nav-select option:selected").index();
    selectedIndex = parseInt(selectedIndex + 1);
    $('li').removeClass('active');
    $('li:nth-of-type(' + selectedIndex + ')').addClass('active');
  }

  else {
    $('option[value=' + activeTab + ']').prop('selected', 'selected');

  }

});
