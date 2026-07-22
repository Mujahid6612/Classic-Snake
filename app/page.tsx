import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Games",
  description:
    "Free mobile games for Android — with privacy policies and support information.",
};

const CONTACT_EMAIL = "techtool269@gmail.com";

const GAMES = [
  {
    name: "Classic Snake",
    tagline:
      "A modern take on the arcade classic — 20 levels of power-ups and escalating hazards.",
    privacyHref: "/privacy-policy",
  },
  {
    name: "Mind Dots",
    tagline:
      "A relaxing connect-the-dots puzzle — link matching colors and fill the grid.",
    privacyHref: "/mind-dots/privacy-policy",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Games</h1>
          <p className="text-gray-500">
            Free mobile games for Android. Choose a game below to read its
            privacy policy.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {GAMES.map((game) => (
            <div
              key={game.name}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {game.name}
              </h2>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                {game.tagline}
              </p>
              <Link
                href={game.privacyHref}
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          ))}
        </div>

        <footer className="text-center mt-12 text-sm text-gray-500">
          <p>
            Questions or support? Contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-blue-600 underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
