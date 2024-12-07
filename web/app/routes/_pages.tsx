import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_pages")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
