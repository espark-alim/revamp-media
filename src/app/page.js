import { Box } from "@mui/material";
import EmployeeBanner from "./components/EmployeeBanner";
import GlobalTeams from "./components/GlobalTeams";
import { cardStyleForHomePage, DIFFERENCE_DATA, EMPLOYEE_HERO_DATA, GLOBAL_TEAMS } from "@/constant/new-home";
import PricingDefference from "./components/PricingDefference";

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
       <PricingDefference
          data={DIFFERENCE_DATA}
          cardStyle={cardStyleForHomePage}
          titleColor={'#222324'}
          backgroundColorStyle={{
            '@media(min-width:1024px)': {
              backgroundSize: '100%',
              backgroundPosition: 'bottom',
              backgroundImage: `url(${'/images/homepage/hero/hero-image.webp'})`,
            },
          }}
        />
        <GlobalTeams data={GLOBAL_TEAMS} />
      </Box>
    </>
  );
}
