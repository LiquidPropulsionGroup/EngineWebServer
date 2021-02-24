// Importing app with all the route objects
import app from "./app";
// Importing AddressInfo for serving the REST api on the devices ip
import { AddressInfo } from "net";

// Serving the REST api
const server = app.listen(5000, "0.0.0.0", () => {
  const { port, address } = server.address() as AddressInfo;
  console.log("Server listening on:", "http://" + address + ":" + port);
});
