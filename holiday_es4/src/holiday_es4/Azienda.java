package holiday_es4;

public class Azienda {
	
	String ragioneSociale;
	
	Dipendente dipendenti = new Dipendente();
	
	double sommaStipendi(Dipendente[] dipendenti){
		
		int sommaTotale = 0;
		
		for(Dipendente i: dipendenti){
			sommaTotale += i.salario;
		}
		return sommaTotale;
	}
	
	Dipendente dipendentiMax(Dipendente[] dipendenti){
		
		Dipendente x = new Dipendente();
		int max = 0;
		
		
		for(Dipendente i: dipendenti){
			if(i.salario > max){
				x = i;
			}
		}
		
		return x;
	}
	
}
