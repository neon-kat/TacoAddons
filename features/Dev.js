import settings from "../config";
import pogObject from "./Object";
import { chat } from "../utils/chat";
import { getClass  } from "../utils/getclass";


startedAt = null
on4thDevice = false


function notifyDone(name) {
    if(on4thDevice) {
        if(getClass()!=="Berserk") return
        if(Player.getName()==name.removeFormatting()){
            TimeToCompleteDev = parseFloat((Date.now() - startedAt) / 1000).toFixed(2);
            if(settings().devicePopup) {
                Client.showTitle("", "§dDevice Done", 0, 30, 0)
                Client.showTitle("", "§dDevice Done", 0, 30, 0)
                if(parseFloat(TimeToCompleteDev) < parseFloat(pogObject.fastestI4)){
                    pogObject.fastestI4 = parseFloat(TimeToCompleteDev)
                    pogObject.save()
                    setTimeout(() => {
                        chat("§aDevice Complete! §f" + TimeToCompleteDev + "s " + "§d§lPB!")
                    }, 10);   
                    World.playSound("random.anvil_land", 100, 1.55);
                    setTimeout(() => {World.playSound("mob.cat.meow", 10, 1)},100);
                }else {
                    setTimeout(() => {
                        chat("§aDevice Complete! §f" + TimeToCompleteDev + "s " + "§7(" + pogObject.fastestI4 + ")")
                    }, 10);
                    World.playSound("random.anvil_land", 100, 1.55);
                }
            }
            // Checks if the feature is enabled and then sends the alert
            if (settings().notifyPartyP4) {
                ChatLib.command(`pc [taco] ${Settings.devCompleteMessage} (${TimeToCompleteDev}s)`)
                ChatLib.command(`pc [taco] it worked idk)`)
                startedAt = null
            }
        };
    }
}

register("step", () => {
    on4thDevice = Player.getX() > 63 && Player.getX() < 64 && Player.getY() === 127 && Player.getZ() > 35 && Player.getZ() < 36;
}).setDelay(1);

register("chat", (name, message, event) => {
    notifyDone(name);
}).setCriteria("${name} completed a device! ${message}");


register("chat", (event) => {
    startedAt = Date.now()
    setTimeout(chat("Dev Started"), 25)
    
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")

