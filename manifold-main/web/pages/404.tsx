import { IS_PRIVATE_MANIFOLD } from 'common/envs/constants'
import { Page } from 'web/components/layout/page'
import { Title } from 'web/components/widgets/title'
import { bugEmail } from 'web/../common/config/defs'

export default function Custom404(props: { customText?: string }) {
  if (IS_PRIVATE_MANIFOLD) {
    // Since private Manifolds are client-side rendered, they'll blink the 404
    // So we just show a blank page here:
    return <Page></Page>
  }
  return (
    <Page>
      <Custom404Content customText={props.customText} />
    </Page>
  )
}

export function Custom404Content(props: { customText?: string }) {
  const { customText } = props
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Title children="404: Oops!" />
      {customText && <p>{customText}</p>}
      {!customText && <p>Nothing exists at this location.</p>}
      <p>If you didn't expect this, shoot us an <a href={'mailto:' + bugEmail}>email</a>!</p>
      <br />
    </div>
  )
}
