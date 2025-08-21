// components/DropBar.jsx
export default function DropBar({ endsAt }) {
  const end = new Date(endsAt).getTime();
  return (
    <div className="sticky top-0 z-40 bg-black text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <p>NEW ARRIVALS · Limited run</p>
        <Countdown end={end} />
      </div>
    </div>
  );
}

function Countdown({ end }) {
  const [t, setT] = useState(end - Date.now());
  useEffect(() => {
    const id = setInterval(() => setT(end - Date.now()), 1000);
    return () => clearInterval(id);
  }, [end]);
  if (t <= 0) return <span>Sale ended</span>;
  const s = Math.floor(t / 1000);
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return <span>Ends in {h}:{m}:{sec}</span>;
}
