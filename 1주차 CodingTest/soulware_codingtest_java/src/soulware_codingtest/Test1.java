package soulware_codingtest;
//변수에 “HELLO”의 값이 저장되어 있다. 이 값의 순서를 거꾸로 하여 화면에 출력하자
//내장함수만 사용하여 작성한다.

public class Test1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		StringBuffer bf = new StringBuffer();
		String str = "hello";
		bf.append(str);
		System.out.println(bf.reverse());
	}

}
