# Scripting Tutorial
```
Created by @ciastex_ and @i20k.
Special thanks to @dtr/@sudo, @ada and @soron for their expertise.

If you have any questions, don't hesitate to hit us on Discord:
https://discord.gg/sc6gVse
Architect commands
```

`#edit <filename> `
This command will create or edit a script, opening it up with your default text editor. If you are on Windows this may crash, as the default .js command on Windows is the system built-in compiler. To fix this issue, associate your text editor with the .js file extension. If you don’t have a text editor, get one like Notepad++. Scripts will be created with a default template.
`#dir`
This command simply opens up your script directory. You can create new scripts here and them upload them ingame

See `[3]` if neither command works for you on linux/windows

`#up <filename>`
This command will upload your created script to the server, so you can execute it.

Possible arguments AFTER the filename:
* delete - will delete your script from the server, but leave it locally.
* public - will make your script public - assuming you have the public slot upgrade installed and loaded within your system.
* private - will explicitly mark a script as private (useful to un-public a script while debugging, for example)

`#DELETE <filename>`

This command will remove your script from your computer’s file system, which means you won’t be able to access it from your editor anymore. Be careful around this command, though - it runs without any confirmation. Note: if the script was previously uploaded, the server copy will still exist, but there is no way to download it again.

`#scripts [alt: #]`

This command will list all your local and uploaded scripts. To see your currently uploaded scripts, run scripts.user

`#help`

This command will print the in-game architect commands help.

# Scripting
Scripts in hackmud are JavaScript (es6) files consisting of a single function which passes two parameters:
* context - This is a context the script is run from, i.e. if a user called noob ran your script, then any command executed from context will be treated as executed by the noob user, just like he/she would write them in their command line. Context has the following subkeys:
   * caller - The name of the user who is calling the script (i.e. n00b)
   * this_script - The name of this script
   * calling_script - The name of the script that directly called this script, or null if called on the command line
* args -  This is a dictionary containing all the arguments a user passed to your script. If the script was called without any arguments (i.e. foo.bar), args will be null. If called with empty arguments (i.e. foo.bar{}), args will be an empty JS object.

### Example ez_21 cracker:

```js
function(context, args)
{
        ///usage ez_21{target:#s.your.target}
        var c=["open", "release", "unlock"];


        var llen = "!LOCK_UNLOCKED".length;

        var ret = "";

        var success = false;

        for(var k=0; k<3; k++)
        {
                ///alt syntax
                /*var v = {};
                v["ez_21"]        = c[k];
                ret = args.target.call(v);*/

                ret = args.target.call({ez_21 : c[k]})

                if(ret.substr(0, llen) === "!LOCK_UNLOCKED")
                {
                        success = true;
                        break;
                }
        }

        ///example to how to make a basic account transfer, makes the script medsec
        ///this \ is to prevent this from being thought of as medsec by the game when commented out
        //#s.accts.xfer\_gc_to({ to:"username", amount:"5KGC" });
        // ed note: the \ shouldn’t be needed. //-style quotes are stripped from the files on upload, so this won’t even be seen by the security level checker.

        return {ok:success, msg:ret};
}
```
# Scriptors
Scriptors are one of the hackmud specific features. They allow you to call an in-game script from your script. That allows you to parametrize your script’s behavior. The scriptor syntax is as follows:

`#s.a_user.a_command`

The above can be then passed to your script as an argument, like the following (assuming you` #up-ped` the script above as `crk_ez21`):

`crk_ez21 { target:#s.a_user.a_command }`

To call a command the scriptor points to, there’s a scriptor-specific method which optionally accepts your arguments that will be passed to the called command:

```js
args.target.call({ /* optional arguments for the called scriptor */})
```
If you want to call a hard-coded script (ed note: this isn’t technically a scriptor, it is just a script call), you can do so without using a scriptor, as follows. Be aware, you cannot store a script to a variable like this:

`var x = #s.user.name`

as `#s` is really a preprocessing directive.  `#s.user.name` must be used immediately, in the form

`#s.user.name({key:value})`

If you want to hard-code a script call that you can reuse, define a wrapper function, like:
```js
function foo(args) {
        return #s.user.name(args);
}
```

Converting a string (like `"foo.bar"`) into a callable

Many people want to take a string, like a loc from an NPC corp, and call it directly inside another script. This is, deliberately, impossible in hackmud. If you could convert a string into a callable in any way, the entire security level system would fall apart (because any string in any dependency could possibly be a nullsec script. And those strings could come from the database). If you want to do something with those locs (or similar cases), you will have to pass them in as a scriptor or hard-code them in the file. You cannot call the string directly.


