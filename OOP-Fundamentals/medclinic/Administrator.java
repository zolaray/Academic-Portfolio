package medclinic;

public class Administrator extends Employee {
    private double bonus;

    public Administrator(String name, int id, double baseSalary, double bonus) {
        super(name, id, baseSalary);
        this.bonus = bonus;
    }

    @Override
    public double calculateSalary() {
        return getBaseSalary() + bonus;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Position: Administrator");
        System.out.println("Bonus: " + bonus);
        System.out.println("Total Salary: " + calculateSalary());
        System.out.println("---------------------");
    }
}
