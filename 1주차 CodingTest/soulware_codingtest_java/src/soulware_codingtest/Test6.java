package soulware_codingtest;
//1   개미 수열 작성하기
//11
//12
//1121
//122111

public class Test6 {
	static int count = 0;

	static int position = 0;

	static int line = 0;

	static char temp;
	static StringBuilder c_node = new StringBuilder("1");//혀ㅛ재 노드 초기 노드 1설정

	static StringBuilder n_node = new StringBuilder();//다음 노드

	static int i;

	public static void main(String[] args) {
		int num = 6;
		print();//첫줄 1출력

		for (int i = 0; i < num; i++) {

			ant();

		}

	}

	public static void ant() {

		temp = c_node.charAt(0);
//		System.out.println("temp : "+c_node.charAt(0));

		i = 0;
//		System.out.println(n_node);

		checkLine();
		

		c_node.setLength(0);//객체 초기화 시키고 돌리고
		

		c_node.append(n_node);

		n_node.setLength(0);

		line++;

		print();

	}

	public static void checkLine() {

		count = 0;
//		System.out.println("길이"+c_node.length());

		for (; i < c_node.length(); i++) {

			if (temp == c_node.charAt(i)) {//ant랑 같으면  카운트

				count++;

				if (i == c_node.length() - 1) {
//					System.out.println("length-1"+ c_node.length());

					n_node.append(temp);

					n_node.append(count );

				}

			} else {

				n_node.append(temp);

				n_node.append(count + "");

				temp = c_node.charAt(i);

				checkLine();

			}

		}

	}

	static void print() {

		System.out.println(c_node);

	}

}
