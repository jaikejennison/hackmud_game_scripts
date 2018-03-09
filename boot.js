function(context, args) { // script:#s.sys.access_log
  var boot, block, balance_str, caller, fullsec, i, insert, lib_scripts, logfile, logs, npc_prefix, msg, peram, retval;
	caller = context.caller;
  //fullsec = #s.scripts.fullsec();
  peram = args;
  //logfile = args.script.call();
	lib_scripts = #s.scripts.lib();
  balance_str = #s.accts.balance();
  boot = ["\n", #s.sys.specs(), lib_scripts.to_gc_str(balance_str),"\nscripts trust:\n--------------", #s.scripts.trust(),"\nscripts user:\n-------------",#s.scripts.user(), "\nAccess Logs:\n------------"];
  npc_prefix = ['abndnd', 'abandoned', 'uknown', 'unknown', 'derelict', 'anonymous', 'unidentified', 'anon'];
  //logs == new Array();
  //return boot;
  if ((args === null) || (typeof args.script === 'undefined')) {
      return {ok:false, msg:"Please call this script with {script:#s.sys.access_log} to allow access to your logs"};
  }
  var logFile = args.script.call({});
  var npcPrefix = ['abndnd', 'uknown', 'unknown', 'derelict', 'anonymous', 'unidentified', 'anon'];
  var insert;
  var logs = [];
  var logMap;
  logMap = logFile.map(function(val, index) {
    insert = true;
    for (var i = 0; i < npcPrefix.length; i++) {
      if (val.indexOf(npcPrefix[i]) > -1) {
        insert = false;
      }
    }
    if (insert) {
      logs.push(val);
    }
  }
);
retval =  boot.concat(logs);     // Concatenates arr1 with arr2 and arr3
return retval;
}
