import axios from "axios";

export default axios.create({
  baseURL: "https://4d4a-2405-201-e022-b854-d64-8145-54e0-2988.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
  /*with ngrok
  first install ngrok
  add ngrok extension on vscode
  open ngrok terminal
  paste ngrok http 8080 */

  //without ngrok
  /*baseURL: "http://localhost:8080",
  timeout: 20000,
  headers: { "Content-Type": "application/json" },*/
});
