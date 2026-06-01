const myobject = {
    js : "javascript",
    rb : "ruby",
    pf : "python",
    swift : "swift by apple"
}

for (const key in myobject) {
   
    console.log(`${key} is the shortcut for ${myobject[key]}`);
}