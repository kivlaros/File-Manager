import { promises as fs } from "fs";
import { getPath } from "../assist/get-path.js";

export const createDir = async (comandTextArr) => {
  const dirPath = getPath(comandTextArr);
  try {
    await fs.mkdir(dirPath);
  } catch (err) {
    throw new Error(err.message);
  }
};
