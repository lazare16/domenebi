import React, { createContext, useContext, useState } from 'react';

export const CartCountContext = createContext<{ cartCount: number; setCartCount: React.Dispatch<React.SetStateAction<number>> } | undefined>(undefined);

interface CartCountProviderProps {
  children: React.ReactNode; // Specify the type explicitly
}

export function CartCountProvider({ children }: CartCountProviderProps) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartCountContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartCountContext.Provider>
  );
}

