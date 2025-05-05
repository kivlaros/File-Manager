import { promises as fs } from "fs";
import { getPath } from "../assist/get-path.js";
import path from "path";

export const rename = async (comandTextArr) => {
  const source = getPath(comandTextArr);
  const destDir = path.dirname(source);
  const dest = path.join(destDir, comandTextArr[1])
  console.log(source,dest)
  try {
    await fs.rename(source, dest);
  } catch (err) {
    console.log(err.message)
    throw new Error(err.message);
  }
};

