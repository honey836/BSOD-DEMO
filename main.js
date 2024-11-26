// main.js
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        fullscreen: true,
        kiosk: true, // Enforces full-screen and prevents closing the window without Ctrl+Alt+Del
        webPreferences: {
            nodeIntegration: true,
        }
    });
    win.loadFile('bsod.html'); // Load the BSOD HTML file
    win.setMenuBarVisibility(false); // Hide menu bar
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
