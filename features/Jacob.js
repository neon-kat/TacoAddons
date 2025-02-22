import settings from "../config";
register("chat", (message) => {
  if(!settings().jacobShutUp) return;
  setTimeout(() => {ChatLib.chat("§8[§f42§8] §7Aquatic_animal: shut up jacob")}, 2500);
}).setCriteria("[NPC] Jacob: My contest has started!");