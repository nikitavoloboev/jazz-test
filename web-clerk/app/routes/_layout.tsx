import { Outlet, createFileRoute } from "@tanstack/react-router"
import { ThemeProvider } from "next-themes"
import { ClerkProvider } from "~/lib/providers/clerk-provider"

function LayoutComponent() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ClerkProvider>
        <Outlet />
      </ClerkProvider>
    </ThemeProvider>
  )
}

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
})
