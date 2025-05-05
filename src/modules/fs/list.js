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
    const tableFilesObj = tableFiles.map(([name, type]) => ({
      Name: name,
      Type: type
    }));
    console.table(tableFilesObj);
  } catch (err) {
    throw new Error(err.message);
  }
};

async function getPathType(path) {
  try {
    const stats = await stat(path);

    if (stats.isFile()) return "file";
    if (stats.isDirectory()) return "directory";
    return "other";
  } catch (error) {
    return "no access";
  }
}
