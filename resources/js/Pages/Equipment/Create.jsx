import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        status: "",
        description: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("equipment.store"));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Add new Equipment
                    </h2>
                </div>
            }
        >
            <Head title="Equipment" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form
                        onSubmit={onSubmit}
                        className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                    >
                        <div>
                            <InputLabel
                                htmlFor="equipment_name"
                                value="Equipment Name"
                            />
                            <TextInput
                                id="equipment_name"
                                type="text"
                                value={data.name}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="equipment_description"
                                value="Equipment Description"
                            />
                            <TextAreaInput
                                id="equipment_description"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="equipment_status"
                                value="Equipment Status"
                            />

                            <SelectInput
                                id="equipment_status"
                                name="status"
                                value={data.status}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                            >
                                <option value="">Select Status</option>
                                <option value="unavailble">Unavailble</option>
                                <option value="available">Available</option>
                            </SelectInput>

                            <InputError
                                message={errors.equipment_status}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4 text-right">
                            <Link
                                href={route("equipment.index")}
                                className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                            >
                                Cancel
                            </Link>
                            <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
