import Button from './ui/button'

export default function JumpToContent() {
  return (
    <Button
      href="#content"
      className="absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full rounded-t-none transition-transform focus:translate-y-0"
    >
      Zum Inhalt springen
    </Button>
  )
}
