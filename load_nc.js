function(context, args) {
    var i, upgrades;
    upgrades = #s.sys.upgrades()
    function load_locks() {
        for (i = 0; i < 6; i++){ #s.sys.upgrades({ load: i }) } }
    function load_all() {
        for (i=0; i<15; i++) { #s.sys.upgrades({ load: i }) } }
    if (args==null) {
        load_all()
    } else if (args.m=="lock") {
        load_locks()
    }
}
