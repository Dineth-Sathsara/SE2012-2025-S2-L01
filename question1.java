import java.util.Scanner;
public class question1{
  public static void main(String[] args){
  Scanner input = new Scanner(System.in);
  System.out.print("Enter your First Name:");
  String FirstName = input.next();
  System.out.print("Enter your Last Name: ");
  String LastName = input.next();

  System.out.println("Welcome to the Second Year "+ FirstName +" "+ LastName);
  input.close();

}


}
