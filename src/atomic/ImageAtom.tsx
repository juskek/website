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
      <img src={src} alt={altText} />
      {showCaption && (
        <figcaption style={{ textAlign: 'center', fontSize: 'smaller' }}>
          {caption && caption} {source && <a href={source}>(Source)</a>}
        </figcaption>
      )}
    </figure>
  )
}

export default ImageAtom
