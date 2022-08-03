import React, { FormEvent, useEffect } from 'react';
import route from 'ziggy-js';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';


const ConfirmPassword = () => {
    // useForm Inertia shape properties and set default value
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    // use effect in initial make sure reset input password when back or etc
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    // handle change input
    const onHandleChange = (event: any) => {
        setData(event.target.name, event.target.value);
    };

    // handle submit form
    const submit = (e: FormEvent) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    // return main component
    return (
        <Guest>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Confirm
                    </Button>
                </div>
            </form>
        </Guest>
    );
}

export default ConfirmPassword;