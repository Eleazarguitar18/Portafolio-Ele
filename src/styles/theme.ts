const baseTheme = {
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  transitions: {
    default: '0.3s ease',
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    primary: '#001433', // 900
    secondary: '#000E24', // 950
    accent: '#3385FF', // 400
    light: '#66A3FF', // 300
    text: '#E5F0FF', // 50
    textLight: '#99C2FF', // 200
    textDark: '#000E24', // 950
    glass: {
      background: 'rgba(0, 20, 51, 0.7)', // 900
      border: 'rgba(51, 133, 255, 0.2)', // 400
      card: 'rgba(0, 41, 102, 0.6)', // 800
    },
    gradient: {
      main: 'linear-gradient(135deg, #001433 0%, #000E24 50%, #001433 100%)', // 900, 950
      accent: 'linear-gradient(to right, #0052CC, #3385FF)', // 600, 400
      glass: 'linear-gradient(135deg, rgba(51, 133, 255, 0.1) 0%, rgba(51, 133, 255, 0.02) 100%)', // 400
    },
    overlay: {
      light: 'rgba(229, 240, 255, 0.05)', // 50
      dark: 'rgba(0, 14, 36, 0.85)', // 950
    },
    glow: {
      text: '0 0 8px rgba(51, 133, 255, 0.4)', // 400
      box: '0 0 15px rgba(51, 133, 255, 0.15)', // 400
    }
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    primary: '#E5F0FF', // 50
    secondary: '#CCE0FF', // 100
    accent: '#0066FF', // 500
    light: '#003D99', // 700
    text: '#001433', // 900
    textLight: '#002966', // 800
    textDark: '#E5F0FF', // 50
    glass: {
      background: 'rgba(229, 240, 255, 0.7)', // 50
      border: 'rgba(0, 102, 255, 0.2)', // 500
      card: 'rgba(204, 224, 255, 0.8)', // 100
    },
    gradient: {
      main: 'linear-gradient(135deg, #E5F0FF 0%, #CCE0FF 50%, #E5F0FF 100%)', // 50, 100
      accent: 'linear-gradient(to right, #0052CC, #3385FF)', // 600, 400
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)',
    },
    overlay: {
      light: 'rgba(0, 0, 0, 0.05)',
      dark: 'rgba(0, 20, 51, 0.3)', // 900
    },
    glow: {
      text: '0 0 5px rgba(0, 102, 255, 0.4)', // 500
      box: '0 0 15px rgba(0, 102, 255, 0.15)', // 500
    }
  },
};

// Default export for backward compatibility
export const theme = darkTheme;
export type Theme = typeof darkTheme;
