import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaUser,
  FaMapMarkedAlt,
  FaCar,
  FaCalendarAlt,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  { title: "Personal Info", icon: <FaUser /> },
  { title: "Address", icon: <FaMapMarkedAlt /> },
  { title: "Vehicle", icon: <FaCar /> },
  { title: "Insurance", icon: <FaBuilding /> },
  { title: "Dates", icon: <FaCalendarAlt /> },
  { title: "Confirmation", icon: <FaCheckCircle /> },
];

export default function CreateInsuranceForm() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    insurer: "",
    policyNumber: "",
    vin: "",
    brand: "",
    model: "",
    year: "",
    startDate: "",
    endDate: "",
    officeAddress: "",
    officePhone: "",
    legalNotice: "",
    link: "", // ✅ Nuevo campo agregado
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const inputStyle =
    "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f793c] focus:border-[#0f793c] transition shadow-sm bg-gray-50 hover:bg-white";

  // ✅ Submit Insurance to API
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("❌ Missing authentication token. Please log in again.");
        return;
      }

      setLoading(true);
      const loadingToast = toast.loading("Submitting insurance...");

      const response = await axios.post(
        "http://localhost:8000/api/seguros/",
        {
          nombre_asegurado: form.name,
          direccion: form.address,
          ciudad: form.city,
          estado: form.state,
          codigo_postal: form.zip,
          telefono: form.phone,
          aseguradora: form.insurer,
          numero_poliza: form.policyNumber,
          numero_vin: form.vin,
          marca: form.brand,
          modelo: form.model,
          anio: parseInt(form.year),
          fecha_inicio: form.startDate,
          fecha_expiracion: form.endDate,
          direccion_oficina: form.officeAddress,
          telefono_oficina: form.officePhone,
          advertencia_legal: form.legalNotice,
          link: form.link, // ✅ Nuevo campo enviado al backend
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.dismiss(loadingToast);

      if (response.status === 200 || response.status === 201) {
        toast.success("✅ Insurance successfully created!");
        setStep(0);
        setForm({
          name: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          insurer: "",
          policyNumber: "",
          vin: "",
          brand: "",
          model: "",
          year: "",
          startDate: "",
          endDate: "",
          officeAddress: "",
          officePhone: "",
          legalNotice: "",
          link: "",
        });
      }
    } catch (error) {
      toast.dismiss();
      if (error.response?.data) {
        const backendErrors = Object.entries(error.response.data)
          .map(([field, msg]) => `• ${field}: ${msg}`)
          .join("\n");
        toast.error(`❌ Validation Error:\n${backendErrors}`);
      } else {
        toast.error("❌ Error creating insurance. Please try again.");
      }
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100 relative overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#0f793c] to-[#002d6b]"
        initial={{ width: 0 }}
        animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
        transition={{ duration: 0.5 }}
      />

      {/* Steps */}
      <div className="relative flex flex-wrap justify-between items-center mb-10 sm:mb-12 gap-y-6">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10 hidden sm:block"></div>
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center w-1/6 sm:w-auto relative"
          >
            <motion.div
              className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                i <= step
                  ? "bg-[#0f793c] text-white border-[#0f793c]"
                  : "bg-white text-gray-400 border-gray-300"
              }`}
              whileHover={{ scale: 1.08 }}
            >
              {s.icon}
            </motion.div>
            <p
              className={`hidden sm:block mt-2 text-xs sm:text-sm font-medium ${
                i <= step ? "text-[#0f793c]" : "text-gray-400"
              }`}
            >
              {s.title}
            </p>
          </div>
        ))}
      </div>

      {/* Dynamic Form */}
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {step === 0 && (
          <>
            <h3 className="text-xl font-semibold text-[#002d6b] mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                value={form.name}
                className={inputStyle}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={form.phone}
                className={inputStyle}
              />
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h3 className="text-xl font-semibold text-[#002d6b] mb-4">
              Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["address", "city", "state", "zip"].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.toUpperCase()}
                  onChange={handleChange}
                  value={form[field]}
                  className={inputStyle}
                />
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="text-xl font-semibold text-[#002d6b] mb-4">
              Vehicle Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["vin", "brand", "model", "year"].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.toUpperCase()}
                  onChange={handleChange}
                  value={form[field]}
                  className={inputStyle}
                />
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="text-xl font-semibold text-[#002d6b] mb-4">
              Insurance Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "insurer",
                "policyNumber",
                "officeAddress",
                "officePhone",
              ].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={
                    field === "link"
                      ? "Google Drive Link"
                      : field.replace(/([A-Z])/g, " $1")
                  }
                  onChange={handleChange}
                  value={form[field]}
                  className={inputStyle}
                />
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h3 className="text-xl font-semibold text-[#002d6b] mb-4">
              Policy Dates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="date"
                name="startDate"
                onChange={handleChange}
                value={form.startDate}
                className={inputStyle}
              />
              <input
                type="date"
                name="endDate"
                onChange={handleChange}
                value={form.endDate}
                className={inputStyle}
              />
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <h3 className="text-xl font-semibold text-[#002d6b] mb-6 text-center">
              Review & Legal Notice
            </h3>

            {/* ✅ Summary of all entered information */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6 max-h-80 overflow-y-auto">
              <h4 className="text-lg font-medium text-[#002d6b] mb-3">
                Insurance Summary
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  ["Full Name", form.name],
                  ["Phone", form.phone],
                  ["Address", form.address],
                  ["City", form.city],
                  ["State", form.state],
                  ["ZIP Code", form.zip],
                  ["VIN", form.vin],
                  ["Brand", form.brand],
                  ["Model", form.model],
                  ["Year", form.year],
                  ["Insurer", form.insurer],
                  ["Policy Number", form.policyNumber],
                  ["Office Address", form.officeAddress],
                  ["Office Phone", form.officePhone],
                  ["Start Date", form.startDate],
                  ["End Date", form.endDate],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm"
                  >
                    <p className="text-xs uppercase text-gray-500">{label}</p>
                    <p className="text-sm font-semibold text-[#0f793c] mt-1 break-words">
                      {value || "—"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Legal Notice and Link */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Legal Notice
                </label>
                <textarea
                  name="legalNotice"
                  placeholder="Enter any legal notes..."
                  onChange={handleChange}
                  value={form.legalNotice}
                  className={`${inputStyle} h-28 resize-none`}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Google Drive Link
                </label>
                <input
                  type="url"
                  name="link"
                  placeholder="https://drive.google.com/..."
                  onChange={handleChange}
                  value={form.link}
                  className={inputStyle}
                />
                {form.link && (
                  <a
                    href={form.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0f793c] text-sm mt-2 inline-block hover:underline"
                  >
                    📎 View Uploaded Document
                  </a>
                )}
              </div>
            </div>

            {/* ✅ Confirmation Text */}
            <div className="mt-6 text-center text-[#0f793c] font-medium">
              ✅ Please review your information before submitting.
            </div>
          </>
        )}
      </motion.div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
        {step > 0 && (
          <button
            onClick={prevStep}
            disabled={loading}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-[#002d6b] text-[#002d6b] font-medium hover:bg-[#002d6b]/10 transition disabled:opacity-50"
          >
            Back
          </button>
        )}

        {step < steps.length - 1 ? (
          <button
            onClick={nextStep}
            disabled={loading}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0f793c] text-white font-medium hover:bg-[#0d5f2f] transition disabled:opacity-50"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0f793c] text-white font-medium hover:bg-[#0d5f2f] transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Finish & Submit"}
          </button>
        )}
      </div>
    </div>
  );
}
