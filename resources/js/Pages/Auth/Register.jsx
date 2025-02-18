import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Layout from '@/Layouts/Layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { User as UserIcon, Calendar as CalendarIcon } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import React from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        date_of_birth: '',
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
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Join FIT<span className="text-purple-600">P</span>ICKER</h2>
                        <p className="mt-2 text-sm text-gray-600">Create your account and start your style journey</p>
                    </div>

                    <form className="mt-8 space-y-4" onSubmit={submit}>
                        <div className="space-y-4">
                            <div>
                                <InputLabel htmlFor="last_name" className="sr-only">
                                    Last Name
                                </InputLabel>
                                <TextInput
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    value={data.last_name}
                                    autoComplete="family-name"
                                    required
                                    className="w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="Last Name"
                                    onChange={(e) => setData('last_name', e.target.value)}
                                />
                                <InputError message={errors.last_name} className="mt-1" />
                            </div>

                            <div>
                                <InputLabel htmlFor="first_name" className="sr-only">
                                    First Name
                                </InputLabel>
                                <TextInput
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    value={data.first_name}
                                    autoComplete="given-name"
                                    required
                                    className="w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="First Name"
                                    onChange={(e) => setData('first_name', e.target.value)}
                                />
                                <InputError message={errors.first_name} className="mt-1" />
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
                                    className="w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-1" />
                            </div>

                            
                            <div className="relative">
                                <InputLabel htmlFor="date_of_birth" className="sr-only">
                                    Date of Birth
                                </InputLabel>
                               
                                <DatePicker
                                    selected={data.date_of_birth ? new Date(data.date_of_birth) : null}
                                    onChange={(date) => setData('date_of_birth', date ? date.toISOString().split('T')[0] : '')}
                                    dateFormat="yyyy-MM-dd"
                                    isClearable
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                    className="w-full rounded-md pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholderText="Select Date of Birth"
                                />
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    
                                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20}  aria-hidden="true"/>
                                </span>
                                <InputError message={errors.date_of_birth} className="mt-1" />
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
                                    className="w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="Password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-1" />
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
                                    className="w-full rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="Confirm Password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />
                                <InputError message={errors.password_confirmation} className="mt-1" />
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
