// Importing dependencies
import { Application, Request, Response } from "express";
import { spawn } from "child_process";

// Creating class that initializes the SerialTest route. This will only
// be used in development.
export class startCache {
  // Setting up the route with params: app
  public route(app: Application) {
    // Setting up the GET route; this is the only route
    app.get("/cach/:action", (req: Request, res: Response) => {
      // Grabbing params from the URI
      let action = req.params.action || req.param("action");

      // Script code for starting tread goes here
      let pythonProcess = spawn("python", ["-u", "script.py"], {detached: true}); // starts running script.py (a temporary file) in the background
      pythonProcess.stdout.on("data", (data) => {}); // What to do when stdout is printed (data)
      pythonProcess.on("exit", (code) => {}); // What to do when program is done
      let terminateProcess = spawn("bash", ["termscript.sh"], {detached: true}); // ps aux | grep "python -u script.py" | tr -s' ' | cut -d' ' -f2 | xargs kill
      
      // Returning 404 since only ON and OFF URI exsist
      return res.status(404).send("Action: " + action);
    });
  }
}
