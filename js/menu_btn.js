var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-2500);
		t = setTimeout('up()',500);
	} else clearTimeout(t);
	return false;
}