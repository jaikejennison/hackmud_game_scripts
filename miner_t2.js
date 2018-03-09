function(context, args) { // cmd:"automine"
    var block, builder, builder_arr, caller, char, corrupt, data_dump, data_dump_string, data_set, fullsec, gc_ex, glam_arr, header, header_arr, horizontal_rule, i, lib_scripts, lib_dtr, list, list_arr, menu_arr, meta_arr, peram, ret_val, script_arr, target, time_now;
    var banner = args.target.call().split("\n"),
        pages = banner.toString([banner.length - 1].split("|").map(function(v) {
            return v.trim()
        }).filter(function(v) {
            return v.length > 0
        })),
        args = {},
        out = args.target.call({}),
        out2,
        none = out.match(/with ([a-z]+):"([a-z]+)"/i)
    var //nav = none[1],
        show = none[1],
        //cmd = none[1],                                 // the command used to view pages
        cw = none[2], // the codeword needed to access the projects
        rePr = /(date for|continues on|of the|developments on) ([a-z0-9_]+(.sh|.exe)?)/ig, // regex for projects
        rePa = /(strategy )([a-z0-9_]+)/ig, // regex for password(s)
        m,
        es = [], // entries
        prs = [], // projects
        pas = [], // passwords
        ts = []; // targets

    block = "";
    caller = context.caller;
    lib_scripts = #s.scripts.lib();
    peram = args.cmd;
    target = {};

    if (peram == "automine") {
        fullsec = #s.scripts.fullsec();
        data_dump = fullsec.filter(function(search) {
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
            if (none == null) {
                out2 = args.target.call({})
                return {
                    error: "PARSE ERROR ::: MAILCIOUS SERVER",
                    out1: out,
                    out2: out2
                }
            }
            pages.forEach(function(v) {
                args = {}
                    // Craft the arguments that will be called.
                    // e.g.: {"see":"about_us"}
                args[show] = v
                    //args[nav] = v
                    //args[cmd] = v

                // Call the function with the custom arguments.
                out = args.target.call(args)

                // Search for projects.
                while (m = rePr.exec(out)) {
                    prs.push(m[2])
                }
                // Search for passwords.
                while (m = rePa.exec(out)) {
                    pas.push(m[2])
                }
            })
            prs.forEach(function(p) {
                out = args.target.call({
                    p: pas[0], // password
                    pass: pas[0], // password
                    password: pas[0], // password
                    project: p, // project
                    [show]: cw, // codeword
                })

                // Parse each entry and filter out none, empty, nil, error, etc.
                if (typeof(out) == "string") {
                    out = out.split("\n")
                }
                out.forEach(function(e) {
                    // Make prefer unidentified entries (they seem to have more success).
                    if (e && e.includes(".") && e.includes("_")) {
                        ts.push(e)
                    }
                })
                if (ts.length > 0) {
                    var safety = #s.scripts.get_level({
                        name: ts[0]
                    })
                    if (safety != "FULLSEC") {
                        return "

                        PARSE ERROR::: MAILCIOUS SERVER "
                    }
                }
            })
        }
        return ts;
    } else {
        return {
            ok: false
        };
    }
	}
}
