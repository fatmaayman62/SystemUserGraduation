import React, { useState } from "react";
import { Button, Input, Switch } from "@heroui/react";

export default function ProfilePage() {
    const [profile, setProfile] = useState({
        name: "Pharmacy Admin",
        email: "admin@pharmacy.com",
    });

    const [notifications, setNotifications] = useState(true);
    const [passwords, setPasswords] = useState({
        current: "",
        new: "",
        confirm: "",
    });

    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const handleSaveProfile = () => {
        alert("Profile saved!");
        // هنا ممكن تبعت البيانات للـ API
    };

    const handleSavePassword = () => {
        if (passwords.new !== passwords.confirm) {
            alert("Passwords do not match!");
            return;
        }
        alert("Password changed!");
        // هنا ممكن تبعت البيانات للـ API
    };

    return (
        <div className="p-6 min-h-screen max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Account</h1>

            {/* Profile Section */}
            <div className="text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-6 rounded-xl shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Profile</h2>
                <div className="flex flex-col gap-4">
                    <Input
                        label="Name"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                    />
                    <Button color="primary" onClick={handleSaveProfile}>
                        Save Profile
                    </Button>
                </div>
            </div>

            {/* Notifications Section */}
            <div className="text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-6 rounded-xl shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <Switch
                        checked={notifications}
                        onChange={() => setNotifications(!notifications)}
                    />
                </div>
            </div>

            {/* Password Section */}
            <div className="text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                <div className="flex flex-col gap-4">
                    <Input
                        label="Current Password"
                        type="password"
                        name="current"
                        value={passwords.current}
                        onChange={handlePasswordChange}
                    />
                    <Input
                        label="New Password"
                        type="password"
                        name="new"
                        value={passwords.new}
                        onChange={handlePasswordChange}
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        name="confirm"
                        value={passwords.confirm}
                        onChange={handlePasswordChange}
                    />
                    <Button color="primary" onClick={handleSavePassword}>
                        Change Password
                    </Button>
                </div>
            </div>
        </div>
    );
}
