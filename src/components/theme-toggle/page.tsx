'use client'
import { useTheme } from "@/context/ThemeContext"
import { MoonOutlined, SunOutlined } from "@ant-design/icons"


export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="themeBtn">
      {theme === 'light' ? <SunOutlined /> : <MoonOutlined />}
    </button>
  )
}
