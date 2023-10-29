import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
            <p className="text-gray-700 mb-8 text-center">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <img src="/404.png" alt="404" className="max-w-md h-md mb-8" />
            <Link to="/" className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Go Back Home</Link>
        </div>
    );
}
