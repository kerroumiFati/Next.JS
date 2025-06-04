// pages/add-user.js
'use client'
import React, { useState ,useEffect } from 'react';
import { Input, Button, Select } from 'react-daisyui';
import adminServices from '@/services/admin';
//import { Layout } from 'react-feather';
import Layout from '../../components/layout'

const AddUser = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobNumber: '',
    password: '',
    birthdate: '',
    department: '',
    role: '',
  });
  const [roles, setRoles] = useState([]); 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  useEffect(() => {
    // Fetch roles when the component mounts
    adminServices.Get_Roles()
      .then(res => {
        setRoles(res.data);
        console.log(res.data); // Assuming the response contains an array of roles
      })
      .catch(error => {
        console.error('Error fetching roles:' );
      });
  }, []); 
  const handleAddUser = (event) => {
    event.preventDefault(); 
    adminServices.Insert_Employer(user)
    .then(res => { console.log(res.data); })
      .catch(error => {
        console.error('Error adding user:', error);
      });
    console.log('User added:', user);
  };
 
  return (<Layout>
<div className="bg-gray-100 min-h-screen flex items-center max-w-2xl justify-center">
  <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">


        <h1 className="text-2xl font-bold mb-4">Ajouter un utilisateur</h1>
        <form onSubmit={handleAddUser}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              Prénom
            </label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              placeholder="Entrez le prénom"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              Nom
            </label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              placeholder="Entrez le nom"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Adresse e-mail
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="Entrez l'adresse e-mail"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Numéro de téléphone
            </label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleInputChange}
              placeholder="Entrez le numéro de téléphone"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="jobNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Numéro de poste
            </label>
            <Input
              type="text"
              id="jobNumber"
              name="jobNumber"
              value={user.jobNumber}
              onChange={handleInputChange}
              placeholder="Entrez le numéro de poste"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Mot de passe
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              placeholder="Entrez le mot de passe"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthdate" className="block text-gray-700 text-sm font-bold mb-2">
              Date de naissance
            </label>
            <Input
              type="date"
              id="birthdate"
              name="birthdate"
              value={user.birthdate}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">
              Service
            </label>
            <Input
              type="text"
              id="department"
              name="department"
              value={user.department}
              onChange={handleInputChange}
              placeholder="Entrez le service"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
              Rôle
            </label>
            <Select
              id="role"
              name="role"
              value={user.role}
              onChange={handleInputChange}
              className="w-full"
            >
              <option value="" disabled>
                Sélectionner le rôle
              </option>
              {roles.length > 0 && roles.map(role => (
    <option key={role.id_roles} value={role.id_roles}>
      <h1 >{role.nom_role}</h1> {/* Assuming 'nom_role' is the role name field */}
    </option>
  ))}
            </Select>
          </div>

          <Button
           type="submit" 
           // onClick={handleAddUser}
            className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Ajouter l'utilisateur
          </Button>
        </form>
      </div>
    </div></Layout>
  );
};

export default AddUser;

