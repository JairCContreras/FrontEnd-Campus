package com.company.liskov_1;

public class Square implements Figura {
	private int side;

	Square(int side ){
		this.side = side;
	}
	public int getSide() {
		return side;
	}

	public void setSide(int side) {
		this.side = side;
	}
	
	@Override
	public int computeArea() {
		return side*side;
	}

}
