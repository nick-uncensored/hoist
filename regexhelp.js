/*
s : Allows . to match newline characters. Normally the dot character matches any single character, except the newline.
u : "unicode"; treat a pattern as a sequence of unicode code points .
y : Performs a "sticky" search that matches starting at the current position in the target string. This comes in handy if you’re doing one search at a time, because it’ll start searching from the last position it found during the previous attempt.
These flags are added to the regular expression at the end of it, like so:

That’s about it for my custom intro to Regular Expressions, if you want to get details about how they work, check out the documentation, but first, stick around and look at the following practical examples so you have something to understand with the docs.
Regular Expression U
*/


//If you're using the RegExp object

let re = new RegExp('[H|h]ello', 'gm');

//If you're going with the literal syntax

let re = /[H|h]ello/gm;

//pw pattern match
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/g
//"positive look aheads"

let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/g
// Everything inside the (?=...) is the section of the expression that we care about.
let passwords = ["Fernando", "f3rn4", "F3rnand0!", "fernando123!"]

passwords.forEach( p => {
    let matches = p.match(re)
    if(!matches) console.log(p, "INVALID PASSWORD")
    else console.log(p, "is a valid password!")
})

/*
Fernando INVALID PASSWORD
f3rn4 INVALID PASSWORD
F3rnand0! is a valid password!
fernando123! INVALID PASSWORD
*/

/*
(?=.*[a-z]) essentially means that it’ll match any character that is followed by a lowercase letter.
(?=.*[A-Z]) just like the previous one, but instead of lowercase, it’ll match if the following character was uppercase.
(?=.*\d) will match anything that is followed by a digit (a number).
(?=.*\W) matches any character (other than a line break) that is followed by a symbol.
.{8,} makes sure the length of the match is at least, 8 characters (any character thanks to the dot there).
^ and $ make sure the match starts at the beginning of a word (thanks to the caret at the start of the expression) and ends with the word (thanks to the dollar sign). Essentially, only whole word matches are allowed. Partial matches aren’t considered.
If all the above cond
*/

/** next 
email
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
*/
/*

First, we check if the username is valid, this is simply checking that all valid characters are being used and that at least one of them was added (that’s what the “+” at the end means):
^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+
Then, we’re checking for the @ character and the host name:
@[a-zA-Z0-9-]+
Again, nothing fancy, the host name needs to be alphanumeric and have at least one character.
The last, optional part, takes care of checking the TLD (Top Level Domain), or basically the domain name extension:
(?:\.[a-zA-Z0-9-]+)*$/
And you can tell this part is optional, because of the * at the end. That means 0 or more instances of that group (the group is delimited by the parenthesis) are required (so .com would match, but also .co.uk ).
Here is a quick snippet showing the expression at work:
*/


let emailRE = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

let emails = ["fernando", "fernadno@", "fernando@test", "fernando@test.com", "valid_email123@host2.com", "a@1.com"]

emails.forEach( p => {
    let matches = p.match(emailRE)
    if(!matches) console.log(p, "INVALID EMAIL")
    else console.log(p, "is a valid email!")
})

/*
fernando INVALID EMAIL
fernadno@ INVALID EMAIL
fernando@test is a valid email!
fernando@test.com is a valid email!
valid_email123@host2.com is a valid email!
a@1.com is a valid email!
*/



let emailRE = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

let emails = ["fernando", "fernadno@", "fernando@test", "fernando@test.com", "valid_email123@host2.com", "a@1.com"]

emails.forEach( p => {
    let matches = p.match(emailRE)
    if(!matches) console.log(p, "INVALID EMAIL")
    else console.log(p, "is a valid email!")
})

/*
fernando INVALID EMAIL
fernadno@ INVALID EMAIL
fernando@test is a valid email!
fernando@test.com is a valid email!
valid_email123@host2.com is a valid email!
a@1.com is a valid email!
*/


let camelRE = /([A-Z])/g

let phrase = "thisIsACamelCaseString"

console.log(phrase.replace(camelRE, " $1")

/*
this Is A Camel Case String
*/


/*
Yeap, that is it! The capturing group (the parenthesis and everything inside it) saves the matching part and you can reference it with “$1”. If you had more than one group, you would increment that number ($2, $3 and so on). The point here is that the expressions will only match single upper cased characters anywhere on the string (thanks to the trailing g flag there) and you’ll replace it (thanks to the replace method call) with itself prefixed by a blank space.
Let me show you now a more complex case of string replacement.
Old School Function to Arrow Function
This one is interesting, because you can write some code for it for fun, or in a more realistic scenario, you might be doing this using your IDE’s Search & Replace feature!
Considering that arrow functions are relatively new there is still a lot of legacy code that is not using them and you might be inclined to want to switch, but modifying every function manually can take forever, so instead, you can use a Regular Expression.
And to make things clear, I want to turn this:
*/

/*************************************************** */
// function sayONEHello(first_name, last_name){
//     console.log("Hello there ", first_name, last_name)
// }
/*************************************************** */
// So essentially, we need to capture the function’s name, it’s parameters list and it’s content, and then restructure it so we remove the function word and create the new constant. In other words, we need three capturing groups, and here they are:
// function (.+)(\(.+\))(\{.+\})
/*************************************************** *//
// Then it’s just a matter of calling the replace method.
const fs = require("fs")

const regExp = /function (.+)(\(.+\))(\{.+\})/gms

fs.readFile("./test2.js", (err, cnt) => {
    console.log(cnt.toString().replace(regExp, "const $1 = $2 => $3"))
})
// The above code will output our desired arrow function and any other you need. The other considerations to have, are the flags I used. Because we need to make sure we capture the new line characters as well, we need to do a multi-line match and allow the dot character to match those as well.
/*************************************************** *//*************************************************** */