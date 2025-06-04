// RoleForm.js
import React, { useState } from 'react';
import axios from 'axios';
import adminServices from '@/services/admin';

const RoleForm = () => {
  const [roleName, setRoleName] = useState('');

  const handleRoleSubmit = async () => {
        try {
      // Make a POST request to add the role
      adminServices.Insert_Roles(roleName).then(res => {
        console.log('Role added:', res.data);
        })
       // Handle success, update UI, etc.
    } catch (error) {
      console.error('Error adding role:', error.message);
      // Handle errors
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center max-w-2xl">
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
      <h2 className="text-2xl font-bold mb-4">Add Role</h2>
      <div className="mb-4">
        <label htmlFor="roleName" className="block text-gray-700 text-sm font-bold mb-2">
          Role Name:
        </label>
        <input
          type="text"
          id="roleName"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleRoleSubmit}
        className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Add Role
      </button>
    </div>
  </div>

  );
};

export default RoleForm;
