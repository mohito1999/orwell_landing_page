export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  gridArea?: string;
}

export enum HardwareType {
  WORKSTATION = 'Or1',
  SERVER = 'OrMax'
}

export interface HardwareSpec {
  name: string;
  tagline: string;
  gpu: string;
  useCase: string;
  environment: string;
}