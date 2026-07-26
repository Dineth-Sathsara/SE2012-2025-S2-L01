import java.util.Scanner;

public class Marks {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Enter number of students: ");
        int n = input.nextInt();

        // marks[student][subject]
        int[][] marks = new int[n][3];

        while (true) {

            System.out.println("\n========== MENU ==========");
            System.out.println("1. Add Student Marks");
            System.out.println("2. Update Student Mark");
            System.out.println("3. Average of a Subject");
            System.out.println("4. Average of a Student");
            System.out.println("5. Total Marks of a Student");
            System.out.println("6. Exit");
            System.out.print("Choose an option: ");

            int choice = input.nextInt();

            switch (choice) {

                case 1:

                    System.out.print("Enter Student ID (1-" + n + "): ");
                    int studentId = input.nextInt();

                    if (studentId < 1 || studentId > n) {
                        System.out.println("Invalid Student ID!");
                        break;
                    }

                    System.out.print("Mathematics Marks: ");
                    marks[studentId - 1][0] = input.nextInt();

                    System.out.print("Chemistry Marks: ");
                    marks[studentId - 1][1] = input.nextInt();

                    System.out.print("Physics Marks: ");
                    marks[studentId - 1][2] = input.nextInt();

                    System.out.println("Marks added successfully.");
                    break;

                case 2:

                    System.out.print("Enter Student ID: ");
                    studentId = input.nextInt();

                    System.out.print("Enter Subject ID (1=Math, 2=Chemistry, 3=Physics): ");
                    int subjectId = input.nextInt();

                    if (studentId >= 1 && studentId <= n &&
                            subjectId >= 1 && subjectId <= 3) {

                        System.out.print("Enter New Mark: ");
                        marks[studentId - 1][subjectId - 1] = input.nextInt();

                        System.out.println("Mark updated successfully.");

                    } else {
                        System.out.println("Invalid Student ID or Subject ID.");
                    }

                    break;

                case 3:

                    System.out.print("Enter Subject ID (1=Math, 2=Chemistry, 3=Physics): ");
                    subjectId = input.nextInt();

                    if (subjectId < 1 || subjectId > 3) {
                        System.out.println("Invalid Subject ID!");
                        break;
                    }

                    int subjectTotal = 0;

                    for (int i = 0; i < n; i++) {
                        subjectTotal += marks[i][subjectId - 1];
                    }

                    double subjectAverage = (double) subjectTotal / n;

                    System.out.println("Average = " + subjectAverage);

                    break;

                case 4:

                    System.out.print("Enter Student ID: ");
                    studentId = input.nextInt();

                    if (studentId < 1 || studentId > n) {
                        System.out.println("Invalid Student ID!");
                        break;
                    }

                    int studentTotal = 0;

                    for (int i = 0; i < 3; i++) {
                        studentTotal += marks[studentId - 1][i];
                    }

                    double studentAverage = studentTotal / 3.0;

                    System.out.println("Student Average = " + studentAverage);

                    break;

                case 5:

                    System.out.print("Enter Student ID: ");
                    studentId = input.nextInt();

                    if (studentId < 1 || studentId > n) {
                        System.out.println("Invalid Student ID!");
                        break;
                    }

                    studentTotal = 0;

                    for (int i = 0; i < 3; i++) {
                        studentTotal += marks[studentId - 1][i];
                    }

                    System.out.println("Total Marks = " + studentTotal);

                    break;

                case 6:

                    System.out.println("Program Closed.");
                    input.close();
                    return;

                default:

                    System.out.println("Invalid Choice!");

            }

        }

    }
}