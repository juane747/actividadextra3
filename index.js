var restemp = document.getElementById('pantalla')
var res = document.getElementById('pantallaresultado')
var resfecha = document.getElementById('pantallafecha')
var restarde=document.getElementById('pantallaresultadotarde')
var resnoche=document.getElementById("pantallaresultadonoche")

var tiempo1=fechadato
var usado = new Date(tiempo1)
var fechareal1= usado.toLocaleDateString()
var botonconsulta=document.getElementById('botonconsulta')
var botonhoy= document.getElementById('botonhoy')

//obteniendo fecha hoy
var tiempo=Date.now()
var hoy = new Date(tiempo)
var fechareal=hoy.toLocaleDateString() 

botonconsulta.addEventListener(
    'click',
    function (){
        setTimeout(()=>{
            var tiempo=fechadato
            var usado = new Date(tiempo)
            var fechareal= usado.toLocaleDateString()
            resfecha.innerHTML="Fecha seleccionada: "+fechadato.value
                   
            var clima= Math.floor(Math.random()* 3)
            if(clima==0){
                clima="Despejado"
            }else if(clima==1){
                clima="Nublado"
            }else{
                clima="Lluvioso"
            }
            res.innerHTML="El clima  por la mañana es: "+clima
            restarde.innerHTML=""
            resnoche.innerHTML=""
            var temp = Math.floor(Math.random()*(30-5)+5)
            if(temp>4){
            restemp.innerHTML="La temperatura de la mañana es: "+temp+" Grados Centigrados"
            }else{
                restemp.innerHTML="La temperatura es bajo 5"
            }
            
        },3000)                      
        
    }

)

botonhoy.addEventListener(

    'click',
    function bot(){
        setTimeout(()=>{
            var tiempo=Date.now()
            var hoy = new Date(tiempo)
            var fechareal=hoy.toLocaleDateString() 
            var mes = hoy.toLocaleString("default",{month:"2-digit"})
            var año= hoy.getFullYear()
            var dia=hoy.toLocaleString("default",{day:"2-digit"})
            var fechaformato=año+"-"+mes+"-"+dia
           fechadato.value=fechaformato
            resfecha.innerHTML="Fecha: "+fechareal
            //obteniendo valores de la mañana
            var clima= Math.floor(Math.random()* 3)
            if(clima==0){
                clima="Despejado"
            }else if(clima==1){
                clima="Nublado"
            }else{
                clima="Lluvioso"
            }
            res.innerHTML="El clima  por la mañana es: "+clima
            var temp = Math.floor(Math.random()*(30-5)+5)
            if(temp>4){
            restemp.innerHTML="La temperatura de hoy es: "+temp+" Grados Centigrados"
            }else{
                restemp.innerHTML="La temperatura es bajo 5"
            }

            // obteniendo valores de la tarde
            var clima= Math.floor(Math.random()* 3)
            if(clima==0){
                clima="Despejado"
            }else if(clima==1){
                clima="Nublado"
            }else{
                clima="Lluvioso"
            }
            restarde.innerHTML="El clima  por la tarde es: "+clima
           
                 
            // obteniendo valores de la noche
            var clima= Math.floor(Math.random()* 3)
            if(clima==0){
                clima="Despejado"
            }else if(clima==1){
                clima="Nublado"
            }else{
                clima="Lluvioso"
            }
            resnoche.innerHTML="El clima  por la noche es: "+clima
        },3000)
    }
)


    
