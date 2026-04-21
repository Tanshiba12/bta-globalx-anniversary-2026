import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 border-t border-white/10 z-30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/50">
        <h3 className="font-cinzel text-3xl font-bold tracking-[0.2em] text-white">BTA <span className="text-yellow-500">GLOBALX</span></h3>
        <p className="mt-4 font-playfair italic max-w-2xl mx-auto">
          Celebrating a legacy of excellence. Recognizing the visionaries, entrepreneurs, and leaders of tomorrow.
        </p>

        <div className="flex justify-center space-x-6 mt-8 font-mono text-sm tracking-wider">
          <Link href="/register" className="hover:text-yellow-500 transition-colors">RSVP</Link>
          <Link href="/updates" className="hover:text-yellow-500 transition-colors">UPDATES</Link>
          <Link href="/admin" className="hover:text-yellow-500 transition-colors">ADMIN</Link>
        </div>

        <p className="mt-10 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} BTA GLOBALX ANNIVERSARY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}