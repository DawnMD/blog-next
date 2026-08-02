import { marqueeSkills } from "@/config/site";

/**
 * Infinite horizontal ticker. The list is rendered twice so the -50%
 * translation in the `marquee` keyframe loops seamlessly.
 */
export function SkillsMarquee() {
  const track = [...marqueeSkills, ...marqueeSkills];

  return (
    <div
      className="marquee-mask relative flex overflow-hidden py-2"
      aria-hidden="true"
    >
      <ul className="animate-marquee flex shrink-0 items-center gap-3 pr-3">
        {track.map((skill, i) => (
          <li
            key={`${skill}-${i}`}
            className="border-line-soft bg-surface rounded-full border px-4 py-2 text-sm whitespace-nowrap text-neutral-400"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
