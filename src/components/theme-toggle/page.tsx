'use client'
import { useTheme } from "@/context/ThemeContext"
import { MoonOutlined, SunOutlined } from "@ant-design/icons"
import { Tooltip } from "antd"


export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Tooltip title="Theme toggler"><button onClick={toggleTheme} className="themeBtn">
      {theme === 'light' ? <SunOutlined /> : <MoonOutlined />}
    </button></Tooltip>
  )
}
