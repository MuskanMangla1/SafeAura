import React , { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Check } from "lucide-react";

const SignUp = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start px-4 py-6 sm:px-8 gap-8 m-8">
      {/* Form Section */}
      <form
        
        className="shadow-2xl p-6 w-full bg-white rounded-lg flex-grow transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
      >
        <h1 className="font-bold text-2xl py-2 text-neutral-800">Signup to SafeAura</h1>
        <div className="my-2">
            <label htmlFor="firstname">Username : </label>
            <input type="text" name="firstname" id=""  
              className="border border-gray-300 my-2 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-100 focus:outline-none hover:border-red-300 transition"
            />
          </div>
        <div className="my-2">
            <label htmlFor="email">Email : </label>
            <input type="text" name="email" 
              className="border border-gray-300 my-2 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-100 focus:outline-none hover:border-red-300 transition"/>
        </div>
        <div className="my-2">
            <label htmlFor="email">Phone Number : </label>
            <input type="number" name="phonenumber"
              className="border border-gray-300 my-2 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-100 focus:outline-none hover:border-red-300 transition"/>
        </div>
        <div className="my-2"> 
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" 
              className="border border-gray-300 my-2 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-100 focus:outline-none hover:border-red-300 transition"/>  
        </div>
        <div className="my-2">
            <label htmlFor="confirmpassword">Confirm Password : </label>
            <input type="password" name="confirmpassword" 
              className="border border-gray-300 my-2 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-100 focus:outline-none hover:border-red-300 transition"/>
        </div>
        <div className="mt-2">
            <label htmlFor="country">Country :</label>
            <select name="country" className="border border-gray-300 my-2 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-100 focus:outline-none hover:border-red-300 transition" id="">
                <option value="India">India</option>
            </select>
        </div>
        <button
          className="bg-red-300 text-white rounded-md px-4 py-3 w-full font-bold mt-4 hover:bg-red-400 transition duration-300 transform hover:scale-105 shadow-md"
        >
          Send Message
        </button>
      </form>

      {/* Why Choose Us Section */}
      <div className="bg-neutral-900 text-white rounded-lg w-full p-6 flex-grow shadow-2xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>

        <div className="space-y-4">
          {[
            { title: "Expert Designers", text: "Experienced professionals with proven track records." },
            { title: "3D Visualization", text: "See your space come to life before the work begins." },
            { title: "Tailored Solutions", text: "Custom designs that match your style and budget." },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start transition duration-300 hover:bg-neutral-800 p-4 rounded-lg cursor-pointer"
            >
              <Check size={24} className="text-yellow-600 mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-400 py-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        <div className="bg-neutral-800 mt-6 p-5 rounded-lg transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
          <h2 className="text-xl font-bold">Business Hours</h2>
          <div className="flex justify-between text-gray-400 mt-3">
            <div>
              <p className="py-2">Monday - Friday</p>
              <p className="py-2">Saturday</p>
              <p className="py-2">Sunday</p>
            </div>
            <div>
              <p className="py-2">9:00 AM - 6:00 PM</p>
              <p className="py-2">10:00 AM - 4:00 PM</p>
              <p className="py-2">Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
