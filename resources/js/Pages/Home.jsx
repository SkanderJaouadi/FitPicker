/*import { Button } from "@/components/ui/button"
import { Save, Star } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react";


export default function Home() {

  const [outfits, setOutfits] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/account/{id}")
      .then((res) => res.json())
      .then((data) => setOutfits(data))
      .catch((err) => console.error("Error fetching account:", err));
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Saved Outfits</h1>
        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
          <Link href="/create-outfit">Create New Outfit</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outfits.map((outfit) => (
          <div key={outfit.id} className="bg-white p-6 rounded-lg shadow">
            <div className="bg-gray-200 h-64 rounded-md mb-4 flex items-center justify-center"><img src={outfit.image_url}/></div>
            <h2 className="text-xl font-semibold mb-2">{outfit.name}</h2>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Created on: {outfit.created_at}</p>
              <Button variant="outline" size="sm" className="text-purple-600 hover:bg-purple-100">
                <Star className="mr-2 h-4 w-4" /> Favorite
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}*/

