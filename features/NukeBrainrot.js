import settings from "../config"

let brainrot = FileLib.read("TacoAddons", "assets/brainrot.txt").split("\n")
register("chat", (inParty, selfDM, player, message, event) => {
    if(!settings().nukeBrainrot && !settings().brainrotPartyKick) return;
    if(player == Player.getName()) return;
    if(selfDM != "") return;
    let testMessage = message.toLowerCase()
    if(testMessage.includes("uwuaddons")) return;
    for (let i = 0; i < brainrot.length; i++) {
        if (testMessage.includes(brainrot[i])) {
            if(settings().nukeBrainrot) {
                cancel(event);
                const brainrotHover = new Message(new TextComponent("§8[§b§ltaco§f§8] §c" + player + " §6used brainrot! ")).addTextComponent(new TextComponent("§4§lHOVER").setHoverValue("§9" + message)).chat();
            }
            if (inParty != "" && settings().brainrotPartyKick == true) {
                setTimeout(() => {ChatLib.command("pc [taco] Brainrot Bozo Detected")}, 500);
                setTimeout(() => {ChatLib.command("p kick " + player)}, 1500);
                return;
            }
        }
    }
}).setCriteria(/(^Party >[^:]*)?(^To[^:]*)? (\w+) ?[a-zA-Z0-9_\[\]]*: (.+)/).setContains();
