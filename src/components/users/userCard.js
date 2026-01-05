import {formatDate} from "../../utils/formDate";

function UserCard({ name, email, createdAt }: Props) {
    return (
        <div className="border p-4 rounded shadow-md mb-2">
            <h3 className="font-bold">{name}</h3>
            <p>{email}</p>
            <p className="text-sm text-gray-500">Created: {formatDate(createdAt)}</p>
        </div>
    );
}

export default UserCard;
