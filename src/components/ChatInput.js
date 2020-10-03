import React, { useState } from 'react';
import '../styles/ChatInput.css';
import { Button } from "@material-ui/core";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  console.log('channel id', channelId.roomId);

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection('rooms').doc(channelId.roomId)
        .collection('messages').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userImage: user.photoURL,
        })
    }

    setInput('');
  }



  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`} />
        <Button type="submit" onClick={sendMessage}>Send</Button>
      </form>
    </div>
  )
}

export default ChatInput
