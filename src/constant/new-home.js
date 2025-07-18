import usaImage from '@/assets/images/new-home/global-teams/usa.png';
import canadaImage from '@/assets/images/new-home/global-teams/canada.png';
import ukImage from '@/assets/images/new-home/global-teams/uk.png';
import ksaImage from '@/assets/images/new-home/global-teams/ksa.png';
import qatarImage from '@/assets/images/new-home/global-teams/qatar.png';
import uaeImage from '@/assets/images/new-home/global-teams/uae.png';
import omanImage from '@/assets/images/new-home/global-teams/oman.png';
import malaysiaImage from '@/assets/images/new-home/global-teams/malaysia.png';
import usaFlag from '@/assets/images/new-home/global-teams/usa-flag.png';
import canadaFlag from '@/assets/images/new-home/global-teams/canada-flag.png';
import ukFlag from '@/assets/images/new-home/global-teams/united-kingdom-flag.png';
import ksaFlag from '@/assets/images/new-home/global-teams/saudi-arabia-flag.png';
import qatarFlag from '@/assets/images/new-home/global-teams/qatar-flag.png';
import omanFlag from '@/assets/images/new-home/global-teams/oman-flag.png';
import malaysiaFlag from '@/assets/images/new-home/global-teams/malaysia-flag.png';

export const HERO_DATA = {
  subTitle: 'Need to Grow Your Team?',
  title: `Hire Top Talent On-Demand In`,
  animateText: 'Just 48 Hours.',
  description: `Scale your business worldwide with eSpark Talent’s advanced global recruitment and onboarding solutions.`,
  bgImage: '/images/homepage/hero/hero.png',
  responsiveImage: '/images/homepage/hero/hero-img-res.png',
  btnTitle: `Book A Demo`,
  btnLink: `/book-a-demo`,
  styles: {
    mainBoxStyle: {
      width: '100%',
      color: '#fff',
      background: 'linear-gradient(180deg, #029894 21.1%, #023A39 158.47%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerBoxStyle: {
      width: '100%',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'flex-end',
      py: { xs: 3, sm: 4, md: 0 },
      pl: 3,
      '@media (min-width: 1650px) and (max-width: 1920px)': {
        py: 6,
        pl: 6,
      },
      '@media(min-width:1921px)': {
        justifyContent: 'space-between',
        py: 6,
        pl: 16,
      },
      '@media(min-width:1300px) and (max-width:1649px)': { py: 5 },
    },
    contentBoxStyle: {
      height: '100%',
      pr: { xs: 3.5, sm: 2 },
      width: { xs: 'auto', md: '850px', lg: '900px' },
      '@media(min-width:1921px)': { mx: 'auto' },
    },
    topHorizontalLineStyle: { width: { xs: '90%', sm: '62%' }, mt: 4, mb: 1 },
    subTitleStyle: {
      fontSize: { xs: '22px', sm: '28px', md: '30px', lg: `42px` },
      fontWeight: 400,
      '@media (min-width: 1650px)': { fontSize: '61px' },
    },
    titleStyle: {
      fontSize: { xs: '27px', sm: '30px', md: '40px' },
      lineHeight: {
        xs: 'calc(1.3 * 27px)',
        sm: 'calc(1.3 * 30px)',
        md: 'calc(1.3 * 32px)',
      },
      fontWeight: 'bold',
      '@media (min-width: 1440px)': {
        fontSize: '49px',
        lineHeight: 'calc(1.3 * 49px)',
      },
      '@media (min-width: 1650px)': {
        fontSize: '55px',
        lineHeight: 'calc(1.3 * 55px)',
      },
    },
    animationTextStyle: {
      display: 'inline-block',
      fontSize: {
        xs: '27px',
        sm: '30px',
        md: '40px',
        lg: '49px',
        xl: '55px',
      },
    },
    descriptionBoxStyle: { maxWidth: '700px', pr: 2, pt: 1.2 },
    descriptionTextStyle: {
      fontSize: { xs: '16px', sm: '18px', md: '18px', lg: '22px' },
      fontWeight: 300,
      '@media (min-width: 1650px)': { fontSize: '18px' },
      '@media (min-width: 1920px)': { fontSize: '22px' },
    },
    buttonBoxStyle: { width: 'auto', mt: 2.5 },
    buttonStyle: {
      backgroundColor: 'transparent',
      border: '1px solid #fff',
      color: '#fff',
      fontWeight: 600,
      fontSize: { xs: '18px', sm: '20px' },
      '&:hover': {
        color: '#fff',
        backgroundColor: '#029894',
        borderColor: '#029894',
      },
    },
    bottomHorizontalLineStyle: { width: { xs: '90%', sm: '100%' }, my: 2.5 },
    bgImageStyle: (bgImage) => ({
      width: { sm: '500px', md: '726px' },
      height: { sm: '400px', md: '639px' },
      display: { xs: 'none', md: 'flex' },
      background: `url(${bgImage || ''})`,
      backgroundSize: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }),
    responsiveImageStyle: {
      display: { xs: 'flex', md: 'none' },
      mt: 4,
      ml: 'auto',
      mr: 0,
    },
  },
};
export const EMPLOYEE_HERO_DATA = {
  subTitle: `75% of <span style="color: #029894">Employers</span> Face Talent Shortages`,
  title: `Hire Top Talent Now`,
  description: `Connect with top-tier talent through our technical recruiting services. Struggling with HR tasks and finding tech talent? We’ve got you covered! Our HR outsourcing handles processes, and our specialized recruiters find exceptional top talents.`,
  bgImage: '/images/homepage/hero/emp-hero.webp',
  textureImage: '/images/homepage/hero/texture-img.png',
  animatedGif: '/images/homepage/hero/65.gif',
  animatedVideo: '/images/homepage/hero/eSpark-New.webm',
  btnTitle: `Schedule a Call`,
  btnLink: `/book-a-demo`,
  styles: {
    mainBoxStyle: (bgImage) => ({
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: 'top',
      position: 'relative',
      zIndex: 5,
      '@media(min-width:1024px) and (max-width:1399px)': {
        pt: 2.5,
      },
      '@media(min-width:1024px)': {
        backgroundImage: `url(${bgImage})`,
      },

      '@media(max-width:1023px)': {
        pt: 5.5,
      },
    }),
    innerBoxStyle: {
      mx: 'auto',
      maxWidth: '1400px',
      display: 'flex',
      gap: { xs: 3, md: 8, lg: 0 },
      '@media (min-width: 1024px)': {
        justifyContent: 'center',
        alignItems: 'center',
      },
      '@media (max-width: 1023px)': {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '100%',
      },
      '@media (min-width: 600px) and (max-width: 1023px)': {
        px: 6,
        pb: 0,
      },
    },
    contentBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      color: '#101828',
      maxWidth: {
        md: 'calc(100% - 620px)',
        lg: `calc(100% - 715px)`,
        xl: `calc(100% - 615px)`,
      },
      pl: { sm: 5, lg: 6, xl: 0 },
      '@media (min-width: 600px) and (max-width: 1023px)': {
        maxWidth: '550px',
        textAlign: 'center',
        alignItems: 'center',
        pl: 0,
      },
      '@media (min-width: 280px) and (max-width: 599px)': {
        maxWidth: '100%',
        textAlign: 'center',
        alignItems: 'center',
        px: 2,
      },
    },
    subTitleBoxStyle: {
      '@media (max-width: 1023px)': {
        width: '100%',
        maxWidth: '400px',
        mx: 'auto',
      },
    },
    subTitleStyle: {
      mb: 0.5,
      color: '#0B395A',
      fontSize: {
        xs: '17px',
        sm: '20px',
        md: '21px',
        lg: '24px',
        xl: '29px',
      },
      fontWeight: 600,
      lineHeight: {
        xs: 1.2,
      },
    },
    titleStyle: {
      color: '#0B395A',
      fontSize: {
        xs: '30px',
        sm: '40px',
        md: '55px',
        lg: '58px',
        xl: '70px',
      },
      fontWeight: 600,
      lineHeight: {
        xs: '40px',
        sm: '55px',
        md: '65px',
        lg: '85px',
        xl: '85px',
      },
      maxWidth: '785px',
    },
    descriptionStyle: {
      fontSize: { xs: '10px', sm: '14px', md: '15px', lg: '18px' },
      lineHeight: { xs: '19px', sm: '24px', md: '28px' },
      fontWeight: 400,
      color: '#1D2939',
      mt: { xs: 1.3, lg: 1 },
      pr: { xs: 3, lg: 5, xl: 9 },
      '@media (min-width: 280px) and (max-width: 599px)': {
        px: 2,
      },
    },
    btnStyle: {
      width: '246px',
      height: '44px',
      backgroundColor: '#029894',
      color: '#ffffff',
      justifyContent: 'space-between',
      pl: 3,
      pr: 1.5,
      mt: 3,
      fontSize: '17px',
      borderRadius: '36px',
      '&:hover': {
        backgroundColor: '#029894',
        color: '#ffffff',
      },
      '@media(min-width:0) and (max-width:1249px)': {
        fontSize: '12px',
        width: '190px',
      },
    },
    endIconStyle: {
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      p: 0.5,
      backgroundColor: '#175A59',
      borderRadius: '100%',
      width: '30px',
      height: '30px',
      '@media(min-width:1024px) and (max-width:1249px)': {
        width: '30px',
        height: '30px',
      },
    },
    imageBoxStyle: {
      width: '100%',
      maxWidth: {
        xs: '80%',
        md: '50%',
        lg: 'auto',
        xl: 'auto',
      },
      '@media (min-width: 600px) and (max-width: 1023px)': {
        maxWidth: '400px',
        mx: 'auto',
      },
    },
    imageStyle: {
      // objectFit: 'contain',
      width: { xs: 'auto', md: '580px', lg: '650px', xl: '704px' },
      height: { xs: 'auto', lg: 'auto', xl: '650px' },
    },
  },
};

export const DIFFERENCE_DATA = {
  title: `Why eSpark Talent Outsourcing Model is Different`,
  items: [
    {
      id: 1,
      title: `Scale faster`,
      description: `eSpark Talent offers offshore operations to help scale quickly, meet demand, combat rising labor costs and access specialty talent all without the overheads.`,
      icon: `images/new-home/differnce/scale_faster.svg`,
    },
    {
      id: 2,
      title: `Increase Quality & Efficiency`,
      description: `eSpark Talent remote staffing solutions rectify skills shortages and improve internal processes by accessing expert talent pools.`,
      icon: `images/new-home/differnce/increase_quality.svg`,
    },
    {
      id: 3,
      title: `Reduce costs`,
      description: `eSpark Talent Outsourcing allows your organization to be more competitive, sustainable and profitable with 70% employee cost savings.`,
      icon: `images/new-home/differnce/reduce_costs.svg`,
    },
  ],
};
export const DIFFERENCE_DATA_FOR_REMOTE = {
  title: `Why eSpark Talent Outsourcing Model is Different`,
  items: [
    {
      id: 1,
      title: `Scale faster`,
      description: `eSpark Talent offers offshore operations to help scale quickly, meet demand, combat rising labor costs and access specialty talent all without the overheads.`,
      icon: `images/new-home/differnce/scale_faster.svg`,
    },
    {
      id: 2,
      title: `Increase quality`,
      description: `eSpark Talent remote staffing solutions rectify skills shortages and improve internal processes by accessing expert talent pools.`,
      icon: `images/new-home/differnce/increase_quality.svg`,
    },

    {
      id: 3,
      title: `Reduce costs`,
      description: `eSpark Talent Outsourcing allows your organization to be more competitive, sustainable and profitable with 70% employee cost savings.`,
      icon: `images/new-home/differnce/reduce_costs.svg`,
    },
  ],
};

export const WORKS_DATA = {
  title: `How offshoring works`,
  items: [
    {
      step: `Step 01`,
      title: `Tell us your needs`,
      description: `We discuss your requirements, budget and job details.`,
      image: `images/new-home/process/icon1.png`,
    },
    {
      step: `Step 02`,
      title: `Meet top candidates`,
      description: `Connect directly with your best matches, fully vetted and highly responsive.`,
      image: `images/new-home/process/icon2.png`,
    },
    {
      step: `Step 03`,
      title: `Hire and Onboarding`,
      description: `Decide who to hire, and we'll take care of the rest.`,
      image: `images/new-home/process/icon3.png`,
    },
  ],
};
export const EXPERT_TEAM_DATA = {
  title: `Build A World-Class Experts Team For Your Business`,
  btnTitle: `Book your demo`,
  btnLink: `/book-a-demo`,
  dapartment: [
    {
      post: 'Designers',
      icon: '/images/homepage/expert-team/designer-icon.svg',
      employees: [
        {
          name: `Mubbshir Shahid`,
          link: `#`,
          position: `Sr. UI/UX Designer`,
          image: `/images/homepage/expert-team/designer-1.svg`,
        },
        {
          name: `Sam Jorden`,
          link: `#`,
          position: `UI/UX Designer`,
          image: `/images/homepage/expert-team/designer-2.svg`,
        },
        {
          name: `Miriam Sik`,
          link: `#`,
          position: `Graphic Designer`,
          image: `/images/homepage/expert-team/designer-3.svg`,
        },
      ],
    },
    {
      post: 'Developers',
      icon: '/images/homepage/expert-team/developer-icon.svg',
      employees: [
        {
          name: `Rohail Zafar`,
          link: `#`,
          position: `Full Stack Developer`,
          image: `/images/homepage/expert-team/developer-1.svg`,
        },
        {
          name: `Thomas`,
          link: `#`,
          position: `Front End Developer`,
          image: `/images/homepage/expert-team/developer-2.svg`,
        },
        {
          name: `Miller`,
          link: `/`,
          position: `Back End Developer`,
          image: `/images/homepage/expert-team/developer-3.svg`,
        },
      ],
    },
    {
      post: 'Marketers',
      icon: '/images/homepage/expert-team/marketer-icon.svg',
      employees: [
        {
          name: `Kashif Hussain`,
          link: `#`,
          position: `Digital Marketer`,
          image: `/images/homepage/expert-team/marketer-1.svg`,
        },
        {
          name: `Moryan`,
          link: `#`,
          position: `Digital Marketer`,
          image: `/images/homepage/expert-team/marketer-2.svg`,
        },
        {
          name: `Zoe`,
          link: `#`,
          position: `Social Media Executive`,
          image: `/images/homepage/expert-team/marketer-3.svg`,
        },
      ],
    },
  ],
  styles: {
    containerStyle: {
      width: '100%',
      maxWidth: '1250px',
      maxHeight: 400,
      margin: 'auto',
      position: 'relative',
    },
    slideStyle: (isMin, isMax) => ({
      paddingTop: isMin ? '30px' : '0',
      paddingBottom: isMin ? '30px' : '0' || (isMax && '0'),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      maxHeight: '400px',
    }),
    cardContainerStyle: (index) => ({
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2.2,
      alignItems: 'center',
      '@media (min-width: 1024px)': {
        mt: index == 0 || index == 2 ? 2.2 : 0,
        mb: -6.5,
      },
    }),
    typographyBoxStyle: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      gap: 1,
      ml: -2,
    },
    postTypographyStyle: {
      fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '26px' },
      fontWeight: 700,
    },
    employeeBoxStyle: (index) => ({
      width: '100%',
      minHeight: '80.83px',
      display: 'flex',
      alignItems: 'center',
      mx: 2,
      gap: 1,
      px: 2.8,
      borderRadius: '5px',
      color: `rgba(255, 255, 255, ${index === 0 ? 1 : index === 1 ? 0.6 : 0.4})`,
      background: `rgba(217, 217, 217, ${index === 0 ? 0.2 : index === 1 ? 0.1 : 0.05})`,
      maxWidth: {
        xs: '230px',
        sm: '300px',
        md: '85%',
        lg: '335px',
      },
      '@media (min-width: 1024px)': {
        maxWidth: '80%',
      },
      '@media (max-width: 374px)': {
        maxWidth: '68%',
      },
    }),
    imageStyle: (empIndex) => ({
      opacity: empIndex === 0 ? 1 : empIndex === 1 ? 0.6 : 0.4,
      width: '50px',
      height: '50px',
    }),
    nameTypogrphyStyle: {
      fontSize: {
        xs: '13px',
        sm: '15px',
        md: '16px',
        lg: '20px',
      },
      fontWeight: 700,
    },
    positionTypographyStyle: {
      fontSize: { xs: '12px', md: '13px', lg: '14px' },
      fontWeight: 500,
    },
    mainLayoutStyle: {
      width: { xs: '94%', lg: '92%' },
      mx: 'auto',
      maxWidth: '1400px',
      borderRadius: '33px',
      color: '#fff',
      py: { xs: 5, sm: 6 },
      mb: { xs: 3, md: 5 },
      background: 'linear-gradient(180deg, #0B1B61 20%, #020B21 100%)',
      '@media (min-width: 1024px)': { gap: 10, pb: 0 },
    },
    headerBoxStyle: {
      mx: 'auto',
      maxWidth: { xs: '460px', sm: '600px', md: '700px', lg: '1100px' },
      textAlign: 'center',
      px: 3,
    },
    titleTypographyStyle: {
      fontSize: { xs: '22px', sm: '30px', md: '45px', lg: '65px' },
      fontWeight: 600,
      lineHeight: { xs: 'auto', lg: '78.66px' },
    },
    btnStyle: {
      backgroundColor: 'transparent',
      border: '1px solid #fff',
      color: '#fff',
      fontWeight: 600,
      fontSize: { xs: '15px', sm: '20px' },
      '&:hover': {
        color: '#fff',
        backgroundColor: '#029894',
        borderColor: '#029894',
      },
    },
  },
};

