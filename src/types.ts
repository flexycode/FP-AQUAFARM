export interface Product {
  id: string;
  name: string;
  scientificName: string;
  category: 'fish' | 'crab' | 'shrimp';
  tagline: string;
  description: string;
  species: string[];
  sizes: string[];
  availability: string;
  harvestMethod: string;
  temperament: string;
  packaging: string[];
  nutritionHighlights: {
    protein: string;
    omega3: string;
    calories: string;
  };
  keyFeatures: string[];
  imagePlaceholder: string;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  standards: string;
  iconName: string;
}

export interface SustainabilityMetric {
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ponds' | 'harvest' | 'nursery' | 'processing';
  imageUrl: string;
  caption: string;
  tag: string;
}

export interface FarmVideo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  posterUrl?: string;
  duration: string;
  tag: string;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  inquiryType: 'wholesale' | 'restaurant' | 'distributor' | 'export' | 'retail';
  productsOfInterest: string[];
  estimatedVolume: string;
  deliveryFrequency: string;
  destinationCity: string;
  notes: string;
}
