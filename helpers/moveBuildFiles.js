const shell = require("shelljs");

shell.cp("-R", "client/build/*", "public/client");
