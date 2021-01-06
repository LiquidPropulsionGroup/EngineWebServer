// Importing dependencies
import { Application, Request, Response } from "express";
import SerialPort from "serialport";
const ReadLine = require('@serialport/parser-readline');

// Creating class that initializes the SerialTest route. This will only
// be used in development.
export class SerialTest {
  // Setting up the route with params: app, port, & parser
  public route(app: Application, port: SerialPort, parser: any) {
    // Setting up the GET route; this is the only route
    app.get("/serial/:action", (req: Request, res: Response) => {
      // Grabbing params from the URI
      let action = req.params.action || req.param('action');
      
      // Logic for the param 'on'. Use case is done through
      // a GET request to'<ip>:5000/serial/on'
      if (action == 'on') {
        port.write('O', (err) => {
          if (err) { return console.log('Error: ' + err.message); res.status(500).send(); }
          console.log('message sent!');
          // Return status 200 for agnoledgement of successfull Serial Port write
          return res.status(200).json({ message: "Get request successfull" });
        });
      }

      // Logic for the param 'off'. Use case is done through
      // a GET request to '<ip>:5000/serial/off'
      if (action == 'off') {
        port.write('F', (err) => {
          if (err) { return console.log('Error: ' + err.message); res.status(500).send(); }
          consol.log('message sent!');
          // Return status 200 for agnoledgement of successfull Serial Port write
          return res.status(200).json({ message: "Get request successful" });
        });
      }

      // Returning 404 since only ON and OFF URI exsist
      return res.status(404).send('Action: ' + action);
    });
  }
}