# Returning a result
A called script can return basically anything - an array, a string, an object, or even null. Most scripts in the game however simply return a string

Your script itself generally returns both `{ok:true, msg:"string"}`
The contents of string will automatically be printed to your terminal
Both of these arguments are optional, and while you may get an error message if you return nothing from a script, it will still work fine


# Autocomplete
To add autocomplete args to your script, on the first line, after the function boilerplate, add a comment with a list of args and values, like this:

```js
function(context,args) { // arg1:val1, arg2:val2, arg3:#s.an.example, arg4:”example”
    …
}
```

After `#up-ing` the script, you might need to run `scripts.user` to update your autocomplete, and then it should work.

```js
#s.scripts.lib
```
This is a code library containing useful helper functions you can use in your scripts. Most of its functions are covered by [1] in the Misc section. You can iterate on this object to discover all of them.

# Macros
Macros are fairly simple, and very useful in hackmud. This is not strictly coding related, but they are not that widely known. Example:

`/macroname = test{target:"canhavefixedarguments"}`
`/hl = kernel.hardline`
`/dc = kernel.hardline{dc:true}`

Running `/macroname` or `/hl` or `/dc` will run exactly that command. Macros unfortunately cannot themselves have arguments, which limits what you can do with them somewhat.
`#db`

Each users’ database in hackmud is a MongoDB collection, in which data is stored as JSON documents.

### Query Objects:
Query Objects are a regular JSON object containing keys and values you want to search against.

### Projections:
Projections allow you to fetch specific subfields in a #db object. These speed things up quite a bit if your document is large.
Check https://docs.mongodb.com/v3.0/tutorial/project-fields-from-query-results/ for more information.
`#db.i()`

### Insert:
https://docs.mongodb.com/manual/reference/method/db.collection.insert/

This command creates new #db documents. Called like `#db.i(<JSON object or array of JSON objects>);`

Ex: `#db.i({ SID:”scriptname” })` Inserts a document with key “SID” and value “scriptname”

`#db.r()`

Remove:
https://docs.mongodb.com/manual/reference/method/db.collection.remove/
This command deletes #db documents matching your query.

```js
Called like #db.r({query});
Ex: #db.r({ SID:”scriptname” }) removes all documents where key “SID” contains the value “scriptname”.
```

`#db.f()`

Find:
https://docs.mongodb.com/manual/reference/method/db.collection.find/
This command returns any documents matching your query.

Called like `#db.f({query}, {projection}).command()` where `“command” `is either `“first” or “array”/`

Ex: `#db.f({ SID:”scriptname” }).array()` returns an array of documents where

key `“SID” `contains the value `“scriptname”.`

Ex: `#db.f({ SID:”scriptname” }, { field:1, _id:0 }).first() `returns the value

for the key `“field”` inside the first document it finds where key` “SID”` contains the value `“scriptname”.`

`# db.u()`

Update:

https://docs.mongodb.com/manual/reference/method/db.collection.update/

This command updates any pre-existing documents matching the query.

Called like `#db.u({query}, { updateOper:{updatedfields} })` applies “update” to
any documents matching the query.

Ex: `#db.u({ SID:”scriptname” }, { $set:{field:”new value”} })` sets key field to `“new value”` in any documents where key `“SID” `contains the value `

`“scriptname”.`

This can be a very complex operation. It is HIGHLY recommended you follow the aforementioned hyperlink.

# Lbs

`#s.scripts.lib (subject to change)`

`ok()`
This helper method is equivalent to `return {ok:true}`. Note: you have to return the result yourself.

`not_impl()`
This helper method is equivalent to return {ok:false, msg:"not implemented"}. Note: you have to return the result yourself.

`log(message)`
Pushes a string representation of a value onto an array of log messages. This compensates (at the time of writing) the disability to print messages to stdout on-the-fly. It does not write anything to stdout itself. You have to use the method below.

`get_log()`
Returns the array used by the log() function, which you can then access. Does not clone or clear the array afterwards; it's a direct reference to the same array, which means you have to clear it after you’re done with one thing and want to use it with a second thing.

`rand_int(min, max)`
Returns a random integer between min and max.

`are_ids_eq(id1, id2)`
Tests whether id1 and id2 values are equal. Apparently buggy at the moment.

`is_obj(what)`
Returns true if what is an Object (note that arrays are Objects).

`is_str(what)`
Returns true if what is a String.

