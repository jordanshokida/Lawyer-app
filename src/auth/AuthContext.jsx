import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from './supabase.auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Verificar sesión al inicio
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => authListener?.unsubscribe()
  }, [])

  const value = {
    user,
    signUp: async (email, password) => {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      return data
    },
    signIn: async (email, password) => {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      return data
    },
    signOut: async () => {
      await supabase.auth.signOut()
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}