function q(v){let d=document.querySelector(v);if(d){return d;}}var texto_traducir, partes_texto, texto_traducido, s;
let button_translate = q("#b"), text_translate=q("#a"), text_r =q(".m");

button_translate.addEventListener("click", function(){

	if (text_translate.value == undefined || text_translate.value == "") { console.log("Error"); } else {

		text_r.innerHTML = "";

		texto_traducir = text_translate.value;

		partes_texto = texto_traducir.split(" ");

		for (var i = 0; i < partes_texto.length; i++) {
			s = partes_texto[i].toLowerCase();

			wds[s] ? 

			(
				s = wds[s],

				text_r.innerHTML += s + " "
			) : (
			    text_r.innerHTML += s + " "
			)

		}

		}


});