import { Outlet, createFileRoute } from "@tanstack/react-router"
import { ClerkProvider } from "~/lib/providers/clerk-provider"

function LayoutComponent() {
  return (
    <>
      <ClerkProvider>
        <Outlet />
      </ClerkProvider>
    </>
  )
}

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
})
