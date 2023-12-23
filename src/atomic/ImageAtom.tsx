import Image from 'next/image'

type Props = {
  src: string
  altText: string
  caption: string
  source?: string
}

const ImageAtom = ({ src, altText, caption, source }: Props) => {
  const showCaption = caption || source
  return (
    <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Image
        src={src}
        alt={altText}
        height={500}
        width={500}
        style={{ width: '100%', height: '100%', position: 'relative' }}
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
