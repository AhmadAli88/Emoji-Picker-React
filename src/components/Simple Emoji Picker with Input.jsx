import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

function EmojiInput() {
  const [text, setText] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setText((prevText) => prevText + emojiObject.emoji);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={() => setShowPicker((val) => !val)}>
        {showPicker ? "Close Emoji Picker" : "Open Emoji Picker"}
      </button>
      {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
    </div>
  );
}

export default EmojiInput;
