$(document).ready(function () {
  'use strict';

  /* =======================
  // Simple Search Settings
  ======================= */

  SimpleJekyllSearch({
    searchInput: document.getElementById('js-search-input'),
    resultsContainer: document.getElementById('js-results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: '<li>No results found</li>',
  });

  /* =======================
  // Responsive videos
  ======================= */

  $('.c-wrap-content').fitVids({
    customSelector: ['iframe[src*="ted.com"]'],
  });

  /* =======================================
  // Switching between posts and categories
  ======================================= */

  $('.c-nav__list > .c-nav__item').click(function () {
    $('.c-nav__list > .c-nav__item').removeClass('is-active');
    $(this).addClass('is-active');
    if ($('.c-nav__item:last-child').hasClass('is-active')) {
      $('.c-posts').css('display', 'none').removeClass('o-opacity');
      $('.c-load-more').css('display', 'none');
      $('.c-categories').css('display', '').addClass('o-opacity');
    } else {
      $('.c-posts').css('display', '').addClass('o-opacity');
      $('.c-load-more').css('display', '');
      $('.c-categories').css('display', 'none').removeClass('o-opacity');
    }
  });

  /* =======================
  // Adding ajax pagination
  ======================= */

  $('.c-load-more').click(loadMorePosts);

  function loadMorePosts() {
    var _this = this;
    var $postsContainer = $('.c-posts');
    var nextPage = parseInt($postsContainer.attr('data-page')) + 1;
    var totalPages = parseInt($postsContainer.attr('data-totalPages'));

    $(this).addClass('is-loading').text('Loading...');

    $.get('/page/' + nextPage, function (data) {
      var htmlData = $.parseHTML(data);
      var $articles = $(htmlData).find('article');

      $postsContainer.attr('data-page', nextPage).append($articles);

      if ($postsContainer.attr('data-totalPages') == nextPage) {
        $('.c-load-more').remove();
      }

      $(_this).removeClass('is-loading');
    });
  }

  /* ==============================
  // Smooth scroll to the tags page
  ============================== */

  $('.c-tag__list a').on('click', function (e) {
    e.preventDefault();

    var currentTag = $(this).attr('href'),
      currentTagOffset = $(currentTag).offset().top;

    $('html, body').animate(
      {
        scrollTop: currentTagOffset - 10,
      },
      400
    );
  });

  /* =======================
  // Scroll to top
  ======================= */

  $('.c-top').click(function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
      $('.c-top').addClass('c-top--active');
    } else {
      $('.c-top').removeClass('c-top--active');
    }
  });
});

// ------------------------------------------------------------------------
//Check out more cool stuff on my site: https://rilling.dev/

/*Only needed for the controls*/
var phone = document.getElementById('phone_1'),
  iframe = document.getElementById('frame_1');

/*View*/
function updateView(view) {
  if (view) {
    phone.className = 'phone view_' + view;
  }
}

/*Controls*/
function updateIframe() {
  iframe.src = document.getElementById('iframeURL').value;

  phone.style.width = document.getElementById('iframeWidth').value + 'px';
  phone.style.height = document.getElementById('iframeHeight').value + 'px';

  /*Idea by /u/aerosole*/
  document.getElementById('wrapper').style.perspective =
    document.getElementById('iframePerspective').checked ? '1000px' : 'none';
}
updateIframe();

/*Events*/
document.getElementById('controls').addEventListener('change', function () {
  updateIframe();
});

document.getElementById('views').addEventListener('click', function (evt) {
  updateView(evt.target.value);
});
