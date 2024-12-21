export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold text-primary-500">Music</h1>
      <iframe
        title="Spotify Artist Embed"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/artist/6nc0mAjJqYcNozFsb2CR1S?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}
