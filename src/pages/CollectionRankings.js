import React from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import CollectionRankingBase from '../components/CollectionRankings'
import { useDocumentTitle } from '../hooks/setDocumentTitle'

export default function CollectionRankings() {
  useDocumentTitle('Collection Rankings')
  return (
    <BaseLayout>
      <CollectionRankingBase />
    </BaseLayout>
  )
}