export const HIRING_DATA = {
  title: 'Choose from Our Flexible Models',
  icon: '/images/new-home/flexible-models/right-arrow.png',
  image: '/images/new-home/flexible-models/underline.png',
  items: [
    {
      title: `Hire Dedicated Developers`,
      buttonText: 'Find Your Developer',
      link: '/hire-dedicated-developers',
      points: [
        { text: 'Plug Into Proven Talent' },
        { text: 'Quick Onboarding' },
        { text: 'Flexible Engagement Models' },
      ],
    },
    {
      title: `Offshore Development Center`,
      buttonText: 'Explore ODC Options',
      link: '/offshore-development-center',
      points: [
        {
          text: 'Expand Without Overhead',
        },
        {
          text: 'Access Global Talent',
        },
        {
          text: 'Complete Operational Support',
        },
      ],
    },
    {
      title: `Fixed Price Projects`,
      buttonText: 'Start Your Project',
      link: '/fixed-price-projects',
      points: [
        {
          text: 'Transparent, Upfront Costs',
        },
        {
          text: 'Built for Results',
        },
        {
          text: 'Clear Timelines & Deliverables',
        },
      ],
    },
  ],
  styles: {
    mainBoxStyle: {
      width: 'auto',
      backgroundColor: '#EDF3FF',
      py: { xs: 3, md: 5 },
    },
    innerBoxStyle: {
      mx: 'auto',
      width: { xs: '100%', md: '96%', lg: '93%' },
      maxWidth: '1400px',
      pt: 3.5,
      px: { xs: 2, md: 1, lg: 0 },
    },
    titleBoxStyle: { pb: 4, px: 3 },
    titleStyle: {
      fontSize: { xs: '26px', sm: '28px', md: '30px', lg: '38px' },
      fontWeight: 600,
      color: '#222324',
      textAlign: 'center',
    },
    buttonBoxStyle: {
      ml: 1.5,
      width: { xs: '15px', sm: '16px' },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle: {
      width: '100%',
      height: { xs: '43px', md: '45px', lg: '55px' },
      color: '#fff',
      backgroundColor: '#09114A',
      px: 1,
      borderRadius: '14px',
      fontSize: { xs: '14px', sm: '15px', md: '16px' },
      textWrap: 'nowrap',
      position: 'relative',
      bottom: 0,
    },
    cardStyle: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: { xs: '380px', md: '482px' },
      borderRadius: '17.7px',
      border: '1px solid #2870C380',
      px: { xs: 2, sm: 3 },
      py: { xs: 2, sm: 3 },
    },
    cardHeaderStyle: {
      color: '#111845',
      fontSize: {
        xs: 'calc(14px + 0.4vw)',
        md: 'calc(14px + 0.3vw)',
        lg: 'calc(14px + 0.5vw)',
      },
      fontWeight: 600,
      width: '100%',

      '@media(min-width:1024px) and (max-width: 1100px)': {
        fontSize: 'calc(14px + 0.2vw)',
      },
      '@media(min-width: 1440px)': {
        fontSize: '22px',
      },
    },
    ulStyle: {
      pl: '20px',
    },
    listStyle: {
      color: '#111845',
      maxWidth: '300px',
      mb: 0.8,
      fontSize: {
        xs: 'calc(12px + 0.4vw)',
        md: 'calc(12px + 0.2vw)',
        lg: 'calc(11px + 0.5vw)',
      },
      fontWeight: 500,
      '@media(min-width: 1440px)': {
        fontSize: '18px',
      },
    },
    cardImageStyle: {
      width: { xs: '45px', sm: '55px' },
      height: 'auto',
      mb: 0.5,
    },
  },
};

export const EXPERTIES_DATA = {
  title: 'Our Core Competencies',
  services: [
    {
      id: 2,
      icon: 'images/new-home/experties/icon2.svg',
      activeIcon: 'images/new-home/experties/activeIcon2.svg',
      heading: 'Front-End Developers',
      listItems: [
        {
          title: 'AngularJS Developer',
          link: '/hire-angular-developers',
        },
        {
          title: 'ReactJS Developer',
          link: '/hire-reactjs-developers',
        },
        {
          title: 'JavaScript Developer',
          link: '/hire-javascript-developers',
        },
        {
          title: 'NextJS Developer',
          link: '/hire-nextjs-developers',
        },
      ],
    },
    {
      id: 3,
      icon: 'images/new-home/experties/icon3.svg',
      activeIcon: 'images/new-home/experties/activeIcon3.svg',
      heading: 'Back-End Developers',
      listItems: [
        {
          title: 'ASP .NET Developer',
          link: '/hire-asp-dot-net-developers',
        },
        { title: 'PHP Developer', link: '/hire-php-developers' },
        { title: 'Python Developer', link: '/hire-python-developers' },
        { title: 'NodeJS Developer', link: '/hire-nodejs-developers' },
      ],
    },
    {
      id: 4,
      icon: 'images/new-home/experties/icon4.svg',
      activeIcon: 'images/new-home/experties/activeIcon4.svg',
      heading: 'Digital Marketer',
      listItems: [
        {
          title: 'Social Media Expert',
          link: '/hire-social-media-experts',
        },
        { title: 'PPC Specialist', link: '/hire-ppc-specialists' },
        { title: 'SEO Expert', link: '/hire-seo-experts' },
        {
          title: 'Performance Marketer',
          link: '/hire-performance-marketers',
        },
      ],
    },
    {
      id: 5,
      icon: 'images/new-home/experties/icon5.svg',
      activeIcon: 'images/new-home/experties/activeIcon5.svg',
      heading: 'Embedded Developers',
      listItems: [
        {
          title: 'Firmware Developer',
          link: '/hire-firmware-developers',
        },
        { title: 'PCB Designer', link: '/hire-pcb-designers' },
        {
          title: 'Embedded System Engineer',
          link: '/hire-embedded-system-engineers',
        },
      ],
    },
    {
      id: 6,
      icon: 'images/new-home/experties/icon6.svg',
      activeIcon: 'images/new-home/experties/activeIcon6.svg',
      heading: 'Ecommerce Developers',
      listItems: [
        {
          title: 'WordPress Developer',
          link: '/hire-wordpress-developers',
        },
        {
          title: 'Shopify Developer',
          link: '/hire-shopify-developers',
        },
      ],
    },
    {
      id: 7,
      icon: 'images/new-home/experties/icon7.svg',
      activeIcon: 'images/new-home/experties/activeIcon7.svg',
      heading: 'Mobile App Developers',
      listItems: [
        {
          title: 'Android Developer',
          link: '/hire-android-developers',
        },
        {
          title: 'Flutter Developer',
          link: '/hire-flutter-developers',
        },
        {
          title: 'React Native Developer',
          link: '/hire-react-native-developers',
        },
      ],
    },
    {
      id: 1,
      icon: 'images/new-home/experties/icon1.svg',
      activeIcon: 'images/new-home/experties/activeIcon1.svg',
      heading: 'Trending',
      listItems: [
        { title: 'UI UX Designer', link: '/hire-ui-ux-designers' },
        {
          title: 'Full Stack Developer',
          link: '/hire-full-stack-developers',
        },
        {
          title: 'MEAN Stack Developer',
          link: '/hire-mean-stack-developers',
        },
        {
          title: 'MERN Stack Developer',
          link: '/hire-mern-stack-developers',
        },
        { title: 'DevOps Engineer', link: '/hire-devops-engineers' },
        {
          title: 'Fintech Developer',
          link: '/hire-fintech-developers',
        },
        {
          title: 'Software Developer',
          link: '/hire-software-developers',
        },
        { title: 'QA Engineer', link: '/hire-qa-engineers' },
      ],
    },
  ],
  styles: {
    containerStyle: { py: 2 },
    accordionStyle: { border: '1px solid #6A6565', boxShadow: 'none' },
    accrodionSummaryStyle: {
      display: 'flex',
      gap: '10px',
    },
    imageStyle: { width: '25px', height: '25px' },
    serviceTypographyStyle: (expandedAccordion, index) => ({
      px: '10px',
      fontSize: {
        xs: '16px',
        sm: '17px',
        md: '18px',
      },
      fontWeight: 400,
      color: expandedAccordion === index ? '#354899' : '#029894',
    }),
    titleStyle: (hire_remote_developers) => ({
      fontSize: {
        xs: '11.91px',
        sm: '11.91px',
        md: '16px',
        lg: '14.28px',
        xl: '14.28px',
      },
      fontWeight: 400,
      lineHeight: 2.5,
      color: '#000000',
      cursor: 'pointer',
      display: 'inline-block',
      textDecoration: 'underline',
      my: hire_remote_developers ? 0.5 : 0,
      '&:hover': {
        color: '#029894',
      },
    }),
  },
};

export const OFFSHORE_DATA = {
  title: `How offshoring works`,
  bgImage: `/images/new-home/offshore-works/bg.png`,
  bgImageInvert: `/images/new-home/offshore-works/bg-invert.png`,
  items: [
    {
      invert: false,
      icon: '/images/new-home/offshore-works/no1.png',
      title: 'Tell us your needs',
      description: 'We discuss your requirments, budget and job details.',
    },
    {
      invert: true,
      icon: '/images/new-home/offshore-works/no2.png',
      title: 'Meet top candidates',
      description:
        'Connect directly with your best matches, fully vetted and highly responsive.',
    },
    {
      invert: false,
      icon: '/images/new-home/offshore-works/no3.png',
      title: 'Hire and Onboarding',
      description: "Decide who to hire, and we'll take care of the rest.",
    },
  ],
  styles: {
    mainBoxStyle: { backgroundColor: '#F7F8FB' },
    titleAndSwiperBoxStyle: {
      width: '100%',
      maxWidth: 1250,
      margin: 'auto',
      padding: '8px 0',
      position: 'relative',
      py: { xs: 5, sm: 6, md: 7, lg: 10 },
      px: 2,
    },
    titleStyle: {
      textAlign: 'center',
      fontSize: { xs: '22px', sm: '25px', md: '28px', lg: '32px' },
      lineHeight: 1.5,
    },
    slideStyle: {
      paddingTop: '30px',
      paddingBottom: '40px',
      display: 'flex',
      justifyContent: 'center',
      height: 'auto',
    },
    cardStyle: (index, bgImage, bgImageInvert) => ({
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      backgroundImage: {
        xs: `url(${bgImage})`,
        md: `url(${index % 2 == 1 ? bgImageInvert : bgImage})`,
      },
      backgroundRepeat: 'no-repeat',
      zIndex: 0,
      px: 3,
      py: 2.5,
      backgroundPosition: {
        xs: 'bottom',
        md: index % 2 == 1 ? 'top' : 'bottom',
      },
      backgroundSize: '100% 100%',
      borderRadius: '25px',
      my: 3,
      '@media(min-width: 768px) and (max-width: 1023px) ': {
        backgroundSize: '90% 100%',
        backgroundImage: `url(${index % 2 == 1 ? bgImageInvert : bgImage})`,
      },
      '@media(min-width: 481px) and (max-width: 767px) ': {
        backgroundSize: '100% 100%',
        backgroundImage: `url(${bgImage})`,
      },
      '@media(min-width: 280px) and (max-width: 480px) ': {
        py: 4,
      },
    }),
    imageStyle: (index) => ({
      zIndex: 3,
      width: { xs: 70, sm: 70, md: 80, lg: 100 },
      height: 'auto',
      position: 'absolute',
      top: index % 2 == 1 ? 'auto' : -30,
      bottom: index % 2 == 1 ? -30 : 'auto',
      left: '50%',
      transform: 'translate(-50%)',
      boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)',
      borderRadius: '100%',
      '@media (min-width: 481px) and (max-width: 767px)': {
        top: -10,
        bottom: 'auto',
      },
      '@media (max-width: 480px)': {
        top: -8,
        bottom: 'auto',
      },
    }),
    innerCardStyle: (index) => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: `#fff`,
      zIndex: 1,
      maxWidth: '100%',
      height: '100%',
      px: 2,
      '@media(min-width: 1400px)': {
        maxWidth: '361px',
        pt: index % 2 == 0 ? 1.5 : 0,
        pb: index % 2 == 1 ? 2 : 0,
        minHeight: index % 2 == 0 ? '209px' : '205px',
        maxHeight: '197px',
      },
      '@media(min-width: 1024px) and (max-width:1399px)': {
        maxWidth: '361px',
        pt: index % 2 == 0 ? 1.5 : 0,
        pb: index % 2 == 1 ? 2 : 0,
        minHeight: index % 2 == 0 ? '200px' : '180px',
        maxHeight: '197px',
      },
      '@media(min-width: 768px) and (max-width:1023px)': {
        maxWidth: '80%',
        pt: index % 2 == 0 ? 1.5 : 0,
        pb: index % 2 == 1 ? 2 : 0,
        minHeight: index % 2 == 0 ? '195px' : '170px',
        maxHeight: '197px',
      },
      '@media(min-width: 481px) and (max-width:767px)': {
        maxWidth: '320px',
        pt: 1.5,
        pb: 0,
        minHeight: index % 2 == 0 ? '195px' : '170px',
        maxHeight: '197px',
      },
      '@media(min-width: 360px) and (max-width:480px)': {
        maxWidth: '320px',
        pt: 1.5,
        pb: 0,
        minHeight: '170px',
        maxHeight: 'auto',
      },
      '@media(min-width: 280px) and (max-width:359px)': {
        maxWidth: '320px',
        pt: 1.5,
        pb: 0,
        minHeight: '210px',
        maxHeight: 'auto',
      },
      boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
      borderRadius: '25px',
    }),
    cardTitleStyle: {
      color: '#001C63',
      fontSize: {
        xs: '18px',
        sm: '20px',
        md: '22.71px',
        lg: '28.71px',
      },
      lineHeight: '26px',
      fontWeight: 700,
      textAlign: 'center',
    },
    dividerStyle: {
      mt: 1,
      width: '80%',
      color: '#f00',
    },
    descriptionStyle: {
      color: '#001C63',
      fontSize: { xs: '13px', sm: '14.95px' },
      fontWeight: 500,
      lineHeight: '26.32px',
      textAlign: 'center',
      px: 1.5,
    },
  },
};

