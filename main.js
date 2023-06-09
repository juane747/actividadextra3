const {app, BrowserWindow}=require('electron');// nos permite llamar estas funciones como importar clases en java

function createWindow(){//indicamos que estamos creando una ventana
    const ventana = new BrowserWindow({//definimos la nueva ventana
        width:350,//aca definimos alto y ancho
        height:350,
         webPreferences:{//para darnos acceso
           nodeIntegration:true,
            contextIsolation:false
        }
       
    });
    ventana.loadFile('index.html')//cargamos nuestra ventana
}

app.whenReady().then(createWindow)//inicializamos nuestra ventana.
