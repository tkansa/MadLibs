import { Link } from "react-router-dom";
import { useContext } from "react";
import StoriesContext from "./context/StoriesContext";

function Stories() {

    let { stories } = useContext(StoriesContext);
    return (
        <div className="Stories">
            <div className="story-container">
                {stories.map((story, i) =>
                <Link to={`/story-detail/${story.id}`} key={i}>Story by: {story.author}</Link>
                )}
            </div>
        </div>
    );
}

export default Stories;
