import type { BorderRadiusPreset } from "./types";

export const borderRadiusMap: Record<BorderRadiusPreset, string> = {
  sharp: "0",
  rounded: "var(--radius)",
  soft: "var(--radius-lg)",
  pill: "var(--radius-full)",
};

export const borderRadiusCappedMap: Record<BorderRadiusPreset, string> = {
  sharp: "0",
  rounded: "var(--radius)",
  soft: "var(--radius-lg)",
  pill: "var(--radius-xl)", // Capped at xl instead of full
};
