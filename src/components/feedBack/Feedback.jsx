import React, {useState} from "react";
import MyButton from "../myButton/MyButton";
import './FeedBack.css'

const FeedBack = () => {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => setLikes(likes +1)
    const handleDislike = () => setDislikes(dislikes + 1)
    const handleReset = () => {
        setLikes(0)
        setDislikes(0)
    }

    return (
        <div className="feedback-container">
            <div className="feedback-item">
                <span>{likes}</span>
                <MyButton type="button" onClick={handleLike}>Like</MyButton>
            </div>
            <div className="feedback-item">
            <MyButton type="button" onClick={handleDislike}>
        Dislike
        </MyButton>
        <span>{dislikes}</span>
    </div>
    <div className="feedback-item">
        <MyButton type="button" onClick={handleReset}>
        Reset Results
        </MyButton>
        </div>
        </div>
    
    )
}

export default FeedBack;