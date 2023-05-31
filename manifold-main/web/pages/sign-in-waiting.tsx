import { Col } from 'web/components/layout/col'
import { useRedirectIfSignedIn } from 'web/hooks/use-redirect-if-signed-in'
import { useWindowSize } from 'web/hooks/use-window-size'
import { LoadingIndicator } from 'web/components/widgets/loading-indicator';

export default function SignInWaiting() {
  useRedirectIfSignedIn()
  // Flappy is too small during an android native client side resizing, so we use dynamic sizing
  const { width, height } = useWindowSize()
  return (
    <Col style={{ width, height }} className="items-center justify-center">
      <LoadingIndicator/>
    </Col>
  )
}
