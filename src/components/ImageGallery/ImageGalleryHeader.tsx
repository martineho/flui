import React from "react";
import { ViewModeType } from "./types";
import styles from "./ImageGallery.module.css";

interface ImageGalleryHeaderProps {
  setViewMode: (mode: ViewModeType) => void;
  viewMode: ViewModeType;
}

const ImageGalleryHeader: React.FC<ImageGalleryHeaderProps> = ({ setViewMode, viewMode }) => {
  return (
    <div className={styles.imageGalleryHeader}>
      <ul className={styles.buttonContainer}>
        <button
          onClick={() => setViewMode("grid")}
          className={styles.button}
          aria-label="Grid"
          style={{ opacity: viewMode === "grid" ? 1 : 0.7, transform: viewMode === "grid" ? "scale(1.03)" : "scale(1)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: "1.3rem", height: "1.3rem" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={styles.button}
          aria-label="List"
          style={{ opacity: viewMode === "list" ? 1 : 0.7, transform: viewMode === "list" ? "scale(1.03)" : "scale(1)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: "1.3rem", height: "1.3rem" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>
      </ul>
    </div>
  );
};

export default ImageGalleryHeader;
