import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="text-center mb-8">
        <h1 className="text-white text-4xl font-bold mb-4">Welcome to Strings</h1>
        <p className="text-white text-lg">The best place to manage your music collection.</p>
      </div>
      
      <div className="flex flex-row space-x-4">
        <Link className="px-6 py-2 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:bg-blue-100 transition"
        href="/signin">
          Sign In
        </Link>
        <Link className="px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition"
        href="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
