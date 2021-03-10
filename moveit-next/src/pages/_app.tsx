import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengeContext'

function MyApp({ Component, pageProps }) {
  return(
    <ChallengesProvider>
      return <Component {...pageProps} />
    </ChallengesProvider>

  )
}

export default MyApp
