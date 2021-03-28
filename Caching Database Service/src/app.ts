// Importing dependencies
import express from "express";
import * as bodyParser from "body-parser";

// Importing routes
import { startCache } from "./routes/startCache";

// Class 'App' that sets up routes, ports, and a parser
class App {
  // Setting public variables
  public app: express.Application;
  // Setting private routesi
  private startCach_route: startCache = new startCache();

  // initializing everything
  constructor() {
    // Initializing app and parser
    this.app = express();
    // Initializing routes with proper variables
    this.startCach_route.route(this.app);
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
