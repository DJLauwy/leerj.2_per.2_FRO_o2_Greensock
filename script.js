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
TweenLite.to('.auto', 2, {top: '170px', left: '380px', ease: 'power'});
TweenLite.to('.auto', 1, {rotation: '70deg', top: '180px', left: '405px', ease: 'power', delay: 1.8});
