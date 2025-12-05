"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchUsers, addUser } from "@/redux/Slice/UserSlice";

function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(addUser(formData));
    setFormData({ name: "", email: "" });
    setShowForm(false);
  };

  return (
    <div className="w-full h-screen mt-16 p-4">
      <h2 className="text-xl font-bold mb-3">User List</h2>

      {loading && <p>Loading...</p>}

      {/* User List */}
      <div className="border p-3 rounded">
        {users.map((user) => (
          <div key={user.id} className="flex justify-between border-b py-2">
            <span>{user.name}</span>
            <span>{user.email}</span>
          </div>
        ))}
      </div>

      {/* Add User Button */}
      <button
        onClick={() => setShowForm(true)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add User
      </button>

      {/* Form Row */}
      {showForm && (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Name"
              className="border px-2 py-1"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="border px-2 py-1"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
