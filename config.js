import Settings from "../Amaterasu/core/Settings"
import DefaultConfig from "../Amaterasu/core/DefaultConfig"

const schemes = ["data/ColorScheme.json"]
const defaultConf = new DefaultConfig("TacoAddons", "data/settings.json")
    .addButton({
        category: "General",
        configName: "MyDiscord",
        title: "Discord Server",
        description: "§4§ladding this later",
        tags: ["maybe"],
        onClick(setting) {
            ChatLib.command("ct copy https://www.youtube.com/watch?v=dQw4w9WgXcQ", true)
            ChatLib.chat("&6Copied Discord Link!")
            // new Message(new TextComponent("text").setClick("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "website link")).chat()
        }
    })
    .addButton({
        category: "GUI",
        configName: "apply",
        title: "Apply Changes",
        description: "Need to click this for window to reload with selected changes",
        onClick(config) {
            const currentScheme = schemes[0]
            const scheme = JSON.parse(FileLib.read("TacoAddons", currentScheme))
            scheme.Amaterasu.background.color = config.settings.bgColor
            FileLib.write("TacoAddons", currentScheme, JSON.stringify(scheme, null, 4))

            config
                .setPos(20, 20)
                .setSize(60, 60)
                .setScheme(currentScheme)
                .apply()
        }
    })
    .addColorPicker({
        category: "GUI",
        configName: "bgColor",
        title: "Change Background Color",
        description: "Changes the color and alpha of the background",
        value: [0, 0, 0, 80]
    })
    .addSwitch({
        category: "M7",
        subcategory: "Alerts",
        configName: "pre4Helper",
        title: "Pre4 Helper",
        description: "Includes solver, alerts, and PB trackers for pre\n§4§lWIP, DOES NOT WORK",
        tags: ["i4"] // included this for the weirdoes
    })
    .addSwitch({
        category: "Funny",
        subcategory: "Chat",
        configName: "jacobShutUp",
        title: "Jacob Shut Up",
        description: "Tells Jacob to shut up when his contest starts",
    })
    .addSwitch({
        category: null,
        subcategory: "Chat",
        configName: "nukeBrainrot",
        title: "Nuke Brainrot",
        description: "Hides brainrot messages"
    })
    .addSwitch({
        category: null,
        subcategory: "Chat",
        configName: "brainrotPartyKick",
        title: "Kick Brainrotters",
        description: "Kicks brainrotters from party"
    })
    .addSwitch({
        category: null,
        subcategory: "Chat",
        configName: "uwuAddonsHidden",
        title: "Hide UwUaddons",
        description: "Hides the useless mod they call UwUaddons"
    })
    .addSwitch({
        category: null,
        subcategory: "Sounds",
        configName: "etherwarpDing",
        title: "Etherwarp Ding",
        description: "Etherwarp = Ding\nNot that complicated"
    })
    .addSwitch({
        category: null,
        subcategory: "Sounds",
        configName: "duckSounds",
        title: "Duck Sounds",
        description: "Replaces every sound with \"daddy\"\nVoiced by ThePvpingDuck"
    })
    .addSwitch({
        category: null,
        subcategory: "Sounds",
        configName: "fiyrSounds",
        title: "Fiyr Sounds",
        description: "Replaces every sound with \"euweh\"\nVoiced by fiyrthgu"
    })
    .addButton({
        category: null,
        subcategory: "Miscellaneous",
        configName: "instaBan",
        title: "Increase FPS",
        description: "Optimizes some things to increase FPS",
        onClick(setting) {
            setTimeout(() => {ChatLib.command("limbo")}, 2500);
            const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText")
			Client.currentGui.close()
			setTimeout(() => {ChatLib.chat("§c§lA player has been removed from your game.\n§r§bUse /report to continue helping out the server!")}, 4500);
			setTimeout(() => {Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(
			 "§cYou are temporarily banned for §f29d 23h 59m 59s§c from this server!\n\n" + 
			  `§7Reason: §rCheating through the use of unfair game advantages.\n` + 
			  "§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#"
			 + "B9ACL0" + 
			 "\n§7Sharing your Ban ID may affect the processing of your appeal!"))}, 6000);
        }

    })
const config = new Settings("TacoAddons", defaultConf, "data/ColorScheme.json")
    /** .onOpenGui(() => {
        ChatLib.chat("config gui has been opened")
    })
    .onCloseGui(() => {
        ChatLib.chat("config gui has been closed")
    })
        gonna use this for something later idk    
    */

const currentScheme = schemes[0]
const scheme = JSON.parse(FileLib.read("TacoAddons", currentScheme))
scheme.Amaterasu.background.color = config.settings.bgColor
FileLib.write("TacoAddons", currentScheme, JSON.stringify(scheme, null, 4))

config
    .setPos(20, 20)
    .setSize(60, 60)
    .setScheme(currentScheme)
    .apply()

export default () => config.settings