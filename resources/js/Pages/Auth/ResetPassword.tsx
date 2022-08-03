import React, { FormEvent, useEffect } from 'react';
import route from 'ziggy-js';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';

interface PropsResetPassword {
    token: string;
    email: string;
}

const ResetPassword: React.FC<PropsResetPassword> = (props) => {
    // destruct props
    const { token, email } = props;

    // useForm Inertia shape properties and set default value
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    // use effect in initial make sure reset input password & password confirmation when back or etc
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    // handle change input
    const onHandleChange = (event: any) => {
        setData(event.target.name, event.target.value);
    };

    // handle submit form
    const submit = (e: FormEvent) => {
        e.preventDefault();

        post(route('password.update'));
    };

    // return main component
    return (
        <Guest>
            <Head title="Reset Password" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password_confirmation" value="Confirm Password" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Reset Password
                    </Button>
                </div>
            </form>
        </Guest>
    );
}

export default ResetPassword;