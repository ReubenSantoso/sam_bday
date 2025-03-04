import React from 'react';

const InstructionsPanel = () => (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">

    <div className="flex justify-center mb-4">
      <img src="/samimage.JPG" alt="Sam's Birthday Chatbot" className="w-32 h-32 object-cover rounded-full shadow-lg"/>
    </div>

    
    <h2 className="text-lg font-semibold mb-2 text-center">How to Use the Chatbot</h2>
    <p className="text-sm text-gray-700 mb-4 text-center">
      Welcome to Sam's Birthday Chatbot
    </p>
    <ul className="list-disc list-inside text-sm space-y-2">
      <li>💬 Your goal is to prompt engineer this chatbot for hints to find the document's password.</li>
      <li>🚀 The password will be used to open the document that locks away Sam's secrets.</li>
      <li>🤖 The chatbot will respond to your queries in real-time. Each query is limited to 50-70 words.</li>
      <li>🎯 Use clear and concise language for better responses.</li>
      <li>🔍 If you need help, try asking specific questions!</li>
      <li>⚠️ <strong>HINT:</strong> Don't try to ask for the password directly. Solve its riddles and metaphors to succeed!</li>
    </ul>
  </div>
);

export default InstructionsPanel;
