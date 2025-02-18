import { Link } from "@inertiajs/react";
import Button from "@/components/PrimaryButton";
import { UserCircle } from "lucide-react";

export default function Layout({ children, isAuth,active }) {
  const isActive =(page) => (active===page ? "text-purple-600":"");
  return (
    <div className="flex flex-col min-h-screen">
      
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href={isAuth ? route('home'):route('/')} className="text-3xl font-bold">
            FIT<span className="text-purple-600">P</span>ICKER
          </Link>
          <nav className="flex items-center space-x-4">
            {isAuth ? (
              <>
                <Button variant="ghost"  className="hover:text-purple-600" asChild>
                  <Link className={isActive("home")} href={route('home')}>Home</Link>
                </Button>
                <Button variant="ghost" className="hover:text-purple-600" asChild>
                  <Link className={isActive("Wardrobe")} href={route('wardrobe')}>My Wardrobe</Link>
                </Button>
                <Button variant="ghost" className="hover:text-purple-600" asChild>
                  <Link className={isActive("create_outfit")} href={route('CreateOutfit')}>Create Outfit</Link>
                </Button>
                <Button variant="ghost" className="hover:text-purple-600" asChild>
                  <Link className={isActive("profile")} href="profile.edit">
                    <UserCircle className="mr-2" />
                    Account
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" className="hover:text-purple-600" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </header>

      
      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>
    </div>
  );
}
