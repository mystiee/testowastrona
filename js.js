function link1() 
	{
		document.getElementById("prawy").innerHTML='<object width="100%" height="100%" type="text/html" data="podstr1.html" ></object>';
	}
function link2() 
	{
		document.getElementById("prawy").innerHTML='<object width="100%" height="100%" type="text/html" data="podstr2.html" ></object>';
	}
function link3() 
	{
		document.getElementById("prawy").innerHTML='<object width="100%" height="100%" type="text/html" data="podstr3.html" ></object>';
	}
function link4() 
	{
		document.getElementById("prawy").innerHTML='<object width="100%" height="100%" type="text/html" data="podstr4.html" ></object>';
	}
function link5() 
	{
		document.getElementById("prawy").innerHTML='<object width="100%" height="100%" type="text/html" data="podstr5.html" ></object>';
	}
function link6() 
	{
		document.getElementById("prawy").innerHTML='<object width="100%" height="100%" type="text/html" data="podstr6.html" ></object>';
	}

function ZmianaKursora() 
	{
		document.getElementById("body").style.cursor = "wait";
	}


function Kalkulator()
	{
		var a = document.getElementById("liczba1").value;	
		var b = document.getElementById("liczba2").value;
		var c = document.getElementById("operator").value;

		if(c == "*")
		{
			d = a*b;
			document.write("Wartość pierwszej liczby: "+a+"<br>");
			document.write("Wartość drugiej liczby: "+b+"<br><br>");
			document.write("Wynik: "+d);
		}
		else if(c == "-")
		{
			d = a-b;
			document.write("Wartość pierwszej liczby: "+a+"<br>");
			document.write("Wartość drugiej liczby: "+b+"<br><br>");
			document.write("Wynik: "+d);
		}
		else if(c == "+")
		{
			a = a/1;
			b = b/1;
			d = a+b;
			document.write("Wartość pierwszej liczby: "+a+"<br>");
			document.write("Wartość drugiej liczby: "+b+"<br><br>");
			document.write("Wynik: "+d);
		}
		else if(c == "/")
		{
			d = a/b;
			document.write("Wartość pierwszej liczby: "+a+"<br>");
			document.write("Wartość drugiej liczby: "+b+"<br><br>");
			document.write("Wynik: "+d);
		}
		else if(c == "%")
		{
			d = a%b;
			document.write("Wartość pierwszej liczby: "+a+"<br>");
			document.write("Wartość drugiej liczby: "+b+"<br><br>");
			document.write("Wynik: "+d);
		}
		else 
		{
			document.write("Błąd");
		}
	}


function Rejestracja() 
	{
		var imie = document.forms[0].elements[0].value;
		var nazwisko = document.forms[0].elements[1].value;
		var login = document.forms[0].elements[2].value;
		var haslo = document.forms[0].elements[3].value;

		if (imie == "")
			{
				imie = "---";
			}
		if (nazwisko == "")
			{
				nazwisko = "---";
			}
		if (login == "")
			{
				login = "---";
			}	
		if (haslo == "")
			{
				haslo = "---";
			}

		document.getElementById("okno").innerHTML = "Masz na imię <b><i>"+imie+"</i></b> na nazwisko <b><i>"+nazwisko+"</i></b><br><br>Zrobiłeś konto na login <b><i>"+login+"</i></b> z hasłem <b><i>"+haslo;
	}


function PokazHaslo() 
	{
		var x = document.getElementById("haslo");
		if (x.type === "password") 
			{
				x.type = "text";
			} 
		else 
			{
				x.type = "password";
			}
	}


function Wllacznik() 
	{
		document.getElementById('ciemno').classList.toggle("czarny");
		document.getElementById('przycisk').classList.toggle("false");
	}
	
	
function Paint1() 
	{
		document.getElementById('a1').classList.toggle("kolor1");
	}
function Paint2() 
	{
		document.getElementById('a2').classList.toggle("kolor2");
	}
function Paint3() 
	{
		document.getElementById('a3').classList.toggle("kolor3");
	}
function Paint4() 
	{
		document.getElementById('a4').classList.toggle("kolor4");
	}
function Paint5() 
	{
		document.getElementById('a5').classList.toggle("kolor5");
	}
function Paint6() 
	{
		document.getElementById('a6').classList.toggle("kolor6");
	}
function Paint7() 
	{
		document.getElementById('a7').classList.toggle("kolor7");
	}
function Paint8() 
	{
		document.getElementById('a8').classList.toggle("kolor8");
	}
function Paint9() 
	{
		document.getElementById('a9').classList.toggle("kolor9");
	}

function Reset()
	{
		document.getElementById("niebieski").style.cursor = "wait";
		document.getElementById("zielony").style.cursor = "wait";
		document.getElementById("czerwony").style.cursor = "wait";
		document.body.style.backgroundColor = "silver";
	}
function Kursoristrona1() 
	{
		document.getElementById("niebieski").style.cursor = "url(cursor1.png),auto";
		document.body.style.backgroundColor = "lightblue";
	}
function Kursoristrona2() 
	{
		document.getElementById("zielony").style.cursor = "url(cursor2.png),auto";
		document.body.style.backgroundColor = "lightgreen";
	}
function Kursoristrona3() 
	{
		document.getElementById("czerwony").style.cursor = "url(cursor3.png),auto";
		document.body.style.backgroundColor = "#ff8080";
	}
	
	
	
var m=0
var b
var n
document.getElementById("portfel").innerHTML = ""+m+""	
function Panda1()
	{
		n=1
		b=m+n
		document.getElementById("portfel").innerHTML = ""+b+""	
		m=b
	}
function Panda10()
	{
		n=10
		b=m+n
		document.getElementById("portfel").innerHTML = ""+b+""
		m=b
	}
function Panda100()
	{
		n=100
		b=m+n
		document.getElementById("portfel").innerHTML = ""+b+""	
		m=b
	}
function Pandak()
	{
		var r = confirm ("Czy na pewno chcesz kupić pandę ?")
		if (r == true)
		{
			if (b >= 499)
			{
				alert ("Panda należy teraz do ciebie <3")
			} else
				{
				  alert ("Nie masz wystarczającej ilości monet aby kupić pandę!")
				}
			
		} else
		{
			alert ("Panda jest smutna ;c")
		}
	}