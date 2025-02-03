import Link from "next/link";

export default function Navbar() {
  return (

    <nav className="w-full p-4  flex items-center" style={{
        padding: "10px 20px",
        width: "100%",
        borderBottom: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "#000",
      }}>
      <Link href="/" className="text-lg font-semibold">
        ← Back to Listings
      </Link>
    </nav>
  );
}
