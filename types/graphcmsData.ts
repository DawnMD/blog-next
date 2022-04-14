export type Role = {
  roleIntro: string;
  comapnyName: string;
  comapnyColor: {
    hex: string;
  };
  companyUrl: string;
};

export type IntroBlock = {
  aboutMes: { content: string }[];
  currentRoles: Role[];
  portfolioPictures: { porfilePicture: { url: string }; pictureAlt: string }[];
};

export type TestimonialContent = {
  id: string;
  testimonial: string;
  testimonialAuthor: string[];
  company: string;
  authorType: string;
};

export interface TestimonialBlock {
  testimonials: { testimonialContents: TestimonialContent[] }[];
}

type TimelineInfos = {
  id: string;
  title: string;
  content: string[];
};

export type TimelineBlocks = {
  id: string;
  timelineYear: number;
  timelineInfos: TimelineInfos[];
};

export interface ITimeline {
  timelines: { timelineBlocks: TimelineBlocks[] }[];
}
