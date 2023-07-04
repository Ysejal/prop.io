import { Inter } from "next/font/google";
import Link from "next/link";



export default function Home() {
  return (
    <main className="flex flex-col">
      <Link href="/add">Add property</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/map">Map</Link>
    </main>
  );
}

