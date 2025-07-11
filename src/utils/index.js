// dublicates slides function for empoloyee slider from homepage
export const duplicateSlides = (originalSlides) => {
  return originalSlides?.map((slide) => ({ ...slide }));
};
