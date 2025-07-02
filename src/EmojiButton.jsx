export default function EmojiButton() {
    emojiList = [
        "🚴‍♀️", "🤾‍♀️", "🛀", "🛌", "👩‍🏫",
        "🍕", "🍅", "✈", "🚗", "🐩",
        "🎉", "📺",
    ]

    function randEmoji() {
        const index = Math.floor(Math.random() * emojiList.length + 1)
    }
    return (
        <button>{emojiList[index]}</button>
    )
}