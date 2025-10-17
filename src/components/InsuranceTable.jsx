import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InsuranceDetails from "./InsuranceDetails";
import toast from "react-hot-toast";
import axios from "axios";

export default function InsuranceTable() {
  const [policies, setPolicies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Load all policies
  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        if (!token) {
          toast.error("❌ Missing authentication token. Please log in again.");
          return;
        }

        const res = await axios.get("https://plateshieldinsurance.pythonanywhere.com/api/seguros/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        setPolicies(res.data);
        toast.success("✅ Policies loaded successfully!");
      } catch (err) {
        console.error(err);
        toast.error("❌ Error loading policies.");
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  // ✅ Load single policy when opening modal
  const handleView = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("❌ Missing authentication token. Please log in again.");
        return;
      }

      toast.loading("Fetching insurance details...");

      const res = await axios.get(`https://plateshieldinsurance.pythonanywhere.com/api/seguros/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      toast.dismiss();
      setSelected(res.data);
    } catch (err) {
      toast.dismiss();
      console.error(err);
      toast.error("❌ Failed to fetch insurance details.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-8 relative">
      <h3 className="text-2xl font-bold text-[#002d6b] mb-6 text-center sm:text-left">
        Active Insurance Policies
      </h3>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-[#002d6b] text-white">
            <tr>
              <th className="p-3 text-left text-sm sm:text-base">Policy #</th>
              <th className="p-3 text-left text-sm sm:text-base">Insured</th>
              <th className="p-3 text-left text-sm sm:text-base">Vehicle</th>
              <th className="p-3 text-left text-sm sm:text-base hidden sm:table-cell">
                Dates
              </th>
              <th className="p-3 text-center text-sm sm:text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  Loading policies...
                </td>
              </tr>
            ) : policies.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-400">
                  No active policies found.
                </td>
              </tr>
            ) : (
              policies.map((p, i) => (
                <motion.tr
                  key={p.id || i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-3 text-[#0f793c] font-semibold text-sm sm:text-base">
                    {p.numero_poliza}
                  </td>
                  <td className="p-3 text-gray-800 text-sm sm:text-base">
                    {p.nombre_asegurado}
                  </td>
                  <td className="p-3 text-gray-600 text-sm sm:text-base">
                    {p.marca} {p.modelo}
                  </td>
                  <td className="p-3 hidden sm:table-cell text-gray-500 text-sm">
                    {p.fecha_inicio} → {p.fecha_expiracion}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleView(p.id)}
                      className="px-4 py-1.5 rounded-lg text-white bg-[#0f793c] hover:bg-[#0d5f2f] text-sm sm:text-base transition"
                    >
                      View
                    </button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden grid grid-cols-1 gap-4 mt-6">
        {policies.map((p, i) => (
          <motion.div
            key={p.id || i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm"
          >
            <p className="font-bold text-[#002d6b] text-sm">
              Policy #{p.numero_poliza}
            </p>
            <p className="text-gray-600 text-sm">{p.nombre_asegurado}</p>
            <p className="text-gray-500 text-sm mb-2">
              {p.marca} {p.modelo}
            </p>
            <p className="text-xs text-gray-400 mb-2">
              {p.fecha_inicio} → {p.fecha_expiracion}
            </p>
            <button
              onClick={() => handleView(p.id)}
              className="w-full bg-[#0f793c] text-white py-2 rounded-lg text-sm hover:bg-[#0d5f2f] transition"
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <InsuranceDetails
            data={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
