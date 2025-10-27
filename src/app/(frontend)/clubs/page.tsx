import Clubs from '@/components/blocks/clubs'
import Hero from '@/components/hero'

export const metadata = {
  title: 'Clubs',
  description:
    'Derzeit zählen wir 17 Clubs zu unserer Gemeinschaft. Erfahren Sie mehr über die einzelnen Clubs.',
  openGraph: {
    title: 'Clubs',
    description:
      'Derzeit zählen wir 17 Clubs zu unserer Gemeinschaft. Erfahren Sie mehr über die einzelnen Clubs.',
    images: ['https://ik.imagekit.io/6uqkzvybwk/regio-lions/logo.png?updatedAt=1707247965694'],
  },
  twitter: {
    title: 'Clubs',
    description:
      'Derzeit zählen wir 17 Clubs zu unserer Gemeinschaft. Erfahren Sie mehr über die einzelnen Clubs.',
  },
}

function Page() {
  return (
    <div>
      <Hero title="Teilnehmende Clubs">
        Derzeit zählen wir 17 Clubs zu unserer Gemeinschaft. Jeder Club bringt sich mit
        individuellen Ideen und Einsatzbereitschaft seiner Mitglieder ein und hilft uns bei der
        Umsetzung unserer Ziele.
      </Hero>

      <Clubs />
    </div>
  )
}

export default Page
