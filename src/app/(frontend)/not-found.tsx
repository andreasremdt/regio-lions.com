import Header from '@/components/blocks/header'
import Link from 'next/link'

export const metadata = {
  title: 'Seite nicht gefunden',
  description:
    'Die von Ihnen gewünschte Seite konnte nicht gefunden werden. Bitte vergewissern Sie sich, das die URL stimmt.',
}

export default function NotFound() {
  return (
    <>
      <Header
        title="Seite nicht gefunden"
        description="Die von Ihnen gewünschte Seite konnte nicht gefunden werden. Bitte vergewissern Sie sich, das die URL stimmt. Eventuell wurde die Seite / der Beitrag auch gelöscht. Mit einem Klick auf die unten sichtbare Schaltfläche gelangen Sie auf die Startseite zurück."
      />

      <Link href="/" className="btn btn-primary">
        Zur Startseite
      </Link>
    </>
  )
}
