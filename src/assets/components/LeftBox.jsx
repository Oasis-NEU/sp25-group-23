function LeftBox({ isClicked }) {
    return (
        <div class = "leftBoxDiv">
            <p>{isClicked}</p>

            <div class="line">
                <div class="button-path">
                    <button class="button"></button>
                    <button class="button"></button>
                    <button class="button"></button>
                    <button class="button"></button>
                    <button class="button"></button>
                    <button class="button"></button>
                    <button class="button"></button>
                    <button class="button"></button>
                    <button class="button"></button>
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