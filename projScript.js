// alert("Ok");
var t = document.querySelector('#dropdown1');
	var li = document.querySelector('#menu-1');
	t.addEventListener('mouseover', function() {
		// Переключаем класс .on
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
		this.classList.toggle('focus');
	});
}

	let k= document.querySelector('#ak1');
	//alert(k.innerHTML);
	k.addEventListener('click', function() {
		document.querySelector('#ak11').classList.toggle('onF');
	});
    
	$("#slides").slick({
		arrows:true,
		prevArrow: "<img src='left.jpg' class='prev' alt='1'>",
		nextArrow: "<img src='right.jpg' class='next' alt='2'>",
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		autoplay:true,
		loop:true,
		});

		

let forma =document.querySelector('#f');
let n=forma.elements.name;
// alert(forma.innerHTML);
// alert(n.placeholder);
let email=forma.elements.mail;
					let yes=forma.elements.yes;
let send=document.querySelector('#send'); 
				alert(send.innerHTML);
				forma.addEventListener('submit', function(e)
				{if(yes.checked == true && n.value!="" && email.value!="" )
				{
					if(n.value!=localStorage.namen || email.value!=localStorage.em ||localStorage.lendth==0 )
					{//запомнить новые значения формы
						localStorage.clear();
						
						localStorage.namen=n.value;
						localStorage.em= email.value;
					}
					let formData = new FormData(forma);
					$.ajax({
						url: 'https://formcarry.com/s/ZXtrVvHwBpP',
						type: 'post', 
						contentType: false,
						processData: false,
						dataType: "json",
						data: formData
					})
					.done(function (){ alert("Форма отправлена"); forma.reset();})
					.fail(function(){alert("Ошибка приотправлении Формы!");});
					
				}
				return false;
			});
			
// responsive:[
// {
//     breakpoint: 960,
//     settings: {
// 	prevArrow: "<img src='blue.jpg' class='prev' alt='1'>",
//     nextArrow: "<img src='le.jpg' class='next' alt='2'>",
//     slidesToShow: 5,
// 	slidesToScroll: 3,
	
// 	dots:true ,
//     }
// },
// {    breakpoint: 768,
//     settings: {
//     slidesToShow: 2,
// 	slidesToScroll: 1,
// 	prevArrow: "<img src='blue.jpg' class='prev' alt='1'>",
//     nextArrow: "<img src='le.jpg' class='next' alt='2'>",
// 	dots: true,
//     }
// }
// ] 