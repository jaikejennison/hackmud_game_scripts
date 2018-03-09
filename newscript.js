function(context, args) {  // cmd:"help"
	var block, caller, lib_scripts, peram;
	block = "";
	caller = context.caller;
	lib_scripts = #s.scripts.lib();
	peram = args.cmd;

	if (peram == "help") {
		return {
			ok:true
		};
	}
	return {
		ok:false
	};
}
