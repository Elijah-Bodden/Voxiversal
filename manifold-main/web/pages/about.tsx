import {
  fqdn,
  discord,
  infoEmail,
  newsletterEmailSubscribe,
  githubUrl,
} from '../../common/config/defs'

import Link from 'next/link'
import Masonry from 'react-masonry-css'
import { Col } from 'web/components/layout/col'
import { Page } from 'web/components/layout/page'
import { Spacer } from 'web/components/layout/spacer'
import { SEO } from 'web/components/SEO'
import { Card } from 'web/components/widgets/card'
import { Subtitle } from 'web/components/widgets/subtitle'
import { Title } from 'web/components/widgets/title'

export default function AboutPage() {

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

        <Subtitle>📄 Documents</Subtitle>
        <LabSection>
          <LabCard
            title="📜 Community guidelines"
            description="General expectations and account rules"
            href={'https://' + fqdn + '/community-guidelines'}
          />
          <LabCard
            title="👮 Privacy and Terms"
            description="Terms of use and information privacy policy"
            href={'https://' + fqdn + '/privacy-and-terms'}
          />
        </LabSection>
        <Subtitle>👨‍💻️ Developers</Subtitle>
        <LabSection>
          <LabCard
            title="😻 Github"
            description="We're open source!"
            href={githubUrl}
          />
          <LabCard
            title="🫶 Manifold Markets"
            description="The fantastic prediction market we spun off of"
            href="https://github.com/manifoldmarkets/manifold"
          />
          <LabCard
            title="🎨 Design system"
            href="/styles"
            description="How we make things pretty"
          />
        </LabSection>

        <Spacer h={8} />
      </Col>
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
