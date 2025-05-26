// import { useState } from "react";
import "./cardWithImage.css";
// import { useNavigate } from 'react-router-dom';
import trimLength from "../../utilities/trimLength";
import type { IStory } from "../../utilities/Interface/IStory";

const CardWithImage = (story: IStory) => {
    // const navigate = useNavigate();
    // const [searchValue, setSearchValue] = useState("");

    return (
        <div className="card-with-image">
            <img className="story-image" height="200px" width="250px" src={story.poster} alt="" />
            <div className="story-details">
                <h4 className="story-name">{story?.name}</h4>
                <p className="story-author">{story?.author}</p>
                <p className="story-context">{trimLength(story?.description, 30)}</p>
            </div>
        </div>
    )
}

export default CardWithImage;