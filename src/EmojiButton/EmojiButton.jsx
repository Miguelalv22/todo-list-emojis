import { useContext } from "react";
import { EmojiContext } from "../context/Context";
import './EmojiButton.css';

export default function EmojiButton() {
    const { newValue } = useContext(EmojiContext);
    const emojiList = [
        "🚴‍♀️", "🤾‍♀️", "🛀", "🛌", "👩‍🏫",
        "🍕", "🍅", "✈", "🚗", "🐩",
        "🎉", "📺",
    ];

    return (
        <div className="EmojiButton">
            <label htmlFor="selectEmoji">Select an Emoji </label>
            <select name="selectedEmoji" id="selectEmoji" onChange={newValue}>
                {emojiList.map((emoji) => (
                    <option key={emoji} value={emoji}>{emoji}</option>
                ))}
            </select>
        </div>
    )
};