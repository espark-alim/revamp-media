import React from 'react';
import CountryPage from '../../components/country/CountryPage';

const countryModules = {
  oman: () => import('@/constant/country/oman'),
  uae: () => import('@/constant/country/uae'),
  uk: () => import('@/constant/country/uk'),
  usa: () => import('@/constant/country/usa'),
  canada: () => import('@/constant/country/canada'),
  qatar: () => import('@/constant/country/qatar'),
  malaysia: () => import('@/constant/country/malaysia'),
  ksa: () => import('@/constant/country/ksa'),
};



export default async function Page({ params }) {
  const { slug } = await params;
  const loader = countryModules[slug];

  if (!loader) {
    return <>No data</>;
  }

  const load = await loader();
  const data = load.default;

  return <CountryPage data={data} />;
}
