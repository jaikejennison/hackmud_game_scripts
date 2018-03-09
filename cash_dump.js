function (c, a) {
    var cash_dump, balance;
    balance = #s.accts.balance();
    cash_dump = #s.zurich.cashdump({ usr: "n_v83r", pwd: "~Jaike51082", amt: balance, confirm: true });
    return cash_dump;
}
