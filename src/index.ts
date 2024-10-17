#! /usr/bin/env node

import { Command } from "commander";
const program = new Command();
import pkg from "../package.json";

program.name(pkg.name).description(pkg.description).version(pkg.version);

program
  .option(
    "-m, --mode <mode>",
    "Set mode (development or production)",
    "development"
  )
  .option("-e, --entry <entry>", "Set entry file", "src/main.js")
  .option("-c, --config <config>", "Set config file", "vite.config.js")
  .parse(process.argv);

const options = program.opts();

console.log(options);
