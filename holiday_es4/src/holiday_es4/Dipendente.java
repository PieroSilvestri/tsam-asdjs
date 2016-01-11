package holiday_es4;

public class Dipendente {

	String nome;
	String cognome;
	int anzianità;
	Contratto contratto;
	//Salario in centesimi
	int salario = contratto.stipendioBase + ((contratto.stipendioBase/200) * anzianità);
}
