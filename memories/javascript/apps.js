console.log("Memories");

function flipcard(card) {
	document.getElementById(card).style.transform ='rotateY(180deg)';

	if(document.getElementById(card).style.transform === 'rotateY(180deg');{
		setTimeout(function(){
			document.getElementById(card).style.transform = 'rotateY(0deg';
		},1000);
	}
}