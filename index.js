var primeraparte = require('./primeraparte');
var segundaparte = require('./segundaparte');

const Pt2 = segundaparte.suma([10, 20]);
	function Pt1(personas, hora, precio, total) {
		console.log("horas que el empleado ha trabajado: "  + hora + "\n" + "precio de las horas de cada empleado:" + precio);

		primeraparte(personas, hora, precio, total, (error, nul)=>{
			if (error){
				console.log("ERROR:", error.message);
			}
			else{
				console.log("Total:" + nul.Total());
				console.log("Holgura:" + nul.Holgura());
				console.log("Suma total:" + nul.sumatotal());
				console.log("Materiales:" + Pt2);
			}
		});
}

Pt1(15, 25, 35, Pt2);
