// import { useState } from "react";
import "./card.css";
// import { useNavigate } from 'react-router-dom';
import trimLength from "../../utilities/trimLength";
import type { IStory } from "../../utilities/Interface/IStory";

const Card = (story: IStory) => {
    // const navigate = useNavigate();
    // const [searchValue, setSearchValue] = useState("");

    return (
        <div className="card">
            <h4 className="story-name">{story?.name}</h4>
            <p className="story-author">{story?.author}</p>
            <p className="story-context">{trimLength(story?.description, 30)}</p>
        </div>
    )
}

export default Card;