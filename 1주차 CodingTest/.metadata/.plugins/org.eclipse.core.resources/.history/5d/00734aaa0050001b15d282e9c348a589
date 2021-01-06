package soulware_codingtest;
//임의의 문자열 (Random String) 생성하기
//영문소문자, 영문대문자, 숫자를 조합하여 12의 길이의 임의의 문자열을 생성한다.
//숫자는 1개 이상 포함하여야 한다.

public class Test2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(getRandomStr(12));

	}

	public static String getRandomStr(int size) {
		int num = 0;// 숫자들어갔는지 테스트
		if (size > 0) {
			char[] tmp = new char[size];
			for (int i = 0; i < tmp.length; i++) {
				int line = (int) Math.floor(Math.random() * 2);
//				System.out.println(line);
				if (line == 0) { // 0이면 숫자로
					tmp[i] = (char) (Math.random() * 10 + '0');
					num++;
				} else { // 1이면 알파벳
					tmp[i] = (char) (Math.random() * 26 + 'A');
				}
			}
			if (num == 0) {
				System.out.println("숫자없음" + tmp);
				getRandomStr(12);
			}
			return new String(tmp);
		}
		return "ERROR ";
	}

}
