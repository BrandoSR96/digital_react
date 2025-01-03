// src/components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  className?: string;
  as?: React.ElementType;  // Agregamos `as` para poder especificar el tipo de elemento (button o a)
  href?: string;  // Añadimos la propiedad `href` para que pueda ser usada cuando `as="a"`
  variant?: "ghost" | "solid" | "outline";  // Definimos las variantes posibles
  size?: "small" | "medium" | "large" | "icon"; // Tamaños de botón
  
}

export const Button: React.FC<ButtonProps> = ({ className, children, as: Component = 'button', size = "medium", ...props }) => {
  // Definir clases basadas en el tamaño
  let sizeClass = "";
  switch (size) {
    case "small":
      sizeClass = "px-2 py-1 text-sm";
      break;
    case "medium":
      sizeClass = "px-4 py-2";
      break;
    case "large":
      sizeClass = "px-6 py-3 text-lg";
      break;
    case "icon":
      sizeClass = "p-2"; // Tamaño para íconos
      break;
    default:
      sizeClass = "px-4 py-2";
  }    
  return (
    <Component
      className={`px-4 py-2 rounded-md focus:outline-none focus:ring ${className || ""}`}
      {...props}
    >
      {children}
    </Component>
  );
};
