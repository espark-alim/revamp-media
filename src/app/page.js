import { Box } from "@mui/material";
import EmployeeBanner from "./components/EmployeeBanner";
import GlobalTeams from "./components/GlobalTeams";
import { EMPLOYEE_HERO_DATA, GLOBAL_TEAMS } from "@/constant/new-home";

export default function Home() {
  return (
    <>
      <EmployeeBanner data={EMPLOYEE_HERO_DATA} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, sm: 6, md: 8, lg: 10 },
          py: { xs: 3, sm: 4, md: 7 },
        }}
      >
        <GlobalTeams data={GLOBAL_TEAMS} />
      </Box>
    </>
  );
}
