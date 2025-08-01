
// File: pages/privacy.js
import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – Hope Pop</title>
        <meta name="description" content="Privacy Policy for Hope Pop Match-3 Game – data collection, usage, and child-directed ad settings." />
      </Head>
      <main className="prose prose-lg mx-auto py-10 px-4 max-w-3xl">
        <h1>Privacy Policy</h1>

        <p><strong>App Name:</strong> Hope Pop – Match-3 Game</p>
        <p><strong>Developer:</strong><br />
   Eylül Şahin<br />
   San Francisco, California<br />
   Email: <a href="mailto:hopepop.info@gmail.com">hopepop.info@gmail.com</a>
</p>

        <h2>1. Data Collected</h2>
        <h3>1. Ad Data</h3>
        <ul>
          <li>Device information automatically collected via the Google AdMob SDK:</li>
          <ul>
            <li>IP address (anonymized for geolocation)</li>
            <li>Device model and operating system version</li>
            <li>Ad unit ID and impression/click statistics</li>
          </ul>
          <li><em>Non-personalized</em> ad request data (<code>nonPersonalizedAds: true</code>) ensures no user profiling.</li>
        </ul>
        

        <h2>2. Purpose of Processing</h2>
        <ul>
          <li><strong>Ad Revenue Management:</strong> To maintain the app free of charge by collecting and reporting ad revenue from AdMob.</li>
          <li><strong>Donation Tracking:</strong> To monitor the count and timing of user donations within the app.</li>
        </ul>

        <h2>3. Child-Directed Policy</h2>
        <ul>
          <li>The app is designed for users aged <strong>9 and above</strong>.</li>
          <li><em>Personalized ads</em> are not shown; only general audience (<code>MaxAdContentRating = G</code>) ads are used.</li>
          <li>The app is COPPA compliant: only non-personalized ads are shown.</li>
        </ul>

        <h2>4. Third-Party Service Providers</h2>
        <ul>
          <li><strong>Google AdMob</strong><br />
              Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
          </li>
          <li><strong>URL Launcher</strong><br />
              Used solely to open the donation link. This package does not collect user data.
          </li>
        </ul>

        <h2>5. Data Retention</h2>
        <ul>
    
          <li><strong>Ad data:</strong> Subject to Google AdMob’s retention policies in accordance with Google’s privacy guidelines.</li>
        </ul>

        

        <h2>6. Policy Updates</h2>
        <p>This Privacy Policy may be updated to reflect new features or legal requirements. Changes will be posted here with an updated <em>Effective Date</em>.</p>
        <p><strong>Effective Date:</strong> July 6, 2025</p>
      </main>
    </>
  );
}
