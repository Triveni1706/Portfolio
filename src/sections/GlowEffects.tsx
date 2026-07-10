// GridLines.tsx
export default function GridLines() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
    </div>
  );
}