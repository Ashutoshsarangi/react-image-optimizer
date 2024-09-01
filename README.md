### Advanced Image Optimization in React: Leveraging Intersection Observer

#### 1. Existing Image Optimization with React Router

- React Router has significantly improved image optimization. One of the key features is its ability to delay loading images that belong to components not yet rendered on the DOM.
- This ensures that images or related API calls are not unnecessarily fetched until needed.
- In React Router v6, you can further enhance this by using the `action` option to prefetch images when the user hovers over a route link.
- This prefetching strategy allows images to load just in time for the user’s interaction, enhancing the perceived performance.

#### 2. Enhanced Optimization with Intersection Observer

- While React Router optimizes image loading by deferring it until necessary, there’s still room for improvement, especially regarding images outside the visible viewport at initial load.
- Typically, when a page loads, the browser fetches all assets (images, CSS, JS) regardless of whether they are in the visible range, leading to unnecessary resource loading.

- To avoid this, you can use the Intersection Observer API combined with React’s `useState`, `useEffect`, and `useRef` hooks.
- This method allows you to delay loading images until they enter the viewport. 

**Here’s how it works:**

-   **Set up Intersection Observer**: Monitor when an image enters the viewport.
-   **Lazy Load Images**: Use `useState` to manage the image's source and `useEffect` to trigger the image load only when it’s about to be visible.
-   **Fixed Image Sizes**: Ensure that image containers have predefined sizes. This prevents layout shifts and reduces CPU-intensive operations, which can otherwise negatively impact performance.

By implementing this strategy, the browser only loads images when they become visible to the user, reducing the initial page load time and improving the First Contentful Paint (FCP).

**Addition Image Optimization technique**
1. use packages / tools to compress images
	- https://squoosh.app/
	- https://tinypng.com/
	- https://www.npmjs.com/package/compress-images (npm package)
2. Use srcSet and Sizes for responsive image designs
	- https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

``` bash
npm i && npm run dev
```

**Demo**
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dgtswv8xh8jl3yy91icu.gif)

### Summary

- Combining React Router’s deferred loading with Intersection Observer for lazy-loading images offers a powerful optimization strategy. 
- This approach not only enhances the user experience by speeding up initial load times but also ensures that resources are efficiently managed, particularly in image-heavy applications.
