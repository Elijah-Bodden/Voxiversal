import { removeUndefinedProps } from 'common/util/object'
import { buildOgUrl } from 'common/util/og'
import Head from 'next/head'
import { fqdn } from 'web/../common/config/defs'

export function SEO<P extends Record<string, string | undefined>>(props: {
  title: string
  description: string
  url?: string
  ogProps?: { props: P; endpoint: string }
  image?: string
}) {
  const { title, description, url, image, ogProps } = props

  const imageUrl =
    image ??
    (ogProps &&
      buildOgUrl(removeUndefinedProps(ogProps.props) as any, ogProps.endpoint))

  const absUrl = 'https://' + fqdn + url

  return (
    <Head>
      <title>{`${title} | Voxiversal`}</title>

      <meta
        property="og:title"
        name="twitter:title"
        content={title}
        key="title"
      />
      <meta name="description" content={description} key="description1" />
      <meta
        property="og:description"
        name="twitter:description"
        content={description}
        key="description2"
      />

      {url && <meta property="og:url" content={absUrl} key="url" />}
      
      {imageUrl && (
        <>
          <meta property="og:image" content={imageUrl} key="image1" />
          <meta name="twitter:card" content="summary_large_image" key="card" />
          <meta name="twitter:image" content={imageUrl} key="image2" />
        </>
      )}
    </Head>
  )
}
