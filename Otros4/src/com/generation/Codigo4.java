package com.generation;
/*Ana Karen Bailón Fernández
 * 5
 * 5
 * 5
 * 5
 * 5
 * */
import java.util.Scanner; //Importamos scanner
public class Codigo4 {
	

	public static void main(String[] args) { //Creamos el método main
		Scanner mano = new Scanner(System.in); //Agregar System.in para indicar que lo que se escribe entra al sistema
	    
	    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    String j1 = mano.nextLine();
	    
	    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    /*Scanner s2 = new Scanner();*/ // Scanner repetido
	    String j2 = mano.nextLine();
	    
	    if (j1 == j2)  { // Parentesis extra
	      System.out.println("Empate");
	    } else {
	      int ganador = 2; //refactorizamos ganador
	      switch(j1) {
	        case "piedra":
	          if (j2.equals ("tijeras")) {
	            ganador = 1;
	          } //cerrar el corchete

	        case "papel":
	          if (j2.equals ("piedra")) {//cambiamos los == por .equals
	            ganador = 1;
	          }
	        case "tijeras": //agregar s
	          if (j2.equals("papel")) {
	            ganador = 1;
	          }
	          break;
	        default:
	      }
	      System.out.println("Gana el jugador " + ganador);
	      
	      mano.close();
	    }
	  
	  
	}
}
		
		

    
