package holiday_es1;

public class valutaNum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int numero = 138;

		int[] risultati = new int[9];
		
		do{
			if (numero >= 500) {
				risultati[0] = numero / 500;
				for (int i = 0; i < risultati[0]; i++) {
					numero = numero - 500;
				}
			}
			else{
				risultati[0] = 0;
			}
			if (numero >= 200) {
				risultati[1] = numero / 200;
				for (int i = 0; i < risultati[1]; i++) {
					numero = numero - 200;
				}
			}
			else{
				risultati[1] = 0;
			}
			
			if (numero >= 100) {
				risultati[2] = numero / 100;
				for (int i = 0; i < risultati[2]; i++) {
					numero = numero - 100;
				}
			}
			else{
				risultati[2] = 0;
			}
			
			if (numero >= 50) {
				risultati[3] = numero / 50;
				for (int i = 0; i < risultati[3]; i++) {
					numero = numero - 50;
				}
			}
			else{
				risultati[3] = 0;
			}
			if (numero >= 20) {
				risultati[4] = numero / 20;
				for (int i = 0; i < risultati[4]; i++) {
					numero = numero - 20;
				}
			}
			else{
				risultati[4] = 0;
			}
			if (numero >= 10) {
				risultati[5] = numero / 10;
				for (int i = 0; i < risultati[5]; i++) {
					numero = numero - 10;
				}
			}
			else{
				risultati[5] = 0;
			}
			if (numero >= 5) {
				risultati[6] = numero / 5;
				for (int i = 0; i < risultati[6]; i++) {
					numero = numero - 5;
				}
			}
			else{
				risultati[6] = 0;
			}
			if (numero >= 2) {
				risultati[7] = numero / 2;
				for (int i = 0; i < risultati[7]; i++) {
					numero = numero - 2;
				}
			}
			else{
				risultati[7] = 0;
			}
			if (numero >= 1) {
				risultati[8] = numero / 1;
				for (int i = 0; i < risultati[8]; i++) {
					numero = numero - 1;
				}
			}
			else{
				risultati[8] = 0;
			}
						
		} while (numero != 0);

		System.out.println(numero + "euro sono divisibili in: ");
		System.out.println("Banconote da 500: " + risultati[0]);
		System.out.println("Banconote da 200: " + risultati[1]);
		System.out.println("Banconote da 100: " + risultati[2]);
		System.out.println("Banconote da 50: " + risultati[3]);
		System.out.println("Banconote da 20: " + risultati[4]);
		System.out.println("Banconote da 10: " + risultati[5]);
		System.out.println("Banconote da 5: " + risultati[6]);
		System.out.println("Banconote da 2: " + risultati[7]);
		System.out.println("Banconote da 1: " + risultati[8]);
	}

}
