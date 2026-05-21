import { Box, Link } from "@mui/material";

const PROTOTYPES_DOC = "https://github.com/dil-wrahn/x99-mvp/blob/main/PROTOTYPES.md";

/** Confirms this deploy is the milestone-scoped MVP surface (see PROTOTYPE_SCOPE.md). */
export default function MvpPrototypeBanner() {
  const visionUrl = import.meta.env.VITE_VISION_PROTOTYPE_URL as string | undefined;

  return (
    <Box
      component="aside"
      sx={({ tokens }) => ({
        px: 2,
        py: 1.25,
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: tokens.semantic.color.surface?.subtle?.value ?? "action.hover",
        typography: "body2",
        color: tokens.semantic.color.type?.muted?.value ?? "text.secondary",
      })}
    >
      Milestone MVP prototype: schema management (M1) and read-only schema viewer (M0) only. For workflows, roles,
      and explorations, use the{" "}
      {visionUrl ? (
        <Link href={visionUrl} target="_blank" rel="noopener noreferrer" underline="always">
          full vision prototype
        </Link>
      ) : (
        <Link href={PROTOTYPES_DOC} target="_blank" rel="noopener noreferrer" underline="always">
          vision prototype URL in PROTOTYPES.md
        </Link>
      )}
      .
    </Box>
  );
}
