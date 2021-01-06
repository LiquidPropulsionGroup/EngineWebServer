import { Application, Request, Response } from "express";
import SerialPort from "serialport";
const ReadLine = require('@serialport/parser-readline');

export class Serial {
  public route(app: Application, port: SerialPort, parser: any) {
    app.get("/serial", (req: Request, res: Response) => {
      port.write('E', (err) => {
        if (err) { return console.log('Error: ' + err.message); }
        console.log('message sent!');
        res.status(200).json({ message: "Get request successfull" });
      });
      // parser.on('data', console.log);
    });
  }
}
