export default function EmojiButton() {
    const emojiList = [
        "🚴‍♀️", "🤾‍♀️", "🛀", "🛌", "👩‍🏫",
        "🍕", "🍅", "✈", "🚗", "🐩",
        "🎉", "📺",
    ];

    function randEmoji() {
        const index = Math.floor(Math.random() * emojiList.length + 1);
        return emojiList[index];
    }

    return (
        <button>{randEmoji()}</button>
    )
};