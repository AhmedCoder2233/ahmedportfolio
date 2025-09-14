import React from "react";

export default function Footer() {
  return (
<footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-6 text-center">
  <p className="text-sm">
    © {new Date().getFullYear()} Ahmed Memon. All rights reserved.
  </p>
  <div className="mt-2 flex justify-center space-x-6">
    <a href="mailto:ahmedmemon3344@gmail.com" className="hover:underline">
      Email
    </a>
    <a
      href="https://wa.me/923368952826"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      WhatsApp
    </a>
    <a
      href="https://www.google.com/maps/place/Karachi,+Pakistan"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Location
    </a>
  </div>
</footer>

  );
}
