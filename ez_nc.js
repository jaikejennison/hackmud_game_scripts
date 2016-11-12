function (c,a){ //Syntax:script{t: #s.user.lock}
    var z=a.t,
    r=z.call({}),
    p=["unlock","open","release"],
    u="UNLOCKED",
    e = "EZ_",
    q,
    i=0;
    if(#s.scripts.get_level({name:z})!="LOWSEC"&&r.indexOf(e+21)>-1){
        while(r.indexOf(u)===-1){
            r=z.call({ez_21:p[i]});
            i++;
        }
    }
    if(r.indexOf(e+35)>-1){
        while(r.indexOf("digit")===-1){
            r=z.call({ez_35:p[i]}),q=p[i];
            i++;
        }
        i=0;
        while(r.indexOf(u)===-1){
            r=z.call({ez_35:q,digit:i});
            i++;
        }
    }
    if (r.indexOf(e+40)>-1){
        while(r.indexOf("ez_prime")===-1){
            r=z.call({ez_40:p[i]}),q=p[i];
            i++;
        }
        i=2;
        while(r.indexOf(u)===-1){
            r=z.call({ez_40:q,ez_prime:i});
            i++;
        }
        return r;
}
