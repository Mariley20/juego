function imprimirHTML (n) {
  var h = "";
  for (var i = 0; i <=  n; i++) {
        console.log(hombre[i]);
        h += hombre[i] + "</br>" 
  }
  console.log(hombre[hombre.length - 1]);
  document.getElementById("hombresito").innerHTML = h; 
} 


function imprimirMatriz (M) {
  var n = M.length;
  //var h = "";
  for (var i = 0; i < n; i++) {
        console.log(M[i]) ;
       // h += M[i]+"</br>";
  }
  //document.getElementById("hombresito").innerHTML = h; 
} 


function obtienerPalabraSecreta() {
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
   var palabra = cadena.split(" ")
  return palabra;
}

var hombre =  [        "________",    
                       "   |\n",   
                       "   |\n",
                       "   |\n",
                       "   O\n",
                        "  /|\\\n",
                       "  / \\\n",
                       "         ",
                       "         ",
                       "________"
                       ];

imprimirMatriz(hombre);

function jugar(){

var palabra = obtienerPalabraSecreta ();
console.log(palabra);


empiezaJuega(palabra);

}

function empiezaJuega(palabra){
  var intentos = 10;
  var intFallos = arrayIntentosFallos();
  var errores = 0;

  var a = arrayAstericos(palabra.length);
  for(var i = 0; i < intentos; i++)
  {
    var letra = prompt("Intento N."+(i+1)+"\n Ingresa una letra: ");
    var contarAsteriscos = 0;
    for(var j = 0; j < palabra.length; j++ )
    {
      if(palabra[j] == letra)
      {
        a[j] = letra;
      }
      else if(a[j] == "*")
      {
        contarAsteriscos++;
      }
    }
    console.log(a);

      intFallos[i][0] = i;
      intFallos[i][1] = contarAsteriscos;
      //var xx = verificarJugada(intFallos, i);
      if(i > 0 && intFallos[i][1] == intFallos[i-1][1]){
        errores++;
        imprimirHTML(errores);
        console.log(errores);
      }

    if(i == intentos - 1)
    {
      alert("vuelve a intentarlo");
    }
    else if(contarAsteriscos == 0)
    {
      alert("felicidades hazz ganado");
      i = intentos;
    }
    
  }

}

function arrayAstericos(n)
{
  var a = [];
  for(var i = 0; i < n; i++)
  {
    a[i] = "*";
  }
  return a;
}
function arrayIntentosFallos(){
  var s = [];
  for (var i = 0; i < 10 ; i++) {
    s[i] = [];
    for(var j = 0; j < 2; j++){
      s[i][j] = 0;
    }
  }
  return s;
}