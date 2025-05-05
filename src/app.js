import readline from "readline";
import process from "process";
import os from "os";
import router from "./modules/router.js";

app();

function app() {
  let userName = "Username";
  process.chdir(os.homedir());
  console.log(`Welcome to the File Manager, ${userName}!`);
  const goodbyeMessage = `Thank you for using File Manager, ${userName}, goodbye!`

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (input) => {
    if (input === ".exit") {
      rl.close();
      console.log(goodbyeMessage);
    } else {
      router(input);
    }
  });

  rl.on("SIGINT", () => {
    console.log(goodbyeMessage);
    process.exit();
  });
}
