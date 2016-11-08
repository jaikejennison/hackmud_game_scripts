function (context, args) {
    //Syntax:script{t: #s.some_user.their_loc}
    var target = args.t,
    res = target.call({}),
    p = ["unlock", "open", "release"],
    i = 0;
    if  (#s.scripts.get_level({name:target}) !="LOWSEC" && res.indexOf("EZ_21") > -1) {
        while (res.indexOf("UNLOCKED") === -1) {
            var res = target.call ({ez_21: p[i]});
            i++;
        }
    }
    if (res.indexOf("EZ_35") > -1) {
        while (res.indexOf("digit") === -1) {
            var res = target.call ({ez_35: p[i]}), p2 = p[i];
            i++;
        }
        i = 0;
        while (res.indexOf("UNLOCKED") === -1) {
            var res = target.call ({ez_35: p2, digit:i});
            i++;
        }
    }
    if  (res.indexOf("EZ_40") > -1) {
        while (res.indexOf("ez_prime") === -1) {
            var res = target.call ({ez_40: p[i]}), p2 = p[i];
            i++;
        }
        i = 2;
        while (res.indexOf("UNLOCKED") === -1) {
            var res = target.call ({ez_40: p2, ez_prime:i});
            i++;
        }
        return res;
}
