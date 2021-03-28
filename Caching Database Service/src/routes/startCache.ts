// Importing dependencies
import { Application, Request, Response } from "express";

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

      // Returning 404 since only ON and OFF URI exsist
      return res.status(404).send("Action: " + action);
    });
  }
}
