import { createContext } from "react";
import { Story } from "../interfaces/story";

interface StoryContextModel {
    stories: Story[];
    addStory: (story: Story) => void;
}

const defaultValue: StoryContextModel = {
    stories: [],
    addStory: () => { }
}

const StoriesContext = createContext(defaultValue);
export default StoriesContext;