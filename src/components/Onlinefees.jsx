import React from "react";
import qrCodeImage from "../assets/qr-code.jpeg"; // Replace with your actual image path

const OnlineFees = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Top Section: QR Code Image */}
      <div className="mb-8">
        <img
          src={qrCodeImage}
          alt="QR Code"
          className="w-96 h-96 md:w-128 md:h-128 lg:w-160 lg:h-160"
        />
      </div>

      {/* Bottom Section: Text */}
      <div className="flex items-center justify-center">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          Scan this to pay Through Any UPI app.
        </p>
      </div>
    </div>
  );
};

export default OnlineFees;
