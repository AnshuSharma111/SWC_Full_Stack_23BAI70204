import java.util.Scanner;

public class ArraySearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String st = sc.nextLine();

        String[] arr = st.split(" ");
        int sz = arr.length;

        // for (int i = 0; i < sz; i++) {
        //     System.out.println(arr[i] + " ");
        // }

        String target = sc.nextLine();;

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < sz/3; i++) {
                if (arr[i].equals(target)) {
                    System.out.println("Found in thread " + Thread.currentThread().getName());
                }
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = sz/3; i < 2*sz/3; i++) {
                if (arr[i].equals(target)) {
                    System.out.println("Found in thread " + Thread.currentThread().getName());
                }
            }
        });

        Thread t3 = new Thread(() -> {
            for (int i = 2*sz/3; i < sz; i++) {
                if (arr[i].equals(target)) {
                    System.out.println("Found in thread " + Thread.currentThread().getName());
                }
            }
        });

        t1.start();
        t2.start();
        t3.start();

        sc.close();
    }
}