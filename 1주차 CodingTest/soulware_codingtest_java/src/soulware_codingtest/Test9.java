package soulware_codingtest;

import java.util.Scanner;
//queue class를 작성하기
//내장함수만 사용하여 자료구조 중 queue를 구현한다.

public class Test9 {
	static private int front;
	static private int rear;
	static private int size;// 초기사이즈 설정
	static private Object[] queueArray;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		Test9 q = new Test9(5);
		System.out.println(isEmpty());
		q.offer(3);
		q.offer(6);
		q.print();
		System.out.println(q.peek());
		q.offer(7);
		q.print();
		System.out.println(q.peek());
		q.remove();
		q.print();
		System.out.println(isEmpty());

	}

	public Test9(int maxSize) {

		this.front = 0;
		this.rear = -1;
		this.size = maxSize;
		this.queueArray = new Object[maxSize];
	}

	// 큐가 비어있는지 확인
	public static boolean isEmpty() {
		return (front == rear + 1);
	}

	// 큐가 꽉 찼는지 확인
	public boolean full() {
		return (rear == size - 1);
	}

	// 큐 rear에 데이터 등록
	public void offer(Object item) {

		queueArray[++rear] = item;
	}

	// 큐에서 front 데이터 조회
	public Object peek() {

		return queueArray[front];
	}

	// 큐에서 front 데이터 제거
	public Object remove() {

		Object item = peek();
		front++;
		return item;
	}

	public void print() {
		for (Object q : queueArray) {
			if (q == null) {
				break;
			}
			System.out.print(q + " ");
		}
		System.out.println();
	}

}
