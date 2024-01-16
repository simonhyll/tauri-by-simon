const base = '/';

function chapterNavigation() {
  document.addEventListener("keydown", function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) {
      return;
    }
    if (window.search && window.search.hasFocus()) {
      return;
    }

    let steps = e.shiftKey ? 5 : 1;

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        let previousButton = document.querySelector('a[rel="prev"]');
        if (!previousButton && window.location.pathname !== base) previousButton = { href: base }

        if (document.referrer.includes(window.location.host))
          if (previousButton && steps === 1) {
            window.location.href = previousButton.href;
          } else {
            if (steps > 1)
              while (steps >= 1) {
                history.go(-steps);
                steps--;
              }
          }
        break;
      case "ArrowRight":
        e.preventDefault();
        let nextButton = document.querySelector('a[rel="next"]');
        if (!nextButton && window.location.pathname === base) nextButton = { href: base + "getting_started/" }

        if (nextButton && steps === 1) {
          window.location.href = nextButton.href;
        } else {
          while (steps >= 1) {
            history.go(steps);
            steps--;
          }
        }
        break;
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  chapterNavigation()
})
