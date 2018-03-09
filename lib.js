function(context, args)  // cmd:"help"
{
  var block, builder, builderArr, char, corrupt, dataDump, dataDumpString, dataSet,
  fullSec, gcEx, glamArr, header, horizontalRule, i, list, listArr,
  menuArr, retVal, scriptArr, timeNow;
  var caller = context.caller;
  var peram = args.cmd;
  var LIBDTR; ({LIBDTR,context,args}=#s.dtr.lib({context:context,args:args}))
  //var libDtr = #s.dtr.lib();
  var libScripts = #s.scripts.lib();

  var banner = #s.kode.headline({text:"nv83r.lib", return_output:true}).msg;
  var glamArr = [ "`5Welcome to the n_v83r.lib`", "\n-The- `!cmd!` `-s-` `-are-` "];
  var headerArr = ["`6help`", "`7char`", "`8list`", "`9crack`", "`10libDtr`", "`11libScripts`"];
  var metaArr = ["n_v83r.", "hub", "crack", "miner", "market", "ad_spammer", "devel"];

  if (peram == "help") {
    return  banner + glamArr + headerArr.join(" | ")
  } else if (peram == "libScripts") {
		gcEx = "1T50B50M50KGC";
		timeNow = new Date();
		horizontalRule = libScripts.create_rand_string(55);
		//corrupt1 = lib_scripts.get_corruption_char(peram);
		//corrupt2 = lib_scripts.get_corruption(5);
		return {
			ok: true,
			cmd: peram,
			security_lvl: libScripts.get_security_level_name(4),
			gc_value:gcEx,
			gc_to_num: libScripts.to_gc_num(gcEx),
			int_to_gc: libScripts.to_gc_str(12345),
			to_game_timestr: libScripts.to_game_timestr(timeNow),
			create_rand_string: libScripts.create_rand_string(6),
			color: "`0LtGrey` `1White` `2Green` `3Blue` `4Purple` `5Orange` `+Magenta` `!Cyan`",
      log: libScripts.log(#s.sys.access_log()),
      get_log: libScripts.get_log(),
      get_value: libScripts.get_values(peram),
      hash_codes: libScripts.hash_code(peram),
      each_array: libScripts.each(libScripts.get_values(peram), libScripts.create_rand_string(peram)),
      horizontal_rule: horizontalRule,
      lib_scripts: [
        #s.scripts.lib()
      ]
		};
  } else if (peram == "libDtr") {
    //return libDtr;
    return {
      ok:true,
      DTR: LIBDTR,
    };
  } else {
    return scriptArr + glamArr + headerArr.join(" | ")
  }
}
