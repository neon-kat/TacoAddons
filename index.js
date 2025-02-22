import settings from "./config";
import { chat } from "./utils/chat";

import "./features/Dev";
import "./features/EtherwarpDing";
import "./features/Jacob";
import "./features/NukeBrainrot";
// import "./features/Pre4Helper"; // THIS IS WIP
import "./features/ReplaceSounds";   

register("command", (...args) => {
    if (args[0] == undefined) return settings().getConfig().openGui()
    ChatLib.chat(chat(args[0] + " ./. "))
}).setName("tacoaddons").setAliases("ta","taco")
