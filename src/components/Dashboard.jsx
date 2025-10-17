import { useState } from "react";
import CreateInsuranceForm from "./CreateInsuranceForm";
import InsuranceTable from "./InsuranceTable";
import { motion } from "framer-motion";
import { FaPlusCircle, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

export default function Dashboard() {
  const [view, setView] = useState("create");

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("👋 Logged out successfully!");
    setTimeout(() => {
      window.location.href = "/login"; // 🔁 Cambia esta ruta si tu login es diferente
    }, 1200);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-white py-10 sm:py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 sm:mb-10 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002d6b]">
            Insurance Dashboard
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Create Button */}
            <button
              onClick={() => setView("create")}
              className={`flex justify-center items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg font-medium transition-all text-sm sm:text-base w-full sm:w-auto ${
                view === "create"
                  ? "bg-[#0f793c] text-white shadow-md hover:shadow-lg"
                  : "border border-[#0f793c] text-[#0f793c] hover:bg-[#0f793c]/10"
              }`}
            >
              <FaPlusCircle className="text-lg" /> Create
            </button>

            {/* View Button */}
            <button
              onClick={() => setView("view")}
              className={`flex justify-center items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg font-medium transition-all text-sm sm:text-base w-full sm:w-auto ${
                view === "view"
                  ? "bg-[#002d6b] text-white shadow-md hover:shadow-lg"
                  : "border border-[#002d6b] text-[#002d6b] hover:bg-[#002d6b]/10"
              }`}
            >
              <FaFileAlt className="text-lg" /> View
            </button>

            {/* ✅ Logout Button */}
            <button
              onClick={handleLogout}
              className="flex justify-center items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg font-medium text-white bg-[#dc2626] hover:bg-[#b91c1c] shadow-md transition-all text-sm sm:text-base w-full sm:w-auto"
            >
              <FaSignOutAlt className="text-lg" /> Logout
            </button>
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          {view === "create" ? <CreateInsuranceForm /> : <InsuranceTable />}
        </motion.div>

        {/* Toast Styles */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#002d6b",
              color: "#fff",
              borderRadius: "10px",
            },
            success: {
              style: { background: "#0f793c" },
              iconTheme: { primary: "#fff", secondary: "#0f793c" },
            },
            error: {
              style: { background: "#dc2626" },
            },
          }}
        />
      </div>
    </section>
  );
}
