import { ClerkProvider } from "@clerk/tanstack-start"
import { Outlet, createFileRoute } from "@tanstack/react-router"

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
