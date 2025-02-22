let dyeMsg = null;
// let rankColor = Player.getDisplayName().getText().match(/ §[a-z0-9]/)[0].trim();

function dyeHelp() {
    ChatLib.chat("§8[§b§ltaco§f§8] §7Welcome to the FakeDye command! Use the command /fakedye (dye type)\n§7Make sure to only type one word of the dye name.\n"
        + "§7Here's a list of our current dyes:\n"
        + "§8Copper Dye\n"
        + "§dNadeshiko Dye\n"
        + "§cCyclamen Dye\n"
        + "§4Archfiend Dye\n"
        + "§dWild Strawberry Dye\n"
        + "§4Carmine Dye\n"
        + "§8Mocha Dye\n"
        + "§7Secret Dye\n"
        + "§6Mango Dye\n")
}

register("command", (...args) => {
    if(args[0] == undefined) {
        dyeHelp();
        return;
    }

    switch(args[0].toLowerCase()) {
        case undefined:
            ChatLib.chat(dyeHelp());
            break;
        case "copper":
            dyeMsg = "§8Copper Dye";
            break;
        case "nadeshiko":
            dyeMsg = "§dNadeshiko Dye";
            break;
        case "cyclamen":
            dyeMsg = "§cCyclamen Dye";
            break;
        case "archfiend":
            dyeMsg = "§4Archfiend Dye";
        case "strawberry":
            dyeMsg = "§dWild Strawberry Dye";
            break;
        case "carmine":
            dyeMsg = "§4Carmine Dye";
            break;
        case "mocha":
            dyeMsg = "§8Mocha Dye";
            break;
        case "secret":
            dyeMsg = "§7Secret Dye";
            break;
        case "mango":
            dyeMsg = "§6Mango Dye";
            break;
        default:
            dyeMsg = "§8undefined";
            break;
    }

    ChatLib.chat("§d§lWOW! §f§b[MVP§2+§b] " + Player.getName() + " §6found " + dyeMsg + "§6!")
}).setName("fakedye").setAliases("dye");