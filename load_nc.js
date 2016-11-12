function(c,a){
    var i,
    o;
    function load_locks() {
        o=#s.sys.upgrades()
        for (i=0;i<6;i++){#s.sys.upgrades({load:i})}}
    function load_all() {
        for (i=0;i<15;i++){#s.sys.upgrades({load:i})}}
    if (a==null){
        load_all()
    } else if(a.m=="lock"){
        load_locks()
    }
}
