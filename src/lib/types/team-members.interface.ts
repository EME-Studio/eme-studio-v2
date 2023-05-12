export interface TeamMembers {
  name: string;
  url: string;
  description: string;
  socialMedias: socialMedia[];
}

interface socialMedia {
  name: string;
  icon: string;
  url: string;
}
