function PagePrinter(props) {
  const printPage = () => window.print();

  return (
    <div className="page-printer">
      <div className="page-printer-inner">
        <button onClick={printPage}>PRINT THIS PAGE</button>
      </div>
    </div>
  );
}

export default PagePrinter;