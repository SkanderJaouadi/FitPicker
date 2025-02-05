import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';


export default function Welcome({  }) {
    

    return (
        <Layout isAuth={true}>
            <Head title="Wardrobe" />
        </Layout>
    );
}
