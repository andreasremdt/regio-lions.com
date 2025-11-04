import type { Metadata } from 'next'
import Header from '@/components/blocks/header'
import Button from '@/components/ui/button'

export const metadata: Metadata = {
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

      <Button href="/">Zur Startseite</Button>
    </>
  )
}
