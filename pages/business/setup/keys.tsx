import * as React from 'react'
import Head from 'next/head'

import { isFormal } from '~lib/config'
import { generateKeys } from '~lib/crypto'
import { withOwner, WithOwnerProps } from '~lib/pageWrappers'
import { updateOwner } from '~lib/actions'
import { Text, Box, ButtonLink } from '~ui/core'
import { ArrowsRight } from '~ui/anicons'
import { MobileApp } from '~ui/layouts/MobileApp'
import { KeyViewer } from '~ui/blocks/KeyViewer'

const SetupKeysPage: React.FC<WithOwnerProps> = ({ owner }) => {
  const didGenerateKeys = React.useRef(false)
  const [privateKey, setPrivateKey] = React.useState<string>()
  const [wasGenerated, setWasGenerated] = React.useState(false)

  React.useEffect(() => {
    if (!owner) return

    if (owner.publicKey && owner.privateKey) {
      setPrivateKey(owner.privateKey)
      return
    }

    if (!owner.publicKey && !owner.privateKey && !didGenerateKeys.current) {
      didGenerateKeys.current = true
      const { privateKey, publicKey } = generateKeys()
      updateOwner({ ...owner, privateKey, publicKey }).then(() => {
        setPrivateKey(privateKey)
      })
      return
    }

    // When we can't display the privateKey, it was already generated and is not
    // stored on the device anymore.
    setWasGenerated(true)
  }, [owner])

  return (
    <MobileApp>
      <Head>
        <title key="title">
          {isFormal ? 'Ihr' : 'Dein'} Schlüssel | recover
        </title>
      </Head>
      <Text as="h2" variant="h2">
        {isFormal ? 'Ihr' : 'Dein'} geheimer Schlüssel
      </Text>
      <Box height={6} />
      {wasGenerated ? (
        <>
          <Text>
            <p>
              {isFormal ? 'Sie haben' : 'Du hast'} schonmal einen Schlüssel
              generiert. Wir können ihn nicht mehr anzeigen.
            </p>
          </Text>
          <Box height={6} />
          <ButtonLink
            href="/business/setup/finished"
            right={<ArrowsRight color="green" />}
          >
            Fertig
          </ButtonLink>
        </>
      ) : (
        <>
          <Text>
            <p>
              <strong>
                {isFormal
                  ? 'Es ist sehr wichtig, dass Sie diesen Schlüssel notieren.'
                  : 'Es ist sehr wichtig, dass Du diesen Schlüssel notierst.'}
              </strong>
            </p>
            <p>
              {isFormal
                ? 'Notieren Sie sich den Schlüssel zum Beispiel auf einem Zettel und verwahren Sie diesen sorgfältig. Sie können auch einen Screenshot machen und diesen abspeichern. Oder Sie speichern den Schlüssel in einem Passwortmanager.'
                : 'Schreib den Schlüssel zum Beispiel auf einen Zettel und verwahre ihn sorgfältig. Oder mach einen Screenshot davon und speichere ihn sicher. Du kannst ihn auch in einem Passwortmanager speichern.'}
            </p>
          </Text>
          <Box height={4} />

          {privateKey ? (
            <Box mx={-6}>
              <KeyViewer value={privateKey} />
            </Box>
          ) : (
            <Box py={8}>
              <Text fontFamily="monospace" textAlign="center">
                Schlüssel wird erstellt...
              </Text>
            </Box>
          )}

          <Box height={6} />
          <Text>
            <p>
              {isFormal
                ? 'Im nächsten Schritt müssen Sie den Schlüssel eingeben. Damit gehen wir sicher, dass Sie ihn korrekt notiert haben.'
                : 'Im nächsten Schritt musst Du den Schlüssel eingeben. Damit gehen wir sicher, dass Du ihn korrekt notiert hast.'}
            </p>
          </Text>
          <Box height={6} />

          {privateKey && (
            <ButtonLink
              href="/business/setup/verify-key-manually"
              right={<ArrowsRight color="green" />}
            >
              Schlüssel prüfen
            </ButtonLink>
          )}
        </>
      )}
    </MobileApp>
  )
}

export default withOwner()(SetupKeysPage)
