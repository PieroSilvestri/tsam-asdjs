package holiday_es4;

public class Contratto {

	int stipendioBase;
	String tipo;
	
	Contratto(){
		
	}
	
	Contratto(int stipendioBase, String tipo){
		this.stipendioBase = stipendioBase;	// univoke
		this.tipo = tipo;
	}
}
