import { createContext, useContext, useEffect, useState } from "react"

import { CookieUtils } from "@/utils/cookie.utils"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const THEME_COOKIE_KEY = 'ui-theme';

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  toggleTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (CookieUtils.getCookie(THEME_COOKIE_KEY) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      CookieUtils.setCookie(THEME_COOKIE_KEY, systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      CookieUtils.setCookie(THEME_COOKIE_KEY, theme)
      setTheme(theme)
    },
    toggleTheme: () => {
      const currentTheme = CookieUtils.getCookie(THEME_COOKIE_KEY) as Theme | undefined
      let theme: Theme = 'dark'

      if (currentTheme) {
        theme = currentTheme === 'dark' ? 'light' : 'dark'
      }
      
      CookieUtils.setCookie(THEME_COOKIE_KEY, theme)
      setTheme(theme)
    }
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
