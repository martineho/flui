import React, { useEffect, useRef } from "react";
import { ImageData } from "./types";
import { ImageItem } from "./ImageItem";

interface ImageGridProps {
  images: ImageData[];
  onImageClick: (image: ImageData) => void;
  viewMode: "grid" | "list";
  selectedImageId: number | null;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick, viewMode, selectedImageId }) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (viewMode === "list" && selectedImageId !== null) {
      const selectedImageRef = imageRefs.current[selectedImageId];
      if (selectedImageRef) {
        selectedImageRef.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [viewMode, selectedImageId]);

  if (!images) {
    return <div>No images available.</div>;
  }

  // Determines the grid column layout based on view mode and screen width
  const getGridColumns = () => {
    const width = window.innerWidth;

    // In list view, use single column layout
    if (viewMode === "list") {
      return "1fr";
    }

    // For larger screens (>=1024px), use 2 column grid
    if (width >= 1024) {
      // lg breakpoint
      return "repeat(2, 1fr)";
    }
    // For smaller screens, use 3 column grid
    return "repeat(3, 1fr)";
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: getGridColumns(),
    gap: "0.125rem",
  };

  useEffect(() => {
    const handleResize = () => {
      const gridElement = document.querySelector("[data-grid-container]") as HTMLElement;
      if (gridElement) {
        gridElement.style.gridTemplateColumns = getGridColumns();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [viewMode]);

  return (
    <div style={gridStyle} data-grid-container>
      {images?.map((image, index) => (
        <ImageItem
          key={index}
          innerRef={(el) => (imageRefs.current[image.id] = el)}
          image={image}
          onClick={() => onImageClick(image)}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
