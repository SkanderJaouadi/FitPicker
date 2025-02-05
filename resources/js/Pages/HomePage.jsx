
import Layout from '@/Layouts/Layout';
import { Head, usePage } from '@inertiajs/react';
import OutfitPreview from '@/Components/OutfitPreview';

export default function HomePage() {
    const {props}=usePage();
    const {isAuthenticated, outfits}=props;
    return (
        <Layout isAuth={true}>
            <Head title="Home" />
            
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg ">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
