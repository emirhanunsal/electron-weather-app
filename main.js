const { app, BrowserWindow } = require('electron');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('index.html');
};

//when electron is ready then create window
app.whenReady().then(createWindow);


//exit program when all windows closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { //darwin means macOS
        app.quit();
    }
});


//if macOS activate windows again when program started
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
}
)
