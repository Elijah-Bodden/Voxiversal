import Head from 'next/head'
import { fqdn } from 'web/../common/config/defs'

export function LogoSEO() {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
      "@context": "https://schema.org",
      "@type": "Corporation",
      "url": "https://${fqdn}",
      "logo": "https://${fqdn}/logo.svg",
      "description": "The world's voice for AI safety."
    }`,
        }}
      />
    </Head>
  )
}
