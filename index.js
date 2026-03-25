const { app, BrowserWindow, Menu } = require('electron');
const menu = require('./menu');

let window;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false // Le agregue esta linea porque en las nuevas versiones de electron no funciona sin ella ya que es una medida de seguridad
        }
    });
    window.loadFile('index.html');
});

Menu.setApplicationMenu(menu);