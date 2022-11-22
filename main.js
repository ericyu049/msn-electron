const { app, ipcMain, BrowserWindow } = require('electron');
const path = require('path');

function urlFromComponents({ pathname = '/', protocol = 'https:', ...props } = {}) {
    const url = new URL('https://site.example');
    url.protocol = protocol;
    url.hostname = props.hostname;
    url.pathname = pathname;
    url.hash = props.hash;
    return url;
}
function mainWindow() {
    win = new BrowserWindow({
        width: 400,
        height: 750,
        minWidth: 400,
        minHeight: 480
    });
    win.webContents.openDevTools();
    const homeurl = urlFromComponents({
        pathname: path.join(__dirname, 'dist/msn/index.html'),
        protocol: 'file:',
        hostname: '',
        hash: '/home'
    });
    win.loadURL(homeurl.href);
}
function openChatWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600
    });
    win.webContents.openDevTools();
    const chaturl = urlFromComponents({
        pathname: path.join(__dirname, 'dist/msn/index.html'),
        protocol: 'file:',
        hostname: '',
        hash: '/chat'
    });
    win.loadURL(chaturl.href);
}
app.whenReady().then(() => {
    mainWindow();
    openChatWindow();
})
app.addListener('openChat', () => {
    openChatWindow();
})