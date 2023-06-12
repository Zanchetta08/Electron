const { app, BrowserWindow } = require("electron");

function createWindow(){
    const win = new BrowserWindow({ 
        width: 800,
        height: 600,
        titleBarStyle:'hidden',
        fullscreen:'true'
     });
    win.loadURL("http://localhost:8080");
}

app.on("ready", createWindow);