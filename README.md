# FLUI

Elegant and fluid UI components for React applications.

## Installation

```bash
npm install flui
```

## Components

### Image Gallery

A responsive image gallery component that supports grid and list views.

#### Usage

To use the Image Gallery component, first import it into your React component:

```javascript
import { ImageGallery } from "flui";
```

Then, you can use the `ImageGallery` component in your JSX:

```javascript
function App() {
  const images = [
    { src: "image1.jpg", alt: "Image 1", caption: "Image 1" },
    { src: "image2.jpg", alt: "Image 2", caption: "Image 2" },
    // Add more images as needed, captions are optional
  ];

  return (
    <div>
      <h1>My Image Gallery</h1>
      <ImageGallery images={images} view="grid" />
    </div>
  );
}

export default App;
```

#### Props

- `images`: An array of image objects, each containing `src` and `alt` properties.
- `view`: A string that determines the layout of the gallery. Options are `"grid"` or `"list"`.
