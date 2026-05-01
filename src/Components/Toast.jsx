import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ toast, setToast }) => {
  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast, setToast]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-6 right-6 z-[999] bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-4 rounded-xl shadow-xl"
        >
          <p className="font-semibold">{toast.title}</p>
          <p className="text-sm text-gray-300 mt-1">
            {toast.description}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;