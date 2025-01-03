// src/components/ui/dropdown-menu.tsx
import React from 'react';

export const DropdownMenu = ({ children }: { children: React.ReactNode }) => (
  <div className="dropdown">
    {children}
  </div>
);

export const DropdownMenuTrigger = ({
    children,
    asChild,
  }: {
    children: React.ReactNode;
    asChild?: boolean;  // Permite pasar 'asChild' como propiedad opcional
  }) => {
    return (
      <div className={`dropdown-trigger ${asChild ? 'as-child' : ''}`}>
        {children}
      </div>
    );
  };

  export const DropdownMenuContent = ({
    children,
    align,
  }: {
    children: React.ReactNode;
    align?: "start" | "end"; // Aceptamos 'start' o 'end' como posibles valores para 'align'
  }) => (
    <div className={`dropdown-content ${align ? `align-${align}` : ''}`}>
      {children}
    </div>
  );

export const DropdownMenuItem = ({ children }: { children: React.ReactNode }) => (
  <div className="dropdown-item">
    {children}
  </div>
);
