export type Project = {
  name: string;
  url: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: 'Secret Santa',
    url: 'https://secret-santa.thallesmaia.com/',
    description:
      'Organize gift exchanges with ease. Create events, invite friends, and let us handle the matching.',
  },
  {
    name: 'Podcasts',
    url: 'https://podcasts.thallesmaia.com',
    description:
      'Your personal podcast player for discovering and listening to your favorite podcasts.',
  },
];
