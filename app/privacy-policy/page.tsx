/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Last Updated: {new Date().toLocaleDateString()}
              </h2>
              
              <p className="mb-4">
                Welcome to Snake Game. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile game.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Information We Don't Collect
              </h3>
              <p className="mb-4">
                Our game is designed with privacy in mind. We do not collect any personal information, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Personal identification information</li>
                <li>Email addresses</li>
                <li>Phone numbers</li>
                <li>Location data</li>
                <li>Device information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Game Data Storage
              </h3>
              <p className="mb-4">
                All game data, including scores and progress, is stored locally on your device. We do not upload or store any of your game data on our servers.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Analytics
              </h3>
              <p className="mb-4">
                We use basic analytics tools to understand game performance and improve user experience. This data is anonymous and cannot be used to identify individual users. Analytics may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Game completion rates</li>
                <li>Level progression statistics</li>
                <li>Feature usage patterns</li>
                <li>App performance metrics</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Children's Privacy
              </h3>
              <p className="mb-4">
                Our game is suitable for all ages. We do not knowingly collect any personal information from children under 13 years of age.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Changes to This Policy
              </h3>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Third-Party Services
              </h3>
              <p className="mb-4">
                Our game does not include any third-party services that collect user data. All functionality is self-contained within the app.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Your Rights
              </h3>
              <p className="mb-4">
                Since we don't collect personal data, there is no personal information to access, modify, or delete. Game data stored locally on your device can be removed by uninstalling the app.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Contact Us
              </h3>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Email: techtool269@gmail.com</p>
              </div>
            </section>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-4">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Snake Game. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;