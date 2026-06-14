public class Timer {
    public static void main(String[] args) {
        A a = new A();
        B b = new B();

        a.start();
        try {
            a.join();
        } catch (Exception e) {
            System.out.println("Something went wrong!");
        }

        b.start();
    }
}

class A extends Thread {
    @Override
    public void run() {
        try {
            for (int i = 1; i < 11; i++) {
                sleep(1000);
                System.out.println(i);
            }
        } catch (Exception e) {
            System.out.println("Something went wrong!");
        }
    }
}

class B extends Thread {
    @Override
    public void run() {
        System.out.println("Blast off!");
    }
}