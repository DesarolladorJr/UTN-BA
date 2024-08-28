import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", password: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3003/users");
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = async () => {
    await axios.put(
      `http://localhost:5000/users/${editingUser.id}`,
      editingUser
    );
    setEditingUser(null);
    fetchUsers();
  };

  const handleAdd = async () => {
    await axios.post("http://localhost:5000/users", newUser);
    setNewUser({ name: "", password: "" });
    fetchUsers();
  };

  return (
    <div>
      <h1>Admin</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Editar</button>
                <button onClick={() => handleDelete(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingUser && (
        <div>
          <h2>Editar Usuario</h2>
          <input
            type="text"
            value={editingUser.name}
            onChange={(e) =>
              setEditingUser({ ...editingUser, name: e.target.value })
            }
          />
          <input
            type="password"
            value={editingUser.password}
            onChange={(e) =>
              setEditingUser({ ...editingUser, password: e.target.value })
            }
          />
          <button onClick={handleUpdate}>Actualizar</button>
        </div>
      )}
      <div>
        <h2>Agregar Usuario</h2>
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <button onClick={handleAdd}>Agregar</button>
      </div>
    </div>
  );
};

export default Admin;
