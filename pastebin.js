function (context, args) {  // create:"#s. "
    var caller, header, i, peram, lib_scripts;
	//return #s.kode.headline({text:"skuliy.Hub", return_output:true});
	caller = context.caller;
	lib_scripts = #s.scripts.lib();
	peram = args.create;
    #s.symlink.pastebin({ create:peram, anon:true })
}