export const POWER_PROJECT_DATA = {
  first_text: {
    text: 'Power Your',
    logos: [
      { src: '/images/new-home/power-projects/xd.png', text: 'ADOBE XD' },
      { src: '/images/new-home/power-projects/figma.png', text: 'Figma' },
      {
        src: '/images/new-home/power-projects/acf.png',
        text: 'Advance Custom Field',
      },
      {
        src: '/images/new-home/power-projects/electron.png',
        text: 'Electron JS',
      },
      {
        src: '/images/new-home/power-projects/shopify.png',
        text: 'Shopify',
      },
      {
        src: '/images/new-home/power-projects/cpt.png',
        text: 'Custom Post Type',
      },
      {
        src: '/images/new-home/power-projects/git.png',
        text: 'GIT',
      },
      {
        src: '/images/new-home/power-projects/react.png',
        text: 'React',
      },
      {
        src: '/images/new-home/power-projects/next-js.png',
        text: 'Next.JS',
      },
      {
        src: '/images/new-home/power-projects/es6.png',
        text: 'JavaScript ES6',
      },
      {
        src: '/images/new-home/power-projects/javascript.png',
        text: 'Javascript',
      },
      {
        src: '/images/new-home/power-projects/oop.png',
        text: 'Object Oriented Programming',
      },
      {
        src: '/images/new-home/power-projects/apachea.png',
        text: 'Apache',
      },
      {
        src: '/images/new-home/power-projects/python.png',
        text: 'Python',
      },
      {
        src: '/images/new-home/power-projects/react-native.png',
        text: 'React Native ',
      },
      {
        src: '/images/new-home/power-projects/jquery.png',
        text: 'JQuery',
      },
      {
        src: '/images/new-home/power-projects/state.png',
        text: 'State Management libraries',
      },
      {
        src: '/images/new-home/power-projects/javascript.png',
        text: 'Javascript',
      },
      {
        src: '/images/new-home/power-projects/sql.png',
        text: 'SQL',
      },
      {
        src: '/images/new-home/power-projects/html.png',
        text: 'HTML',
      },
      {
        src: '/images/new-home/power-projects/wp-cli.png',
        text: 'Wordpress CLI',
      },
      {
        src: '/images/new-home/power-projects/restful.png',
        text: 'RESTful APIs',
      },
      {
        src: '/images/new-home/power-projects/bootstrap.png',
        text: 'Bootstrap',
      },
      {
        src: '/images/new-home/power-projects/css.png',
        text: 'CSS',
      },
      {
        src: '/images/new-home/power-projects/typescript.png',
        text: 'TypeScript',
      },
      {
        src: '/images/new-home/power-projects/github.png',
        text: 'GITHUB CLA',
      },
      {
        src: '/images/new-home/power-projects/php.png',
        text: 'PHP',
      },
      {
        src: '/images/new-home/power-projects/woocommerce.png',
        text: 'COMMERCE',
      },
    ],
  },
  second_text: {
    text: 'Projects with a',
    logos: [
      { src: '/images/new-home/power-projects/xd.png', text: 'ADOBE XD' },
      { src: '/images/new-home/power-projects/figma.png', text: 'Figma' },
      {
        src: '/images/new-home/power-projects/acf.png',
        text: 'Advance Custom Field',
      },
      {
        src: '/images/new-home/power-projects/electron.png',
        text: 'Electron JS',
      },
      {
        src: '/images/new-home/power-projects/shopify.png',
        text: 'Shopify',
      },
      {
        src: '/images/new-home/power-projects/cpt.png',
        text: 'Custom Post Type',
      },
      {
        src: '/images/new-home/power-projects/git.png',
        text: 'GIT',
      },
      {
        src: '/images/new-home/power-projects/react.png',
        text: 'React',
      },
      {
        src: '/images/new-home/power-projects/next-js.png',
        text: 'Next.JS',
      },
      {
        src: '/images/new-home/power-projects/es6.png',
        text: 'JavaScript ES6',
      },
      {
        src: '/images/new-home/power-projects/javascript.png',
        text: 'Javascript',
      },
      {
        src: '/images/new-home/power-projects/oop.png',
        text: 'Object Oriented Programming',
      },
      {
        src: '/images/new-home/power-projects/apachea.png',
        text: 'Apache',
      },
      {
        src: '/images/new-home/power-projects/python.png',
        text: 'Python',
      },
      {
        src: '/images/new-home/power-projects/react-native.png',
        text: 'React Native ',
      },
      {
        src: '/images/new-home/power-projects/jquery.png',
        text: 'JQuery',
      },
      {
        src: '/images/new-home/power-projects/state.png',
        text: 'State Management libraries',
      },
      {
        src: '/images/new-home/power-projects/javascript.png',
        text: 'Javascript',
      },
      {
        src: '/images/new-home/power-projects/sql.png',
        text: 'SQL',
      },
      {
        src: '/images/new-home/power-projects/html.png',
        text: 'HTML',
      },
      {
        src: '/images/new-home/power-projects/wp-cli.png',
        text: 'Wordpress CLI',
      },
      {
        src: '/images/new-home/power-projects/restful.png',
        text: 'RESTful APIs',
      },
      {
        src: '/images/new-home/power-projects/bootstrap.png',
        text: 'Bootstrap',
      },
      {
        src: '/images/new-home/power-projects/css.png',
        text: 'CSS',
      },
      {
        src: '/images/new-home/power-projects/typescript.png',
        text: 'TypeScript',
      },
      {
        src: '/images/new-home/power-projects/github.png',
        text: 'GITHUB CLA',
      },
      {
        src: '/images/new-home/power-projects/php.png',
        text: 'PHP',
      },
      {
        src: '/images/new-home/power-projects/woocommerce.png',
        text: 'COMMERCE',
      },
    ],
  },
  third_text: {
    // text: `<span style={{ color: '#029894', fontWeight: 700 }}>Multi-Talent</span> Squad`,
    text: `Multi-Talent Squad`,
    logos: [
      { src: '/images/new-home/power-projects/xd.png', text: 'ADOBE XD' },
      { src: '/images/new-home/power-projects/figma.png', text: 'Figma' },
      {
        src: '/images/new-home/power-projects/acf.png',
        text: 'Advance Custom Field',
      },
      {
        src: '/images/new-home/power-projects/electron.png',
        text: 'Electron JS',
      },
      {
        src: '/images/new-home/power-projects/shopify.png',
        text: 'Shopify',
      },
      {
        src: '/images/new-home/power-projects/cpt.png',
        text: 'Custom Post Type',
      },
      {
        src: '/images/new-home/power-projects/git.png',
        text: 'GIT',
      },
      {
        src: '/images/new-home/power-projects/react.png',
        text: 'React',
      },
      {
        src: '/images/new-home/power-projects/next-js.png',
        text: 'Next.JS',
      },
      {
        src: '/images/new-home/power-projects/es6.png',
        text: 'JavaScript ES6',
      },
      {
        src: '/images/new-home/power-projects/javascript.png',
        text: 'Javascript',
      },
      {
        src: '/images/new-home/power-projects/oop.png',
        text: 'Object Oriented Programming',
      },
      {
        src: '/images/new-home/power-projects/apachea.png',
        text: 'Apache',
      },
      {
        src: '/images/new-home/power-projects/python.png',
        text: 'Python',
      },
      {
        src: '/images/new-home/power-projects/react-native.png',
        text: 'React Native ',
      },
      {
        src: '/images/new-home/power-projects/jquery.png',
        text: 'JQuery',
      },
      {
        src: '/images/new-home/power-projects/state.png',
        text: 'State Management libraries',
      },
      {
        src: '/images/new-home/power-projects/javascript.png',
        text: 'Javascript',
      },
      {
        src: '/images/new-home/power-projects/sql.png',
        text: 'SQL',
      },
      {
        src: '/images/new-home/power-projects/html.png',
        text: 'HTML',
      },
      {
        src: '/images/new-home/power-projects/wp-cli.png',
        text: 'Wordpress CLI',
      },
      {
        src: '/images/new-home/power-projects/restful.png',
        text: 'RESTful APIs',
      },
      {
        src: '/images/new-home/power-projects/bootstrap.png',
        text: 'Bootstrap',
      },
      {
        src: '/images/new-home/power-projects/css.png',
        text: 'CSS',
      },
      {
        src: '/images/new-home/power-projects/typescript.png',
        text: 'TypeScript',
      },
      {
        src: '/images/new-home/power-projects/github.png',
        text: 'GITHUB CLA',
      },
      {
        src: '/images/new-home/power-projects/php.png',
        text: 'PHP',
      },
      {
        src: '/images/new-home/power-projects/woocommerce.png',
        text: 'COMMERCE',
      },
    ],
  },

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#EDF3FF',
      px: 3,
      pt: 5.5,
      pb: { xs: 7.5, sm: 8.5 },
    },
    containerStyle: (maxWidth) => ({
      mx: 'auto',
      width: '100%',
      overflow: 'hidden',
      maxWidth: maxWidth || 'auto',
    }),
    titleSyle: {
      fontWeight: 600,
      mb: { xs: 5, sm: 5, md: 2, lg: 0.5 },
      fontSize: {
        xs: 'calc(17px + 3.36vw)',
        md: 'calc(20px + 6.36vw)',
        xl: '135px',
      },
      color: '#111845',
    },
    logosBoxStyle: (scrollDirection, scrollRight, scrollLeft, top) => ({
      gap: 12,
      px: 2,
      pt: { xs: 1.5, md: 0 },
      top: top || '75%',
      transform: 'translate(-50%)',
      position: { xs: 'absolute' },
      display: 'inline-flex',
      animation: `${scrollDirection === 'right' ? scrollRight : scrollLeft} 40s linear infinite`,
    }),
    chipBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'nowrap',
      pr: 4.5,
      gap: 1,
    },
    chipStyle: {
      width: 'auto',
      height: { xs: '33px', lg: '36px' },
      backgroundColor: '#fff',
      borderRadius: '24px',
      py: 1,
    },
  },
};

export const ENTIRE_TEAM = {
  title: 'Keep track of your entire team in one place!',
  text: `We give you the tools to manage your team with ease. From smart hiring workflows to day-to-day team tracking and attendance management, everything is in one place so you can focus on growing your business.`,
  image: '/images/new-home/entire-team/laptop.png',
  points: [
    {
      title: 'Real-Time Hiring & Interview Updates',
      text: 'Track every hiring request and interview status all in one place.',
    },
    {
      title: 'Complete Onboarding at a Glance',
      text: 'From offer letters to orientation, manage every onboarding step effortlessly.',
    },
    {
      title: 'Smart Attendance & Time Tracking',
      text: 'Monitor work hours, leaves, and attendance with daily and hourly insights.',
    },
    {
      title: 'Clear Payment & Inventory Records',
      text: 'View salary disbursements, invoices, and allocated inventory in one dashboard.',
    },
    {
      title: 'Easy Contract & NDA Access',
      text: 'Keep all employee contracts and signed NDAs organized and just a click away.',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      flexGrow: 1,
      width: { xs: '90%', md: '95%' },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '1400px',
      mx: 'auto',
    },
    titleStyle: {
      mx: 'auto',
      width: '80%',
      fontWeight: 600,
      color: '#222324',
      maxWidth: '1200px',
      textAlign: 'center',
      mb: { xs: 1, md: 0.5 },
      fontSize: { xs: '25px', sm: '32px', md: '42px', lg: '52px' },
    },
    textStyle: {
      mx: 'auto',
      width: '90%',
      fontWeight: 400,
      maxWidth: '950px',
      textAlign: 'center',
      color: '#000000CC',
      fontSize: { xs: '14px', md: '17px' },
    },
    imageBoxStyle: {
      mx: 'auto',
      display: 'flex',
      borderRadius: '25px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DDE8FF',
      maxWidth: { xs: '400px', md: '659px', lg: '799px' },
      maxHeight: { xs: 'auto', md: 'auto', lg: '656px' },
    },
    listBoxStyle: {
      display: 'flex',
      justifyContent: { xs: 'flex-start', md: 'center' },
      pt: { xs: 1.5, lg: 4 },
      pl: { sm: 2, lg: 6 },
    },
    avatarStyle: {
      width: { xs: '35px', md: '50px', lg: '70px' },
      height: { xs: '35px', md: '50px', lg: '70px' },
      bgcolor: '#029894',
    },
    avatarTextStyle: {
      fontSize: {
        xs: '15px',
        sm: '18px',
        md: '25px',
        lg: '31px',
      },
      fontWeight: 600,
      color: '#fff',
    },
    listTextBoxStyle: {
      p: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 0,
    },
    listHeadingStyle: {
      fontSize: {
        xs: '15px',
        sm: '18px',
        md: '19px',
        lg: '25px',
      },
      fontWeight: 600,
      color: '#232E73',
      maxWidth: '450px',
      lineHeight: 1.2,
    },
    listParagraphStyle: {
      fontSize: { xs: '13px', md: '15px', lg: '17px' },
      fontWeight: 400,
      color: '#000000CC',
      maxWidth: '450px',
    },
  },
};

export const GLOBAL_TEAMS = {
  title: 'Break Borders, Build Global Teams',
  text: 'Connect with world-class talent, no matter where you are.',
  slides: [
    {
      country: 'USA',
      image: usaImage,
      flag: usaFlag,
      link: '/country/usa',
    },
    {
      country: 'Canada',
      image: canadaImage,
      flag: canadaFlag,
      link: '/country/canada',
    },
    {
      country: 'United Kingdom',
      image: ukImage,
      flag: ukFlag,
      link: '/country/uk',
    },
    {
      country: 'Saudi Arabia',
      image: ksaImage,
      flag: ksaFlag,
      link: '/country/ksa',
    },
    {
      country: 'Qatar',
      image: qatarImage,
      flag: qatarFlag,
      link: '/country/qatar',
    },
    {
      country: 'UAE',
      image: uaeImage,
      flag: usaFlag,
      link: '/country/uae',
    },
    {
      country: 'Oman',
      image: omanImage,
      flag: omanFlag,
      link: '/country/oman',
    },
    {
      country: 'Malaysia',
      image: malaysiaImage,
      flag: malaysiaFlag,
      link: '/country/malaysia',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 2,
      px: 2,
      py: 1,
    },
    titleStyle: {
      fontSize: { xs: '25px', md: '28px', lg: '32px' },
      fontWeight: 600,
      color: '#001C63',
      textAlign: 'center',
      mb: { xs: 1, md: 0 },
    },
    textStyle: {
      fontSize: { xs: '14px', md: '18px' },
      fontWeight: 400,
      color: '#001C63',
      textAlign: 'center',
    },
    swiperSlideStyle: {
      width: '75%',
      maxWidth: 297,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    slideImageStyle: {
      width: { xs: '96%', md: 297 },
      height: { xs: 'auto', md: 407 },
      borderRadius: '30px',
      position: 'relative',
      mx: 'auto',
      overflow: 'hidden',
    },

    flagBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      bottom: { xs: 15, sm: 15, md: 20 },
      left: { xs: 15, md: 20 },
      gap: 1.2,
      flexWrap: 'nowrap',
    },
    flagImageStyle: {
      width: { xs: 30, md: 45 },
      height: { xs: 30, md: 45 },
      position: 'relative',
    },
    countryTextStyle: {
      fontSize: {
        xs: '15px',
        sm: '17px',
        md: '19px',
        lg: '22px',
      },
      fontWeight: 400,
      color: '#fff',
    },
  },
};

