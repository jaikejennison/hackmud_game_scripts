function(context, args) { // { script }
  var logfile = args.script.call();
  var npc_prefix = ['abndnd', 'uknown', 'unknown', 'derelict', 'anonymous', 'unidentified', 'anon'];
  var insert;
  var logs = [];
    if ((args === null) || (typeof args.script === 'undefined')) {
        return {ok:false, msg:"Please call this script with {script:#s.sys.access_log} to allow access to your logs"};
    }
    logfile.map(function(val, index) {
        insert = true;
        for (var i = 0; i < npc_prefix.length; i++) {
            if (val.indexOf(npc_prefix[i]) > -1) {
                insert = false;
            }
        }
        if (insert) {
            logs.push(val);
        }
    });
    return logs;
}
