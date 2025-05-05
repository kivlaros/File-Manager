import os from "os";

export function osInfo(comandTextArr) {
  const errorMessage = "Invalid input";
  const commandList = [
    "--EOL",
    "--cpus",
    "--homedir",
    "--username",
    "--architecture",
  ];
  try {
    if (commandList.includes(comandTextArr[1])) {
      switch (comandTextArr[1]) {
        case "--EOL":
          console.log(
            "OS default system End-Of-Line : " + JSON.stringify(os.EOL)
          );
          break;
        case "--cpus":
          console.log("OS information about each logical CPU core : ");
          os.cpus().forEach((elem) => {
            console.log(elem.model);
          });
          break;
        case "--homedir":
          console.log("OS home directory : " + os.homedir());
          break;
        case "--username":
          console.log("Operating system username: " + os.userInfo().username);
          break;
        case "--architecture":
          console.log("CPU architecture: " + os.arch());
          break;
      }
    } else {
      throw new Error(errorMessage);
    }
  } catch(err) {
    throw new Error(err.message)
  }
}
