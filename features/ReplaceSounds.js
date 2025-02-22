import settings from "../config";

const daddy = new Sound({
    source: "daddy.ogg",
    volume: 50,
    loop: false
})

const euweh = new Sound({
    source: "euweh.ogg",
    volume: 50,
    loop: false
})

register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if(settings().duckSounds) {
        daddy.setVolume(80);
        daddy.play();
        cancel(event);
        return;
    }

    if(settings().fiyrSounds) {
        euweh.play();
        cancel(event);
        return;
    }

}).setCriteria("")
