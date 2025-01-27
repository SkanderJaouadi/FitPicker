import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Layout from '@/Layouts/Layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Lock } from 'lucide-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <Layout>
            <Head title="Log in" />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                    <div className="text-center">
                       
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Welcome back to FIT<span className="text-purple-600">P</span>ICKER
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Log in to access your AI-powered wardrobe
                        </p>
                    </div>

                    

                    <form className="mt-8 space-y-6" onSubmit={submit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <InputLabel htmlFor="email" value="Email" className="sr-only" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    autoComplete="username"
                                    isFocused={true}
                                    placeholder="Email address"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="password" value="Password" className="sr-only" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                />
                                <InputLabel
                                    htmlFor="remember"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </InputLabel>
                            </div>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm font-medium text-purple-600 hover:text-purple-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>

                        <div>
                            <PrimaryButton
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                disabled={processing}
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <Lock className="h-5 w-5 text-purple-500 group-hover:text-purple-400" />
                                </span>
                                Sign in
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="text-center">
                        <p className="mt-2 text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link href="/register" className="font-medium text-purple-600 hover:text-purple-500">
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
