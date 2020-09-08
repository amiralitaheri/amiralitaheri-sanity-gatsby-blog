import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {FaClipboard} from 'react-icons/fa';
import styles from './Code.module.css';
// todo: decide between highlight.js and prism
// todo use light build

export default ({node}) => {
  if (!node || !node.code) {
    return null;
  }
  const {language, code} = node;
  return (
    <div className={styles.code}>
      <div className={styles.codeHeader}>
        <span>
          {language}
        </span>
        <button onClick={() => {
          navigator.clipboard.writeText(code);
        }}><FaClipboard/></button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={darcula}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={{style: {display: 'flex', maxWidth: '70ch'}}}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
