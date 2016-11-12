function (c, a){ // t:#s.username.target
    if (a==null){
        var f=#s.scripts.fullsec(),
        l=f.filter(function(v){
            return(v.includes(".pub")||v.includes(".entry"))&&!(v.includes("accenture")&&v.includes("blackcore"))
        })
        return{
            usage: "harvest{t:#s.user.target}",fullsec_targets: l
        }
    }
    var b=a.t.call().split("\n"),
    pag=b[b.length-1].split("|").map(function(v){
        return v.trim()}).filter(function(v){
            return v.length>0
        }),
        ar={},
        o=a.t.call({}),
        o2,
        none=o.match(/with ([a-z]+):"([a-z]+)"/i)
    if(none==null){
        o2=a.t.call({})
        return{
            error:"501",o1:o,o2:o2
        }
    }
    var cmd=none[1],
    cw=none[2],
    rePr=/(date for|continues on|of the|developments on)([a-z0-9_]+(.sh|.exe)?)/ig,
    rePa=/(strategy )([a-z0-9_]+)/ig,
    m,
    es=[],
    prs=[],
    pas=[],
    ts=[]
    pag.forEach(function(v){
        ar={}ar[cmd]=vout=a.t.call(ar)
        while(m=rePr.exec(o)){
            prs.push(m[2])
        }
        while(m=rePa.exec(o)){
            pas.push(m[2])
        }
    })
    prs.forEach(function(p){
        o=a.t.call({p:pas[0],pass:pas[0],password:pas[0],project:p,[cmd]:cw,})
        if(typeof(o)=="string"){
            o=o.split("\n")
        }
        o.forEach(function(e){
        if(e&&e.includes(".")&&e.includes("_")){ts.push(e)}
    })
        if(ts.length>0){
            var safety=#s.scripts.get_level({name:ts[0]})
            if(safety!="FULLSEC"){return"501"}}
    })
    return ts
}
