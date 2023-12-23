type Props = {
  src: string
  altText: string
  caption: string
  source?: string
}

const ImageWithCaption = ({ src, altText, caption, source }: Props) => {
  return (
    <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={src} alt={altText} />
      <figcaption style={{ textAlign: 'center', fontSize: 'smaller' }}>
        {caption} {source && <a href={source}>(Source)</a>}
      </figcaption>
    </figure>
  )
}

export default ImageWithCaption
