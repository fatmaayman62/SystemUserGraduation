import { Button, Input, Textarea } from "@heroui/react";
import React from "react";

export default function ContactUs() {
    return (
        <div className="min-h-screen flex items-center justify-center sm:p-6 p-2">
            <div className="text-slate-900 border-gary-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 shadow-xl rounded-2xl p-8 max-w-lg w-full">
                <h1 className="sm:text-2xl text-xl font-bold mb-4 text-center">Contact Us</h1>
                <p className="text-center text-gray-600 mb-6  sm:text-[16px] text-[14px]">
                    Feel free to reach out to us anytime.
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <Input
                            type="text"
                            variant="underlined"
                            placeholder="Enter your name"
                        />

                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <Input
                            type="email"
                            variant="underlined"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <Textarea
                            rows="4"
                            variant="underlined"
                            placeholder="Write your message..."
                        ></Textarea>
                    </div>

                    <Button className="w-full sm:text-[16px] text-[14px]" color="primary"> Send Message</Button>
                </form>
            </div>
        </div>
    );
}
