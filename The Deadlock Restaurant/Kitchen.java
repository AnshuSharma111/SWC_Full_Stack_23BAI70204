public class Kitchen {
    public static void main(String[] args) {
        KitchenTools tools = new KitchenTools();

        Thread t1 = new Thread(() -> {
            tools.useBoard();
            tools.useKnife();
        });

        Thread t2 = new Thread();        
    }    
}

class KitchenTools {
    private boolean knife_in_use;
    private boolean board_in_use;

    public KitchenTools () {
        knife_in_use = false;
        board_in_use = false;
    }

    public void useKnife () {
        if (knife_in_use) {
            return;
        }
        knife_in_use = true;
    }

    public void useBoard () {
        if (board_in_use) {
            return;
        }
        board_in_use = true;
    }

    public void keepKnife () {
        if (knife_in_use) knife_in_use = false;
    }

    public void keepBoard () {
        if (board_in_use) board_in_use = false;
    }

    public void knife
}