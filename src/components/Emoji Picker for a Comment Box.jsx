import  { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

function CommentBox() {
  const [comment, setComment] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (emojiObject) => {
    setComment((prevComment) => prevComment + emojiObject.emoji);
    setShowPicker(false); // Close picker after selecting an emoji
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the comment
    console.log('Comment submitted:', comment);
    setComment(''); // Clear the comment field after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
        ></textarea>
        <button type="button" onClick={() => setShowPicker((val) => !val)}>
          {showPicker ? "Hide Emojis" : "Add Emoji"}
        </button>
        {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentBox;
