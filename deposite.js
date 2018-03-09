function (context, args) {
    var amt, balance, deposite, lib_scripts;
    lib_scripts = #s.scripts.lib();
    balance = #s.accts.balance();
    amt = lib_scripts.to_gc_num();
    deposite = #s.zurich.deposite({ usr: "", pwd: "", amt: balance, confirm: true });
    return deposite;
}