export const TRUSTED_PLATFORM = {
  title:
    'eSpark Talent is the Global Outsourcing Platform trusted by industry leaders',
  images: [
    '/images/new-home/trusted-platform/01.png',
    '/images/new-home/trusted-platform/02.png',
    '/images/new-home/trusted-platform/03.png',
    '/images/new-home/trusted-platform/04.png',
    '/images/new-home/trusted-platform/05.png',
    '/images/new-home/trusted-platform/06.png',
  ],
  review: [
    {
      title: '500+',
      text: 'Professional Talent Pool',
    },
    {
      title: '4.8',
      text: '100+ 5 Star Reviews',
    },
    {
      title: '$80M',
      text: 'In Cost Saving',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#EDF3FF',
      py: { xs: 6, lg: 8 },
      px: 2,
    },
    titleStyle: {
      fontSize: { xs: '25px', sm: '32px', md: '38px', lg: '52px' },
      fontWeight: 600,
      color: '#222324',
      textAlign: 'center',
      width: '90%',
      mx: 'auto',
      maxWidth: { xs: '800px', lg: '1260px' },
    },
    reviewBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    reviewTitleStyle: {
      color: '#001C63',
      fontSize: { xs: '40px', sm: '60px', md: '70px', lg: '100px' },
      fontWeight: 400,
      lineHeight: 1,
    },
    reviewTextStyle: {
      color: '#000000CC',
      fontSize: { xs: '18px', sm: '20px', md: '21px', lg: '25px' },
      fontWeight: 500,
      textAlign: 'center',
    },

    swiperSlideStyle: {
      width: '55%',
      maxWidth: 183,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slideImageStyle: {
      width: { xs: '85%', sm: '100%' },
      maxWidth: '183px',
      height: { xs: 'auto', md: 'auto' },
      objectFit: 'cover',
      // position: 'relative',
      mx: 'auto',
    },
  },
};

// pricing Defference

export const containerStyle = {
  width: '100%',
  maxWidth: 1210,
  margin: 'auto',
  padding: '8px 0',
  position: 'relative',
  py: { xs: 2, md: 4, lg: 7 },
};

export const headingStyle = {
  width: '100%',
  mx: 'auto',
  maxWidth: { xs: '75%', sm: '70%', md: '60%', lg: '65%' },
  display: 'flex',
  justifyContent: 'center',
  pb: { xs: 2, sm: 3, md: 4, lg: 5 },
};

export const headingTextStyle = {
  color: '#001C63',
  textAlign: 'center',
  fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '32px' },
  fontWeight: 700,
  lineHeight: { xs: '30px', md: '48px' },
};

export const slideStyle = {
  paddingTop: '30px',
  paddingBottom: '30px',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  maxHeight: '400px',
};

export const cardStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  mx: { xs: 2, md: 1.5, lg: 1.5 },
  height: '100%',
  minHeight: { xs: '147px', sm: '180px', md: '243px', lg: '243px' },
  width: '100%',
  maxWidth: '400px',
  backgroundColor: '#F7F8FB',
  borderRadius: '15px',
  border: '0.9px solid rgba(0, 0, 0, 0.5)',
  '@media(min-width:1024px) and (max-width:1123px)': {
    mx: 1.4,
    maxWidth: '100%',
    minHeight: '270px',
    maxHeight: '100%',
  },
  '@media(min-width:952px) and (max-width:1023px)': {
    mx: 1,
    maxWidth: '100%',
    minHeight: '200px',
  },
  '@media(min-width:900px) and (max-width:951px)': {
    mx: 1,
    maxWidth: '100%',
    minHeight: '220px',
  },
  '@media(min-width:480px) and (max-width:768px)': {
    mx: 1,
    maxWidth: '350px',
  },
  '@media(min-width:320px) and (max-width:479px)': {
    mx: 1,
    maxWidth: '271px',
  },
  '&:hover': {
    backgroundColor: 'rgb(255, 255, 255)',
  },
};

export const cardStyleForHomePage = {
  ...cardStyle,
  boxShadow: '0',
  border: '1px solid #F7F8FB',
  '&:hover': {
    backgroundColor: '#fff',
    boxShadow: '0px 0px 11px 0 rgba(0,0,0,0.17)',
  },
};

export const avatarStyle = {
  width: { xs: '33px', sm: '40px', lg: '50px' },
  height: { xs: '33px', sm: '40px', lg: '43px' },
};

export const titleStyle = {
  color: '#001C63',
  fontSize: {
    xs: 'calc(14px + 0.4vw)',
    md: 'calc(15px + 0.3vw)',
    lg: 'calc(16px + 0.5vw)',
  },
  fontWeight: 600,
  lineHeight: { md: 'auto', lg: 1.5 },
  '@media(min-width: 1441px)': {
    fontSize: '23px',
  },
};

export const contentStyle = {
  textAlign: { xs: 'center', lg: 'left' },
  mx: 'auto',
  pt: 0,
};

export const paragraphStyle = {
  color: '#001C63',
  fontSize: {
    xs: '12px',
    sm: '13px',
    md: '15px',
    lg: '16px',
  },
  fontWeight: 400,
  lineHeight: { xs: '22px', md: '27px' },
};

export const PricingDefferenceStyles = {
  containerStyle: {
    width: { xs: '97%', lg: '95%', xl: '100%' },
    maxWidth: 1428,
    margin: 'auto',
    padding: '8px 0',
    position: 'relative',
    pt: { xs: 2, md: 4, lg: 7 },
  },
  mainTitleStyle: {
    color: '#001C63',
    textAlign: 'center',
    fontSize: { xs: '22px', sm: '25px', md: '28px', lg: '32px' },
    lineHeight: 1.5,
  },
  cardStyle: {
    width: '100%',
    height: '100%',
    maxWidth: '467px',
    minHeight: { xs: '215px', md: '220px', lg: '240px' },
    backgroundColor: '#FFFFFF',
    border: '0.9px solid #DEDCDC',
    boxShadow: '0px 4px 25.4px rgba(0, 0, 0, 0.08)',
    borderRadius: '14px',
    mx: { xs: 1, lg: 1.8 },
    px: 2.2,
    py: { xs: 1.5, sm: 2.2 },
    display: 'flex',
    flexDirection: 'column',
    '@media(min-width: 1441px) and (max-width: 1919px) ': {
      minHeight: '270px',
    },
  },
  imageStyle: {
    width: { xs: '45px', sm: '55px', lg: '80px' },
    height: 'auto',
    mb: 1,
  },
  typoBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 1, lg: 0 },
    minHeight: { md: '170px', lg: '150px' },
  },
};

