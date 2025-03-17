

function LeftBox({ setStop }) {
    return (
        <div class = "leftBoxDiv">
            <div class="line">
                <div class="button-path">
                    <button onClick={setStop("Arlington")} class="button"></button>
                    <button onClick={setStop("Copley")} class="button"></button>
                    <button onClick={setStop("Prudential")} class="button"></button>
                    <button onClick={setStop("Symphony")} class="button"></button>
                    <button onClick={setStop("Northeastern")} class="button"></button>
                    <button onClick={setStop("Museum of Fine Arts")} class="button"></button>
                    <button onClick={setStop("Longwood Medical Area")} class="button"></button>
                    <button onClick={setStop("Brigham Circle")} class="button"></button>
                    <button onClick={setStop("Fenwood Road")} class="button"></button>
                </div>
            </div>

            <div class = "labels">
                <ul class = "stopNames">
                    <li class = "liStop">Arlington</li>
                    <li class = "liStop">Copley</li>
                    <li class = "liStop">Prudential</li>
                    <li class = "liStop">Symphony</li>
                    <li class = "liStop">Northeastern</li>
                    <li class = "liStop">Museum of Fine Arts</li>
                    <li class = "liStop">Longwood Medical Area</li>
                    <li class = "liStop">Brigham Circle</li>
                    <li class = "liStop">Fenwood Road</li>
                </ul>
            </div>

        </div>
    )
}

export default LeftBox;
