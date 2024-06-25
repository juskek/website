import Link from 'next/link'

export const IntroText = () => {
  return (
    <div className="row-start-2 sm:col-start-1 sm:row-start-1">
      <h1 className="mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Hey there!
      </h1>
      <p className="text-lg leading-7 text-gray-500 ">
        This space showcases some thoughts and creations that my personality is attached to -
        ranging from <span className="text-green-500">engineering</span> to{' '}
        <span className="text-blue-500">music</span>.
      </p>
      <p className="text-lg leading-7 text-gray-500 ">
        If you have any questions, feel free to{' '}
        <span className="underline">
          <Link href="https://www.linkedin.com/in/justinkek/" target="_blank">
            <span className="text-orange-500">reach out</span>
          </Link>
        </span>
        .
      </p>
      <p className="text-lg leading-7 text-gray-500 ">Enjoy your visit!</p>
    </div>
  )
}
