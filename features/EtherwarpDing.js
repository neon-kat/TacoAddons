import settings from "../config";

register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if(!settings().etherwarpDing) return
    if (name.includes("mob.enderdragon.hit") && pitch === 0.5396825671195984) {
        cancel(event)
        World.playSound("note.pling", 100.0, 1.0)
    }
}).setCriteria("mob.enderdragon.hit")
