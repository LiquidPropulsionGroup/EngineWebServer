import express from "express";
import * as bodyParser from "body-parser";
import { TestRoutes } from "./routes/test_routes";

class App {
  public app: express.Application;
  private test_routes: TestRoutes = new TestRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.test_routes.route(this.app);
  }
  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
export default new App().app;
