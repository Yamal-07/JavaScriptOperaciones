function calcular(){
    let NumLapices= parseInt(document.getElementById('Ingrese cantidad de lapices').value);
    let Pag;
    if (NumLapices>=1000){
    
        Pag=NumLapices*0.90;
        //document.write(Pag+'<br>');
         document.getElementById('resultado').innerHTML='Res: '+ Pag;
    }
    
    else {
       Pag=NumLapices*0.85;
       //document.write(Pag+'<br>');
       document.getElementById('resultado').innerHTML='Res: '+ Pag;
    }
        
    
}