function (context, args) { // Syntax:script { target: #s.skully.miner }
    if (!args || !args.target) {
		return {
			ok: false,
			msg: "Use:\nn_v83r.who_skull { target:#s.skully.miner }"
		}
	}
    var target = args.target;
    var res = target.call({});
    var who = "w1:#s.skully.who";
    var l = #s.scripts.lib();
    while (res.indexOf("Success") === -1) {
        var res = target.call ({ who });
    }
    return res;
}
