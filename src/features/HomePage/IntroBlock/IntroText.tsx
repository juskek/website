import Link from 'next/link'

export const IntroText = () => {
  return (
    <div className="row-start-2 sm:col-start-1 sm:row-start-1">
      <h1 className="mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Hey there! I'm Justin.
      </h1>
      <p className="text-lg leading-7 text-gray-500 ">
        I am an <span className="text-green-500">engineer</span> and{' '}
        <span className="text-blue-500">musician</span>, and bringing joy through the things I
        produce makes me feel alive.
      </p>
      <p className="text-lg leading-7 text-gray-500 ">
        My current focus is in making <span className="text-orange-500">Flutter SEO friendly</span>,
        so that it becomes the obvious choice for multiplatform applications.
      </p>
      <p className="text-lg leading-7 text-gray-500 ">
        If you have any questions or ideas, feel free to{' '}
        <span className="underline">
          <Link href="https://www.linkedin.com/in/justinkek/.com" target="_blank">
            reach out
          </Link>
        </span>
        . Enjoy your visit!
      </p>
    </div>
  )
}
