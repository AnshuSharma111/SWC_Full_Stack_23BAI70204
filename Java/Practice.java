public class Practice {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        NetworkTestDownloader t1 = new NetworkTestDownloader();
        NetworkTestDownloader t2 = new NetworkTestDownloader();
        NetworkTestDownloader t3 = new NetworkTestDownloader();

        t1.start();
        t2.start();
        t3.start();
    }
}

class NetworkTestDownloader extends Thread {
    static int x = 0;
    @Override
    public void run() {
        try {
            sleep(2000);
            for(int i = 0; i < 10; i++) {
                System.out.println("x value: " + x + " " + Thread.currentThread().getName());
                x += 1; // non-atomic (read, update, write)
            }
            System.out.println("Downloading File via: " + Thread.currentThread().getName());
        } catch (Exception e) {
            System.out.println("Did not work!");
        }

    }
}