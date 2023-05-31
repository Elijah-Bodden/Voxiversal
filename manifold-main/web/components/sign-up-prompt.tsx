import React from 'react'

import { useUser } from 'web/hooks/use-user'
import { firebaseLogin } from 'web/lib/firebase/users'
import { withTracking } from 'web/lib/service/analytics'
import { Button, SizeType } from './buttons/button'

export function BetSignUpPrompt(props: {
  label?: string
  className?: string
  size?: SizeType
}) {
  const { label, className, size = 'lg' } = props
  const user = useUser()

  return user === null ? (
    <Button
      // PLACEHOLDER I have no idea what withTracking even does, so I'm just leaving the following line for the time being.
      onClick={withTracking(firebaseLogin, 'sign up to bet')}
      className={className}
      size={size}
      color="gradient"
    >
      {label ?? 'Sign up to talk'}
    </Button>
  ) : null
}
