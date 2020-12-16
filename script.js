//Voor deze opdracht wil ik graag met GreenSock werken.
//Om van het animeren en interactie te kunnen leren, wil ik de volgende
//elementen toevoegen:
// - Een auto die een rondje rijdt
// - Een klikbare ambulance met geluid en licht effect
// - Een object waar je over kan hoveren en er verschijnt een animatie


//GSAP mogelijkheden:
// gsap.to('.auto', {duration: 2, top: '170px', left: '380px', ease: 'power'});
// gsap.to('.auto', {duration: 2, rotation: '70deg', top: '180px', left: '405px', ease: 'power', delay: 1.8});

//TweenLite mogelijkheden:
//Auto 
let autoTween = function(){

	let auto_tl = new TimelineMax({repeat: -1});

	auto_tl

	.to('.auto', 2, {top: '170px', left: '380px'})
	.to('.auto', 1, {rotation: '70deg', top: '180px', left: '405px'})
	.to('.auto', 1, {top: '230px', left: '420px'})
	.to('.auto', 1, {rotation: '90deg', top: '225px', left: '420px'})
	.to('.auto', .5, {top: '248px', ease: 'sine'})
	.to('.auto', 1, {top: '300px', ease: 'sine', delay: 1.5})
	.to('.auto', .5, {rotation: '65deg'})
	.to('.auto', 2, { top: '380px', left: '462px', ease: 'sine'})
	.to('.auto', 2, {top: '480px', left: '495px', ease: 'sine'})
	.to('.auto', .5, {rotation: '170deg', top: '485px', left: '500px', ease: 'sine'})
	.to('.auto', 2, {top: '515px', left: '240px', ease: 'sine'})
	.to('.auto', 1, {rotation: '250deg', top: '500px', left: '220px', ease: 'sine'})
	.to('.auto', 1, {top: '410px', left: '190px', ease: 'sine'})
	.to('.auto', .3, {rotation: '280deg', ease: 'sine'})
	.to('.auto', 1, { top: '360px', left: '210px', ease: 'sine'})
	.to('.auto', .3, {rotation: '240deg', ease: 'sine'})
	.to('.auto', 1, {rotation: '255deg', top: '310px', left: '185px', ease: 'sine'})
	.to('.auto', 1.5, {rotation: '250deg', top: '220px', left: '155px', ease: 'sine'})
	.to('.auto', .5, {rotation: '350deg', top: '200px', left: '150px', ease: 'sine'});
	//TweenLite.to('.auto', , {top: '', left: '', ease: 'sine', delay: });
}

//Wilde Auto
let wildeAuto = function(){
	let wilde = new TimelineMax({repeat: -1});
	wilde
	.to('.wilde', .5, {rotation: '120deg', top: '270px', left: '850px', ease: 'power0'})
	.to('.wilde', .5, {rotation: '230deg', top: '350px', left: '800px', ease: 'power0'});
}

//uitvoeren functies
autoTween();
wildeAuto();
