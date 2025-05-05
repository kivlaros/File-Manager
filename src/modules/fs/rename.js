import { promises as fs } from "fs";
import { getPath } from "../assist/get-path.js";

export const rename = async (comandTextArr) => {
  const pathObj = getPath(comandTextArr, false);
  try {
    await fs.rename(pathObj.source, pathObj.dest);
  } catch (err) {
    throw new Error(err.message);
  }
};
