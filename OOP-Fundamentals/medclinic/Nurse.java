package medclinic;
// Nurse class extends Employee
public class Nurse extends Employee {
    private boolean nightShift;
    private double nightBonus = 300.0; // Fixed bonus for night shift

    public Nurse(String name, int id, double baseSalary, boolean nightShift) {
        super(name, id, baseSalary);
        this.nightShift = nightShift;
    }

    @Override
    public double calculateSalary() {
        if (nightShift) {
            return getBaseSalary() + nightBonus;
        }
        return getBaseSalary();
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Position: Nurse");
        System.out.println("Shift: " + (nightShift ? "Night (+$" + nightBonus + ")" : "Day"));
        System.out.println("Total Salary: $" + calculateSalary());
        System.out.println("---------------------");
    }
}
