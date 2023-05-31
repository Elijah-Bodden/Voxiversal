import type { AppProps } from 'next/app'
import Head from 'next/head'
import { fqdn } from 'web/../common/config/defs'
import Script from 'next/script'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider, AuthUser } from 'web/components/auth-context'
import { DarkModeProvider } from 'web/components/dark-mode-provider'
import Welcome from 'web/components/onboarding/welcome'
import { SearchProvider } from 'web/components/search/search-context'
import { useHasLoaded } from 'web/hooks/use-has-loaded'
import '../styles/globals.css'
import { Major_Mono_Display, Figtree } from 'next/font/google'
import { GoogleOneTapSetup } from 'web/lib/firebase/google-onetap-login'
import clsx from 'clsx'

// See https://nextjs.org/docs/basic-features/font-optimization#google-fonts
// and if you add a font, you must add it to tailwind config as well for it to work.

const logoFont = Major_Mono_Display({
  weight: ['400'],
  variable: '--font-logo',
  subsets: ['latin'],
})

const mainFont = Figtree({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-main',
  subsets: ['latin'],
})

function firstLine(msg: string) {
  return msg.replace(/\r?\n.*/s, '')
}

function printBuildInfo() {
  // These are undefined if e.g. dev server
  if (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    const env = process.env.NEXT_PUBLIC_VERCEL_ENV
    const msg = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE
    const owner = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER
    const repo = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG
    const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
    const url = `https://github.com/${owner}/${repo}/commit/${sha}`
    console.info(`Build: ${env} / ${firstLine(msg || '???')} / ${url}`)
  }
}

// specially treated props that may be present in the server/static props
type VoxiversalPageProps = { auth?: AuthUser }

function MyApp({ Component, pageProps }: AppProps<VoxiversalPageProps>) {
  useEffect(printBuildInfo, [])
  useHasLoaded()

  return (
    <>
      <Head>
        <title>Voxiversal</title>

        <meta
          property="og:title"
          name="twitter:title"
          content="Voxiversal"
          key="title"
        />
        <meta
          name="description"
          content="The world's voice for AI safety"
          key="description1"
        />
        <meta
          property="og:description"
          name="twitter:description"
          content="The world's voice for AI safety"
          key="description2"
        />
        <meta property="og:url" content={"https://" + fqdn} key="url" />
        <meta property="og:site_name" content="Voxiversal" />
        <meta name="twitter:card" content="summary" key="card" />
        <meta
          name="twitter:image"
          content={"https://" + fqdn + "/images/card.png"}
          key="image2"
        />
        <meta
          property="og:image"
          content={"https://" + fqdn + "/images/card.png"}
          key="image1"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-itunes-app" content="app-id=6444136749" />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          href={"https://" + fqdn + "/opensearch.xml"}
          title="Voxiversal"
        />
      </Head>
      <div
        className={clsx(
          'font-figtree contents font-normal',
          logoFont.variable,
          mainFont.variable
        )}
      >
        <AuthProvider serverUser={pageProps.auth}>
          <DarkModeProvider>
            <QueryClientProvider client={queryClient}>
              <SearchProvider>
                <Welcome />
                <Component {...pageProps} />
              </SearchProvider>
            </QueryClientProvider>
          </DarkModeProvider>
        </AuthProvider>
        {/* Workaround for https://github.com/tailwindlabs/headlessui/discussions/666, to allow font CSS variable */}
        <div id="headlessui-portal-root">
          <div />
        </div>
      </div>
      {/* Umami, for pageview analytics on https://analytics.umami.is/share/fBoBiEjLiZT0KT0l/Voxiversal */}
      <Script
        src="https://analytics.umami.is/script.js"
        data-website-id="67561492-8262-4bec-9075-425dee4990cb"
      />
      <GoogleOneTapSetup />
    </>
  )
}

const queryClient = new QueryClient()

export default MyApp
