package holiday_es3;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Persona luca = new Persona();
		luca.altezza = 1.84;
		luca.massa = 85;
		
		Salute salutePersona = new Salute();
		
		String imc;
		
		imc = salutePersona.IMC(luca);
		System.out.println(imc);
	}

}
