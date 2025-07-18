import React from 'react';
import { Box } from '@mui/material';
import {
  COMPANIES_TRUST_STYLE,
  COMPARISON_TABLE_STYLE,
  COUNTRY_HERO_STYLE,
  DASHBOARD_HERO_STYLE,
  LETS_WORK_TOGETHER_STYLE,
  OUT_SOURCING_SERVICES_STYLE,
  RIGHT_CHOICE_FOR_EMPLOYERS_STYLE,
  SALARY_DATA_TABLE_STYLE,
} from '@/styles/countryComponentStyles';
import LetsWorkTogether from './LetsWorkTogether';
import ComparisonTable from './ComparisonTable';
import SalaryDataTable from './SalaryDataTable';
import RightChoiceForEmployers from './RightChoiceForEmployers';
import OutSourcingWork from './OutSourcingWork';
import CompaniesTrust from './CompaniesTrust';
import DashboardHero from './DashboardHero';
import DedicatedBanner from '../DedicatedBanner';
const CountryPage = ({ data }) => {
  // Inject styles
  const heroSectionData = {
    ...data?.heroSection,
    styles: {
      ...(COUNTRY_HERO_STYLE || {}),
    },
  };

  const LetsWorkTogetherData = {
    ...data?.letsWorkTogether,
    styles: {
      ...(LETS_WORK_TOGETHER_STYLE || {}),
    },
  };

  const ComparisonTableData = {
    ...data?.comparisonTable,
    styles: {
      ...(COMPARISON_TABLE_STYLE || {}),
    },
  };

  const SalaryDataTableData = {
    ...data?.salaryDataTable,
    styles: {
      ...(SALARY_DATA_TABLE_STYLE || {}),
    },
  };

  const RightChoiceForEmployersData = {
    ...data?.rightChoiceForEmployers,
    styles: {
      ...(RIGHT_CHOICE_FOR_EMPLOYERS_STYLE || {}),
    },
  };

  const OutSourcingWorkData = {
    ...data?.outSourcingWork,
    styles: {
      ...(OUT_SOURCING_SERVICES_STYLE || {}),
    },
  };

  const CompaniesTrustData = {
    ...data?.companiesTrust,
    styles: {
      ...(COMPANIES_TRUST_STYLE || {}),
    },
  };

  const DashboardHeroData = {
    ...data?.dashboardHero,
    styles: {
      ...(DASHBOARD_HERO_STYLE || {}),
    },
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(247, 247, 249, 1)',
          gap: { xs: 5, sm: 11, lg: 14 },
          pb: { xs: 5, sm: 11, lg: 14 },
        }}
      >
        <DedicatedBanner data={heroSectionData} />
        <LetsWorkTogether data={LetsWorkTogetherData} />
        <ComparisonTable data={ComparisonTableData} />
        <SalaryDataTable data={SalaryDataTableData} />
        <RightChoiceForEmployers data={RightChoiceForEmployersData} />
        <OutSourcingWork data={OutSourcingWorkData} />
        <CompaniesTrust data={CompaniesTrustData} />
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgba(247, 247, 249, 1)',
        }}
      >
        <DashboardHero data={DashboardHeroData} />
      </Box>
    </Box>
  );
};

export default CountryPage;
