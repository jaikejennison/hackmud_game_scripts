function (c, a) {
    var cash_dump, balance;
    balance = #s.accts.balance();
    cash_dump = #s.zurich.cashdump({ usr: "", pwd: "", amt: balance, confirm: true });
    return cash_dump;
}
