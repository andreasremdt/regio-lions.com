type Props = {
  videoId: string
}

export default function YouTubeEmbed({ videoId }: Props) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="aspect-video h-auto w-full rounded-xl shadow-xl print:hidden my-8"
    />
  )
}
