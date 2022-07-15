import Server from "./src/models/Server.js";
export const server = new Server();
export const app = server.getApp();
server.listen();
//# sourceMappingURL=index.js.map