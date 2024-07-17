import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ROOM_STATUS_CLASS_MAP, ROOM_STATUS_TEXT_MAP } from "@/constants.jsx";
import { Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
// import { Route } from "@inertiajs/react";

export default function Index({ auth, rooms }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Room
                </h2>
            }
        >
            <Head title="Equipment" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-grya-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">Name</th>
                                        <th className="px-3 py-2">Type</th>
                                        <th className="px-3 py-2">Status</th>
                                        <th className="px-3 py-2 text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rooms.data.map((room) => (
                                        <tr
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            key={room.id}
                                        >
                                            <td className="px-3 py-2">
                                                {room.id}
                                            </td>
                                            <td className="px-3 py-2">
                                                {room.name}
                                            </td>
                                            <td className="px-3 py-2">
                                                {room.type}
                                            </td>
                                            <td className="px-3 py-2">
                                                <span
                                                    className={
                                                        "px-2 py-1 rounded text-white " +
                                                        ROOM_STATUS_CLASS_MAP[
                                                            room.status
                                                        ]
                                                    }
                                                >
                                                    {
                                                        ROOM_STATUS_TEXT_MAP[
                                                            room.status
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-3 py-2 text-right">
                                                <Link
                                                    href={route(
                                                        "equipment.edit",
                                                        {
                                                            id: room.id,
                                                        }
                                                    )}
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "equipment.destroy",
                                                        {
                                                            id: room.id,
                                                        }
                                                    )}
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={rooms.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
