(function () {
  let timeoutId;
  function up() {
    let top = Math.max(
      document.body.scrollTop,
      document.documentElement.scrollTop
    );
    if (top > 0) {
      window.scrollBy(0, -2500);
      timeoutId = setTimeout("up()", 500);
    } else clearTimeout(timeoutId);
    return false;
  }
})();
