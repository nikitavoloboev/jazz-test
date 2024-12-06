import { Outlet, createFileRoute } from "@tanstack/react-router"
import { ClerkProvider } from "~/lib/providers/clerk-provider"

function LayoutComponent() {
  return (
    <>
      <Outlet />
    </>
  )
}

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
})
