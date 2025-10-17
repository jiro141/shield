import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { FaTimes, FaSearch, FaFileAlt } from "react-icons/fa";

export default function SearchPolicyModal({ onClose }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      setResult(null);

      const response = await axios.get(
        `http://localhost:8000/api/seguros/buscar/?q=${query}`
      );

      if (response.data.length === 0) {
        toast.error("❌ No policy found with that number.");
        return;
      }

      const policy = response.data[0];
      setResult(policy);

      // ✅ Check payment state (link existence)
      if (!policy.link) {
        toast("⚠️ Your policy is ready but pending payment.", {
          icon: "⏳",
          style: { background: "#facc15", color: "#000" },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Error searching for policy. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#0f793c] transition"
        >
          <FaTimes size={18} />
        </button>

        <h3 className="text-xl font-bold text-[#002d6b] text-center mb-6">
          Search Insurance Policy
        </h3>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            placeholder="Enter policy number..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f793c]"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2.5 bg-[#0f793c] text-white rounded-lg hover:bg-[#0d5f2f] transition flex items-center gap-2 font-medium"
          >
            <FaSearch />
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {/* Search Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm"
          >
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold text-[#002d6b]">Insured:</span>{" "}
              {result.nombre_asegurado}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold text-[#002d6b]">Policy #:</span>{" "}
              {result.numero_poliza}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-semibold text-[#002d6b]">VIN:</span>{" "}
              {result.numero_vin}
            </p>

            {result.link ? (
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0f793c] text-white rounded-lg hover:bg-[#0d5f2f] transition font-medium"
              >
                <FaFileAlt /> Open Document
              </a>
            ) : (
              <p className="text-yellow-600 text-sm font-medium text-center mt-2">
                ⚠️ Awaiting payment before document is available.
              </p>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