export const EMPLOYEE_SLIDER_DATA = {
  slides: [
    {
      id: 1,
      videoUrl:
        'https://talent-main.s3.us-east-005.backblazeb2.com/GIFs/GIF1.gif',
      thumbnailUrl: '/images/homepage/hero/thumbnails/thmb-1.svg',
    },
    {
      id: 2,
      videoUrl:
        'https://talent-main.s3.us-east-005.backblazeb2.com/GIFs/GIF2.gif',
      thumbnailUrl: '/images/homepage/hero/thumbnails/thmb-2.svg',
    },
    {
      id: 3,
      videoUrl:
        'https://talent-main.s3.us-east-005.backblazeb2.com/GIFs/GIF3.gif',
      thumbnailUrl: '/images/homepage/hero/thumbnails/thmb-3.svg',
    },
    {
      id: 4,
      videoUrl:
        'https://talent-main.s3.us-east-005.backblazeb2.com/GIFs/GIF4.gif',
      thumbnailUrl: '/images/homepage/hero/thumbnails/thmb-4.svg',
    },
    {
      id: 5,
      videoUrl:
        'https://talent-main.s3.us-east-005.backblazeb2.com/GIFs/GIF5.gif',
      thumbnailUrl: '/images/homepage/hero/thumbnails/thmb-5.svg',
    },
  ],
  styles: {
    swiperStyle: {
      width: '100%',
      height: '100%',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    swiperSlideStyle: {
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      maxWidth: '230px',
    },
    videoStyle: {
      width: '100%',
      maxWidth: '230px',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '16.08px',
    },
  },
};

// hire-dedicated-developers page data

export const HIRE_DEDICATED_DEVELOPERS_DATA = {
  title: `Hire Dedicated <span style="color: #19B5AD; font-weight: 600">Developers</span>`,
  text: 'Skip the long hiring process. We connect you with skilled developers who are ready to jump in, work alongside your team, and start contributing from day one.',
  buttonText: 'Schedule a Call',
  link: '/book-a-demo',

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: 'calc(80vh - 127px)',
      minHeight: '450px',
      maxHeight: { xs: '450px', md: '600px' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      px: 2,
      py: { xs: 6, md: 8 },
      backgroundColor: '#F5F5F5',
      backgroundImage:
        "url('images/new-home/hire-dedicated-developers/bg.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: '100%',
      gap: 2,
      textAlign: 'center',
      '@media(min-width:1921px)': {
        maxHeight: '650px',
        py: 8,
      },
    },
    titleStyle: {
      fontSize: { xs: '23px', sm: '32px', md: '54px', lg: '74px' },
      width: '90%',
      maxWidth: { sm: '420px', md: '620px' },
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#111845',
    },
    textStyle: {
      width: { xs: '90%', sm: '100%' },
      maxWidth: { xs: '100%', sm: '90%', md: '850px', lg: '1080px' },
      fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '22px' },
      color: '#111845',
    },
    buttonStyle: {
      mt: 2,
      width: '65%',
      maxWidth: '202px',
      height: { xs: '38px', md: '43px' },
      background: 'linear-gradient(168deg, #2A3BAB, #111845)',
      borderRadius: '10px',
      fontSize: { xs: '14px', md: '16px' },
      px: 4,
      py: 1.5,
      textTransform: 'none',
      textWrap: 'nowrap',
    },
  },
};
export const OUR_AREA_OF_EXPERTISE_DATA = {
  title: 'OUR AREA OF EXPERTISE',
  text: 'Our strength lies in customizing augmentation service for any situation or setting - be it on-site, remote or hybrid',
  cards: [
    {
      id: 1,
      image:
        '/images/new-home/hire-dedicated-developers/our-area-expertise/01.png',
      title: 'Fixed Salary',
      description:
        'Need long-term support without the hassle of payroll complexities? Hire skilled IT professionals on a fixed monthly salary. ensures stability, predictable costs, and dedicated talent focused on your project throughout its lifecycle. ',
    },
    {
      id: 2,
      image:
        '/images/new-home/hire-dedicated-developers/our-area-expertise/02.png',
      title: 'Hourly Rate',
      description:
        'For flexible, task-based work or short-term needs, hire IT experts on an hourly basis. This model gives you complete control over the time and budget, ideal for agile development, quick fixes, or project-based consulting. ',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: '100%',
      maxHeight: { md: '700px' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: '100%',
      gap: 2,
      textAlign: 'center',
    },
    titleStyle: {
      width: '90%',
      fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
    },
    textStyle: {
      color: '#111845',
      fontSize: { xs: '13px', sm: '15px', md: '19px', lg: '28px' },
      fontWeight: 400,
      maxWidth: { sm: '480px', md: '800px', lg: '1080px' },
      width: '85%',
    },
    cardStyle: {
      width: '100%',
      mx: 'auto',
      px: 2.5,
      py: 2,
      maxWidth: { xs: '446px', md: '546px' },
      minHeight: '283px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #D7D0D0',
      backgroundColor: '#EDEEF5',
      borderRadius: '20px',
      boxShadow: '0px 0px 19.3px rgba(31, 49, 172, 0.21)',
      gap: 0.8,
    },
    imageStyle: {
      width: '100%',
      maxWidth: { xs: '55px', md: '65px', lg: '75px' },
      height: 'auto',
    },
    cardTitleStyle: {
      fontSize: {
        xs: '18px',
        sm: '20px',
        md: '23px',
        lg: '27px',
      },
      fontWeight: 600,
      color: '#111845',
    },
    cardDescriptionStyle: {
      fontSize: {
        xs: '12px',
        sm: '13px',
        md: '14px',
        lg: '18px',
      },
      lineHeight: 1.6,
      color: '#57585C',
      '@media(min-width:1024px) and (max-width:1062px)': {
        minHeight: '130px',
      },
      '@media(min-width:769px) and (max-width:875px)': {
        minHeight: '140px',
      },
    },
  },
};
export const EASY_STEPS_DATA = {
  title: `Hire Dedicated Developers with eSpark in <span style="color: #13A694; font-weight: 600">4</span> Easy Steps`,
  description:
    'Hire an individual to scale your team or build a dedicated development team from scratch in no time. Just tell us your requirements and get the best-fit experts under your complete control, just like core in-house team.',
  image: '/images/new-home/hire-dedicated-developers/easy-steps/easy-steps.png',

  // styles
  styles: {
    mainBoxStyle: {
      mx: 'auto',
      width: '90%',
      display: 'flex',
      maxWidth: '1200px',
      alignItems: 'center',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      gap: { xs: 3, md: 0 },
    },
    imageBoxStyle: {
      mx: { xs: 'auto', lg: 0 },
      height: 'auto',
      order: { xs: 2, md: 0 },
      width: { xs: '78%', sm: '310px', md: '335px', lg: '400px' },
      '@media(min-width: 769px) and (max-width: 1023px)': {
        width: '300px',
      },
    },
    titleAndDescriptionBoxStyle: {
      width: {
        xs: '90%',
        sm: '95%',
        md: 'calc(95% - 400px)',
        lg: 'calc(100% - 470px)',
      },
      display: 'flex',
      flexDirection: 'column',
      gap: 1.2,
      '@media(min-width: 769px) and (max-width: 1023px)': {
        width: 'calc(100% - 380px)',
      },
    },
    titleStyle: {
      fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '40px' },
      fontWeight: 600,
      color: '#201E1E',
      lineHeight: 1.3,
      textAlign: { xs: 'center', md: 'left' },
    },
    descriptionStyle: {
      fontWeight: 400,
      color: '#000000',
      lineHeight: '159%',
      textAlign: { xs: 'center', md: 'left' },
      fontSize: { xs: '12px', sm: '15px', lg: '19px' },
    },
  },
};
export const EXPERT_DEVELOPERS_DATA = {
  icon: '/images/new-home/hire-dedicated-developers/expert-developers/icon.png',
  title: 'Why Choose Expert Developers from eSpark Talent?',
  text: 'We connect you with reliable developers through a solid hiring process, so your projects stay on track and move forward efficiently.',
  cards: [
    {
      id: 1,
      image:
        '/images/new-home/hire-dedicated-developers/expert-developers/card4.png',
      title: 'Careful Hiring Process',
      description:
        'Every developer goes through a step-by-step check of their skills, background, and communication. We make sure you work with professionals who can start quickly and add real value to your team.',
    },
    {
      id: 2,
      image:
        '/images/new-home/hire-dedicated-developers/expert-developers/card3.png',
      title: 'Flexible Work Options',
      description:
        'Need part-time help or a full-time developer? We offer options that align with your workload, giving you control to grow or adjust your team based on project goals',
    },
    {
      id: 3,
      image:
        '/images/new-home/hire-dedicated-developers/expert-developers/card2.png',
      title: 'Works in Your Time Zone',
      description:
        'Our developers match your working hours so you can communicate easily during your day. This helps you stay connected and keep the work moving without delays.',
    },
    {
      id: 4,
      image:
        '/images/new-home/hire-dedicated-developers/expert-developers/card1.png',
      title: 'Support with Hiring & Paperwork',
      description:
        'We take care of contracts, payments, and legal steps so you don’t have to manage extra tasks. By handling the backend setup, you can stay focused on your work.',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: '100%',
      gap: { xs: 0.5, md: 6 },
      textAlign: 'left',
    },
    top: false,
    gridStyle: { md: 4.5 },
    slideStyle: {
      width: '90%',
      maxWidth: '350px',
      paddingBottom: '20px',
    },
    titleAndTextBoxStyle: {
      pt: { xs: 0, md: 0.4, lg: 0 },
      width: {
        xs: 'calc(100% - 27px)',
        sm: 'calc(100% - 37px)',
        md: 'calc(100% - 47px)',
        lg: 'calc(100% - 57px)',
      },
    },
    titleStyle: {
      width: { xs: '95%', sm: '100%' },
      maxWidth: { md: '700px', lg: '1000px' },
      fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '52px' },
      fontWeight: 600,
      color: '#222324',
    },
    iconStyle: {
      position: 'relative',
      width: { xs: '27px', sm: '37px', md: '47px', lg: '57px' },
      height: 'auto',
    },
    textStyle: {
      color: '#111845',
      fontSize: { xs: '13px', sm: '15px', md: '17px', lg: '19px' },
      fontWeight: 400,
      width: { xs: '85%', lg: 'auto' },
    },
    imageStyle: {
      width: '100%',
      maxWidth: { xs: '65px', md: '75px', lg: '127px' },
      height: 'auto',
    },
    cardStyle: {
      width: { xs: '95%', sm: '100%' },
      mx: 'auto',
      px: 3.5,
      maxWidth: { xs: '350px', md: '480px' },
      minHeight: { xs: '325px', sm: '290px', md: '315px' },
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '43px',
      boxShadow: `
      27.55px 8.48px 34.12px 0px rgba(24, 84, 153, 0.21),
      inset 0px 6.36px 8.48px 0px #ffffff
    `,
      gap: 0.8,
      '@media(min-width: 400px) and (max-width: 481px)': {
        minHeight: '280px',
      },
    },
    cardTitleStyle: {
      fontSize: {
        xs: '16px',
        md: '18px',
        lg: '21px',
      },
      fontWeight: 500,
      textAlign: 'center',
      color: '#111845',
      '@media(min-width: 769px) and (max-width:927px)': {
        minHeight: '54px',
      },
      '@media(min-width: 0px) and (max-width:408px)': {
        minHeight: '54px',
      },
    },
    cardDescriptionStyle: {
      fontSize: {
        xs: '12px',
        lg: '13px',
      },
      textAlign: 'center',
      lineHeight: 1.6,
      color: '#111845',
      minHeight: { xs: '100px', md: '120px', lg: '84px' },
      '@media(min-width: 0px) and (max-width:408px)': {
        minHeight: '154px',
      },
    },
  },
};
export const HIGH_STAKES_PROJECT_DATA = {
  title: 'A Vast Pool of Skilled Tech Talent for Your High-Stakes Projects',
  description:
    "At eSpark Talent, we open doors to a wide network of expert developers, engineers, designers, and technology specialists ready to power your most critical projects. Whether you're launching a new platform, scaling your infrastructure, or rebuilding your digital presence, we provide access to professionals who not only bring technical expertise but also real-world experience in delivering results under pressure.",
  description2:
    'Every candidate goes through a rigorous screening process where we assess technical skills, communication abilities, project experience, and cultural fit — ensuring you get people who can contribute from day one. From front-end and back-end developers, mobile app creators, DevOps engineers, AI and cloud specialists to UI/UX designers and digital marketers, we have specialists across the entire tech spectrum.',
  description3:
    'Need to ramp up quickly? Need niche skills for a mission-critical launch? Need a partner who understands both the tech and business side of scaling? eSpark Talent helps you move faster, minimize risk, and achieve bigger outcomes — without wasting time or resources.',
  image:
    '/images/new-home/hire-dedicated-developers/high-stakes-projects/ok.png',

  // styles
  styles: {
    mainBoxStyle: {
      mx: 'auto',
      width: '90%',
      display: 'flex',
      maxWidth: '1390px',
      alignItems: 'center',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      gap: { xs: 4, md: 7 },
      '@media(min-width: 769px) and (max-width: 1023px)': {
        flexDirection: 'column',
      },
    },
    imageBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mx: { xs: 'auto', lg: 0 },
      height: 'auto',
      order: { xs: 2, md: 0 },
      width: { xs: '90%', sm: '417px', md: '60%', lg: '557px' },
      '@media(min-width: 769px) and (max-width: 1023px)': {
        width: '55%',
      },

      boxShadow: '0px 0px 150px 0px rgba(27, 235, 208, 0.3)',
      background:
        'radial-gradient(circle, rgba(27, 235, 208, 0.2) 0%, transparent 200%)',
      borderRadius: '100%',
      // backgroundImage:
      //   'url(/images/new-home/hire-dedicated-developers/high-stakes-projects/bg.png)',
      // backgroundPosition: 'center',
      // backgroundSize: '500%',
    },
    titleAndDescriptionBoxStyle: {
      width: {
        xs: '90%',
        sm: '95%',
        md: 'calc(100% - 400px)',
        lg: 'calc(98% - 557px)',
      },
      mx: 'auto',
      flexDirection: 'column',
      '@media(min-width: 769px) and (max-width: 1023px)': {
        width: '95%',
      },
      display: 'flex',
      gap: { xs: 2, md: 1, lg: 1 },
    },
    titleStyle: {
      fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '47px' },
      fontWeight: 600,
      color: '#252525',
      lineHeight: { lg: 1.3 },
      textAlign: { xs: 'center', md: 'left' },
    },
    descriptionStyle: {
      fontWeight: 400,
      color: '#000000',
      lineHeight: '157%',
      textAlign: { xs: 'center', md: 'left' },
      fontSize: { xs: '10px', sm: '14px', md: '15px', lg: '18px' },
    },
  },
};
export const FREQUENTLY_ASKED_QUESTIOND_DATA = {
  title: 'Frequently Asked Questions',
  cards: [
    {
      id: 1,
      title: 'What does it mean to hire a dedicated developer?',
      description:
        'When you hire a dedicated developer, you get someone full-time working only on your project. eSpark Talent provides developers who focus solely on the tasks you need, making sure you get the expertise you need for the job.',
    },
    {
      id: 2,
      title:
        'How do I maintain the quality of work from a dedicated developer?',
      description:
        'Set specific objectives, provide detailed project briefs, and stay in regular communication. You can also review work periodically to confirm it meets your standards.',
    },
    {
      id: 3,
      title: 'Can a dedicated developer work with my existing team?',
      description:
        'Yes, eSpark Talent’s dedicated developers can easily collaborate with your team, following your processes and working together to help achieve your goals more efficiently.',
    },
    {
      id: 4,
      title: 'Why should I hire a dedicated developer instead of a team?',
      description:
        'A dedicated developer is ideal for projects that need deep focus and consistent effort. It’s great for long-term work where you need specialized skills but without the overhead of managing a larger team.',
    },
    {
      id: 5,
      title:
        'How do I know if a dedicated developer is a good fit for my project?',
      description:
        'Look for developers with relevant experience and skills for your project. You can also ask for previous work samples or references to assess their suitability.',
    },
    {
      id: 6,
      title: 'How much do dedicated developers cost?',
      description: `The cost depends on the developer's experience and the complexity of the project. eSpark Talent offers competitive rates to help you get the right skills at a fair price.`,
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: '100%',
      gap: { xs: 3, sm: 4 },
    },
    titleStyle: {
      width: { xs: '100%', lg: '100%' },
      maxWidth: { md: '800px', lg: 'auto' },
      fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
      textAlign: 'center',
    },
    buttonStyle: {
      width: { xs: '28px', md: '31px', lg: '41px' },
      height: { xs: '30px', md: '31px', lg: '41px' },
      minWidth: { xs: '5%', md: 'auto' },
      padding: 0,
      backgroundColor: '#F7F7FF',
      borderRadius: '8px',
      fontSize: { xs: '20px', md: '23px', lg: '35px' },
      color: '#6F6C90',
      textTransform: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 400,
      '&:hover': {
        backgroundColor: '#2870C3',
        color: '#fff',
      },
    },
    cardStyle: {
      width: { xs: '90%', sm: '85%', md: '100%' },
      mx: 'auto',
      px: { xs: 1.8, md: 2, lg: 3 },
      py: { xs: 1.8, md: 2, lg: 3 },
      maxWidth: { md: '596px' },
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: `
    0px 5px 16px rgba(8, 15, 52, 0.06),
    inset 0px 6.36px 8.48px 0px #ffffff
  `,
    },
    cardTitleStyle: {
      fontSize: {
        xs: '15px',
        md: '17px',
        lg: '22px',
      },
      width: { xs: 'calc(93% - 45px)', lg: 'calc(93% - 55px)' },
      fontWeight: 500,
      color: '#170F49',
    },
    cardDescriptionStyle: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
      },

      lineHeight: { xs: '23px', md: '30px' },
      color: '#6F6C90',
      width: '99%',
    },
  },
};
export const TALENT_ROSTER_DATA = {
  title: 'Our Curated Diverse Talent Roster',
  buttonText: 'Hire talent based on role',
  link: '/book-a-demo',
  icon: '/images/new-home/hire-dedicated-developers/expert-developers/icon.png',
  designations: [
    {
      title: 'Front-End Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/front-end.png',
    },
    {
      title: 'Back-end Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/back-end.png',
    },
    {
      title: 'Full Stack Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/full-stack.png',
    },
    {
      title: 'Mobile App Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/mobile-app-developers.png',
    },

    {
      title: 'Web  Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/web-developers.png',
    },
    {
      title: 'CMS Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/cms-developers.png',
    },
    {
      title: 'UI & UX Designers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/ui-ux-designers.png',
    },
    {
      title: 'DevOps Engineers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/devops-engineers.png',
    },
    {
      title: 'Social Media Managers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/social-media-managers.png',
    },
    {
      title: 'Salesforce Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/salesforce-developers.png',
    },
    {
      title: 'Product Managers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/product-managers.png',
    },
    {
      title: 'Project Managers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/project-managers.png',
    },
    {
      title: 'AR/VR Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/ar-vr-developers.png',
    },
    {
      title: 'Game Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/game-developers.png',
    },
    {
      title: 'Graphics Designers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/graphics-designers.png',
    },
    {
      title: 'Motion Designers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/motion-designers.png',
    },
    {
      title: 'Cloud Engineers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/cloud-engineers.png',
    },
    {
      title: 'Embedded Systems Engineers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/embedded-systems-engineers.png',
    },
    {
      title: 'Firmware Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/firmware-developers.png',
    },
    {
      title: 'IOT Developers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/iot-developers.png',
    },
    {
      title: 'Robotics Engineers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/robotics-engineers.png',
    },
    {
      title: 'Mechanical Design Engineers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/mechanical-design-engineers.png',
    },
    {
      title: 'Data Scientists',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/data-scientists.png',
    },
    {
      title: 'AI/ML Engineers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/aiml-engineers.png',
    },
    {
      title: 'Business Analysts',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/business-analysts.png',
    },
    {
      title: 'Digital Marketing Specialists',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/digital-marketing-specialists.png',
    },
    {
      title: 'QA Engineers',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/qa-engineers.png',
    },
    {
      title: 'SEO Experts',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/seo-experts.png',
    },
    {
      title: 'Video Editors',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/video-editors.png',
    },
    {
      title: 'Content Strategists',
      icon: '/images/new-home/hire-dedicated-developers/talent-roster/content-strategists.png',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: '100%',
      gap: { xs: 4, sm: 6 },
      textAlign: 'left',
    },
    textBoxStyle: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      gap: 0.5,
    },
    iconStyle: {
      position: 'relative',
      pt: { xs: 0.3, md: 0.5, lg: 1 },
      width: { xs: '27px', sm: '37px', md: '47px', lg: '57px' },
      height: 'auto',
    },
    titleAndTextBoxStyle: {
      pt: { xs: 0, md: 0.4, lg: 0 },
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    titleStyle: {
      width: '85%',
      maxWidth: { md: '700px', lg: '1000px' },
      fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '52px' },
      fontWeight: 600,
      color: '#222324',
      display: 'flex',
      gap: 0.5,
      textAlign: { xs: 'center', sm: 'flex-start' },
    },
    buttonStyle: {
      mt: 2,
      width: '65%',
      maxWidth: '297px',
      height: { xs: '38px', md: '43px' },
      background: 'linear-gradient(168deg, #2A3BAB, #111845)',
      color: '#FFFFFF',
      borderRadius: '10px',
      fontSize: { xs: '14px', md: '16px' },
      px: 4,
      py: 1.5,
      textTransform: 'none',
      textWrap: 'nowrap',
    },
    cardStyle: {
      width: '100%',
      maxWidth: { xs: '90%', sm: '85%', md: '292px' },
      minHeight: '71px',
      borderRadius: '6.9px',
      background: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      py: 0.8,
      px: 1.5,
    },
    imageStyle: { width: { xs: '55px', md: '65px' }, height: 'auto' },
    cardTitleStyle: {
      fontSize: { xs: '15px', md: '17px' },
      fontWeight: 500,
      color: '#000000',
    },
    cardDescriptionStyle: {
      fontSize: {
        xs: '10px',
        sm: '10px',
        md: '11px',
        lg: '13px',
      },
      textAlign: 'center',
      lineHeight: 1.6,
      color: '#111845',
    },
  },
};

//Fixed-Prices-projects page data

