function chapterNavigation() {
  let triggered = false
  let navigating = false
  document.addEventListener("keydown", function (e) {
    if (triggered) return
    if (navigating) return
    triggered = true
    setTimeout(() => { triggered = false }, 100)
    if (e.altKey || e.ctrlKey || e.metaKey) {
      return;
    }
    if (window.search && window.search.hasFocus()) {
      return;
    }

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        let previousButton = document.querySelector('a[rel="prev"]');
        if (!previousButton && window.location.pathname !== '/') previousButton = { href: '/' }

        if (document.referrer.includes(window.location.host))
          if (previousButton) {
            window.location.href = previousButton.href;
            navigating = true;
          }
        break;
      case "ArrowRight":
        e.preventDefault();
        let nextButton = document.querySelector('a[rel="next"]');
        if (!nextButton && window.location.pathname === '/') nextButton = { href: "/getting_started/" }

        if (nextButton) {
          window.location.href = nextButton.href;
          navigating = true;
        }
        break;
    }
  });
};

function preload() {
  let previousButton = document.querySelector('a[rel="prev"]');
  if (!previousButton) previousButton = { href: '/' }
  let nextButton = document.querySelector('a[rel="next"]');
  if (!nextButton) nextButton = { href: "/getting_started/" }
  fetch(previousButton.href)
  fetch(nextButton.href)
}

window.addEventListener('DOMContentLoaded', () => {
  chapterNavigation()
  preload()
})

window.onload = function () {
  document.body.setAttribute('tabindex', '-1');
  document.body.focus();
};
