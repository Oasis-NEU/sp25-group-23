function LeftBox({ isClicked }) {
    return (
        <div>
            <p>{isClicked}</p>
            <p>hello</p>

            <div class="line">

            <div class="button-path">
                <button class="button"></button>
                <button class="button"></button>
                <button class="button"></button>
            </div>
            </div>

        </div>
    )
}

export default LeftBox;