export const FIXED_PRICES_PROJECTS_DATA = {
  title: `Fixed Price <span style="color: #19B5AD; font-weight: 600">Projects</span>`,
  text: 'Grow your team, speed up delivery, and explore new markets with dedicated ODC services without the cost and hassle of expanding in-house.',
  buttonText: 'Schedule a Call',
  link: '/book-a-demo',

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: 'calc(80vh - 127px)',
      minHeight: '450px',
      maxHeight: { xs: '450px', md: '600px' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      px: 2,
      py: { xs: 6, md: 8 },
      backgroundColor: '#F5F5F5',
      backgroundImage:
        "url('images/new-home/hire-dedicated-developers/bg.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: '100%',
      gap: 2,
      textAlign: 'center',
      '@media(min-width:1921px)': {
        maxHeight: '650px',
        py: 8,
      },
    },
    titleStyle: {
      fontSize: { xs: '23px', sm: '32px', md: '54px', lg: '74px' },
      width: '70%',
      maxWidth: { xs: '300px', lg: '620px' },
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#111845',
    },
    textStyle: {
      width: { xs: '90%', sm: '80%' },
      maxWidth: { xs: '100%', sm: '90%', md: '750px', lg: '940px' },
      fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '22px' },
      color: '#111845',
    },
    buttonStyle: {
      mt: 2,
      width: '65%',
      maxWidth: '202px',
      height: { xs: '38px', md: '43px' },
      background: 'linear-gradient(168deg, #2A3BAB, #111845)',
      borderRadius: '10px',
      fontSize: { xs: '14px', md: '16px' },
      px: 4,
      py: 1.5,
      textTransform: 'none',
      textWrap: 'nowrap',
    },
  },
};
export const EXPLAINING_FIXED_PRICES_PROJECTS_DATA = {
  title: 'Explaining Fixed-price projects',
  description:
    "A fixed-price projects model is a sort of agreement where a client and a service provider concur on a set scope of work, deadlines, and payments. With this paradigm, you can define the project scope without having any prior experience with software development. The project's requirements, timeline, work scope, and expenses are all explicitly state at the outset.",
  description2:
    "An agreement between a client and a vendor on a predetermine scope of work, deadlines, and payments is implied by a fixed-price project. It's a fantastic choice for tasks with a predefine set of features and set due dates.",
  image:
    '/images/new-home/fixed-price-projects/explaining-fixed-price-projects/img.png',

  // styles
  styles: {
    containerStyle: {
      borderRadius: { xs: '30px', lg: '50px' },
      backgroundColor: '#edeef5',
      width: '100%',
      maxWidth: '1440px',
      mx: 'auto',
    },
    mainBoxStyle: {
      mx: 'auto',
      width: '90%',
      display: 'flex',
      maxWidth: '1200px',
      alignItems: 'center',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      pt: { xs: 4.5, lg: 3 },
      pb: { xs: 3.5, lg: 1 },
      gap: 1.5,
      '@media(min-width: 769px) and (max-width: 1023px)': {
        flexDirection: 'column',
        pt: 5,
      },
    },
    imageBoxStyle: {
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      order: { xs: 2, md: 0 },
      mx: { xs: 'auto', lg: 0 },
      width: { xs: '90%', sm: '417px', md: '550px', lg: '557px' },
      '@media(min-width: 769px) and (max-width: 1023px)': {
        width: '55%',
      },
    },
    titleAndDescriptionBoxStyle: {
      width: {
        xs: '95%',
        sm: '80%',
        md: 'calc(100% - 300px)',
        lg: 'calc(100% - 557px)',
      },
      mx: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: 2, md: 1.5 },
      '@media(min-width: 769px) and (max-width: 1023px)': {
        width: '92%',
      },
    },
    titleStyle: {
      fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
      textAlign: { xs: 'center', md: 'left' },
      '@media(min-width: 769px) and (max-width: 1023px)': {
        textAlign: 'center',
      },
    },
    descriptionStyle: {
      fontWeight: 400,
      color: '#111845',
      lineHeight: '157%',
      textAlign: { xs: 'center', md: 'left' },
      fontSize: { xs: '12px', sm: '15px', md: '17px', lg: '20px' },
      '@media(min-width: 769px) and (max-width: 1023px)': {
        textAlign: 'center',
      },
    },
  },
};
export const CHOOSE_AN_OFFSHORE_DEVELOPMENT_CENTER_DATA = {
  title: 'When Fixed Price Works Best - Clear, Efficient, Reliable',
  cards: [
    {
      id: 1,
      image:
        '/images/new-home/fixed-price-projects/offshore-development-center/card1.png',
      title: 'Strict Budgetary Constraints',
      description:
        'Fixed Price Projects are ideal when your budget is non-negotiable. At eSpark Talent, we offer clear, upfront pricing, ensuring your project stays within budget without any unexpected costs, providing financial predictability and peace of mind.',
    },
    {
      id: 2,
      image:
        '/images/new-home/fixed-price-projects/offshore-development-center/card2.png',
      title: 'Short-Term or Specific Initiatives',
      description:
        'For projects that are short-term or have a very specific focus, Fixed Price Projects offer a straightforward solution. We ensure these projects are delivered efficiently and effectively, meeting your exact requirements without the need for long-term commitments.',
    },
    {
      id: 3,
      image:
        '/images/new-home/fixed-price-projects/offshore-development-center/card3.png',
      title: 'Resource-Constraint Scenarios',
      description:
        "In situations where your internal resources are limited, our Fixed Price Project model steps in to fill the gap. We provide the necessary expertise and manpower, ensuring your project doesn't suffer due to in-house resource constraints.",
    },
    {
      id: 4,
      image:
        '/images/new-home/fixed-price-projects/offshore-development-center/card4.png',
      title: 'Time-Bound Deliverables',
      description:
        'When your project has strict deadlines, our team ensures timely delivery under the Fixed Price model. This approach keeps us focused on meeting your timeline, delivering quality results within the stipulated time frame.',
    },
    {
      id: 5,
      image:
        '/images/new-home/fixed-price-projects/offshore-development-center/card5.png',
      title: 'Defined Outcome Expectations',
      description:
        'For projects with clearly defined outcomes, our Fixed Price Projects model aligns perfectly. We understand the importance of delivering as per your expectations, ensuring the final output precisely meets your predefined objectives.',
    },
    {
      id: 6,
      image:
        '/images/new-home/fixed-price-projects/offshore-development-center/card6.png',
      title: 'Minimal Project Complexity',
      description:
        'When dealing with less complex projects, the Fixed Price model offered by us is an ideal choice. It simplifies project management and focuses on delivering straightforward solutions efficiently. saving you time and effort.',
    },
  ],

  // styles
  styles: {
    swipperStyle: {
      mx: 'auto',
      width: '80%',
      height: 'auto',
      maxWidth: '1400px',
      justifyContent: 'center',
    },
    mainBoxStyle: {
      mx: 'auto',
      width: '100%',
      maxWidth: '1440px',
      height: '100%',
      backgroundColor: '#edeef5',
      borderRadius: { xs: '30px', md: '50px' },
      backgroundSize: '100%',
      display: 'flex',
      maxHeight: { md: 'auto' },
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: { xs: 6, md: 8 },
    },
    titleStyle: {
      width: '80%',
      fontSize: { xs: '18px', sm: '23px', md: '32px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
      pb: { xs: 0, md: 7 },
      textAlign: 'center',
    },
    cardStyle: {
      width: '95%',
      px: { xs: 2, md: 3 },
      py: { xs: 1.5, md: 2 },
      maxWidth: { xs: '100%', md: '350px', lg: '375px' },
      minHeight: { xs: '265px', sm: '260px', md: '320px', lg: '340px' },
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'center',
      boxShadow: '-5px 4px 59.8px 0 rgba(24, 84, 153, 0.2)',
      backgroundColor: '#FFF',
      borderRadius: '20px',
      gap: 0.8,
      '@media(min-width: 400px) and (max-width: 481px)': {
        minHeight: '245px',
      },
    },
    slideStyle: {
      width: '90%',
      maxWidth: '350px',
      paddingBottom: '20px',
    },
    imageStyle: {
      width: '100%',
      maxWidth: { xs: '55px', md: '65px', lg: '75px' },
      height: 'auto',
    },
    cardTitleStyle: {
      fontSize: {
        xs: '18px',
        sm: '20px',
        md: '23px',
        lg: '27px',
      },
      fontWeight: 600,
      color: '#111845',
      lineHeight: 1.3,
      minHeight: { xs: 'auto', sm: '53px', md: '60px', lg: '70px' },
      '@media(min-width: 0px) and (max-width: 430px)': {
        minHeight: '50px',
      },
    },
    cardDescriptionStyle: {
      fontSize: {
        xs: '11px',
        sm: '12px',
        md: '13px',
        lg: '15px',
      },
      maxWidth: { xs: '300px', md: '328px' },
      minHeight: { xs: '140px', sm: '125px', md: '155px', lg: '170px' },
      lineHeight: 1.6,
      color: '#57585C',
    },
  },
};
export const FIXED_PRICE_PROJECT_CONTRACT = {
  title: 'Fixed Price Project Contract Process',
  description:
    'By defining a clear scope, budget, and timeline, we guarantee reliable project delivery.',
  image: '/images/new-home/fixed-price-projects/project-contract/emp.png',
  buttonText: 'Schedule a Call',
  link: '/book-a-demo',
  listItems: [
    {
      icon: '/images/new-home/fixed-price-projects/project-contract/project-a-scoping.png',
      text: 'Project a Scoping and Analysis ',
      vector: '/images/new-home/fixed-price-projects/project-contract/line.png',
    },
    {
      icon: '/images/new-home/fixed-price-projects/project-contract/project-planning.png',
      text: 'Project Planning & Resource Allocation',
      vector: '/images/new-home/fixed-price-projects/project-contract/line.png',
    },
    {
      icon: '/images/new-home/fixed-price-projects/project-contract/delivery-review.png',
      text: 'Development & Implementation',
      vector: '/images/new-home/fixed-price-projects/project-contract/line.png',
    },
    {
      icon: '/images/new-home/fixed-price-projects/project-contract/quality-assurance.png',
      text: 'Quality Assurance and Testing',
      vector: '/images/new-home/fixed-price-projects/project-contract/line.png',
    },
    {
      icon: '/images/new-home/fixed-price-projects/project-contract/delivery-review.png',
      text: 'Delivery and Review',
      vector:
        '/images/new-home/fixed-price-projects/project-contract/vector-vertical.png',
      vector_right: true,
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      maxWidth: '1300px',
      mx: 'auto',
      flexGrow: 1,
    },
    firstGridBoxStyle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleAndDescriptionBoxStyle: {
      mx: 'auto',
      width: '80%',
      py: 2,
      textAlign: { xs: 'center', md: 'left' },
    },
    textStyle: {
      fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
      width: { xs: '90%', md: '100%' },
      mx: 'auto',
      lineHeight: 1.3,
      mb: { xs: 0.5 },
    },
    descriptionStyle: {
      fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '20px' },
      fontWeight: 400,
      color: '#111845',
      width: { xs: '80%', md: '100%' },
      mx: 'auto',
      lineHeight: 1.5,
    },
    imageBoxStyle: {
      width: '93%',
      px: 2,
      textAlign: { xs: 'center', md: 'left' },
    },
    imageStyle: {
      width: { xs: '80%', md: '85%', lg: 'auto' },
      maxWidth: { xs: '252px', md: '85%', lg: 'auto' },
      height: 'auto',
    },
    secondGridBoxStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: { xs: 'center', md: 'flex-start' },
      // backgroundColor: 'yellow',
      px: { lg: 2.5 },
    },
    listStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: { xs: 6, md: 8.5 },
      pb: { xs: 10, md: 9 },
    },
    listItemStyle: { display: 'flex', gap: 1.5, py: 0, position: 'relative' },
    listItemIconStyle: {
      width: { xs: '32px', sm: '40px', md: '45px', lg: '68px' },
      height: 'auto',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
    },
    vectorStyle: {
      width: { xs: '6.4px', md: 'auto' },
      position: 'absolute',
      top: { xs: 59, md: 59, lg: 70 },
    },
    listItemTextStyle: {
      fontSize: { xs: '14px', sm: '16px', md: '17px', lg: '20px' },
      fontWeight: 600,
      color: '#111845',
    },
    rightVectorBoxStyle: {
      width: { xs: '80%', md: '90%' },
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      top: { xs: 65, md: 81.5, lg: 95 },
      left: { xs: 45, lg: 50 },
    },
    rightVectorStyle: {
      width: {
        xs: 'calc(65% - 130px)',
        sm: 'calc(65% - 148px)',
        md: 'calc(95% - 120px)',
      },
      pr: 2,
      pt: 2,
    },
    buttonStyle: {
      mt: 2,
      width: '65%',
      maxWidth: '202px',
      height: { xs: '38px', md: '43px' },
      background: 'linear-gradient(168deg, #2A3BAB, #111845)',
      borderRadius: '10px',
      fontSize: { xs: '14px', md: '16px' },
      px: 4,
      py: 1.5,
      textTransform: 'none',
      textWrap: 'nowrap',
    },
  },
};
export const FIXED_PRICE_FREQUENTLY_ASKED_QUESTIOND_DATA = {
  title: 'Frequently Asked Questions',
  cards: [
    {
      id: 1,
      title: 'How do I prevent my project from going over budget?',
      description:
        'Define the project scope in detail from the start, provide detailed requirements, and maintain regular communication with the team to keep everything on track.',
    },
    {
      id: 2,
      title: 'Can the price change during the project?',
      description:
        'Typically, the price stays the same unless there are significant changes to the project scope. If new requirements are added, it could lead to additional costs.',
    },
    {
      id: 3,
      title:
        'How do I make sure the project stays on track with a fixed price?',
      description:
        'Having clear milestones and checking in regularly helps keep everything moving forward. eSpark Talent keeps you updated so your project stays on schedule and within the agreed budget.',
    },
    {
      id: 4,
      title: 'What is a Fixed Price Project?',
      description:
        'This model works best for projects with clear goals and well-defined tasks, like building a website or creating an app. eSpark Talent delivers exactly what you need, staying within your budget and time frame.',
    },
    {
      id: 5,
      title: 'What are the benefits of a fixed price model?',
      description:
        'With a fixed price model, you know the total cost in advance, making it easier to budget and plan. It’s perfect for projects with clear requirements and defined outcomes.',
    },
    {
      id: 6,
      title: 'When is the fixed price model ideal for a project?',
      description:
        'This model works best for projects with clear goals and well-defined tasks, like building a website or creating an app. eSpark Talent delivers exactly what you need, staying within your budget and time frame.',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: '100%',
      gap: { xs: 3, sm: 4 },
    },
    titleStyle: {
      width: { xs: '100%', lg: '100%' },
      maxWidth: { md: '800px', lg: 'auto' },
      fontSize: { xs: '18px', sm: '23px', md: '32px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
      textAlign: 'center',
    },
    buttonStyle: {
      width: { xs: '28px', md: '31px', lg: '41px' },
      height: { xs: '30px', md: '31px', lg: '41px' },
      minWidth: { xs: '5%', md: 'auto' },
      padding: 0,
      backgroundColor: '#F7F7FF',
      borderRadius: '8px',
      fontSize: { xs: '20px', md: '23px', lg: '35px' },
      color: '#6F6C90',
      textTransform: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 400,
      '&:hover': {
        backgroundColor: '#2870C3',
        color: '#fff',
      },
    },
    cardStyle: {
      width: { xs: '90%', sm: '85%', md: '100%' },
      mx: 'auto',
      px: { xs: 1.8, md: 2, lg: 3 },
      py: { xs: 1.8, md: 2, lg: 3 },
      maxWidth: { md: '596px' },
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: `
    0px 5px 16px rgba(8, 15, 52, 0.06),
    inset 0px 6.36px 8.48px 0px #ffffff
  `,
    },
    cardTitleStyle: {
      fontSize: {
        xs: '15px',
        md: '17px',
        lg: '22px',
      },
      width: { xs: 'calc(93% - 45px)', lg: 'calc(93% - 55px)' },
      fontWeight: 500,
      color: '#170F49',
    },
    cardDescriptionStyle: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
      },

      lineHeight: { xs: '23px', md: '30px' },
      color: '#6F6C90',
      width: '99%',
    },
  },
};
export const PRODUCT_JOURNEY_DATA = {
  title: 'Power Up Every Stage of Your Product Journey',
  description:
    'Increase your level of performance with our full-stack software development services at a fixed cost without sacrificing quality.',
  cards: [
    {
      title: 'UI/UX Design Services',
      image:
        '/images/new-home/fixed-price-projects/product-journey/ui-ux-design.png',
      description:
        'Our designers don’t just make things look good—they make them work beautifully. We create intuitive, user-centered interfaces that enhance experiences and drive results.',
    },
    {
      title: 'Custom Software Development',
      image:
        '/images/new-home/fixed-price-projects/product-journey/custom-software-development.png',
      description:
        'From web applications to enterprise systems, we create custom software solutions built around your specific business goals, not off-the-shelf templates.',
    },
    {
      title: 'Mobile App Development',
      image:
        '/images/new-home/fixed-price-projects/product-journey/mobile-app-development.png',
      description:
        'Whether you need an iOS, Android, or cross-platform app, our mobile experts design and develop user-friendly, high-performance applications that help you reach and engage your audience.',
    },
    {
      title: 'Embedded Systems Development',
      image:
        '/images/new-home/fixed-price-projects/product-journey/embedded-systems-development.png',
      description:
        'Our embedded engineers design reliable, secure, and efficient hardware-software solutions for industries like automotive, healthcare, and IoT, helping you innovate in a connected world.',
    },
    {
      title: 'Mechanical Design and Engineering',
      image:
        '/images/new-home/fixed-price-projects/product-journey/mechanical-design.png',
      description:
        'We support your hardware projects with mechanical design services, covering everything from product development to prototyping and manufacturability improvements.',
    },
    {
      title: 'Digital Marketing & Growth Support',
      image:
        '/images/new-home/fixed-price-projects/product-journey/digital-marketing-support.png',
      description:
        'Beyond development, we help you launch and grow with digital marketing services including SEO, PPC, social media management, and email marketing to build your brand and generate real results.',
    },
    {
      title: 'Quality Assurance and Testing',
      image:
        '/images/new-home/fixed-price-projects/product-journey/quality-assurance.png',
      description:
        'We catch problems before your users do. Our QA experts perform detailed testing across platforms and devices to ensure your software is reliable, secure, and ready for real-world use.',
    },
    {
      title: 'Dedicated Development Teams',
      image:
        '/images/new-home/fixed-price-projects/product-journey/dedicated-development-teams.png',
      description:
        'Build your own team of skilled developers fully aligned with your project needs. We carefully assemble teams that act as a true extension of your in-house staff, ensuring smooth collaboration and faster delivery.',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      width: '90%',
      mx: 'auto',
      maxWidth: '1440px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: { xs: 0, md: 4 },
    },
    contentBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      textAlign: 'center',
    },
    titleStyle: {
      fontSize: { xs: '18px', sm: '23px', md: '32px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
    },
    descriptionStyle: {
      fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
      fontWeight: 400,
      width: { xs: '80%', md: 'auto' },
      mx: 'auto',
      color: '#111845',
      '@media(min-width: 769px) and (max-width: 1426px)': {
        width: '85%',
      },
    },
    slideStyle: {
      width: '90%',
      maxWidth: '350px',
      paddingBottom: '20px',
    },
    cardStyle: {
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: { xs: 'center', md: 'flex-start' },
      width: '100%',
      maxWidth: '309px',
      minHeight: { xs: '235px', md: '240px', lg: '230px' },
      backgroundColor: '#E8F4FD',
      boxShadow: '0px 3.7px 6.96px rgba(135, 128, 128, 0.29)',
      border: '1px #11184530',
      borderRadius: '6px',
      textAlign: 'center',
      py: 1.5,
      px: 2,
      '@media(min-width: 400px) and (max-width: 481px)': {
        minHeight: '215px',
      },
    },
    titleAndDescripitonBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0.8,
      mt: 0.8,
    },
    imageStyle: { width: { xs: '55px', lg: 'auto' }, height: 'auto' },
    cardTitleStyle: {
      fontSize: '18px',
      fontWeight: 500,
      color: '#111845',
      minHeight: '55px',
    },
    cardDescriptionStyle: {
      fontSize: { xs: '11px', md: '13px' },
      fontWeight: 400,
      color: '#57585C',
      minHeight: '85px',
      '@media(min-width: 0px) and (max-width: 424px)': {
        minHeight: '120px',
      },
    },
  },
};

