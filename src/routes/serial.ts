import { Application, Request, Response } from "express";
import SerialPort from "serialport"; 
import ReadLine from "@serialport/parser-readline";

export class Serial {
  public route(app: Application) {
    const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
    const parser = port.pipe(new ReadLine({ delimiter: '\n' }));

    app.get("/api/serial", (req: Request, res: Response) => {
      port.on("open", () => {
        console.log('serial port open');
      });
      port.on("data", () => {
        console.log('got word from arduino:', data);
        res.status(200).json({ message: `got word from arduino: ${ data }`})
      });
    });
  }
}
