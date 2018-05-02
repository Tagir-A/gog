const { spawn, spawnSync } = require("child_process");

const server = spawn("npm", ["start"]);
const testServer = spawn("npm", ["run", "configured-test"], {
  stdio: "inherit"
});
