import { ReactNode, useState } from "react";
import StoriesContext from "./StoriesContext";
import { Story } from "../interfaces/story";

interface Props { children: ReactNode; }
let id = 5;
export default function StoriesContextProvider({ children }: Props) {
    const [stories, setStories] = useState<Story[]>([
        { id: 1, author: "Tiia", noun: "chair", verb: "jump" },
        { id: 2, author: "Marvin", noun: "cheese", verb: "eat" },
        { id: 3, author: "Yuri", noun: "milk", verb: "pounce" },
        { id: 4, author: "Moe", noun: "pasta", verb: "sleep" }]);
    function addStory(story: Story): void {
        story.id = id;
        setStories(prev => [...prev, story]);
        id++;
    }
    return (
        <StoriesContext.Provider value={{ stories, addStory }}>
            {children}
        </StoriesContext.Provider>
    );
};