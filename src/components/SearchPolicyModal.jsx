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
        `https://plateshieldinsurance.pythonanywhere.com/api/seguros/buscar/?q=${query}`
      );

      if (response.data.length === 0) {
        toast.error("❌ No policy found with that number.");
        return;
      }

      const policy = response.data[0];
      setResult(policy);

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
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-md sm:max-w-lg rounded-2xl shadow-2xl p-5 sm:p-8 relative overflow-y-auto max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-[#0f793c] transition"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        <h3 className="text-lg sm:text-2xl font-bold text-[#002d6b] text-center mb-6">
          Search Insurance Policy
        </h3>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-3 sm:gap-2"
        >
          <input
            type="text"
            placeholder="Enter policy number..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f793c] text-sm sm:text-base"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-3 bg-[#0f793c] text-white rounded-lg hover:bg-[#0d5f2f] transition flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
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
            className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm"
          >
            <p className="text-sm sm:text-base text-gray-600 mb-1">
              <span className="font-semibold text-[#002d6b]">Insured:</span>{" "}
              {result.nombre_asegurado}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-1">
              <span className="font-semibold text-[#002d6b]">Policy #:</span>{" "}
              {result.numero_poliza}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              <span className="font-semibold text-[#002d6b]">VIN:</span>{" "}
              {result.numero_vin}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              <span className="font-semibold text-[#002d6b]">Brand:</span>{" "}
              {result.marca}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              <span className="font-semibold text-[#002d6b]">Model:</span>{" "}
              {result.modelo}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              <span className="font-semibold text-[#002d6b]">Year:</span>{" "}
              {result.anio}
            </p>

            {result.link ? (
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0f793c] text-white rounded-lg hover:bg-[#0d5f2f] transition font-medium text-sm sm:text-base"
              >
                <FaFileAlt /> Open Document
              </a>
            ) : (
              <p className="text-yellow-600 text-sm sm:text-base font-medium text-center mt-2">
                ⚠️ Awaiting payment before document is available.
              </p>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
