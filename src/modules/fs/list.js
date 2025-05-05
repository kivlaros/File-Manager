import { promises as fs } from "fs";
import { stat } from "fs/promises";
import path from "path";

export const list = async () => {
  try {
    const filesList = await fs.readdir(process.cwd());
    const tableFilesPromise = filesList.map(async (elem) => {
      const pathToFile = path.join(process.cwd(), elem);
      const type = await getPathType(pathToFile);
      return [elem, type];
    });
    const tableFiles = await Promise.all(tableFilesPromise);
    console.table(tableFiles);
  } catch (err) {
    throw new Error(err.message);
  }
};

async function getPathType(path) {
  try {
    const stats = await stat(path);

    if (stats.isFile()) return "file";
    if (stats.isDirectory()) return "directory";
    return "other"; // для симлинков, устройств и т.д.
  } catch (error) {
    return "no access";
  }
}
