export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: string; // For bento grid layout
}

export interface NavItem {
  label: string;
  href: string;
}
