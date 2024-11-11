import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

function ChatInput() {
  const [message, setMessage] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={() => setShowPicker((val) => !val)} style={{ marginLeft: '5px' }}>
        😊
      </button>
      {showPicker && (
        <div style={{ position: 'absolute', bottom: '50px', right: '0' }}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
}

export default ChatInput;
