interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
}

export function ImageGallery({
  images,
  columns = 3
}: ImageGalleryProps) {
  const colsClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns]

  return (
    <div className={`grid ${colsClass} gap-6`}>
      {images.map((image, i) => (
        <div
          key={i}
          data-animate
          className="opacity-0 group relative overflow-hidden rounded-sm"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {image.caption && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start">
              <p className="p-4 text-white font-light text-sm">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
