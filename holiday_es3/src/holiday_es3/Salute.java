package holiday_es3;

public class Salute {
	
	
	String IMC(Persona x){
		
		String risultato = "";
		
		double imc = x.massa / (x.altezza*x.altezza);
		if(imc < 18.5){
			risultato = "Sottopeso";
		}
		else if(imc < 25){
			risultato = "Normale";
		}
		else if(imc < 30){
			risultato = "Sovrappeso";
		}
		else{
			risultato = "Obeso";
		}
		return risultato;
	}
}
