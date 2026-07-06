
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-ink gap-4 font-mono">
      <h1 className="text-4xl font-bold text-teal">404</h1>
      <p className="text-inkSoft">Page not found.</p>
      <Link to="/" className="text-teal underline">
        Back home
      </Link>
    </div>
  );
}
