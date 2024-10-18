import { QRCodeCanvas } from "qrcode.react";
import React, { useState, useEffect } from "react";

const QrCodeGenerator = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Replace with your backend API call
  useEffect(() => {
    // Simulating fetching data from backend
    const fetchUserData = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch(
          "https://67101f96a85f4164ef2d24ee.mockapi.io/api/getUserData"
        );
        const data = await response.json();
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  // Base URL for QR code
  const baseUrl = "http://localhost:3000/user-token";

  // If user data is available, construct the URL with userId
  const qrUrl = userData
    ? `${baseUrl}?userid=${userData.userid}`
    : "";;

  if (isLoading)
    return (
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-700 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-700 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center bg-slate-100 rounded-lg shadow-md p-6 max-w-lg mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-6">User QR Code</h2>
      {userData ? (
        <>
          {/* Centered and responsive QR code */}
          <div className="flex justify-center mb-6">
            <QRCodeCanvas value={qrUrl} size={256} />
          </div>
          <p className="text-center text-lg">
            Scan the QR code to fill and submit the rest of the fields.
          </p>
        </>
      ) : (
        <p>Error: Could not load user data.</p>
      )}
    </div>
  );
};

export default QrCodeGenerator;
