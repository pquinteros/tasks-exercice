export default function UserCard({ user, children }) {
    return (
    <div className="border p-4 rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold">{user.fullName}</h2>
      <p className="text-gray-600">{user.email}</p>
      <div className="mt-4">
        {children}
      </div>
    </div>
    );
}