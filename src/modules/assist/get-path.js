import path from "path";

export function getPath(comandTextArr, onePath = true) {
  comandTextArr.shift();
  const currentPath = process.cwd();
  let result = "";
  if (onePath) {
    result = path.resolve(currentPath, comandTextArr[0]);
  } else {
    if (!comandTextArr[1]) throw new Error("Operation failed");
    const sourcePath = path.resolve(currentPath, comandTextArr[0]);
    const destPath = path.resolve(currentPath, comandTextArr[1]);
    result = {
      source: sourcePath,
      dest: destPath,
    };
  }
  return result;
}
