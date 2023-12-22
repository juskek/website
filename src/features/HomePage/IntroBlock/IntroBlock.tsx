import { IntroImage } from './IntroImage'
import { IntroText } from './IntroText'

export const IntroBlock = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-2 sm:grid-cols-2 sm:grid-rows-1 sm:items-center">
      <IntroText />
      <IntroImage />
    </div>
  )
}
