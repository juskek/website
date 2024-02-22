export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold text-primary-500">Social Games Privacy Policy</h1>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          The type of personal information we collect:
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Name</li>
          <li>Email Address</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          How we get the personal information and why we have it:
        </h2>
        <p className="mb-2">
          Most of the personal information we process is provided to us directly by you for one of
          the following reasons:
        </p>
        <ul className="mb-2 list-disc space-y-1 pl-5">
          <li>
            When you sign in to the app and use your real name as your display name, it is stored in
            our servers.
          </li>
        </ul>
        <p className="mb-2">
          We receive personal information indirectly, from the following sources in the following
          scenarios:
        </p>
        <ul className="mb-2 list-disc space-y-1 pl-5">
          <li>
            When you sign in to the app using Continue with Google/Apple, we may receive your name
            and email address from Google/Apple. However, this information is only made available to
            us at the point of signing in, and it is not stored within our servers. We use the
            information that you have given us in order to authenticate your account.
          </li>
        </ul>
        <p>
          Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we rely on for
          processing this information are:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Your consent. You are able to remove your consent at any time. You can do this by
            deleting your account by contacting{' '}
            <a
              href="mailto:justin@kek.technology"
              className="text-primary-500 hover:text-primary-600"
            >
              justin@kek.technology
            </a>
            .
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          How we store your personal information:
        </h2>
        <p>Your information is not stored on our servers.</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">Your data protection rights:</h2>
        <p className="mb-2">Under data protection law, you have rights including:</p>
        <ul className="mb-2 list-disc space-y-1 pl-5">
          <li>
            Your right of access - You have the right to ask us for copies of your personal
            information.
          </li>
          <li>
            Your right to rectification - You have the right to ask us to rectify personal
            information you think is inaccurate. You also have the right to ask us to complete
            information you think is incomplete.
          </li>
          <li>
            Your right to erasure - You have the right to ask us to erase your personal information
            in certain circumstances.
          </li>
          <li>
            Your right to restriction of processing - You have the right to ask us to restrict the
            processing of your personal information in certain circumstances.
          </li>
          <li>
            Your right to object to processing - You have the right to object to the processing of
            your personal information in certain circumstances.
          </li>
          <li>
            Your right to data portability - You have the right to ask that we transfer the personal
            information you gave us to another organisation, or to you, in certain circumstances.
          </li>
        </ul>
        <p>
          You are not required to pay any charge for exercising your rights. If you make a request,
          we have one month to respond to you.
        </p>
        <p>
          Please contact us at [insert email address, phone number, and/or postal address] if you
          wish to make a request.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">How to complain:</h2>
        <p className="mb-2">
          If you have any concerns about our use of your personal information, you can make a
          complaint to us at{' '}
          <a
            href="mailto:justin@kek.technology"
            className="text-primary-500 hover:text-primary-600"
          >
            justin@kek.technology
          </a>
          .
        </p>
        <p className="mb-2">
          You can also complain to the ICO if you are unhappy with how we have used your data.
        </p>
        <p>
          The ICO's address:
          <br />
          Information Commissioner's Office
          <br />
          Wycliffe House
          <br />
          Water Lane
          <br />
          Wilmslow
          <br />
          Cheshire
          <br />
          SK9 5AF
          <br />
        </p>
        <p>
          Helpline number: 0303 123 1113
          <br />
          ICO website:{' '}
          <a href="https://www.ico.org.uk" className="text-primary-500 hover:text-primary-600">
            https://www.ico.org.uk
          </a>
        </p>
      </div>
    </div>
  )
}
