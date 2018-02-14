var cal_1_million = [16250, 15565, 11160, 9445, 11934, 9113, 6042, 11320, 8765, 4834, 10225, 8430, 3453, 8708, 8430, 2417, 7713, 8173];

function calculate(millions) {
 	if (isNaN(millions) || millions == 0 || millions > 300) {
 		return;
 	}
	var currentArray = cal_1_million;
	var amount = "Monto del Plan: "+ millions + ".000.000,00";
	document.getElementById("amount").innerHTML = amount;

	document.getElementById("ahorro_2").innerHTML = format1(currentArray[0] * millions);
	document.getElementById("pago2_1").innerHTML = format1(currentArray[1] * millions);
	document.getElementById("pago2_2").innerHTML = format1(currentArray[2] * millions);

	document.getElementById("ahorro_3").innerHTML = format1(currentArray[3] * millions);
	document.getElementById("pago3_1").innerHTML = format1(currentArray[4] * millions);
	document.getElementById("pago3_2").innerHTML = format1(currentArray[5] * millions);

	document.getElementById("ahorro_4").innerHTML = format1(currentArray[6] * millions);
	document.getElementById("pago4_1").innerHTML = format1(currentArray[7] * millions);
	document.getElementById("pago4_2").innerHTML = format1(currentArray[8] * millions);

	document.getElementById("ahorro_5").innerHTML = format1(currentArray[9] * millions);
	document.getElementById("pago5_1").innerHTML = format1(currentArray[10] * millions);
	document.getElementById("pago5_2").innerHTML = format1(currentArray[11] * millions);

	document.getElementById("ahorro_7").innerHTML = format1(currentArray[12] * millions);
	document.getElementById("pago7_1").innerHTML = format1(currentArray[13] * millions);
	document.getElementById("pago7_2").innerHTML = format1(currentArray[14] * millions);

	document.getElementById("ahorro_10").innerHTML = format1(currentArray[15] * millions);
	document.getElementById("pago10_1").innerHTML = format1(currentArray[16] * millions);
	document.getElementById("pago10_2").innerHTML = format1(currentArray[17] * millions);

	document.getElementById('table_cuotas').style.display = 'block';
	document.getElementById('button_print').style.display = 'block';
}

function calculateSelected() {
	var millions = document.getElementById("select_millions").value;
	calculate(millions);
}

function calculateByMillions() {
	var millions = document.getElementById("millions_value").value;
	calculate(millions);
}

function format1(n) {
    return n.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
}

function printData() {
   var divToPrint=document.getElementById("table_cuotas");
   var amount = document.getElementById("amount");
   newWin= window.open("");
   newWin.document.write(amount.outerHTML);
   newWin.document.write("<br><br><br>");
   newWin.document.write("<br>");
   newWin.document.write("<br>");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}
