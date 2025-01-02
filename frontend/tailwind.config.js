/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--color)',
        text_1: 'var(--text-1)',
        text_2: 'var(--text-2)',
        underline: 'var(--underline)',
        herotext: 'var(--herotext)',
        herotext2: 'var(--herotext2)',
        latesttext: 'var(--latesttext)',
        policytext: 'var(--policytext)',
        newsletter: 'var(--newsletter)',
        input: 'var(--input)',
        color: 'var(--color)',
        searchbar: 'var(--searchbar)',
        shadow: 'var(--shadow)',
      }
    },
  },
  plugins: [],
}