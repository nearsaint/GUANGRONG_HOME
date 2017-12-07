/*
 * name: 'base.js';
 * for: 'GuangRong_Home';
 * author: 'NearSaint';
 * time: '2017.1201';
 */



/*
 *
 *
 *  nav_main
 *
 *
 */
var header = new Vue({
  el: 'header',
  data: {
    nav_focus: null,
    nav_scrollTop: 0,
    nav_fixed: false,
    nav_dropdown: false,
  },
  methods: {
    navScroll() {
      nav_scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (nav_scrollTop > 120) {
        this.nav_fixed = true;
      }
      if (nav_scrollTop < 10) {
        this.nav_fixed = false;
      }
    }, //end navScroll
    navDropdown() {
      if (this.nav_dropdown) {
        this.nav_dropdown = false;
        $('body').removeClass('overflowHiden');
      } else {
        this.nav_dropdown = true;
        $('body').addClass('overflowHiden');
      }
    } //end navDropdown
  },
  mounted() {
    window.addEventListener('scroll', this.navScroll);
    if (this.nav_focus > 1) {
      this.nav_fixed = true;
    }
  },
})

/*
 *
 *
 *  touch - hover for mobile;
 *
 *
 */
$(document).on('touchstart', 'a', function() {
  $(this).addClass('touch');
});
$(document).on('touchend', 'a', function() {
  $(this).removeClass('touch');
});

/*
 *
 *
 *  public news swiper
 *
 *
 */
var mySwiper_news = new Swiper('.container_swiper_news', {
  loop: false,
  autoplay: true,
  pagination: {
    el: '.pagination_swiper',
    clickable: true,
  },
});


/*
 *
 *
 *  wow - the animate in the all page;
 *
 *
 */
new WOW().init();



/*
 *
 *
 *  document Ready
 *
 *
 */
$(document).ready(function() {});