import {
  fqdn,
  discord,
  infoEmail,
  newsletterEmailSubscribe,
} from 'common/config/defs'

import { REFERRAL_AMOUNT } from 'common/economy'
import { formatMoney } from 'common/util/format'
import Link from 'next/link'
import Masonry from 'react-masonry-css'
import { Col } from 'web/components/layout/col'
import { Page } from 'web/components/layout/page'
import { Spacer } from 'web/components/layout/spacer'
import { PrivacyAndTerms } from 'web/components/privacy-terms'
import { SEO } from 'web/components/SEO'
import { Card } from 'web/components/widgets/card'
import { Subtitle } from 'web/components/widgets/subtitle'
import { Title } from 'web/components/widgets/title'
import { useUser } from 'web/hooks/use-user'

export default function AboutPage() {
  const user = useUser()

  return (
    <Page>
      <SEO title="About" description="About Voxiversal" url="/sitemap" />

      <Col className="p-4">
        <Title>About</Title>

        <div className="mb-4 text-lg">
          Voxiversal is an opinion-based social media platform aimed at
          determining global sentiments on AI and existential risk.
        </div>

        <LabCard
          title="💪 Built on Manifold Markets"
          href={'https://' + fqdn + '/faq#manifold'}
        />
        <LabCard
          title="🧐 Check out our FAQ"
          href={'https://' + fqdn + '/faq'}
        />

        <Subtitle>🌎 Stay connected</Subtitle>
        <LabSection>
          <LabCard
            title="💬 Discord"
            href={discord}
            description="Chat with the community and team"
          />
          <LabCard
            title="📰 Newsletter"
            href={newsletterEmailSubscribe}
            description="Get updates on new features and markets"
          />
          <LabCard
            title="✉️️ Email"
            href={'mailto:' + infoEmail}
            description="Contact us for support or feedback"
          />
        </LabSection>

        <Subtitle>📄 Pages</Subtitle>
        <LabSection>
          <LabCard
            title="🏆 Leaderboards"
            href="/leaderboards"
            description="Global profit rankings"
          />
          <LabCard
            title="📜 Community guidelines"
            description="General expectations and account rules"
            href="https://manifoldmarkets.notion.site/Community-Guidelines-f6c77b1af41749828df7dae5e8735400"
          />
        </LabSection>

        <Subtitle>👨‍💻️ Developers</Subtitle>
        <LabSection>
          <LabCard
            title="🤖 API"
            description="Use Manifold programmatically"
            href="https://docs.manifold.markets/api"
          />
          <LabCard
            title="😻 Github"
            description="We're open source!"
            href="https://github.com/manifoldmarkets/manifold"
          />
          <LabCard
            title="🎁 Bounties"
            description="Earn mana for contributing"
            href="https://manifoldmarkets.notion.site/Manifold-Bounties-5cd9c4045422461dbe84b4339f93e98f"
          />
          <LabCard
            title="🔁 Maniswap"
            description="Learn about our AMM"
            href="https://manifoldmarkets.notion.site/Maniswap-ce406e1e897d417cbd491071ea8a0c39"
          />
          <LabCard
            title="💬 Discord bot"
            description="Create, trade, & share markets from Discord"
            href="/discord-bot"
          />
          <LabCard
            title="🎮 Twitch bot"
            description="Embed markets in your stream"
            href="/twitch"
          />
          <LabCard
            title="📈 Stats"
            description="See how Manifold is doing"
            href="/stats"
          />
          <LabCard
            title="🎨 Design system"
            href="/styles"
            description="How we make things pretty"
          />
        </LabSection>

        <Subtitle>🪦 Graveyard</Subtitle>
        <div className="mb-4 italic">
          Dead and undead projects, haunting this page until we resurrect or
          exorcise them.
        </div>
        <LabSection>
          <LabCard
            title="🎱 Oddball"
            description="Guess the probability of events"
            href="https://oddball-pi.vercel.app/"
          />
          <LabCard
            title="⚔️ Versus"
            description="Create mana-battles between two ideas"
            href="/versus"
          />
          <LabCard
            title="🎴 Manifold: The Gambling"
            description="Match each market to its creator"
            href="/cards"
          />
          <LabCard
            title="💰 Mana auction"
            description={`A dollar auction but for ${formatMoney(10000)}`}
            href="/mana-auction"
          />
          <LabCard
            title="💭 Dream"
            description="Generate an image with AI"
            href="/dream"
          />
          <LabCard
            title="💌 Dating"
            description="Browse dating profiles and bet on relationships"
            href="/date-docs"
          />
          <LabCard
            title="🃏 Magic the Guessering"
            description="Match MTG card names to their art"
            href={`https://${DOMAIN}/mtg/index.html`}
          />
          <LabCard
            title="👀 Classified Ads"
            description="An old version of market boosts that let you advertise anything. View ads for mana!"
            href="/ad"
          />
          <LabCard title="🐮 Cowp" description="???" href="/cowp" />
        </LabSection>
        <Spacer h={8} />
      </Col>
      <PrivacyAndTerms />
    </Page>
  )
}

const LabCard = (props: {
  title: string
  description?: string
  href: string
  onClick?: () => void
}) => {
  const { title, description, href, onClick } = props
  return (
    <Link href={href} onClick={onClick} className="mb-4 block">
      <Card className="flex flex-col gap-2 px-4 py-3">
        <div className="text-lg font-semibold">{title}</div>
        {description && <p className="text-ink-600">{description}</p>}
      </Card>
    </Link>
  )
}

const LabSection = (props: { children: React.ReactNode }) => (
  <Masonry
    breakpointCols={{ default: 2, 768: 1 }}
    className="-ml-4 flex w-auto"
    columnClassName="pl-4 bg-clip-padding"
  >
    {props.children}
  </Masonry>
)
