import * as React from 'react'
import Head from 'next/head'

import { isFormal } from '~lib/config'
import { Box, Text, Row } from '~ui/core'
import { Circle } from '~ui/anicons'
import { Phone } from '~ui/svg'
import { MobileApp } from '~ui/layouts/MobileApp'
import { FixedBottomBar } from '~ui/blocks/BottomBar'

export default function CoronaPage() {
  return (
    <MobileApp>
      <Head>
        <title key="title">Corona, was nun? | recover</title>
      </Head>
      <Text as="h2" variant="h2">
        Was sollte ich tun, wenn ich Kontaktperson bin?
      </Text>
      <Box height={5} />
      <Text>
        <p>Zu allererst: ruhig bleiben.</p>
        <p>
          Wenn {isFormal ? 'Sie' : 'Du'} eine bestätigte Kontaktperson{' '}
          {isFormal ? 'sind' : 'bist'}, wird sich das Gesundheitsamt bei{' '}
          {isFormal ? 'Ihnen' : 'dir'} telefonisch innerhalb von 48 Stunden
          melden.
        </p>
        <p>
          Falls {isFormal ? 'Sie' : 'Du'} bereits typische Symptome wie Fieber,
          Müdigkeit und trockenen Husten{' '}
          {isFormal ? 'haben, sollten Sie' : 'hast, solltest du'}{' '}
          vorsichtshalber in häuslicher Quarantäne bleiben und das
          Gesundheitsamt informieren.
        </p>
      </Text>
      <Box height={6} />
      <Row>
        <Circle size={36} color="red.400">
          <Phone />
        </Circle>
        <Box ml={3}>
          <Text variant="h3">Hotline zum Coronavirus</Text>
          <Text variant="h2">
            <a href="tel:030346465100">030 346465100</a>
          </Text>
        </Box>
      </Row>
      <Box height={6} />
      <Text variant="h3">Noch Fragen?</Text>
      <Box height={2} />
      <Text>
        <p>
          Eine Vielzahl von ständig aktualisierten Informationen gibt es auf der
          Internetseite des Bundesgesundheitsministeriums:{' '}
          <a
            href="https://www.bundesgesundheitsministerium.de/coronavirus.html"
            target="blank"
            rel="noopener noreferrer"
          >
            www.bundesgesundheitsministerium.de/coronavirus
          </a>
          . Dort finden sich insbesondere auch Links zu den
          Informationsangeboten der Bundeszentrale für gesundheitliche
          Aufklärung und des Robert-Koch-Instituts.
        </p>
      </Text>
      <FixedBottomBar transparent />
    </MobileApp>
  )
}
