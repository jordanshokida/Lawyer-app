
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStorage = create(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) =>
        set({
          user: {
            ...user,
            isAdmin: user.email === "jordii.s@hotmail.com",
          },
        }),
      removeUser: () => set({ user: null }),
      reset: async () => {
        set({ user: null });
      
        // Borrar manualmente el localStorage usado por zustand
        localStorage.removeItem("user-storage");
      
        // Redirigir a /signin y forzar recarga para que se borren todos los estados
        window.location.href = "/signin";
      },
      
    }),
    {
      name: "user-storage",
      partialize: (s) => ({ user: s.user }),
    }
  )
);

export { useUserStorage };


