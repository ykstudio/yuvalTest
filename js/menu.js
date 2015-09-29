function toggleSidenav() {
	  document.body.classList.toggle('sidenav-active');
	}
	window.onresize = function(event) {
		if(document.body.classList.contains('sidenav-active')){
			console.log("('sidenav-active');");
			document.body.classList.remove('sidenav-active');
			document.body.classList.add('sidenav');
		}
	};
	