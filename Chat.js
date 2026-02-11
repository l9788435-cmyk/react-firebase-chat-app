import { db, auth } from "./firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    return unsub;
  }, []);

  const sendMessage = async () => {
    if (!text.trim()) return;

    await addDoc(collection(db, "messages"), {
      text,
      user: auth.currentUser?.displayName || "Anonymous",
      createdAt: serverTimestamp(),
    });

    setText("");
  };

  const onEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <h2 className="chat-title">💬 Chat Room</h2>

        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className="chat-message">
              <span className="chat-user">{msg.user}</span>
              <span className="chat-text">{msg.text}</span>
            </div>
          ))}
        </div>

        {showEmoji && (
          <div className="emoji-picker">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}

        <div className="chat-input-area">
          <button
            className="emoji-btn"
            onClick={() => setShowEmoji(!showEmoji)}
          >
            😊
          </button>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
