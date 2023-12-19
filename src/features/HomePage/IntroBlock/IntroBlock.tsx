import { IntroImage } from './IntroImage'
import { IntroText } from './IntroText'

export const IntroBlock = () => {
  return (
    <div className="flex flex-row ">
      <IntroText />
      <IntroImage />
    </div>
  )
}
