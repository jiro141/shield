import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaCar,
  FaUser,
  FaBuilding,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";

export default function InsuranceDetails({ data, onClose }) {
  const [paid, setPaid] = useState(data.pago || false);
  const [updating, setUpdating] = useState(false);

  // ✅ PUT request to update payment status
  const handleTogglePago = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Missing authentication token. Please log in again.");
        return;
      }

      setUpdating(true);
      const loadingToast = toast.loading("Updating payment status...");

      const response = await axios.put(
        `http://localhost:8000/api/seguros/${data.id}/`,
        { ...data, pago: !paid },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.dismiss(loadingToast);
      toast.success("✅ Payment status updated successfully!");
      setPaid(!paid);
    } catch (error) {
      toast.dismiss();
      toast.error("❌ Error updating payment status. Please try again.");
      console.error(error);
    } finally {
      setUpdating(false);
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
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl relative overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#002d6b] to-[#0f793c] p-6 text-white relative">
          <h3 className="text-2xl font-bold text-center">
            Insurance Policy #{data.numero_poliza}
          </h3>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white hover:text-gray-200 transition"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Payment Switch */}
          <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
            <span className="text-[#002d6b] font-medium">💳 Payment Status</span>
            <button
              onClick={handleTogglePago}
              disabled={updating}
              className={`relative w-14 h-8 flex items-center rounded-full transition-colors duration-300 ${
                paid ? "bg-[#0f793c]" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  paid ? "translate-x-6" : "translate-x-0"
                }`}
              ></span>
            </button>
            <span
              className={`ml-3 text-sm font-semibold ${
                paid ? "text-[#0f793c]" : "text-gray-500"
              }`}
            >
              {paid ? "Pago Realizado" : "Pago Pendiente"}
            </span>
          </div>

          {/* Insured Information */}
          <Section
            icon={<FaUser className="text-[#0f793c]" />}
            title="Insured Information"
            fields={[
              ["Nombre Asegurado", data.nombre_asegurado],
              ["Dirección", data.direccion],
              ["Ciudad", data.ciudad],
              ["Estado", data.estado],
              ["Código Postal", data.codigo_postal],
              ["Teléfono", data.telefono],
            ]}
          />

          {/* Vehicle Information */}
          <Section
            icon={<FaCar className="text-[#002d6b]" />}
            title="Vehicle Information"
            fields={[
              ["Marca", data.marca],
              ["Modelo", data.modelo],
              ["Año", data.anio],
              ["Número VIN", data.numero_vin],
            ]}
          />

          {/* Policy Information */}
          <Section
            icon={<FaBuilding className="text-[#0f793c]" />}
            title="Policy Information"
            fields={[
              ["Aseguradora", data.aseguradora],
              ["Número de Póliza", data.numero_poliza],
              ["Advertencia Legal", data.advertencia_legal],
              [
                "Link de Documento",
                data.link ? (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0f793c] hover:underline"
                  >
                    📎 Ver Documento
                  </a>
                ) : (
                  "—"
                ),
              ],
            ]}
          />

          {/* Contact Information */}
          <Section
            icon={<FaPhone className="text-[#002d6b]" />}
            title="Office Contact"
            fields={[
              ["Dirección Oficina", data.direccion_oficina],
              ["Teléfono Oficina", data.telefono_oficina],
            ]}
          />

          {/* Policy Dates */}
          <Section
            icon={<FaCalendarAlt className="text-[#0f793c]" />}
            title="Policy Dates"
            fields={[
              ["Fecha de Inicio", data.fecha_inicio],
              ["Fecha de Expiración", data.fecha_expiracion],
            ]}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ✅ Reusable Section Component */
function Section({ title, icon, fields }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h4 className="text-lg font-semibold text-[#002d6b]">{title}</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map(([label, value], idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm"
          >
            <p className="text-xs uppercase tracking-wide text-gray-500">
              {label}
            </p>
            <p className="text-sm font-semibold text-[#0f793c] mt-1 break-words">
              {value || "—"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
