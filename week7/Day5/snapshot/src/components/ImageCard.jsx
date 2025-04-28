function ImageCard({ photo }) {
  return (
    <div className="image-card">
      <img src={photo.src.medium} alt={photo.photographer} />
    </div>
  );
}

export default ImageCard;
