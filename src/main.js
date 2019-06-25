import { app, BrowserWindow } from "electron";
import { port, isProduction } from "./utils/env";

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (isProduction) win.loadURL(`${__dirname}/app.html`);
  else win.loadURL(`http://localhost:${port}/app.html`);
}

app.on("ready", createWindow);
