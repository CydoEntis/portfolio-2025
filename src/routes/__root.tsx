import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen relative">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[600px] z-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-glow-strong), transparent)",
        }}
      />

      <div
        className="pointer-events-none fixed z-0 w-[500px] h-[500px] rounded-full opacity-50"
        style={{
          top: -180,
          right: -160,
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-[1]">
        <Header />
        <main className="mx-auto max-w-[760px] px-7">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ),
});
