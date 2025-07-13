import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hope Pop</title>
        <meta name="description" content="Hope Pop – A simple Match-3 game." />
      </Head>
      <div className="h-screen bg-[#8bd7d54] flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-extrabold text-pink-700">Hope Pop</h1>
        <p className="mt-4 text-xl text-pink-800">Pop, match, and hope for the best!</p>
        <Link href="/privacy-policy">
          <p className="mt-8 inline-block bg-white text-pink-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-pink-50 transition">
            Privacy Policy
          </p>
        </Link>
      </div>
    </>
  );
}