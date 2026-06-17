export function SakuraFlower({
  cx,
  cy,
  size = 1,
  opacity = 0.16,
  fill = "#E8547A",
}: {
  cx: number;
  cy: number;
  size?: number;
  opacity?: number;
  fill?: string;
}) {
  const r = 9 * size;
  return (
    <g transform={`translate(${cx},${cy})`} opacity={opacity} fill={fill}>
      <ellipse rx={r} ry={r * 0.35} transform="rotate(-30)" />
      <ellipse cx={r * 1.1} rx={r} ry={r * 0.35} transform={`rotate(30 ${r * 1.1} 0)`} />
      <ellipse cy={-r * 0.9} rx={r} ry={r * 0.35} transform={`rotate(90 0 ${-r * 0.9})`} />
      <ellipse cx={-r * 0.45} cy={r * 0.9} rx={r} ry={r * 0.35} transform={`rotate(-70 ${-r * 0.45} ${r * 0.9})`} />
      <ellipse cx={r * 1.55} cy={r * 0.9} rx={r} ry={r * 0.35} transform={`rotate(70 ${r * 1.55} ${r * 0.9})`} />
      <circle cx={r * 0.55} r={r * 0.42} />
    </g>
  );
}
