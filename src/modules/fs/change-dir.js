import path from "path";

export function changeDir(comandTextArr) {
  try {
    if (comandTextArr[0] == "up") {
      const parentDir = path.join(process.cwd(), "..");
      process.chdir(parentDir);
    } else {
      process.chdir(comandTextArr[1]);
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
