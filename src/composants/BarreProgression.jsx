export default function BarreProgression({
  progression = 0,
  className = "",
}) {

  const progressionValide = Math.min(
    100,
    Math.max(0, progression)
  );

  return (
    <div className={`barre ${className}`}>

      <p>{progressionValide}%</p>

      <div
        className="barreprogression"
        role="progressbar"
        aria-valuenow={progressionValide}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Progression de lecture"
      >
        <div
          className="barreprogression-remplissage"
          style={{
            width: `${progressionValide}%`,
          }}
        />
      </div>

    </div>
  );
}