// var text = 'Www'; // <- o가 존재하지 않는다.
// var regexPattern = /Wo*w/;
// console.log(regexPattern.test(text));    // true
// console.log(regexPattern.exec(text));    // ["Ww"]
class PasswordCheck {

    constructor(password) {
        this.password = password;
    }

    print() {
        console.log(this.password);
    }
    check() {
        var pw = this.password;
        // var pattern_num = /[0-9]/;	// 숫자 

        // var pattern_eng = /[a-zA-Z]/;	// 문자 

        // var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
        var re = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (re.test(pw)) {
            return true;
        } else {
            return false;
        }
    }

}

let password = new PasswordCheck("as$$61AA");
var as = "aszzd1561AA";
var len = as.length - 1;
console.log(len)
if (password.check()) {
    password.print()
}
else {
    console.log("조합이 제대로 안됨")
}

