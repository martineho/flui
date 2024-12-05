import React from "react";
import { ImageData } from "./types";
import styles from "./ImageGallery.module.css";

interface ImageItemProps {
  image: ImageData;
  onClick: () => void;
  innerRef: (instance: HTMLDivElement | null) => void;
  viewMode: string;
}

export const ImageItem: React.FC<ImageItemProps> = ({ image, onClick, innerRef, viewMode }) => {
  return (
    <div
      ref={innerRef}
      className={styles.imageItem}
      style={{
        cursor: viewMode === "grid" ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      <img src={image.src} alt={image.caption} className={styles.image} />
      {viewMode === "grid" ? null : <p className={styles.imageCaption}>{image.caption}</p>}
    </div>
  );
};
