import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({ id: "", nombre: "", gmail: "" });
  const [dataList, setDataList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedDataList = dataList.map((item, index) =>
        index === editIndex ? formData : item
      );
      setDataList(updatedDataList);
      setEditIndex(null);
    } else {
      setDataList([...dataList, formData]);
    }
    setFormData({ id: "", nombre: "", gmail: "" });
  };

  const handleEdit = (index) => {
    setFormData(dataList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedDataList = dataList.filter((_, i) => i !== index);
    setDataList(updatedDataList);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          DATOS PARA GUARDAR
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">ID:</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Gmail:</label>
            <input
              type="email"
              name="gmail"
              value={formData.gmail}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            {editIndex !== null ? "Editar" : "Agregar"}
          </button>
        </form>

        <h3 className="text-xl font-semibold mt-8 mb-4">Lista de Datos</h3>
        <ul className="space-y-2">
          {dataList.map((data, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded"
            >
              <span>
                {data.id} - {data.nombre} - {data.gmail}
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition duration-300"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Formulario;
