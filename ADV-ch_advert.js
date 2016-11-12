
function (c, a) { // color:"", msg:""
    var x,
    hue=["purple","cyan","orange"],
    msg=["FNORD\ ","HAIL ERIS\ ","BOB LIVES\ "],
    rand=Math.floor(Math.random() * 3),
    rand2=Math.floor(Math.random() * 3);
    #s.chats.join({channel:"0000"})
    for (x = 0; x !==1; x++) {
        return #s.ch.at({ color:hue[rand], msg:msg[rand] })
    }
    if (#s.scripts.get_level({name:"ch.at"}) == 4) {return #s.ch.at(a)}
    #s.ch.at({ cmd:"balance" })
}
