export type ActiveView = 
  | 'home' 
  | 'about' 
  | 'insolvency' 
  | 'epoa' 
  | 'litigation' 
  | 'wills' 
  | 'repossessions' 
  | 'contact';

export interface PracticeArea {
  id: ActiveView;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message?: string;
  timestamp: string;
}
