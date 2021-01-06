function randomString(num) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var stringLength = num;
    var randomString = '';
    // var count =0;
    for (var i = 0; i < stringLength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomString += chars.charAt(rnum);
        // console.log(randomstring.charAt(i))
    }
    return randomString;
}
var result = randomString(12);
console.log(result);