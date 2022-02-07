import { Link, useNavigate, useParams } from "react-router-dom";
import { Story } from "./interfaces/story";
import { FormEvent, useContext, useState } from "react";
import StoriesContext from "./context/StoriesContext";

function StoryForm() {

    let [author, setAuthor] = useState("");
    let [noun, setNoun] = useState("");
    let [verb, setVerb] = useState("");
    let { addStory } = useContext(StoriesContext);
    const navigate = useNavigate();
    function submitStory(e: FormEvent) {
        e.preventDefault();
        let story: Story = { author: author, noun: noun, verb: verb }
        addStory(story);
        navigate("/stories");
    }
    return (
        <div className="StoryForm">
            <form onSubmit={submitStory}>
                Name:<input value={author} onChange={(e) => setAuthor(e.target.value)} />
                Noun:<input value={noun} onChange={(e) => setNoun(e.target.value)} />
                Verb:<input value={verb} onChange={(e) => setVerb(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default StoryForm;
