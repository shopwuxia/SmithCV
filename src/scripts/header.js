function click_menu(){
	let classList = document.getElementsByClassName('hamburger-menu')[0].classList;
	if (classList.contains('move-animation-up')) {
		classList.remove('move-animation-up');
		classList.remove('move-animation-down');
		classList.add('move-animation-down');
	} else if (classList.contains('move-animation-down')) {
		classList.add('move-animation-up');
	} else {
		classList.add('move-animation-down');
	}
}