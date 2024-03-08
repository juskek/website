import Image from 'next/image'

type Props = {
  src: string
  altText?: string
  caption?: string
  source?: string
  maxHeight?: string
  maxWidth?: string
}

const ImageAtom = ({ src, altText, caption, source, maxHeight, maxWidth }: Props) => {
  const showCaption = caption || source
  return (
    <figure
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Image
        src={src}
        alt={altText ?? caption ?? ''}
        height={500}
        width={500}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          maxWidth, // Set max width for the image
          maxHeight, // Set max height for the image
        }}
        objectFit="contain"
      />
      {showCaption && (
        <figcaption style={{ textAlign: 'center', fontSize: 'smaller' }}>
          {caption && caption} {source && <a href={source}>(Source)</a>}
        </figcaption>
      )}
    </figure>
  )
}

export default ImageAtom
