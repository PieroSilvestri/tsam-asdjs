package holiday_es2;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Persona luca = new Persona();
		
		luca.nome = "Luca";
		luca.cognome = "Rossi";
		luca.age = 20;
		luca.altezza = 170;
		luca.peso = 80;
		luca.sex = 'm';
		
		Salute salutePersona = new Salute();
		
		double bmr = salutePersona.BMR(luca);
		System.out.println("Average: " + bmr);
	}

}
