import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon } from '@heroicons/react/24/solid'
import { SunIcon } from '@heroicons/react/24/solid'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  // レンダー後かを判定
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const darkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      className="m-1 p-3 h-12 w-12 order-3 bg-gray-300 dark:bg-gray-700 rounded-full"
      onClick={() => darkMode()}
    >
      {mounted && (
        <>
          {theme === 'dark' ? (
            <SunIcon />
          ) : (
            <MoonIcon />
          )}
        </>
      )}
    </button>
  )
}

export default DarkModeToggle