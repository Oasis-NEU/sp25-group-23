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
        <div class = "blogList">
            <div class ="blogBox">
                <h2>Blog Post Title Placeholder</h2>
                <p>post info blah blah ..................................</p>
            </div>
            <div class ="blogBox">
                <h2>Blog Post Title Placeholder</h2>
                <p>post info blah blah ..................................</p>
            </div>
        </div>
    
        
    )
}

export default RightBox;