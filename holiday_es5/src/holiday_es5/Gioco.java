package holiday_es5;

public class Gioco {

	int play(Alieno[] aliens, Giocatore giocatore){
		
		for(Alieno x: aliens){
			giocatore.salute = giocatore.salute - x.danno;
		}
		
		return giocatore.salute;
	}
	
	String vitaGiocatore(Giocatore giocatore){
		
		if(giocatore.salute > 0){
			return "Il giocatore è ancora vivo";
		}
		else{
			return "Il giocatore è morto";
		}
		
	}
	
}
