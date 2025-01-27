import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Layout from '@/Layouts/Layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { User as UserIcon } from 'lucide-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <Layout>
            <Head title="Register" />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                    <div className="text-center">
                        
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Join FITPICKER</h2>
                        <p className="mt-2 text-sm text-gray-600">Create your account and start your style journey</p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={submit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <InputLabel htmlFor="name" className="sr-only">
                                    Full Name
                                </InputLabel>
                                <TextInput
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={data.name}
                                    autoComplete="name"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Full Name"
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="email" className="sr-only">
                                    Email address
                                </InputLabel>
                                <TextInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="password" className="sr-only">
                                    Password
                                </InputLabel>
                                <TextInput
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={data.password}
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="password_confirmation" className="sr-only">
                                    Confirm Password
                                </InputLabel>
                                <TextInput
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    value={data.password_confirmation}
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Confirm Password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>
                        </div>

                        <div>
                            <PrimaryButton
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                disabled={processing}
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <UserIcon className="h-5 w-5 text-purple-500 group-hover:text-purple-400" aria-hidden="true" />
                                </span>
                                Sign up
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="text-center">
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link href={route('login')} className="font-medium text-purple-600 hover:text-purple-500">
                                Log in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
