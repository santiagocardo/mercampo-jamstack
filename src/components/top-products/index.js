import React, { Suspense } from 'react'

import useNearScreen from '../../hooks/useNearScreen'
import Spinner from '../spinner'

const TopProducts = React.lazy(() => import('./top-products'))

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' })

  return <div ref={fromRef}>
    <Suspense fallback={<Spinner />}>
      {
        isNearScreen ? <TopProducts /> : <Spinner />
      }
    </Suspense>
  </div>
}

export default LazyTrending
