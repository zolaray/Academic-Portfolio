package medclinic;

import java.util.ArrayList;

// Clinic class to manage employees
public class Clinic {
    private ArrayList<Employee> employees = new ArrayList<>();

    // Add an employee to the clinic
    public void addEmployee(Employee emp) {
        employees.add(emp);
        System.out.println("Added: " + emp.getName());
    }

    // Show all employees
    public void showAllEmployees() {
        System.out.println("\n=== Clinic Employees ===");
        for (Employee emp : employees) {
            emp.displayInfo();
        }
    }

    // Calculate total monthly payroll
    public double calculateMonthlyPayroll() {
        double total = 0;
        for (Employee emp : employees) {
            total += emp.calculateSalary();
        }
        return total;
    }
}
