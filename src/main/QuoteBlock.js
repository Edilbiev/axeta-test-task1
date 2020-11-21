import React from "react";

function QuoteBlock({ author, children }) {
  return (
    <div className="block-inner">
      <blockquote>{children}</blockquote>
      <div className="quote-author">{author}</div>
    </div>
  );
}

export default QuoteBlock;
