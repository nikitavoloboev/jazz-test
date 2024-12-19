import { Outlet, createFileRoute } from "@tanstack/react-router"
import { JazzAndAuth } from "~/lib/providers/jazz-provider"

function PagesLayout() {
  return (
    <JazzAndAuth>
      <LayoutContent />
    </JazzAndAuth>
  )
}

function LayoutContent() {
  return (
    <>
      <div className="flex size-full min-h-full flex-row items-stretch overflow-hidden">
        <MainContent />
      </div>
    </>
  )
}

function MainContent() {
  return (
    <div className="relative flex min-w-0 flex-1 flex-col">
      <main className="relative flex flex-auto flex-col place-items-stretch overflow-auto bg-[var(--container-background)] lg:my-2 lg:mr-2 lg:rounded-md lg:border">
        <Outlet />
      </main>
    </div>
  )
}

export const Route = createFileRoute("/_layout/_pages")({
  component: PagesLayout,
})
