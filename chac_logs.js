function(context, args){ // script:  #s.sys.access_log
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
  return {
    ok:true
  }
}
