export interface IIntro {
  aboutMes: { content: string }[];
  currentRoles: CurrentRole[];
  portfolioPictures: { porfilePicture: { url: string }; pictureAlt: string }[];
}

export type CurrentRole = {
  roleIntro: string;
  comapnyName: string;
  comapnyColor: {
    hex: string;
  };
  companyUrl: string;
};

type timelineInfos = {
  id: string;
  title: string;
  content: string[];
};

export type timelineBlocks = {
  id: string;
  timelineYear: number;
  timelineInfos: timelineInfos[];
};

export interface ITimeline {
  timelines: { timelineBlocks: timelineBlocks[] }[];
}
