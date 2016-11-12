function (c, a){ // t:#s.username.target
    if (a==null){
        var f=#s.scripts.fullsec(),
        l=f.filter(function(v){
            return(v.includes(".pub")||v.includes(".entry"))&&!(v.includes("accenture")&&v.includes("blackcore"))
        })
        return{
            usage: "miner_nc{t:#s.user.target}",fullsec_targets: l
        }
    }
}
