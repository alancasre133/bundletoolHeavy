import { spawnSync } from "child_process";
import { Command } from "./types";
const path = require("path"); 

const bundletoolPath = path.join('node_modules', 'bundletoolheavy', 'bundletoolfile', 'bundletool-all-1.17.2.jar');


export default async (command: Command, args: string[] = []) => {
  return spawnSync("java", ["-jar", bundletoolPath, command, ...args]);
};
