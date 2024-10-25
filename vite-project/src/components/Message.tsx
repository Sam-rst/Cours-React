import { useState } from "react";

function Message() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div>
            <button onClick={handleClick}>Afficher le message</button>
            {isClicked && <div><h2>Info importante</h2><p>Message super important !</p></div>}
        </div>
    )
}

export default Message