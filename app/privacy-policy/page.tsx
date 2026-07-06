import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy — Classic Snake",
  description:
    "Privacy policy for the Classic Snake mobile game, covering local data storage and advertising via Google AdMob.",
};

const LAST_UPDATED = "July 6, 2026";
const CONTACT_EMAIL = "techtool269@gmail.com";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Classic Snake · Last updated: {LAST_UPDATED}
          </p>

          <div className="space-y-6 text-gray-600">
            <section>
              <p className="mb-4">
                This Privacy Policy describes how Classic Snake (&quot;the
                app&quot;, &quot;we&quot;, &quot;us&quot;) handles information
                when you use our mobile game on Android. Classic Snake is a
                free game supported by advertising. If you have any questions,
                contact us at {CONTACT_EMAIL}.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Information We Collect Directly
              </h3>
              <p className="mb-4">
                The app does not require an account, and we do not ourselves
                collect, transmit, or store any personal information on our
                servers. Your game progress, best scores, and settings (such as
                difficulty and sound preferences) are stored only locally on
                your device and never leave it.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Advertising (Google AdMob)
              </h3>
              <p className="mb-4">
                The app displays ads served by Google AdMob, a third-party
                advertising service provided by Google. To serve and measure
                ads, prevent fraud, and enforce frequency capping, Google may
                automatically collect certain information from your device,
                including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  Device identifiers, such as the Android advertising ID
                </li>
                <li>IP address and coarse (approximate) location derived from it</li>
                <li>
                  Device and app information (device model, operating system
                  version, app package name)
                </li>
                <li>
                  Ad interaction data (such as ad views and clicks) and
                  diagnostic information
                </li>
              </ul>
              <p className="mb-4">
                This data is collected and processed by Google under its own
                policies. For details, see the{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://support.google.com/admob/answer/6128543"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s guidance on how AdMob uses data
                </a>
                . Where required by law (for example, in the European Economic
                Area, the United Kingdom, and Switzerland), you will be asked
                for consent before ads that use your data are shown, and you
                can decline or change your choice.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Your Ad Choices
              </h3>
              <p className="mb-4">
                You can limit or reset ad tracking at any time in your device
                settings. On Android, go to Settings → Privacy → Ads (or
                Settings → Google → Ads on some devices), where you can delete
                or reset your advertising ID and opt out of ads
                personalization.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Data Retention and Deletion
              </h3>
              <p className="mb-4">
                Because all game data is stored locally, uninstalling the app
                permanently deletes your progress, scores, and settings. We
                hold no copy of this data. Data collected by Google for
                advertising is retained according to Google&apos;s retention
                policies linked above.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Children&apos;s Privacy
              </h3>
              <p className="mb-4">
                Classic Snake is not directed at children under 13, and the
                app is intended for users aged 13 and older. We do not
                knowingly collect personal information from children under 13.
                If you believe a child under 13 has provided personal
                information through the app, contact us at {CONTACT_EMAIL} and
                we will take appropriate steps to address it.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Your Rights
              </h3>
              <p className="mb-4">
                Depending on where you live, you may have rights to access,
                correct, or delete personal data, or to object to or restrict
                its processing (for example, under the GDPR or CCPA). Since we
                do not hold personal data ourselves, requests concerning
                advertising data are best directed to Google via the links
                above — but you can always contact us at {CONTACT_EMAIL} and
                we will help where we can.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Changes to This Policy
              </h3>
              <p className="mb-4">
                We may update this Privacy Policy from time to time, for
                example if the app&apos;s features or third-party services
                change. Updates will be posted on this page with a revised
                &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Contact Us
              </h3>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or the
                app&apos;s data practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Email: {CONTACT_EMAIL}</p>
              </div>
            </section>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-4">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Classic Snake. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