// offshore-development-center page data

export const OFFSHORE_DEVELOPMENT_CENTER_DATA = {
  title: `Offshore <span style="color: #19B5AD; font-weight: 600">Development</span> Center`,
  text: 'Grow your team, speed up delivery, and explore new markets with dedicated ODC services without the cost and hassle of expanding in-house.',
  buttonText: 'Schedule a Call',
  link: '/book-a-demo',

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: 'calc(80vh - 127px)',
      minHeight: '450px',
      maxHeight: { xs: '450px', md: '600px' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      px: 2,
      py: { xs: 6, md: 8 },
      backgroundColor: '#F5F5F5',
      backgroundImage:
        "url('images/new-home/hire-dedicated-developers/bg.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: '100%',
      gap: 2,
      textAlign: 'center',
      '@media(min-width:1921px)': {
        maxHeight: '650px',
        py: 8,
      },
    },
    titleStyle: {
      fontSize: { xs: '23px', sm: '32px', md: '54px', lg: '74px' },
      width: '95%',
      maxWidth: { sm: '420px', md: '620px', lg: '900px' },
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#111845',
    },
    textStyle: {
      width: { xs: '90%', sm: '100%' },
      maxWidth: { xs: '100%', sm: '90%', md: '740px', lg: '840px' },
      fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '22px' },
      color: '#111845',
    },
    buttonStyle: {
      mt: 2,
      width: '65%',
      maxWidth: '202px',
      height: { xs: '38px', md: '43px' },
      background: 'linear-gradient(168deg, #2A3BAB, #111845)',
      borderRadius: '10px',
      fontSize: { xs: '14px', md: '16px' },
      px: 4,
      py: 1.5,
      textTransform: 'none',
      textWrap: 'nowrap',
    },
  },
};
export const ODC_SOLUTIONS = {
  title: 'Turn Your Vision into Reality with Our Expert ODC Solutions',
  description:
    'We combine innovation, precision, & effective strategies to deliver results that make a lasting impact.',
  cards: [
    {
      title: ' UI/UX Design Services',
      image:
        '/images/new-home/fixed-price-projects/product-journey/ui-ux-design.png',
      description:
        'Our designers don’t just make things look good—they make them work beautifully. We create intuitive, user-centered interfaces that enhance experiences and drive results.',
    },
    {
      title: 'Custom Software Development',
      image:
        '/images/new-home/fixed-price-projects/product-journey/custom-software-development.png',
      description:
        'From web applications to enterprise systems, we create custom software solutions built around your specific business goals, not off-the-shelf templates.',
    },
    {
      title: 'Mobile App Development',
      image:
        '/images/new-home/fixed-price-projects/product-journey/mobile-app-development.png',
      description:
        'Whether you need an iOS, Android, or cross-platform app, our mobile experts design and develop user-friendly, high-performance applications that help you reach and engage your audience.',
    },
    {
      title: 'Embedded Systems Development',
      image:
        '/images/new-home/fixed-price-projects/product-journey/embedded-systems-development.png',
      description:
        'Our embedded engineers design reliable, secure, and efficient hardware-software solutions for industries like automotive, healthcare, and IoT, helping you innovate in a connected world.',
    },
    {
      title: 'Mechanical Design and Engineering',
      image:
        '/images/new-home/fixed-price-projects/product-journey/mechanical-design.png',
      description:
        'We support your hardware projects with mechanical design services, covering everything from product development to prototyping and manufacturability improvements.',
    },
    {
      title: 'Digital Marketing & Growth Support',
      image:
        '/images/new-home/fixed-price-projects/product-journey/digital-marketing-support.png',
      description:
        'Beyond development, we help you launch and grow with digital marketing services including SEO, PPC, social media management, and email marketing to build your brand and generate real results.',
    },
    {
      title: 'Quality Assurance and Testing',
      image:
        '/images/new-home/fixed-price-projects/product-journey/quality-assurance.png',
      description:
        'We catch problems before your users do. Our QA experts perform detailed testing across platforms and devices to ensure your software is reliable, secure, and ready for real-world use.',
    },
    {
      title: 'Dedicated Development Teams',
      image:
        '/images/new-home/fixed-price-projects/product-journey/dedicated-development-teams.png',
      description:
        'Build your own team of skilled developers fully aligned with your project needs. We carefully assemble teams that act as a true extension of your in-house staff, ensuring smooth collaboration and faster delivery.',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      width: '90%',
      mx: 'auto',
      maxWidth: '1440px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: { xs: 0, md: 4 },
    },
    contentBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      textAlign: 'center',
    },
    titleStyle: {
      fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
    },
    descriptionStyle: {
      fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
      fontWeight: 400,
      width: { xs: '80%', md: 'auto' },
      mx: 'auto',
      color: '#111845',
      '@media(min-width: 769px) and (max-width: 1426px)': {
        width: '85%',
      },
    },
    slideStyle: {
      width: '90%',
      maxWidth: '350px',
      paddingBottom: '20px',
    },
    cardStyle: {
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: { xs: 'center', md: 'flex-start' },
      width: '100%',
      maxWidth: '309px',
      minHeight: { xs: '235px', md: '240px', lg: '230px' },
      backgroundColor: '#E8F4FD',
      boxShadow: '0px 3.7px 6.96px rgba(135, 128, 128, 0.29)',
      border: '1px #11184530',
      borderRadius: '6px',
      textAlign: 'center',
      py: 1.5,
      px: 2,
      '@media(min-width: 400px) and (max-width: 481px)': {
        minHeight: '215px',
      },
    },
    titleAndDescripitonBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0.8,
      mt: 0.8,
    },
    imageStyle: { width: { xs: '55px', lg: 'auto' }, height: 'auto' },
    cardTitleStyle: {
      fontSize: '18px',
      fontWeight: 500,
      color: '#111845',
      minHeight: '55px',
    },
    cardDescriptionStyle: {
      fontSize: { xs: '11px', md: '13px' },
      fontWeight: 400,
      color: '#57585C',
      minHeight: '85px',
      '@media(min-width: 0px) and (max-width: 424px)': {
        minHeight: '120px',
      },
    },
  },
};
export const DOORSTEP_DATA = {
  subTitle: 'Our Benefits',
  title: 'Bringing Global Expertise to Your Doorstep',
  image: '/images/new-home/offshore-development-center/doorstep/line.png',
  leftDesignImage:
    '/images/new-home/offshore-development-center/doorstep/left-design.png',
  rightDesignImage:
    '/images/new-home/offshore-development-center/doorstep/right-design.png',
  expertise: [
    {
      icon: '/images/new-home/offshore-development-center/doorstep/ellipse.png',
      text: 'Cost-Effective Development',
    },
    {
      icon: '/images/new-home/offshore-development-center/doorstep/ellipse.png',
      text: 'Scalable and Flexible',
    },
    {
      icon: '/images/new-home/offshore-development-center/doorstep/ellipse.png',
      text: 'Global Talent Access Solutions',
    },
    {
      icon: '/images/new-home/offshore-development-center/doorstep/ellipse-blue.png',
      text: 'Focus on Core Business Activities',
    },
    {
      icon: '/images/new-home/offshore-development-center/doorstep/ellipse-blue.png',
      text: 'Scalable and Flexible',
    },
    {
      icon: '/images/new-home/offshore-development-center/doorstep/ellipse-blue.png',
      text: 'Enhanced Quality & Productivity',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      mx: 'auto',
      width: '100%',
      maxWidth: '1440px',
      backgroundColor: '#edeef5',
      borderRadius: { xs: '30px', lg: '50px' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      py: { xs: 6, lg: 7 },
      gap: 5,
    },
    subTitleAndTitleBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    subTitleStyle: {
      fontSize: { xs: '17px', sm: '19px', md: '22px', lg: '28px' },
      fontWeight: 400,
      color: '#111845',
    },
    titleStyle: {
      fontSize: { xs: '18px', sm: '23px', md: '32px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
      textAlign: 'center',
      px: 3,
    },
    parentBoxStyle: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: { md: 1 },
    },
    leftDesignStyle: {
      width: { md: '17.1%', lg: '200px' },
      height: { xs: '302px', lg: 'auto' },
      '@media(max-width: 1023px)': {
        display: 'none',
      },
    },
    rightDesignStyle: {
      width: { md: '17.1%', lg: '200px' },
      height: { xs: '302px', lg: 'auto' },
      '@media(max-width: 1023px)': {
        display: 'none',
      },
    },
    expertiseAndLogoBoxStyle: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      position: 'relative',
      '@media(max-width:768px)': {
        flexDirection: 'column',
        gap: 3.5,
      },
    },
    expertiseBoxStyle: {
      width: { xs: '75%', md: 'calc(61% - 217px)', lg: 'calc(62% - 237px)' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: { xs: 3, md: 7.5, lg: 9.5 },
      '@media(min-width: 769px) and (max-width:1023px)': {
        gap: 6,
      },
    },
    expertiseCardStyle: {
      width: '100%',
      minHeight: { xs: '72px', md: '78px', lg: '84px' },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '23px',
      boxShadow: '-13px 4px 16.1px rgba(24, 84, 153, 0.21)',
      backgroundColor: '#EFEFEF',
      position: 'relative',
      zIndex: 1,
      p: 1,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '23px',
        boxShadow: 'inset 0px -3px 1.7px rgba(0, 0, 0, 0.05)',
        pointerEvents: 'none',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '23px',
        boxShadow: 'inset 0px 3px 4px rgba(255, 255, 255, 1)',
        pointerEvents: 'none',
      },
    },
    expertiseTextBoxStyle: {
      width: '99%',
      display: 'flex',
      justifyContent: { xs: 'space-evenly', md: 'space-between' },
      alignItems: 'center',
    },
    leftExpertiseFirstIconStyle: {
      width: { md: '28px', lg: '31px' },
      '@media(min-width: 769px) and (max-width:1023px)': {
        display: 'none',
      },
    },
    expertiseTextStyle: {
      width: { xs: 'calc(80% - 28px)', lg: 'calc(100% - 64px)' },
      fontWeight: 500,
      color: '#111845',
      textAlign: 'center',
      fontSize: { xs: 'clamp(14px, 1.3vw, 21px)' },
      '@media(max-width:1023px)': {
        width: 'calc(90% - 28px)',
      },
    },
    leftExpertiseLastIcon: {
      width: { md: '28px', lg: '31px' },
      display: { xs: 'none', md: 'flex' },
    },
    firstVectorStyle: {
      width: { xs: '100%', md: '60%', lg: '40%' },
      height: { xs: '8.2px', lg: '10px' },
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 0,
    },
    secondVectorStyle: {
      width: { xs: '', md: '40%', lg: '46%' },
      height: { md: '8.2px', lg: '10px' },
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: {
        md: 'translate(-50%, -50%) rotate(48deg)',
        lg: 'translate(-50%, -50%) rotate(53deg)',
      }, // <-- added rotation
      transformOrigin: 'center',
      zIndex: 0,
      '@media(min-width: 1200px) and (max-width:1299px)': {
        width: '50%',
        transform: 'translate(-50%, -50%) rotate(47deg)',
      },
      '@media(min-width: 1130px) and (max-width:1199px)': {
        width: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)',
      },
      '@media(min-width: 1024px) and (max-width:1129px)': {
        width: '60%',
        transform: 'translate(-50%, -50%) rotate(44deg)',
      },
    },
    thirdVectorStyle: {
      width: { xs: '', md: '40%', lg: '46%' },
      height: { md: '8.2px', lg: '10px' },
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: {
        md: 'translate(-50%, -50%) rotate(132deg)',
        lg: 'translate(-50%, -50%) rotate(127deg)',
      },
      transformOrigin: 'center',
      zIndex: 0,
      '@media(min-width: 1200px) and (max-width:1299px)': {
        width: '50%',
        transform: 'translate(-50%, -50%) rotate(133deg)',
      },
      '@media(min-width: 1130px) and (max-width:1199px)': {
        width: '50%',
        transform: 'translate(-50%, -50%) rotate(134deg)',
      },
      '@media(min-width: 1024px) and (max-width:1129px)': {
        width: '60%',
        transform: 'translate(-50%, -50%) rotate(136deg)',
      },
    },
    logoOuterBoxStyle: {
      width: { xs: '180px', md: '227px', lg: '237px' },
      height: { xs: '180px', md: '227px', lg: '237px' },
      borderRadius: '100%',
      backgroundColor: '#edeef5',
      border: '1px solid rgba(70, 70, 72, 0.08)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      '@media(min-width:769px) and (max-width:1023px)': {
        width: '190px',
        height: '190px',
      },
    },
    logoInnerBoxStyle: {
      width: '83%',
      height: '83%',
      borderRadius: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EFEFEF',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '100%',
        boxShadow: 'inset 0px -3px 1.7px rgba(0, 0, 0, 0.05)',
        pointerEvents: 'none',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '100%',
        boxShadow: 'inset 0px 3px 4px rgba(255, 255, 255, 1)',
        pointerEvents: 'none',
      },
    },
    rightExpertiseFirstIconStyle: {
      width: { md: '28px', lg: '31px' },
      display: { xs: 'none', md: 'flex' },
    },
    rightExpertiseLastIconStyle: {
      width: { md: '28px', lg: '31px' },
      '@media(min-width:769px) and (max-width: 1023px)': {
        display: 'none',
      },
    },
  },
};
export const WHY_CHOOSE_AN_OFFSHORE_DEVELOPMENT_CENTER = {
  icon: '/images/new-home/hire-dedicated-developers/expert-developers/icon.png',
  title: 'Why Choose an Offshore Development Center?',
  cards: [
    {
      id: 1,
      image:
        '/images/new-home/offshore-development-center/why-choose-an-offshore-development-center/accelerate.png',
      title: 'Accelerate Your Business Growth',
      description:
        'An Offshore Development Center (ODC) is an effective way to scale your operations rapidly. With access to our resources, you can easily expand your team and capabilities to keep up with the growing demands of your business.',
    },
    {
      id: 2,
      image:
        '/images/new-home/offshore-development-center/why-choose-an-offshore-development-center/unlock.png',
      title: 'Unlock a Global Talent Pool',
      description:
        'Our ODC services connect you to a diverse pool of global talent. This helps you bring in specialized skills and fresh perspectives essential for innovative and high-quality solutions.',
    },
    {
      id: 3,
      image:
        '/images/new-home/offshore-development-center/why-choose-an-offshore-development-center/maximize.png',
      title: 'Maximize Cost Efficiency',
      description:
        'Implementing an ODC reduces operational costs significantly. Our model ensures you receive top-tier development services at a fraction of the cost of expanding your in-house team.',
    },
    {
      id: 4,
      image:
        '/images/new-home/offshore-development-center/why-choose-an-offshore-development-center/manage.png',
      title: 'Manage Large-Scale Projects',
      description:
        'When it comes to handling complex, large-scale projects, an ODC provides the necessary bandwidth and expertise. We ensure these projects are executed with precision and the attention to detail they deserve.',
    },
    {
      id: 5,
      image:
        '/images/new-home/offshore-development-center/why-choose-an-offshore-development-center/speed-up.png',
      title: 'Speed Up Your Time-to-Market',
      description:
        'Our ODC helps accelerate your development cycle. With streamlined project management and quick turnarounds, we reduce your product’s time-to-market and help you stay ahead of the competition.',
    },
    {
      id: 6,
      image:
        '/images/new-home/offshore-development-center/why-choose-an-offshore-development-center/effortless.png',
      title: 'Effortless Integration with Existing Systems',
      description:
        'We specialize in seamlessly integrating new developments with your existing systems, ensuring smooth transitions and uninterrupted operations.',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: '100%',
      gap: { xs: 1, md: 6 },
      textAlign: 'left',
      px: { xs: 2.5, lg: 0 },
    },
    top: true,
    gridStyle: { md: 'auto' },
    slideStyle: {
      width: '95%',
      maxWidth: '350px',
      paddingBottom: '20px',
    },
    titleAndTextBoxStyle: {
      pt: { xs: 0, md: 0.4, lg: 0 },
      width: {
        xs: 'calc(100% - 27px)',
        sm: 'calc(100% - 37px)',
        md: 'calc(100% - 47px)',
        lg: 'calc(100% - 57px)',
      },
    },
    titleStyle: {
      width: { xs: '100%', sm: '90%', lg: '100%' },
      maxWidth: { md: '800px', lg: '1000px' },
      fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
    },
    iconStyle: {
      position: 'relative',
      width: { xs: '27px', sm: '37px', md: '47px', lg: '57px' },
      height: 'auto',
    },
    textStyle: {
      color: '#111845',
      fontSize: { xs: '13px', sm: '15px', md: '17px', lg: '19px' },
      fontWeight: 400,
      width: { xs: '85%', lg: 'auto' },
    },
    imageStyle: {
      width: '100%',
      maxWidth: { xs: '65px', md: '75px', lg: '127px' },
      height: 'auto',
    },
    cardStyle: {
      width: { xs: '100%', sm: '100%' },
      mx: 'auto',
      py: 3.5,
      px: { xs: 2.5, lg: 2.3 },
      maxWidth: { xs: '342px', md: '349px' },
      minHeight: { xs: '382px', sm: '300px', md: '350px', lg: '472px' },
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid rgba(214, 214, 215, 1)',
      justifyContent: { xs: 'space-between' },
      backgroundColor: '#fff',
      borderRadius: '20px',
      boxShadow: `
      27.55px 8.48px 34.12px 0px rgba(24, 84, 153, 0.21),
      inset 0px 6.36px 8.48px 0px #ffffff
    `,
      gap: 2,
      '@media(min-width: 400px) and (max-width: 481px)': {
        minHeight: '300px',
      },
    },
    cardTitleStyle: {
      fontSize: {
        xs: '16px',
        sm: '18px',
        md: '25px',
        lg: '28.8px',
      },
      fontWeight: 500,
      color: '#111845',
      minHeight: { xs: '50px', md: '87px' },
    },
    cardDescriptionStyle: {
      fontSize: {
        xs: '12px',
        lg: '15px',
      },
      lineHeight: 1.6,
      color: '#111845',
      minHeight: { xs: '100px', md: '144px' },
      '@media(min-width: 375px) and (max-width: 424px)': {
        minHeight: '155px',
      },
      '@media(min-width: 0px) and (max-width: 374px)': {
        minHeight: '173px',
      },
    },
  },
};
export const OFFSHORE_DEVELOPMENT_FREQUENTLY_ASKED_QUESTIOND_DATA = {
  title: 'Frequently Asked Questions',
  cards: [
    {
      id: 1,
      title: 'What is an Offshore Development Center (ODC)?',
      description:
        'An ODC is a remote team working from another country to handle tasks like coding, testing, and support. eSpark Talent helps you build a team that works just like your in-house staff, offering skilled professionals at affordable rates.',
    },
    {
      id: 2,
      title: 'Is my data safe with an Offshore Development Center (ODC)?',
      description:
        'Yes, eSpark Talent follows strict security measures, like encryption and secure access, to protect your data while the team works on your project.',
    },
    {
      id: 3,
      title: 'How long does it take to set up an offshore team?',
      description:
        'It usually takes a few weeks to a couple of months to set up an ODC, depending on the project. With proper planning, the process can be sped up.',
    },
    {
      id: 4,
      title:
        'How can I make sure the Offshore Development Center (ODC) delivers good quality?',
      description:
        'Set clear goals, stay in touch, and track the progress. eSpark Talent backs you to maintain quality by keeping everything on track and making sure the team delivers results that meet your needs.',
    },
    {
      id: 5,
      title: 'What services does an Offshore Development Center (ODC) provide?',
      description:
        'ODCs can assist with software development, testing, design, IT support, and more, customized to your specific needs.',
    },
    {
      id: 6,
      title:
        'What are the benefits of choosing an Offshore Development Center (ODC)?',
      description:
        'An ODC lets you cut costs, work with skilled professionals from around the world, and get your projects done faster, all while keeping control over the work.',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: '100%',
      gap: { xs: 3, sm: 4 },
    },
    titleStyle: {
      width: { xs: '100%', lg: '100%' },
      maxWidth: { md: '700px', lg: 'auto' },
      fontSize: { xs: '18px', sm: '23px', md: '32px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
      textAlign: 'center',
    },
    buttonStyle: {
      width: { xs: '28px', md: '31px', lg: '41px' },
      height: { xs: '30px', md: '31px', lg: '41px' },
      minWidth: { xs: '5%', md: 'auto' },
      padding: 0,
      backgroundColor: '#F7F7FF',
      borderRadius: '8px',
      fontSize: { xs: '20px', md: '23px', lg: '35px' },
      color: '#6F6C90',
      textTransform: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 400,
      '&:hover': {
        backgroundColor: '#2870C3',
        color: '#fff',
      },
    },
    cardStyle: {
      width: { xs: '90%', sm: '85%', md: '100%' },
      mx: 'auto',
      px: { xs: 1.8, md: 2, lg: 3 },
      py: { xs: 1.8, md: 2, lg: 3 },
      maxWidth: { md: '596px' },
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: `
    0px 5px 16px rgba(8, 15, 52, 0.06),
    inset 0px 6.36px 8.48px 0px #ffffff
  `,
    },
    cardTitleStyle: {
      fontSize: {
        xs: '15px',
        md: '17px',
        lg: '22px',
      },
      width: { xs: 'calc(93% - 45px)', lg: 'calc(93% - 55px)' },
      fontWeight: 500,
      color: '#170F49',
    },
    cardDescriptionStyle: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
      },

      lineHeight: { xs: '23px', md: '30px' },
      color: '#6F6C90',
      width: '99%',
    },
  },
};
export const ODC_FOUNDATION_DATA = {
  title: 'Building the ODC Foundation for Your Growth',
  text: `Our approach to creating Offshore Development Centers is built around precision and efficiency. Here's our five-step process to ensure we deliver a high-impact ODC solution tailored to your business:`,
  steps: [
    {
      title: 'Step 1',
      image:
        '/images/new-home/offshore-development-center/odc-foundation/step-1.png',
      description: 'Initial Consultation & Needs Assessment',
      vector:
        '/images/new-home/offshore-development-center/odc-foundation/down.png',
    },
    {
      title: 'Step 2',
      image:
        '/images/new-home/offshore-development-center/odc-foundation/step-2.png',
      description: 'Custom Team Assembly & Onboarding',
      vector:
        '/images/new-home/offshore-development-center/odc-foundation/up.png',
    },
    {
      title: 'Step 3',
      image:
        '/images/new-home/offshore-development-center/odc-foundation/step-3.png',
      description: 'Infrastructure & Workflow Setup',
      vector:
        '/images/new-home/offshore-development-center/odc-foundation/down.png',
    },
    {
      title: 'Step 4',
      image:
        '/images/new-home/offshore-development-center/odc-foundation/step-4.png',
      description: 'Agile Development & Continuous Monitoring',
      vector:
        '/images/new-home/offshore-development-center/odc-foundation/up.png',
    },
    {
      title: 'Step 5',
      image:
        '/images/new-home/offshore-development-center/odc-foundation/step-5.png',
      description: 'Ongoing Support, Scaling & Optimization',
      vector: '',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      mx: 'auto',
      width: '100%',
      maxWidth: '1440px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#edeef5',
      borderRadius: { xs: '30px', lg: '50px' },
      gap: { xs: 0, md: 5 },
      py: 6,
      px: 2,
    },
    containerStyle: {
      gap: { xs: 1, md: 5 },
      px: 2.5,
      maxWidth: { md: '960px', lg: '100%' },
    },
    subTitleAndTitleBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 0.8,
    },
    titleStyle: {
      fontSize: { xs: '18px', sm: '23px', md: '32px', lg: '40px' },
      fontWeight: 600,
      color: '#222324',
      textAlign: 'center',
      width: { xs: '90%', md: '90%', lg: '100%' },
    },
    textStyle: {
      fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
      fontWeight: 400,
      color: '#111845',
      width: { xs: '85%', lg: '100%' },
      maxWidth: { md: '900px', lg: '1070px' },
      textAlign: 'center',
    },
    vectorStyle: {
      width: { xs: '80px', sm: '90px', md: 'auto', lg: 'auto' },
      position: 'absolute',
    },
    slideStyle: {
      width: '100%',
      maxWidth: '210px',
      paddingBottom: '20px',
    },
    stepStyle: {
      maxWidth: { xs: '201px', lg: '201px' },
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      alignItems: 'center',
      gap: { xs: 2, md: 4 },
    },
    stepTextStyle: {
      fontSize: { xs: '18px', sm: '19px', md: '22px', lg: '25px' },
      fontWeight: 500,
      color: '#111845',
    },
    stepIconStyle: {
      width: { xs: '90px', sm: '100px', md: '125px', lg: '125px' },
    },
    stepDescriptionStyle: {
      fontSize: { xs: '14px', md: '15px', lg: '16px' },
      fontWeight: 400,
      color: '#111845',
      textAlign: 'center',
    },
  },
};
export const ODC_SERVICES_DATA = {
  title: 'ODC Services Based on Tech Stack',
  techStack: [
    {
      title: 'Android',
      icon: '/images/new-home/offshore-development-center/services-based/icon1.png',
    },
    {
      title: 'Angular',
      icon: '/images/new-home/offshore-development-center/services-based/icon2.png',
    },
    {
      title: 'Arduino',
      icon: '/images/new-home/offshore-development-center/services-based/icon3.png',
    },
    {
      title: 'Arc Linux',
      icon: '/images/new-home/offshore-development-center/services-based/icon4.png',
    },
    {
      title: 'Atom',
      icon: '/images/new-home/offshore-development-center/services-based/icon5.png',
    },
    {
      title: 'Apache Kafka',
      icon: '/images/new-home/offshore-development-center/services-based/icon6.png',
    },
    {
      title: 'MySQL',
      icon: '/images/new-home/offshore-development-center/services-based/icon7.png',
    },
    {
      title: 'Dot Net Core',
      icon: '/images/new-home/offshore-development-center/services-based/icon8.png',
    },
    {
      title: 'Figma',
      icon: '/images/new-home/offshore-development-center/services-based/icon9.png',
    },
    {
      title: 'Golang',
      icon: '/images/new-home/offshore-development-center/services-based/icon10.png',
    },
    {
      title: 'Java',
      icon: '/images/new-home/offshore-development-center/services-based/icon11.png',
    },
    {
      title: 'JavaScript',
      icon: '/images/new-home/offshore-development-center/services-based/icon12.png',
    },
    {
      title: 'C++',
      icon: '/images/new-home/offshore-development-center/services-based/icon13.png',
    },
    {
      title: 'C#',
      icon: '/images/new-home/offshore-development-center/services-based/icon14.png',
    },
    {
      title: 'Django',
      icon: '/images/new-home/offshore-development-center/services-based/icon15.png',
    },
    {
      title: 'Python',
      icon: '/images/new-home/offshore-development-center/services-based/icon16.png',
    },
    {
      title: 'React',
      icon: '/images/new-home/offshore-development-center/services-based/icon17.png',
    },
    {
      title: 'Raspberry Pi',
      icon: '/images/new-home/offshore-development-center/services-based/icon18.png',
    },
    {
      title: 'Salesforce',
      icon: '/images/new-home/offshore-development-center/services-based/icon19.png',
    },
    {
      title: 'Vue.js',
      icon: '/images/new-home/offshore-development-center/services-based/icon20.png',
    },
    {
      title: 'WordPress',
      icon: '/images/new-home/offshore-development-center/services-based/icon21.png',
    },
    {
      title: 'Next.js',
      icon: '/images/new-home/offshore-development-center/services-based/icon22.png',
    },
    {
      title: 'Blender',
      icon: '/images/new-home/offshore-development-center/services-based/icon23.png',
    },
    {
      title: 'Node.js',
      icon: '/images/new-home/offshore-development-center/services-based/icon24.png',
    },
    {
      title: 'Laravel',
      icon: '/images/new-home/offshore-development-center/services-based/icon25.png',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      mx: 'auto',
      width: '100%',
      maxWidth: '1100px',
      justifyContent: 'center',
      gap: { xs: 3, md: 5 },
      px: { xs: 1, sm: 3 },
    },
    titleStyle: {
      fontSize: { xs: '18px', sm: '23px', md: '32px', lg: '40px' },
      fontWeight: 600,
      pb: 5,
      mx: 'auto',
      width: { xs: '80%', lg: '100%' },
      lineHeight: 1.2,
      color: '#111845',
    },
    imageTitleStyle: {
      fontSize: { xs: '14.5px', md: '16px' },
      fontWeight: 500,
      color: 'rgba(17, 24, 69, 1)',
      mt: 0.5,
    },
    imageStyle: {
      height: 'auto',
      width: { xs: '45%', lg: 'auto' },
      objectFit: 'contain',
    },
  },
};


