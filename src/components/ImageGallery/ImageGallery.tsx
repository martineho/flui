import React, { useEffect, useState } from "react";
import ImageGrid from "./ImageGrid";
import { ImageData, ViewModeType } from "./types";
import ImageGalleryHeader from "./ImageGalleryHeader";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: ImageData[];
  onImageSelect?: (image: ImageData) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageSelect }) => {
  const [viewMode, setViewMode] = useState<ViewModeType>("grid");
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  useEffect(() => {
    if (images && images.length > 0 && selectedImageId === null) {
      setSelectedImageId(images[0].id);
    }
  }, [images, selectedImageId]);

  const handleImageClick = (image: ImageData) => {
    setViewMode("list");
    setSelectedImageId(image.id);
    onImageSelect?.(image);
  };

  return (
    <div className={styles.imageGallery}>
      <ImageGalleryHeader setViewMode={setViewMode} />
      {images && (
        <ImageGrid
          images={images}
          onImageClick={handleImageClick}
          viewMode={images.length <= 3 ? "list" : viewMode}
          selectedImageId={selectedImageId}
        />
      )}
    </div>
  );
};

export default ImageGallery;
