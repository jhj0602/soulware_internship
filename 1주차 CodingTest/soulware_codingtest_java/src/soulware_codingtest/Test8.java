package soulware_codingtest;
//회원가입 중 비밀번호 검증하기

//* 영문 포함
//* 숫자 포함
//* 특수문자(+=%_!@#$^&*?) 포함
//* 8자이상
//
//아래의 조건을 충족하는 정규식을 작성한다. 
//regex의 lookahead 기능을 참고

import java.io.IOException;

public class Test8 {
	static String str;

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		String password = "61AAasd21";
		if (passwordCheck(password)) {
			printTrue(password);
		} else {
			printFalse();
		}

	}

	public static boolean passwordCheck(String pw) {
		String regex2 = "^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
		if (pw.matches(regex2)) {
			return true;
		}

		return false;
	}

	public static void printTrue(String password) {
		System.out.println(password);
	}

	public static void printFalse() {
		System.out.println("조합이 잘못 되었습니다.");
	}
}
