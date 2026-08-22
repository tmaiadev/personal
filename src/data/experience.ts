export type ExperienceEntry = {
  company: string;
  url?: string;
  role: string;
  location: string;
  start: string;
  end: string | 'present';
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Booking.com',
    url: 'https://www.booking.com/',
    role: 'Senior Software Engineer',
    location: 'London, UK',
    start: '2022-08',
    end: 'present',
  },
  {
    company: "Bally's Interactive",
    url: 'https://www.ballys.com/Our-Brands/ballys-interactive-international/default.aspx',
    role: 'Senior Front-end Developer',
    location: 'London, UK',
    start: '2019-08',
    end: '2022-08',
  },
  {
    company: 'Minu',
    url: 'https://minu.me/',
    role: 'Front-end Developer',
    location: 'Belo Horizonte, MG, Brazil',
    start: '2018-11',
    end: '2019-05',
  },
  {
    company: 'JMV Technology',
    url: 'https://jmvtechnology.com/',
    role: 'Full-stack Developer',
    location: 'Divinópolis, MG, Brazil',
    start: '2012-11',
    end: '2018-11',
  },
  {
    company: 'MB Soluções Digitais',
    url: 'https://mbsolucoesdigitais.com/',
    role: 'Full-stack Developer',
    location: 'São Gonçalo do Pará, MG, Brazil',
    start: '2008-06',
    end: '2012-10',
  },
];

export const careerStart = '2008-06';
