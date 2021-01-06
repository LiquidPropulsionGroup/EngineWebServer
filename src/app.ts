// Importing dependencies
import express from "express";
import * as bodyParser from "body-parser";
import SerialPort from "serialport";
const ReadLine = require('@serialport/parser-readline');

// Importing routes
import { TestRoutes } from "./routes/test_routes";
import { SerialTest } from "./routes/serial";

// Setting client variables for SerailTeat Route
const port: SerialPort = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser: ReadLine = new ReadLine();
port.pipe(parser);

// Creating add class that initializes all the routes passing the nessarary
// client variables
class App {
  // Setting the express appication
  public app: express.Application;

  // setting the routes
  private test_routes: TestRoutes = new TestRoutes();
  private serial: SerialTest = new SerialTest();

  // initializing all the route objects
  constructor() {
    this.app = express();
    this.config();
    this.test_routes.route(this.app);
    this.serial.route(this.app, port, parser);
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
