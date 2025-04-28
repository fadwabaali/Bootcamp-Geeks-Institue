function Pagination({ onLoadMore }) {
  return (
    <div className="pagination">
      <button onClick={onLoadMore}>Load More</button>
    </div>
  );
}

export default Pagination;
