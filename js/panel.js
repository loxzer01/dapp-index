/*Preloader*/

/*Inicio de script*/
$(document).ready(function(){
	$(".pre").hide("fade");
	//Formularios de ingreso y registro
	pdoin = $("#pdo-ri"); //pdo
	btno = $(".btno"); //ingresar boton
	fi = $("#fi"); //formulario de ingreso
	fr = $("#fr"); //formulario de registro
	fo = $("#form-open"); //formulario entero
	bdri = $("#bdri"); // boton de registro a ingreso
	bdir = $("#bdir"); // boton de ingreso a registro
	//abrir con el ingresar
	btno.click(function(){
		pdoin.show('fade',function(){
			fo.show('slide', {direction: 'down'});
		});
	});
	/*Cambiar vistas*/
	bdir.click(function(){
		fi.hide("fade", {direction: "left"},150,function(){
			fr.show("fade", {direction: "right"},150);
		});
	});
	bdri.click(function(){
		fr.hide("fade", {direction: "right"},150,function(){
			fi.show("fade", {direction: "left"},150);
		});
	});
	//Cerrar Vista
	pdoin.click(function(){
		fo.hide('slide', {direction: 'up'},function(){
			pdoin.hide("fade");
		});
	});
});
