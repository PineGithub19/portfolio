"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";

export type AlertType = "success" | "error" | "warning";

interface AlertProps {
  className?: string;
  title: string;
  message: string;
  type: AlertType;
  onClose?: () => void;
  duration?: number;
}

const alertStyles: Record<
  AlertType,
  { bg: string; border: string; text: string; icon: string }
> = {
  success: {
    bg: "bg-green-100",
    border: "border-green-400",
    text: "text-green-800",
    icon: "text-green-500",
  },
  error: {
    bg: "bg-red-100",
    border: "border-red-400",
    text: "text-red-800",
    icon: "text-red-500",
  },
  warning: {
    bg: "bg-yellow-100",
    border: "border-yellow-400",
    text: "text-yellow-800",
    icon: "text-yellow-500",
  },
};

const Alert: React.FC<AlertProps> = ({
  className,
  title,
  message,
  type,
  onClose,
  duration = 3000,
}) => {
  const styles = alertStyles[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className={`w-full max-w-md mx-auto my-4 rounded-md shadow-lg border-l-4 ${styles.bg} ${styles.border} p-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <h4 className={`font-semibold ${styles.text}`}>{title}</h4>
          <p className={`text-sm mt-1 ${styles.text}`}>{message}</p>
        </div>
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 hover:opacity-70 transition ${styles.icon}`}
          aria-label="Close alert"
        >
          <p className="h-5 w-5 text-3xl hover:cursor-pointer">&times;</p>
        </button>
      </div>
    </motion.div>
  );
};

export default Alert;
