window.addEventListener('DOMContentLoaded', function (event) 
{
const hash = window.location.hash;
// dropMenu

var t = document.querySelector('#dropdown1');
	var li = document.querySelector('#menu-1');
	t.addEventListener('mouseover', function() {
        li.classList.toggle('on');
	});
	t.addEventListener('mouseout', function() {
		// Переключаем класс .on
        li.classList.toggle('on');
	});
	var t1 = document.querySelector('#dropdown2');
	var li1 = document.querySelector('#menu-2');
	t1.addEventListener('mouseover', function() {
        li1.classList.toggle('on');
	});
	t1.addEventListener('mouseout', function() {
        li1.classList.toggle('on');
	});
let focus =document.querySelectorAll('.focus');
for(let i=0; i<focus.length; i++)
{
	focus[i].addEventListener('mouseover', function() {
        this.classList.toggle('focuss');
	});
}
	for(let i=0; i<focus.length; i++)
{
	focus[i].addEventListener('mouseout', function() {
		this.classList.toggle('focuss');
	});
}


//popupForma
let butpopup=document.querySelectorAll('.orangeButt');
let popup=document.querySelector('#popUp');
//Show popUp
for(let i=0;i<3;i++)
{
butpopup[i].addEventListener('click', function()
{
window.location.hash='#popUp';	
});
}
//onhashchange
window.onhashchange = function() 
		{ 	if (window.location.hash === "#popUp")
		popup.style.display='block';
		else if(window.location.hash != "#popUp") popup.style.display='none';
		}
		// закрыть форму
let back=document.querySelector('#back');
	 back.onclick= function(){window.location.hash=window.location.href.split('#')[0];
	}
//элементы Формы
let forma0=document.querySelector('#f0');
let nam0=document.querySelector('#name0');
let phon0=document.querySelector('#phone0');
let mai0=document.querySelector('#mail0');
let msg0=document.querySelector('#msg0');
let sen0=document.querySelector('#send0');
let yes0=document.querySelector('#yes0');

let forma1=document.querySelector('#f');
let nam=document.querySelector('#name');
let phon=document.querySelector('#phone');
let mai=document.querySelector('#mail');
let msg=document.querySelector('#msg');
let sen=document.querySelector('#send');
let yes=document.querySelector('#yes');

let elemForm0=[nam0,phon0,mai0,msg0];
let elemForm=[nam,phon,mai,msg];
//localStorage
for(let i=0;i<4;i++)
{
	if(elemForm0[i].value==="")
elemForm0[i].value=localStorage.getItem(elemForm0[i].name);
elemForm0[i].addEventListener('input', function(){localStorage.setItem(elemForm0[i].name, elemForm0[i].value); });
if(elemForm[i].value==="")
elemForm[i].value=localStorage.getItem(elemForm[i].name);
elemForm[i].addEventListener('input', function(){localStorage.setItem(elemForm[i].name, elemForm[i].value); });
}	


// отпарвка формы
async function SendForm0()
{ 
	if(nam0.value==="" || phon0.value==="" || yes0.checked==false)
	alert("Заполните поля для отправки формы");
	else
 {let formData = new FormData(forma0);

	$.ajax({
	url: 'https://formcarry.com/s/ZXtrVvHwBpP',
	type: 'post', 
	contentType: false,
	processData: false,
	dataType: "json",
	data: formData
	})
	.done(function(){alert("Форма отправлена"); forma0.reset(); window.location.hash=window.location.href.split('#')[0];})
	.fail(function(){alert("Ошибка приотправлении Формы!");});
	}		
};

// 	//отправляем POST запрос Fetch
// 	let response = await fetch('https://formcarry.com/s/ZXtrVvHwBpP', {
// 		method: 'POST',          // метод POST
// 		body: new FormData(forma) // в класс FormData передаем ссылку на форму
// 	});
// 	// получаем JSON
// 	let result = await response.json();
// 	alert(result);
// if(!response.ok) alert("Error of formSend")
// else alert("Form was send");
async function SendForm()
{ 
	if(nam.value==="" || phon.value==="" || yes.checked==false)
	alert("Заполните поля для отправки формы");
	else
 {let formData = new FormData(forma1);

			$.ajax({
				url: 'https://formcarry.com/s/ZXtrVvHwBpP',
				type: 'post', 
				contentType: false,
				processData: false,
				dataType: "json",
				data: formData
			})
			.done(function(){alert("Форма отправлена"); forma1.reset();})
			.fail(function(){alert("Ошибка приотправлении Формы!");});}
			
};

//аккордеон
let idAakordText=[
'#ak727',
'#ak22',
'#ak33',
'#ak44',
'#ak55',
'#ak66',
'#ak77',
'#ak88',
'#ak99',
'#ak101',
'#ak737',
'#ak121'
];
let idAakord=[
	'#ak72',
	'#ak2',
	'#ak3',
	'#ak4',
	'#ak5',
	'#ak6',
	'#ak7',
	'#ak8',
	'#ak9',
	'#ak10',
	'#ak73',
	'#ak12'
	];

let akkord=$('.akk');
for(let i=0;i<12;i++)
{
	let te=idAakord[i]; let tex=idAakordText[i];
	let l=document.querySelector(te);let le=document.querySelector(tex);
	akkord[i].addEventListener('click', function()
	{
	 if(le.className=="wizible")
	 { 
		le.addEventListener('click', function()
		{ le.className="off"; l.className="no";});
		 le.className="off";
	     l.className="no";
		}
	 else{
	le.className="wizible";
	l.classList.toggle('onAkkord');}
	for(let j=0;j<12;j++)
	{
		if(j!==i)
		{
			let ofte=idAakord[j]; let oftex=idAakordText[j];
	        let ofl=document.querySelector(ofte);let ofle=document.querySelector(oftex);
	        ofle.className="off";
	        ofl.className="no";
		}
	}
});
}


//слайдер отзывы
	$("#slides").slick({
		arrows:true,
	   nextArrow:$('.rightAr'),
		prevArrow:$('.leftAr'),
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		autoplay:true,
		autoplaySpeed:10000,
		loop:true,
		asNavFor: '#countSlid'
   });
$("#countSlid").slick({
			asNavFor: '#slides',
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplaySpeed:10000,
			autoplay:true,
			loop:true,
		});

});