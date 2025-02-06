import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { PlusCircle, Trash2 } from "lucide-react";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import Button from "@/Components/PrimaryButton";

const Wardrobe = () => {
    const [images, setImages] = useState([]); // Store uploaded images

    // Handle file drop
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                setImages((prev) => [...prev, reader.result]); // Add image to the grid
            };
            reader.readAsDataURL(file);
        });
    }, []);

    // Remove image from grid
    const removeImage = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <Layout isAuth={true}>
        <Head title="Wardrobe"/>
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">My Wardrobe</h1>

            {/* Drop Zone */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <Dropzone onDrop={onDrop} />

                {/* Grid for uploaded images */}
                {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={image}
                                    alt="Clothing Item"
                                    className="w-full h-40 object-cover rounded-md shadow-md"
                                />
                                <button
                                    onClick={() => removeImage(index)}
                                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                       
                    </div>
                    
                )}
                 <Button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white">Submit</Button>
            </div>
        </div>
        </Layout>
    );
};

// Dropzone Component
const Dropzone = ({ onDrop }) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*",
    });

    return (
        <div
            {...getRootProps()}
            className="bg-gray-200 h-48 rounded-md flex flex-col items-center justify-center hover:bg-gray-300 transition cursor-pointer border border-dashed border-gray-400 text-center p-4"
        >
            <input {...getInputProps()} />
            <PlusCircle className="text-purple-600 w-12 h-12 mb-2" />
            <p className="text-gray-600 font-medium">Drag & Drop Images Here</p>
        </div>
    );
};

export default Wardrobe;
