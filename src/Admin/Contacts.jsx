import axios from "axios";
import { useEffect, useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  // 🔄 FETCH CONTACTS
  const fetchData = async () => {
    try {
      const res = await axios.get("https://portfolio-036e.onrender.com/api/contact");
      setContacts(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ❌ DELETE CONTACT
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://portfolio-036e.onrender.com/api/contact/${id}`);
      setContacts((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h2 className="text-2xl font-bold mb-6">📩 Contact Messages</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-800 text-left">
          
          {/* HEADER */}
          <thead className="bg-gray-900 text-gray-300">
            <tr>
              <th className="p-3 border border-gray-800">Name</th>
              <th className="p-3 border border-gray-800">Email</th>
              <th className="p-3 border border-gray-800">Message</th>
              <th className="p-3 border border-gray-800 text-center">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-b border-gray-800 hover:bg-gray-900">

                <td className="p-3">{c.name}</td>
                <td className="p-3 text-blue-400">{c.email}</td>

                <td className="p-3 max-w-xs truncate">
                  {c.message}
                </td>

                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ContactList;