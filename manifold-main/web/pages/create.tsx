import { useRouter } from 'next/router'
import { Page } from 'web/components/layout/page'
import { useTracking } from 'web/hooks/use-tracking'
import { Title } from 'web/components/widgets/title'
import { SEO } from 'web/components/SEO'
import {
  NewContractPanel,
  NewQuestionParams,
} from 'web/components/new-contract-panel'
import { useUser } from 'web/hooks/use-user'
import { useRedirectIfSignedOut } from 'web/hooks/use-redirect-if-signed-out'

export default function Create() {
  useTracking('view create page')
  useRedirectIfSignedOut()

  const user = useUser()
  const router = useRouter()
  const params = router.query as NewQuestionParams

  if (!user || !router.isReady) return <div />

  if (user.isBannedFromPosting)
    return (
      <Page>
        <div className="mx-auto w-full max-w-2xl">
          <div className="rounded-lg px-6 py-4 sm:py-0">
            <Title>Create a post</Title>
            <p>Sorry, you are currently banned from posting.</p>
          </div>
        </div>
      </Page>
    )

  return (
    <Page>
      <SEO
      // Split out into "Create a poll" and "Create a shortform once I finish getting the groundwork for generic posts." 
        title="Create a post"
        description="PLACEHOLDER"//"Create a play-money prediction market on any question."
        url="/create"
      />
      <div className="mx-auto w-full max-w-2xl px-6 py-4 lg:py-0">
        <Title>Create a market</Title>

        <div className="text-ink-700 mb-4">
        PLACEHOLDER{/* Set up your own play-money prediction market on any question. */}
        </div>
        <NewContractPanel params={params} creator={user} />
      </div>
    </Page>
  )
}
