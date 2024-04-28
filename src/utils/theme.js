"use client";
import { ThemeProvider, useTheme } from "next-themes";

export default function ThemeProv({ children }) {
  const { resolvedTheme } = useTheme();
  return (
    <ThemeProvider attribute="class">
      <div className={`${resolvedTheme === "dark" && "dark"}`}>{children}</div>
    </ThemeProvider>
  );
}
