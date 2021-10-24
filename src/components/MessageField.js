import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const MessageField = ({ name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <TextField 
      fullWidth={true} 
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        // 日本語入力中のEnterは変換の確定なので返却する
        if (isComposed) return;

        // 空文字でEnterが押された場合は返却する
        const text = e.target.value;
        if(text === '') return;

        if (e.key === 'Enter') {
          console.log('push message to firebase');
          setText('');
          e.preventDefault();
        }
      }}
      onCompositionStart={()=> setIsComposed(true)}
      onCompositionEnd={()=> setIsComposed(false)}
      value={text}
    />
  );
};

export default MessageField;
