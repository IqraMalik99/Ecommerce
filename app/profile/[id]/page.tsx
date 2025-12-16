"use client";

import React, { useRef, useState } from "react";
import { Camera, Trash2 } from "lucide-react";
import Image from "next/image";
export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    username: "John Doe",
    email: "johndoe@example.com",
    role: "user",
    avatar: "https://source.unsplash.com/200x200/?portrait,face",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const lastUpdated = new Date().toISOString().split("T")[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved profile:", profile);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete your account?")) {
      alert("Account deleted (demo).");
    }
  };

  const openFilePicker = () => fileInputRef.current?.click();

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("file",file);
    
    if (!file) return;
    const blobUrl = URL.createObjectURL(file);
     console.log("file",blobUrl);
    setProfile((prev) => ({ ...prev, avatar: blobUrl }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-slate-100 p-6">
      <div className="w-full max-w-md mx-auto">
        <div className="backdrop-blur-xl bg-white/50 border border-white/60 shadow-2xl rounded-2xl p-8 flex flex-col items-center gap-6">
          
          {/* Avatar */}
          <div className="relative group">
            <Image
              src={profile.avatar}
              alt="Profile avatar"
              className="w-[150px] h-[150px] rounded-full border-4 border-white shadow-lg object-cover ring-2 ring-gray-300 group-hover:ring-gray-500 transition"
            />
            <button
              type="button"
              onClick={openFilePicker}
              className="absolute inset-0 rounded-full flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition"
            >
              <Camera className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>

          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-black">Profile Settings</h1>
            <p className="text-sm text-gray-700">Manage your account details</p>
          </div>

          {/* Form */}
          <form className="w-full space-y-4">
            <div>
              <label className="block text-sm font-medium text-black">Username</label>
              <input
                name="username"
                value={profile.username}
                onChange={handleChange}
                disabled={!isEditing}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm transition ${
                  isEditing
                    ? "bg-white focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
                    : "bg-gray-100 cursor-not-allowed"
                } text-black`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Email</label>
              <input
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm transition ${
                  isEditing
                    ? "bg-white focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
                    : "bg-gray-100 cursor-not-allowed"
                } text-black`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Role</label>
              <select
                name="role"
                value={profile.role}
                onChange={handleChange}
                disabled={!isEditing}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm transition ${
                  isEditing
                    ? "bg-white focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
                    : "bg-gray-100 cursor-not-allowed"
                } text-black`}
              >
                <option value="user">User</option>
                <option value="seller">Seller</option>
              </select>
            </div>
          </form>

          {/* Buttons */}
          <div className="flex justify-between gap-4 w-full pt-4">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 rounded-xl border border-gray-400 text-black hover:bg-gray-100 transition font-medium w-1/2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-white shadow-md hover:shadow-lg transition font-medium w-1/2"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r bg-gray-400 hover:bg-gray-500 text-white shadow-md hover:shadow-lg transition font-medium w-full"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Danger Zone */}
          <div className="w-full pt-6 border-t border-gray-300/60">
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white shadow-md hover:shadow-lg transition font-medium w-full justify-center"
            >
              <Trash2 className="w-5 h-5" />
              Delete Account
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
