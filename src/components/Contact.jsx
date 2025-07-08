import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion"; // ✅ animation

function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post("https://getform.io/f/aqomloqa", data);
      toast.success("Your message has been sent ✅");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-3">📬 Contact Me</h1>
        <p className="text-gray-600">Please fill out the form below to get in touch.</p>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-100 w-full max-w-md px-8 py-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">Send Your Message</h2>

          {/* Name */}
          <div className="mb-4">
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className={`w-full mt-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 ring-red-300" : "focus:ring-green-300"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              className={`w-full mt-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 ring-red-300" : "focus:ring-green-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className={`w-full mt-1 border px-3 py-2 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 ${
                errors.message ? "border-red-500 ring-red-300" : "focus:ring-green-300"
              }`}
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-2 mt-2 rounded-lg text-white font-semibold ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black hover:bg-gray-800 transition duration-300"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
