export interface IAboutMe {
  aboutMes: { content: string }[];
}

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
