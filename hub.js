function(context, args)  // cmd:"help"
{
	var builder, builder_arr, caller, char, corrupt, data_dump, data_dump_string, data_set,
	fullsec, gc_ex, glam_arr, header, header_arr, horizontal_rule, i, lib_scripts, lib_dtr, list, list_arr,
	menu_arr, meta_arr, peram, ret_val, script_arr, time_now;
	var banner = #s.kode.headline({text:"skuliy.hub", return_output:true}).msg;
	caller = context.caller;
	peram = args.cmd;
	lib_scripts = #s.scripts.lib();
	//script_arr = [#s.skuliy.banner(), #s.kode.headline({text:"skuliy.hub", return_output:true})]
	glam_arr = [#s.skuliy.banner(), "`5Welcome to the skuliy.hub`", "\n -The- !cmd! -s- -are- "];
	meta_arr = ["skuliy.", "hub", "crack", "miner", "market", "ad_spammer", "devel"];
	header_arr = ["+help+", "+char+", "+list_t1+", "+list_t2+", "+crack+", "+mine+", "+scripting+"];

	if (peram == "help") {
		return  glam_arr + header_arr.join(" | ")
	} else if (peram == "list_t1") {
		fullsec = #s.scripts.fullsec();
		data_dump = fullsec.filter(function(search){
			return (search.includes(".public")) &&
				   // Filter out known malicious entries.
				   !(search.includes("accenture") ||
					 search.includes("arino") ||
					 search.includes("blackcore") ||
					 search.includes("dynamo_corp") ||
					 search.includes("jinteki_corp") ||
					 search.includes("l4sh") ||
					 search.includes("lunar_systems") ||
					 search.includes("n_inc") ||
					 search.includes("onion") ||
					 search.includes("ploogle") ||
					 search.includes("pwnhub") ||
					 search.includes("reinit") ||
					 search.includes("rozas")
					)
		})
		data_dump_string = data_dump.toString()
		data_set = new Array();
		data_set = data_dump_string.split(",");
		for (i = 0; i < data_set.length; i++) {
			 data_set[i] = "skuliy.ncez { t: " + "#s." + data_set[i] + " }"
		 }
		 return data_set;
	 } else if (peram == "mine") {
			fullsec = #s.scripts.fullsec();
			data_dump = fullsec.filter(function(search){
				return (search.includes(".pub") || search.includes(".entry")) &&
					   // Filter out known malicious entries.
					   !(search.includes("accenture") ||
						 search.includes("arino") ||
						 search.includes("blackcore") ||
						 search.includes("dynamo_corp") ||
						 search.includes("jinteki_corp") ||
						 search.includes("l4sh") ||
						 search.includes("lunar_systems") ||
						 search.includes("n_inc") ||
						 search.includes("onion") ||
						 search.includes("ploogle") ||
						 search.includes("pwnhub") ||
						 search.includes("reinit") ||
						 search.includes("rozas")
						)
			})
			data_dump_string = data_dump.toString()
			data_set = new Array();
			data_set = data_dump_string.split(",");
			for (i = 0; i < data_set.length; i++) {
				 data_set[i] = "skuliy.miner { t: " + "#s." + data_set[i] + " }"
			 }
			 return data_set;
		} else if (peram == "crack") {
			//var run_array new Array();
			//for (i = 0; i < data_set.length; i++) {
				//run_array[i] = "#s." + data_set[i]
			//}
			return  data_set;
	} else if (peram == "scripting") {
		gc_ex = "1T50B50M50KGC";
		time_now = new Date();
		horizontal_rule = lib_scripts.create_rand_string(55);
		//corrupt1 = lib_scripts.get_corruption_char(peram);
		//corrupt2 = lib_scripts.get_corruption(5);
		return {
			ok:true,
			cmd: "scripting",
			//corruption1:corrupt1,
			//corruption2:corrupt2,
			security_lvl_4: lib_scripts.get_security_level_name(4),
			hr1: horizontal_rule,
			peram_value:peram,
			peram_hash: lib_scripts.hash_code(peram),
			gc_value:gc_ex,
			gc_to_num: lib_scripts.to_gc_num(gc_ex),
			hr2: horizontal_rule,
			int_12345_to_gc_str: lib_scripts.to_gc_str(12345),
			to_game_timestr: lib_scripts.to_game_timestr(time_now),
			reate_rand_string: lib_scripts.create_rand_string(6),
			color: " -LtGrey- `1White` `2Green` `3Blue` `4Purple` `5Orange` +Magenta+ !Cyan!",
			hr3: horizontal_rule,
			lib: #s.scripts.lib()
		};
	} else if (peram == "char") {
		peram = args.amount;
		if (!peram) {
			return {
				ok:false,
				msg: "`1Define the` !amount! `1you want to display` `1(The` !amount! `1starts at` +1+`1).`"
			}
		}
		for (i = 1; i < args.amount; i++) {
			var block = "";
			block += STRING.fromCharCode(i) + " ";
			char = STRING.fromCharCode(1)
			if (i%10 == 0) {
				block+="\n" + i + ": ";
			}
		}
		return {
			ok: true,
				msg: "Display characters in your scripts by assigning them to a variable:\n`2var char` -=- `6STRING`-.-`4fromCharCode`-(-`5number`-)- \n"+block+"\nvar char: "+char
		}
	} else {
		return {
			ok:false,
			msg: "`1Try to` !cmd! `1your way that tabbing can` +help+ `1with.`"
		};
	}
}
