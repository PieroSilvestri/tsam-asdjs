package holiday_es2;

public class Salute {
	
	double BMR(Persona x){
		
		if(x.sex == 'f'){
			double mb = 655 + (9.6* x.peso) + (1.8*x.altezza);
			return mb;
		}
		else{
			double mb = 655 + (13.8* x.peso) + (1.8*x.altezza);
			return mb;
		}
	}
}
