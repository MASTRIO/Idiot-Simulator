function createWindow() {
    const width = 300;
    const height = 600;
    const w = new BrowserWindow({
      width,
      height,
      webPreferences: {
        nodeIntegration: true
      }
    });
  
    w.loadURL(url.format({
      pathname: path.join(__dirname, 'https://github.com/MASTRIO/Nikhil-Simulator/blob/main/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  
    const x = windows.length * width;
    const y = 0;
    w.setPosition(x, y);
    w.custom = {
    };
    windows.push(w);
  }