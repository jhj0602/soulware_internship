package soulware_codingtest;
//1   ���� ���� �ۼ��ϱ�
//11
//12
//1121
//122111

public class Test6 {
	static int count = 0;

	static int position = 0;

	static int line = 0;

	static char temp;
	static StringBuilder c_node = new StringBuilder("1");//������ ��� �ʱ� ��� 1����

	static StringBuilder n_node = new StringBuilder();//���� ���

	static int i;

	public static void main(String[] args) {
		int num = 6;
		print();//ù�� 1���

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
		

		c_node.setLength(0);//��ü �ʱ�ȭ ��Ű�� ������
		

		c_node.append(n_node);

		n_node.setLength(0);

		line++;

		print();

	}

	public static void checkLine() {

		count = 0;
//		System.out.println("����"+c_node.length());

		for (; i < c_node.length(); i++) {

			if (temp == c_node.charAt(i)) {//ant�� ������  ī��Ʈ

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
