// Importing dependencies
import { Application, Request, Response } from "express";
import SerialPort from "serialport";
const Readline = require("@serialport/parser-readline");

// Creating class that initializes the SerialTest route. This will only
// be used in development.
export class Main {
  // Setting up the route with params: app, port, & parser
  public route(app: Application, port: SerialPort, parser: typeof Readline) {
    // Setting up the GET route; this is the only route
    app.get("/serial/main/:action", (req: Request, res: Response) => {
      // Grabbing params from the URI
      const action = req.params.action || req.param("action");

      if (action == "LOXon") {
        port.write("L", (err) => {
          if (err) {
            res.status(500).send();
            return console.log("Error: " + err.message);
          }
          console.log("message sent!");
          // Return status 200 for agnoledgement of successfull Serial Port write
          return res.status(200).json({ message: "Get request successfull" });
        });
      }

      if (action == "LOXoff") {
        port.write("X", (err) => {
          if (err) {
            res.status(500).send();
            return console.log("Error: " + err.message);
          }
          console.log("message sent!");
          // Return status 200 for agnoledgement of successfull Serial Port write
          return res.status(200).json({ message: "Get request successfull" });
        });
      }

      if (action == "FUELon") {
        port.write("F", (err) => {
          if (err) {
            res.status(500).send();
            return console.log("Error: " + err.message);
          }
          console.log("message sent!");
          // Return status 200 for agnoledgement of successfull Serial Port write
          return res.status(200).json({ message: "Get request successfull" });
        });
      }

      if (action == "FUELoff") {
        port.write("O", (err) => {
          if (err) {
            res.status(500).send();
            return console.log("Error: " + err.message);
          }
          console.log("message sent!");
          // Return status 200 for agnoledgement of successfull Serial Port write
          return res.status(200).json({ message: "Get request successfull" });
        });
      }

      if (action == "test") {
        port.write("T", (err) => {
          if (err) {
            res.status(500).send();
            return console.log("Error: " + err.message);
          }
          console.log("message sent!");
          // Return status 200 for agnoledgement of successfull Serial Port write
          return res.status(200).json({ message: "Get request successfull" });
        });
      }

      // Returning 404 since only ON and OFF URI exsist
      return res.status(404).send("Action: " + action);
    });
  }
}
