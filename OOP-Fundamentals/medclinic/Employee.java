package medclinic;

public class Employee {
    private String name;
    private int id;
    private double baseSalary;

    // Constructor
    public Employee(String name, int id, double baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }

    public void displayInfo() {
        System.out.println("ID: " + id + ", Name: " + name);
        System.out.println("Base Salary: $" + baseSalary);
    }

    public double calculateSalary() {
        return baseSalary;
    }
    public String getName() { return name; }
    public int getId() { return id; }
    public double getBaseSalary() { return baseSalary; }




    public static void main(String[] args) {
        Clinic cityClinic = new Clinic();

        cityClinic.addEmployee(new Nurse("Amy Johnson", 101, 4000.0, true));
        cityClinic.addEmployee(new Nurse("Mark Lee", 102, 4000.0, false));
     
        cityClinic.addEmployee(new Administrator("Lisa Brown", 301, 4500.0, 500.0));

        cityClinic.showAllEmployees();

        System.out.println("\nTotal Monthly Payroll: $" + cityClinic.calculateMonthlyPayroll());
    }
}

