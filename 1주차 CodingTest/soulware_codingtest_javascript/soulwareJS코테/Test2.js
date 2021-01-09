function randomString(num) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var stringLength = num;
    var randomString = '';
    // var count =0;
    for (var i = 0; i < stringLength; i++) {//array에 저장해둔후 숫자를 검사하여 재배치
        
        var rnum = Math.floor(Math.random() * chars.length);
        randomString += chars.charAt(rnum);
        // console.log(randomstring.charAt(i))
    }
    return randomString;
}
var result = randomString(12);
console.log(result);