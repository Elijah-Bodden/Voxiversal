import Link from 'next/link'

import { User } from 'web/lib/firebase/users'
import { formatMoney } from 'common/util/format'
import { Avatar } from '../widgets/avatar'
import { trackCallback } from 'web/lib/service/analytics'
import { animated } from '@react-spring/web'
import { useAnimatedNumber } from 'web/hooks/use-animated-number'

export function ProfileSummary(props: { user: User }) {
  const { user } = props

  const balance = useAnimatedNumber(user.balance)

  return (
    <Link
      href={`/${user.username}`}
      onClick={trackCallback('sidebar: profile')}
      className="text-ink-500 hover:bg-ink-100 hover:text-ink-700 group mb-3 flex flex-shrink-0 flex-row items-center gap-4 rounded-md py-3"
    >
      <Avatar avatarUrl={user.avatarUrl} username={user.username} noLink />
      <div className="truncate">
        <div>{user.name}</div>
        <div className="flex items-center text-sm">
          <span className="mr-2">
            <animated.div>{balance.to((b) => formatMoney(b))}</animated.div>
          </span>
        </div>
      </div>
    </Link>
  )
}
