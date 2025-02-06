
import React, { useState, useEffect } from "react";
import { Button } from '@/components/PrimaryButton'
import {
  ShirtIcon as Tshirt,
  PinIcon as PantsIcon,
  FootprintsIcon as ShoesIcon,
  RefreshCcw,
  Check,
  Camera,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function CreateOutfit() {
  const [selectedItems, setSelectedItems] = React.useState({
    top: null,
    bottom: null,
    shoes: null,
  })

  const [clothes, setClothes] = useState({
    tops: [],
    bottoms: [],
    shoes: [],
  });

  const handleItemSelect = (type, item) => {
    setSelectedItems((prev) => ({ ...prev, [type]: item }))
  }

  const [outfits, setOutfits] = useState([]);
    useEffect(() => {
      fetch("http://127.0.0.1:8000/select-items") 
        .then(res => res.json())
        .then(data => {
          const categorizedClothes = {
            tops: data.filter((item) => item.category === "top"),
            bottoms: data.filter((item) => item.category === "bottom"),
            shoes: data.filter((item) => item.category === "shoes"),
          };
          setClothes(categorizedClothes);
        })
      }, []);
      

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Create Your Outfit</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Tshirt className="mr-2 text-purple-600" /> Select Items
          </h2>
          <Tabs defaultValue="tops" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tops" className="flex items-center">
                <Tshirt className="mr-2 h-4 w-4" /> Tops
              </TabsTrigger>
              <TabsTrigger value="bottoms" className="flex items-center">
                <PantsIcon className="mr-2 h-4 w-4" /> Bottoms
              </TabsTrigger>
              <TabsTrigger value="shoes" className="flex items-center">
                <ShoesIcon className="mr-2 h-4 w-4" /> Shoes
              </TabsTrigger>
            </TabsList>
            {["tops", "bottoms", "shoes"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {clothes[category].map((clothingItem) => (
                    <div
                      key={clothingItem.id}
                      className={`bg-gray-100 h-32 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer ${
                        selectedItems[category.slice(0, -1)] === item ? "ring-2 ring-purple-600" : ""
                      }`}
                      onClick={() => handleItemSelect(category.slice(0, -1), clothingItem.name)}
                    >
                      <img 
                        src={clothingItem.image_url} 
                        alt={clothingItem.name} 
                        className="h-16 w-16 object-cover" 
          />
                      {category.slice(0, -1)} {clothingItem.name}
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6 flex items-center justify-between">
            <span className="flex items-center">
              <Camera className="mr-2 text-purple-600" /> Virtual Try-On
            </span>
            <Button variant="outline" className="text-purple-600 hover:bg-purple-100">
              <RefreshCcw className="mr-2 h-4 w-4" /> Get AI Recommendation
            </Button>
          </h2>
          <div className="bg-gray-100 h-96 rounded-md mb-6 flex items-center justify-center relative">
            <img
              src="/placeholder.svg?height=384&width=288"
              alt="Silhouette"
              className="absolute h-full object-contain"
            />
            {selectedItems.top && (
              <img
                src={`/placeholder.svg?height=150&width=150&text=Top${selectedItems.top}`}
                alt="Selected Top"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-36 object-contain"
              />
            )}
            {selectedItems.bottom && (
              <img
                src={`/placeholder.svg?height=200&width=150&text=Bottom${selectedItems.bottom}`}
                alt="Selected Bottom"
                className="absolute top-36 left-1/2 transform -translate-x-1/2 w-36 h-48 object-contain"
              />
            )}
            {selectedItems.shoes && (
              <img
                src={`/placeholder.svg?height=100&width=150&text=Shoes${selectedItems.shoes}`}
                alt="Selected Shoes"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-24 object-contain"
              />
            )}
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="topColor">Top Color</Label>
              <Input type="color" id="topColor" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bottomColor">Bottom Color</Label>
              <Input type="color" id="bottomColor" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shoesColor">Shoes Color</Label>
              <Input type="color" id="shoesColor" className="h-10" />
            </div>
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            <Check className="mr-2 h-4 w-4" /> Save This Outfit
          </Button>
        </div>
      </div>
    </div>
  )
}