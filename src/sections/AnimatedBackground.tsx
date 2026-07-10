// AnimatedBackground.tsx
export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px] animate-pulse" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[180px] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.04),transparent_70%)]" />
    </div>
  );
}