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
                    <li>Arlington</li>
                    <li>Copley</li>
                    <li>Prudential</li>
                    <li>Symphony</li>
                    <li>Northeastern</li>
                    <li>Museum of Fine Arts</li>
                    <li>Longwood Medical Area</li>
                    <li>Brigham Circle</li>
                    <li>Fenwood Road</li>
                </ul>
            </div>

        </div>
    )
}

export default LeftBox;