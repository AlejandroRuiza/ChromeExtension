document.addEventListener('DOMContentLoaded', function() {
    var link1 = document.getElementById('EA');
    var link2 = document.getElementById('ED');
    var link3 = document.getElementById('EG');
    var regresar = document.getElementById('Back');
    var regresar2 = document.getElementById('Back2');
    var regresar3 = document.getElementById('Back3');
    var p1final = document.getElementById('done1');
    var p2final = document.getElementById('Done2');
    var p3final = document.getElementById('done3');
    


    	$(".modExt1").hide();
        $(".modExt2").hide();
        $(".modExt3").hide();
        $(".show1").hide();
        $(".show21").hide();
        $(".show3").hide();
    // onClick's logic below:
    link1.addEventListener('click', function() {
        console.log("ya ptm1");
        $(".modExt1").show();
        $(".modExt2").hide();
        $(".modExt3").hide();
        $(".p1").hide();
    });

    link2.addEventListener('click', function() {
        console.log("ya ptm2");
        $(".modExt1").hide();
        $(".modExt2").show();
        $(".modExt3").hide();
        $(".show2").show();
        $(".p1").hide();
    });

    link3.addEventListener('click', function() {
        console.log("ya ptm3");
        $(".modExt1").hide();
        $(".modExt2").hide();
        $(".modExt3").show();
        $(".p1").hide();
        $(".show3").hide();
    });

    p1final.addEventListener('click', function() {
        console.log("ya ptm3");
        $(".p1").hide();
        $(".show1").show();

    });


    regresar.addEventListener('click', function() {
        console.log("ya ptm4");
        $(".modExt1").hide();
        $(".p1").show();
        $(".show1").hide();
    });

    regresar2.addEventListener('click', function() {
        console.log("ya ptm4");
        $(".modExt2").hide();
        $(".p1").show();
        $(".show21").hide();
        
    });

	p2final.addEventListener('click', function() {
        console.log("ya ptm3");
        $(".show2").hide();
        $(".show21").show();

    });

    regresar3.addEventListener('click', function() {
        console.log("ya ptm4");
        $(".modExt3").hide();
        $(".p1").show();
        
    });

    p3final.addEventListener('click', function() {
        console.log("ya ptm3");
        $(".p1").hide();
        $(".show3").show();

    });





});