'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
    username: z
        .string()
        .min(3, { message: 'Username must be at least 3 characters!' })
        .max(20, { message: "Username must be at most 20 characters!" }),
    email: z.email({ message: "Invalid email address!" }),
    password: z
        .string()
        .min(9, { message: "Password must be at least 8 characters long!" }),
    firstName: z.string().min(1, { message: 'First name is required!' }),
    lastName: z.string().min(1, { message: 'Lasr name is required!' }),
    phone: z.string().min(1, { message: 'Phone is required!' }),
    address: z.string().min(1, { message: 'Address is required!' }),
});

type Inputs = z.infer<typeof schema>;

const ParentForm = ({ type, data }: {
    type: "create" | "update";
    data?: any;
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema)
    });

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">Create new parent</h1>
            <span className="text-xs text-gray-500 font-medium">Authentication Information</span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="Username"
                    name="username"
                    defaultValue={data?.username}
                    register={register}
                    error={errors?.username}
                />
                <InputField
                    label="Email"
                    name="email"
                    defaultValue={data?.email}
                    type="email"
                    register={register}
                    error={errors?.email}
                />
                <InputField
                    label="Password"
                    name="password"
                    defaultValue={data?.password}
                    type="password"
                    register={register}
                    error={errors?.password}
                />
            </div>
            <span className="text-xs text-gray-500 font-medium">Personal Information</span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="First Name"
                    name="firstName"
                    defaultValue={data?.firstName}
                    register={register}
                    error={errors?.firstName}
                />
                <InputField
                    label="Last Name"
                    name="lastName"
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors?.lastName}
                />
                <InputField
                    label="Phone"
                    name="phone"
                    defaultValue={data?.phone}
                    register={register}
                    error={errors?.phone}
                />
                <InputField
                    label="Address"
                    name="address"
                    defaultValue={data?.address}
                    register={register}
                    error={errors?.address}
                />
            </div>
            <button className="bg-blue-400 text-white p-2 rounded-md">{type === 'create' ? "Create" : "Update"}</button>
        </form>
    )
}

export default ParentForm