// Loading component data and styles
export const LOADING_DATA = {
  loadingFallBackBoxStyle: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#fff',
  },
  dotAnimationStyle: (dotAnimation) => ({
    mt: -1,
    display: 'flex',
    gap: '5px',
    '& div': {
      width: '6px',
      height: '6px',
      backgroundColor: '#029894',
      borderRadius: '50%',
      animation: `${dotAnimation} 1s ease-in-out infinite`,
    },
    '& div:nth-of-type(1)': {
      animationDelay: '0s',
    },
    '& div:nth-of-type(2)': {
      animationDelay: '0.2s',
    },
    '& div:nth-of-type(3)': {
      animationDelay: '0.4s',
    },
  }),
  dots: [1, 2, 3],
  rocketBoxStyle: { position: 'relative' },
  logoBoxStyle: { display: 'flex', alignItems: 'center', gap: 0.5, pb: 1 },
  rocketImage: '/images/loading-slider-img.png',
  rocketImageStyle: (rocketAnimation) => ({
    width: 'auto',
    height: 'auto',
    animation: `${rocketAnimation} 20s ease-in forwards`,
  }),
  titleImage: '/images/espark.png',
  smokes: [1, 2, 3, 4],
  smokeAnimationStyle: (somkeAnimation, index) => ({
    position: 'absolute',
    bottom: '10px',
    left: '10%',
    width: '20px',
    height: '20px',
    backgroundColor: `rgba(211, 211, 211, 0.904)`,
    borderRadius: '50%',
    opacity: 0,
    animation: `${somkeAnimation} 1.5s ease-in forwards`,
    animationDelay: `${index}s`,
  }),
};