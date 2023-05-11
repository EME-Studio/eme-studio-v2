export interface TeamMembers {
  name: string;
  url: string;
  description: string;
  socialMedias: socialMedias[];
}

interface socialMedias {
  name: string;
  icon: string;
  url: string;
}
