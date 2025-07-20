import React from "react";
import { Link } from "react-router-dom";

/**
 * Botón tipo enlace reutilizable.
 * @param {string} to - Ruta interna (si se usa Link) o URL externa (si se usa <a>).
 * @param {string} children - Contenido del botón.
 * @param {boolean} external - Si es true, usa <a> con target _blank. Si es false o no se pasa, usa <Link>.
 * @param {string} className - Clases adicionales.
 * @param {object} rest - Otros props.
 */
const ButtonLink = ({
  to,
  children,
  external = false,
  className = "",
  ...rest
}) => {
  const baseClass = `mt-4 inline-block border border-[#2a2a2a] py-1.5 sm:py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1A] bg-gray-300 text-black hover:text-white flex items-center gap-2 ${className}`;
  if (external) {
    return (
      <a
        href={to}
        className={baseClass}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={baseClass} {...rest}>
      {children}
    </Link>
  );
};

export default ButtonLink;
