import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress } from "zlib";
import { pipeline } from "stream/promises";
import { getPath } from "../assist/get-path.js";

export async function compress(comandTextArr) {
  const pathsObj = getPath(comandTextArr, false);
  const readStream = createReadStream(pathsObj.source);
  const writeStream = createWriteStream(pathsObj.dest);
  const brotliCompress = createBrotliCompress();

  try {
    await pipeline(readStream, brotliCompress, writeStream);
  } catch (err) {
    throw new Error(err.message);
  }
}
