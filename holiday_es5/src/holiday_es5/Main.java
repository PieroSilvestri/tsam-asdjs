package holiday_es5;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Giocatore giocatore = new Giocatore();
		
		giocatore.nome = "Piero";
		giocatore.salute = 51;
		
		Alieno alieno = new Alieno();
		
		alieno.nomeId = "Sgorbio";
		alieno.danno = 51;
		
		Gioco gioco = new Gioco();
		
		giocatore.salute = gioco.play(new Alieno[]{alieno}, giocatore);
		
		String vita = gioco.vitaGiocatore(giocatore);
		
		System.out.println(vita);
		
	}

}
