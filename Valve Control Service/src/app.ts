// Importing dependencies
import express from "express";
import * as bodyParser from "body-parser";
import SerialPort from "serialport";
const Readline = require("@serialport/parser-readline");

// Importing routes
import { Main } from "./routes/main";
import { Press } from "./routes/press";
import { Purge } from "./routes/purge";
import { Vent } from "./routes/vent";

// Class 'App' that sets up routes, ports, and a parser
class App {
  // Setting public variables
  public app: express.Application;
  public parser;
  public main_port: SerialPort;
  // Setting private routesi
  private main_route: Main = new Main();
  private press_route: Press = new Press();
  private purge_route: Purge = new Purge();
  private vent_route: Vent = new Vent();

  // initializing everything
  constructor() {
    // Initializing app and parser
    this.app = express();
    this.parser = new Readline();
    // Initializing ports with parser pipes
    this.main_port = new SerialPort("/dev/controller_main", { baudRate: 9600 });
    this.main_port.pipe(this.parser);
    // Initializing routes with proper variables
    this.main_route.route(this.app, this.main_port, this.parser);
    this.press_route.route(this.app, this.main_port, this.parser);
    this.purge_route.route(this.app, this.main_port, this.parser);
    this.vent_route.route(this.app, this.main_port, this.parser);
    // Initializing middle ware
    this.config();
  }

  // extras
  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
export default new App().app;
