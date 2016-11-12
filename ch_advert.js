
function (c, a) { // color:"", msg:""
    #s.chats.join({channel:"0000"})
    if (#s.scripts.get_level({name:"ch.at"}) == 4) {return #s.ch.at(a)}
    #s.ch.at({ cmd:"balance" })
}
