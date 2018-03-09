function (c, a) {
    var chan = ["derp", "MINE", "FNORD", "bbb", "zzz"];
    var chan_str = "";
    var i;
    for (i = 0; i < chan.length; i++) {
        chan_str += chan[i] ;
        #s.chats.join({channel:chan_str})
    }
}
