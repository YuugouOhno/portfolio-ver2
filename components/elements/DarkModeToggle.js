import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  // レンダー後かを判定
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      className="p-3 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 md:relative md:left-0"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <>
          {theme === 'dark' ? (
            <p>moon</p>
          ) : (
            <p>sun</p>
          )}
        </>
      )}
    </button>
  )
}

export default DarkModeToggle