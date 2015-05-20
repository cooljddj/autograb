API.chatLog("Creator: WayzRG. Source: http://wp.me/P4pmFc-F. Command: /start, /stop", true);
API.on(API.CHAT_COMMAND, command);
API.on(API.DJ_ADVANCE, grab);

function grab() {
        setTimeout(function(){$(".icon-curate").click()}, 60000);
        setTimeout(function(){$($(".curate").children(".menu").children().children()[0]).mousedown()}, 60000);
        API.chatLog(API.getMedia().title + " will be grabed in 60 seconds");
}

function command(value) {
    if (value == "/start") {
        API.on(API.DJ_ADVANCE, grab);
        API.chatLog("Auto-Grab was started", alert);
    }
    else if (value == "/stop") {
        API.off(API.DJ_ADVANCE, grab);
        API.chatLog("Auto-Grab was stopped", alert);
    }
}
