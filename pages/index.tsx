import type { NextPage } from 'next'
import ContentWrapper from '../modules/layout/components/ContentWrapper'
import Index from '../modules/index/components/Index'

const IndexPage: NextPage = () => {
  return (
    <ContentWrapper title="Home">
      <Index />
    </ContentWrapper>
  )
}

export default IndexPage
