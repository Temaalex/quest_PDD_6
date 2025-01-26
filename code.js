let urlMain = new URL(window.location.href);
let key = urlMain.searchParams.getAll('key');

for (let index = 0; index < quiz.length; ++index) {
	if(Number(key) == quiz[index].id){

function rem(){		
	document.getElementById('1').innerText = quiz[index].answer1[0];
	document.getElementById('2').innerText = quiz[index].answer2[0];
	document.getElementById('3').innerText = quiz[index].answer3[0];
	document.getElementById('4').innerText = quiz[index].answer4[0];									
	document.getElementById('1').onclick = answer1;	
	document.getElementById('2').onclick = answer2;	
	document.getElementById('3').onclick = answer3;	
	document.getElementById('4').onclick = answer4;	
	function answer1(){
		if(quiz[index].answer1[1] == false){
			this.style.backgroundColor = "red";			
			wrongAnswer()
		} else if (quiz[index].answer1[1] == true){
			rightAnswer()
			this.style.backgroundColor = "green";
		}
	}
	function answer2(){
		if(quiz[index].answer2[1] == false){
			this.style.backgroundColor = "red";			
			wrongAnswer()
		} else if (quiz[index].answer2[1] == true){
			rightAnswer()
			this.style.backgroundColor = "green";
		}
	}
	function answer3(){
		if(quiz[index].answer3[1] == false){
			this.style.backgroundColor = "red";			
			wrongAnswer()
		} else if (quiz[index].answer3[1] == true){
			rightAnswer()
			this.style.backgroundColor = "green";
		}
	}
	function answer4(){
		if(quiz[index].answer4[1] == false){
			this.style.backgroundColor = "red";			
			wrongAnswer()
		} else if (quiz[index].answer4[1] == true){
			rightAnswer()
			this.style.backgroundColor = "green";
		}
	}
}

function blockOut(){
	localStorage.removeItem('check'+quiz[index].id)
	window.location.reload('check'+quiz[index].id);	
}

function rightAnswer(){
	blockBtn()
	document.querySelector('.head__content').innerText = "Ответ правильный!"+'\n'+"Вот элемент шифра:"+'\n'+quiz[index].elCode
}

function wrongAnswer(){
	document.querySelector('.img').src = './pictures/wrong.gif';
	localStorage.setItem('check'+quiz[index].id, 'false');	
	timer()
	blockBtn()
	setTimeout(blockOut, 30000) //30000
}

function timer(){
	let timer;
	let x=30;
	countdown();
	function countdown(){
	document.querySelector('.head__content').innerText = "Ответ неправильный!"+'\n'+"Повторная попытка через "+x+" секунд";
	x--
	if (x<0){
		clearTimeout(timer);
	}else{
		timer = setTimeout (countdown, 1000);
	}
	}
}

function blockBtn(){
	const buttons = document.querySelectorAll(".button");
	for (const button of buttons) {
		button.disabled = true;
	}
}

function startMainCode(){
	document.querySelector('.head__content').innerText = 'Задача №'+quiz[index].id+'\n'+quiz[index].question;
	document.querySelector('.img').src = quiz[index].picture;
	document.getElementById('1').innerText = quiz[index].answer1[0];
	document.getElementById('2').innerText = quiz[index].answer2[0];
	document.getElementById('3').innerText = quiz[index].answer3[0];
	document.getElementById('4').innerText = quiz[index].answer4[0];
	

	let getLochal = localStorage.getItem('check'+quiz[index].id);
	if(getLochal == 'false'){
		wrongAnswer()
	} else {
		rem()	
	}
}

startMainCode()	
	}
}
