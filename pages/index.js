import React from 'react'

import Layout from '../components/layout'
import Tweet from '../tweet'

function HomePage() {

  return (
    <Layout>
      <Tweet  name="Ali Rıza ÇELEBİ" slug="4alicelebi" datetime={new Date("2021-07-06")}
      text={ `Merhaba ilk tweet`}/>
      <Tweet  name="Ali Rıza ÇELEBİ" slug="4alicelebi" datetime={new Date("2021-07-06")}
          text={ `ikinci tweet`}/>
    </Layout>
  )
}

export default HomePage
