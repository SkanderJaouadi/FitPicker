import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({  }) {
    

    return (
        <Layout isAuth={true}>
            <Head title="Wardrobe" />
        </Layout>
    );
}
