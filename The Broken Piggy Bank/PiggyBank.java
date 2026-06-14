public class PiggyBank {
    public static void main(String[] args) {
        Bank bank = new Bank();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 2000; i++) {
                bank.decrease();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 2000; i++) {
                bank.decrease();
            }
        });

        Thread t3 = new Thread(() -> {
            for (int i = 0; i < 2000; i++) {
                bank.decrease();
            }
        });

        Thread t4 = new Thread(() -> {
            for (int i = 0; i < 2000; i++) {
                bank.decrease();
            }
        });

        Thread t5 = new Thread(() -> {
            for (int i = 0; i < 2000; i++) {
                bank.decrease();
            }
        });

        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();

        try {
            t1.join();
            t2.join();
            t3.join();
            t4.join();
            t5.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println(bank.getBalance());
    }    
}

class Bank {
    private int balance;
    public Bank() {
        this.balance = 8000;
    }

    public void decrease() {
        this.balance -= 1;
    }

    public int getBalance() {
        return this.balance;
    }
}