`is_num(what)`
Returns true if what is a Number. This treats `NaN (not a number)` as not a number, even though in JS, `typeof NaN == “number”`.

`is_int(what)`
Returns true if what is is both a Number (via is_num), and also an integer.

`is_neg(what)`
Returns true if what is is both a Number (via is_num), and also negative (i.e. <0).

`is_arr(what)`
Returns true if what is an Array.

`is_func(what)`
Returns true if what is a Function.

`is_def(what)`
Returns true if what is defined (that is, not undefined -- ed note: null and undefined are VERY different things. This handles only undefined. A null variable is still defined -- it is defined as null).

`is_valid_name(what)`
Returns true if what is a valid user/script name (i.e. containing only `a-z, _, and 0-9,` and not starting with a number. There might also be a length limit).

`dump(obj)`
Returns a string representation of the obj argument.

`clone(obj)`
Returns a clone of the obj argument (meaning references are broken).

`merge(obj1, obj2)`
Merges the contents of obj2 into obj1. This can be useful for combining defaults with user-specified values, but it is not quite secure on its own (i.e. don’t trust it to secure DB filters).

`get_values(obj)`
`hash_code(string)`

Returns a number calculated based on the string argument.

`to_gc_str(num)`
Converts raw num number to a GC currency representation.

`to_gc_num(str)`
Converts GC currency representation to a raw number.

`to_game_timestr(date)`
Converts a Date object specified via date parameter to a game-styled time string.

`cap_str_len(string, length)`

Truncates the given string to the given length if it's longer than that.

`each(array, fn)`
Runs fn on each array element. The fn function signature is specified in [4] at Misc, and stays the same for all filtering functions.

`select(array, fn)`
Returns a collection of values from array that matches the fn predicate. If the predicate returns true, the select function adds the key:value pair currently processed to the returned collection of values.

`count(array, fn)`
Returns a number of items from array that matches the fn predicate. If the predicate returns true, the count function increments the returned number by one.

`select_one(array, fn)`
Same as the select function, but returns the first value that matches the predicate.

`map(array, fn)`
Applies the fn function to each array element. The function-returned value is then stored in the map-returned array at the same index as currently processed value’s index.

`shuffle(array)`
Shuffles an array and returns it.

`sort_asc(one, two)`
If one > two, returns 1. If two is greater than one, return -1. Else return 0. Looks like a sorting function

`sort_desc(one, two)`
Returns the opposite of the above, ie -1 on one > two, and 1 on two > one

`num_sort_asc(...?)`
`num_sort_desc(...?)`
`max_val_index(array)`

Returns the index of the item in the array that has the maximum value

`add_time(date, add_ms)`
Gets the date of `date + add_ms (milliseconds)`

`security_level_names()`
The names of the security levels (`NULLSEC`, `LOWSEC`, `MIDSEC`, `HIGHSEC`,
`FULLSEC`)

`get_security_level_name(security_level)`
Takes a parameter between 0 and 4 (inclusive), returns the corresponding security from NULLSEC (0) to FULLSEC (4)

`create_rand_string(len)`
Returns a random string consisting of lowercase alphanumeric characters.

`get_user_from_script(script_name)`
Returns the user from a script name. Ie me.target returns me

`u_sort_num_arr_desc()`
`can_continue_execution()`
`can_continue_execution_error()`
`date()`
`get_date()`
`Gets the current date`
`get_date_utcsecs()`

Gets the current time from the date (ie Date.getTime())

# Misc
[0] http://pastebin.com/zUpYzEFv - @dtr/@sudo’s impromptu tutorial transcript on 7001

[1] http://ethankaminski.com/fanstuff/hackmud/coding-info.html code reference, including #db info

[2] dtr.man - This is dtr’s man script. This is a user’s script so be careful

[3] On linux, the script folder may be located in: `~/.config/hackmud` or the game folder, eg `hackmud/<name>/scripts/myscript.js`. On windows, it’s `C:\Users\USERNAME\AppData\Roaming\hackmud\INGAMENAME\scripts`

[4] Predicates and Each functions from scripts.lib use `function(key, value) { }` function signature. People already familiar with JS: note that this is the opposite of built-in Array functions, like `Array.prototype.forEach!`

[5] https://github.com/ethankaminski/hackmud_sample_scripts - collection of sample scripts, curated by @soron

---
Hopefully this got you started on script development for hackmud. If it did so, and you think it’s worth it, and you have enough GC, spare us an upgrade or two. Stay creative. Stay safe.
