function QuoteBlock({ author, children }) {
  return (
    <div className="quote-block">
      <blockquote>{children}</blockquote>
      <div className="quote-author">{author}</div>
    </div>
  );
}

export default QuoteBlock;
