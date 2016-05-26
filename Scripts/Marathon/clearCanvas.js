function clearCanvases() {
	var canvas1 = document.getElementById('figure1');
	var canvas2 = document.getElementById('figure2');
	var canvas3 = document.getElementById('figure3');
	
	var fig1 = canvas1.getContext('2d');
	var fig2 = canvas2.getContext('2d');
	var fig3 = canvas3.getContext('2d');
	var fig4 = canvas3.getContext('2d');
	
	
	
	fig1.clearRect( 0, 0, 70, 70);
	fig2.clearRect( 0, 0, 70, 70);
	fig3.clearRect( 0, 0, 70, 70);
	fig4.clearRect( 0, 0, 70, 70);
}