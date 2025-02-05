import { Head, Link } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';


export default function Welcome({  }) {
    

    return (
        <>
        <NavLink></NavLink>
        <h1 className="text-5xl font-bold mb-4">My Wardrobe</h1>
        <div className='rid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <img src={clothes.image_url}
                
            />
            <h3>{clothes.name}</h3>
        </div>
        
        </>
    );
}
