import React, { FormEvent } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';

interface PropsForgotPassword {
    status: string
}

const ForgotPassword: React.FC<PropsForgotPassword> = (props) => {
    // destruct props
    const { status } = props;

    // useForm Inertia shape properties and set default value
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    // handle change input
    const onHandleChange = (event: any) => {
        setData(event.target.name, event.target.value);
    };

    // handle submit form
    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/forgot-password');
    };

    // return main component
    return (
        <Guest>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-500 leading-normal">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {props.status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </Guest>
    );
}

export default ForgotPassword;