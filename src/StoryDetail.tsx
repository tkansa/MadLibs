import { useParams } from "react-router-dom";
import { Story } from "./interfaces/story";
import { useContext } from "react";
import StoriesContext from "./context/StoriesContext";

function StoryDetail() {

    let { stories } = useContext(StoriesContext);
    const id: number = parseInt(useParams().id!);
    let index = stories.findIndex(s => s.id === id);
    let story: Story = stories[index];
    return (
        <div className="StoryDetail">
            <div>Once upon a time {story.author} went to {story.noun} to {story.verb}</div>
        </div>
    );
}

export default StoryDetail;
