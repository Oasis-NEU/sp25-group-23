function RightBox ({isClicked}) {
    if (isClicked) {
        return (
            <div>
                <p>You clicked me!</p>
                <p>right box</p>
            </div>
        )
    }
    return (
        <div>
            <p>right box</p>
        </div>
    )
}

export default RightBox;