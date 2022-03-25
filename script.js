  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    slideToClickedSlide: true,
    loop: true,
    // пагинация
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    });

    document.querySelectorAll('.steptab__btn').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.steptab__btn').forEach(function(btn) {
      btn.classList.remove('steptab__btn--active')});
      e.currentTarget.classList.add('steptab__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
      });
      });

      // $(".accordion").accordion({
      //   heightStyle: "content"
      //   active: false,
      //   collapsible: true
      //   });

            $(function() {
              $(".accordion").accordion({
                  active: false,
                  collapsible: true,
                  heightStyle: "content"
              } );
            });


        $(document).ready(function(){
          $('.header__burger').click(function(event) {
            $('.header__burger,.nav__item').toggleClass('open')
            $('body').toggleClass('lock')
          })
        });


        $(document).ready(function(){
          $(".header__search-btn, .header__search, header__closed-search-btn").click(function(e){
            e.preventDefault()
            $(".header__search-btn, .header__search, .header__search-input, .header__form, .header__logo320, .header__logo1024-768, .header__burger").toggleClass("search-active");
            $("input[type='search']").focus();
          });

        });




