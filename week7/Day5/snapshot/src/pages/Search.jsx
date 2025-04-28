import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchPhotos } from "../api/pexels";
import ImageCard from "../components/ImageCard";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

function Search() {
  const { query } = useParams();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const loadImages = async () => {
    const data = await searchPhotos(query, 30, page);
    setImages(prev => [...prev, ...data]);
  };

  useEffect(() => {
    setImages([]);
    setPage(1);
    loadImages();
  }, [query]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (page !== 1) loadImages();
  }, [page]);

  return (
    <div>
      <Header />
      <h2>Results for "{query}"</h2>
      <div className="gallery">
        {images.map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))}
      </div>
      <Pagination onLoadMore={handleLoadMore} />
    </div>
  );
}

export default Search;
