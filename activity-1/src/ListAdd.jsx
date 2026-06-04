export default function ListAdd () {
    let added = [];
    let addedPtr = -1;

    const addToList = () => {
        const inp = document.getElementById("user-inp");
        const lastVal = inp.value;
        const lastDisp = document.getElementById("last");

        lastDisp.innerHTML = `Last Element: ${lastVal}`;
        inp.value = "";

        added.push(lastVal);
        addedPtr += 1;
    };

    const undo = () => {
        if (addedPtr == 0) return;
        addedPtr -= 1;

        const lastDisp = document.getElementById("last");
        lastDisp.innerHTML = `Last Element: ${added[addedPtr]}`;
    };

    const redo = () => {
        if (addedPtr == added.length - 1) return;
        addedPtr += 1;

        const lastDisp = document.getElementById("last");
        lastDisp.innerHTML = `Last Element: ${added[addedPtr]}`;
    };

    return (
        <div>
            <input id="user-inp" type = "text"></input>
            <button onClick={addToList}>Add +</button>
            <p id="last">Last Element: </p>
            <button onClick={undo}>Undo</button>
            <button onClick={redo}>Redo</button>
        </div>
    )    
}