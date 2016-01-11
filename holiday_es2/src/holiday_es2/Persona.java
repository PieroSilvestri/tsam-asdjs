package holiday_es2;

public class Persona {
	
	String nome;
	String cognome;
	int altezza;
	int peso;
	int age;
	char sex;

	
	// Default
	// necessario perchè ho definito il costruttore con
	// due parametri che segue
	
	Persona(){
		
	}
	
	Persona(String nome, String cognome, int altezza, int peso, int age, char sex){
		this.nome = nome;
		this.cognome = cognome;
		this.altezza = altezza;	// univoke
		this.peso = peso;
		this.age = age;
		this.sex = sex;
	}
	
}
