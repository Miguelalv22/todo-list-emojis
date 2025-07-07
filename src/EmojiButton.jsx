import { useContext } from "react";
import { EmojiContext } from "./context/Context";

export default function EmojiButton({ }) {
    const { newValue } = useContext(EmojiContext);
    const emojiList = [
        "🚴‍♀️", "🤾‍♀️", "🛀", "🛌", "👩‍🏫",
        "🍕", "🍅", "✈", "🚗", "🐩",
        "🎉", "📺",
    ];

    return (
        <select name="selectedEmoji" id="selectEmoji" onChange={newValue}>
            {emojiList.map((emoji) => (
                <option key={emoji} value={emoji}>{emoji}</option>
            ))}
        </select>
    )
};