import { franc } from "franc";
import langs from "langs";

const input = process.argv[2];
const langCode = franc(input);
const lang = langs.where("3", langCode);
console.log("The language is", lang.name);
