import { Product, ProcessStep, SustainabilityMetric, GalleryItem, FarmVideo } from '../types';

export const FARM_PRODUCTS: Product[] = [
  {
    id: 'fish',
    name: 'Premium Coastal Fish',
    scientificName: 'Lates calcarifer / Epinephelus coioides / Chanos chanos',
    category: 'fish',
    tagline: 'Farm-raised in oxygen-rich, filtered saltwater flow-through ponds.',
    description:
      'Our saltwater fish are raised in spacious low-density ponds with natural ocean current simulation. Fed on certified organic aquatic feed and live micro-nutrients, resulting in sweet, firm white meat with rich natural omega-3 oils and zero muddy aftertaste.',
    species: ['Asian Seabass / Barramundi', 'Tiger Grouper', 'Milkfish (Bangus)', 'Golden Saltwater Tilapia'],
    sizes: ['Small (400g - 600g)', 'Medium / Plate Size (600g - 900g)', 'Large / Fillet Grade (1kg - 2.5kg)'],
    availability: 'Year-Round Continuous Harvest',
    harvestMethod: 'Humane Cold-Chain Ice-Slurry (Zero lactic acid spike, preserving tender texture)',
    temperament: 'Raised in pure ocean-salinity water with bio-secure filtration',
    packaging: [
      'Live aerated tank dispatch (regional delivery)',
      'Whole round, fresh iced on day of harvest (within 4 hours)',
      'Gilled, gutted & scaled vacuum pack',
      'IQF flash-frozen skin-on fillets',
    ],
    nutritionHighlights: {
      protein: '22.8g per 100g',
      omega3: '1,240mg per 100g',
      calories: '112 kcal',
    },
    keyFeatures: [
      '100% Free of Antibiotics & Hormones',
      'Deep ocean-flow aeration ensures firm muscle texture',
      'Consistent year-round weekly supply for restaurants',
      'Full lot traceability from fingerling to crate',
    ],
    imagePlaceholder: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#14B8A6',
    badgeBg: 'bg-teal-50 text-teal-800 border-teal-200',
    badgeBorder: 'border-teal-500',
  },
  {
    id: 'crab',
    name: 'Pond-Fattened Mud Crab',
    scientificName: 'Scylla serrata (Giant Mangrove Mud Crab)',
    category: 'crab',
    tagline: 'Packed with dense, sweet meat and rich savory coral roe.',
    description:
      'Harvested from our pristine mangrove-sheltered saline pens. Our mud crabs are pampered with clean tidal water exchanges and fed fresh forage fish, ensuring 95%+ meat fullness, heavy claws, and sweet, succulent roe without any off-flavors.',
    species: ['Giant Mud Crab (Scylla serrata)', 'Orange Mud Crab (Scylla olivacea)', 'Soft-Shell Molt Crabs (seasonal)'],
    sizes: [
      'Class B (300g - 450g)',
      'Class A (500g - 750g)',
      'Jumbo Monster / King Grade (800g - 1.2kg+)',
    ],
    availability: 'Peak year-round (Weekly graded batches)',
    harvestMethod: 'Individual tied grading, vigorous health check & live humidity-controlled transport',
    temperament: 'Individual bamboo/mesh shelters to prevent claw loss and stress',
    packaging: [
      'Live natural-reed tied in breathable moisture crates',
      'High-grade chilled live box with temperature monitor',
      'Soft-shell individually quick frozen (IQF, 6-packs)',
    ],
    nutritionHighlights: {
      protein: '19.4g per 100g',
      omega3: '860mg per 100g',
      calories: '97 kcal',
    },
    keyFeatures: [
      'Guaranteed 90%+ meat fullness index (Tested by master graders)',
      'Intense, naturally sweet claw meat with firm texture',
      'Premium female crabs with solid red/orange coral roe',
      'Zero chemical dip or preservative treatment',
    ],
    imagePlaceholder: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Scylla_serrata_by_OpenCage.jpg',
    accentColor: '#EA580C',
    badgeBg: 'bg-orange-50 text-orange-800 border-orange-200',
    badgeBorder: 'border-orange-500',
  },
  {
    id: 'shrimp',
    name: 'Tiger Prawn & White Shrimp',
    scientificName: 'Penaeus monodon / Litopenaeus vannamei',
    category: 'shrimp',
    tagline: 'Crisp snap, vibrant natural color, and succulent sweetness.',
    description:
      'Grown in high-aeration lined biofloc ponds under strict probiotic regime. Our prawns boast distinctive glossy shells, pristine dark tiger striping, and exceptional crisp crunch when cooked, loved by Michelin-starred and premier seafood kitchens.',
    species: ['Black Tiger Prawn (Penaeus monodon)', 'Pacific White Shrimp (Litopenaeus vannamei)'],
    sizes: [
      'U-10 (Colossal, under 10 pcs/kg)',
      '16/20 (Extra Jumbo)',
      '21/25 (Jumbo)',
      '31/40 (Large)',
    ],
    availability: 'Daily fresh harvest rotation',
    harvestMethod: 'Night-time water-gravity sluice into deep ice-slurry for instant crispness locking',
    temperament: 'Bio-floc probiotic water ecosystem with zero sediment contact',
    packaging: [
      'Live water-tank delivery (selected coastal regions)',
      'Fresh chilled on shaved ice in insulated poly-boxes (0°C–2°C)',
      'Head-on shell-on (HOSO) blast frozen block (1kg / 2kg)',
      'Peeled, deveined, tail-on (PDTO) IQF pouches',
    ],
    nutritionHighlights: {
      protein: '24.2g per 100g',
      omega3: '540mg per 100g',
      calories: '106 kcal',
    },
    keyFeatures: [
      'Remarkable snappy bite and natural oceanic sweetness',
      'SPF (Specific Pathogen Free) post-larvae nursery stock',
      'Zero sodium tripolyphosphate (STPP) or moisture additives',
      'Night harvested to eliminate heat stress and enzymatic breakdown',
    ],
    imagePlaceholder: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#F43F5E',
    badgeBg: 'bg-rose-50 text-rose-800 border-rose-200',
    badgeBorder: 'border-rose-500',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Bio-Secure Nursery & SPF Hatchery',
    subtitle: 'Healthy beginnings from certified clean genetics',
    description:
      'Every batch begins with Specific Pathogen Free (SPF) broodstock fingerlings and post-larvae. Our indoor quarantine nursery features UV-sterilized seawater, micro-algae culture feeds, and temperature-controlled acclimation.',
    keyPoints: [
      'UV & ozone sterilized intake seawater',
      'Natural live Spirulina and Artemia enrichment',
      'DNA screening against viral pathogens before pond transfer',
    ],
    standards: 'GAP / SPF Grade Genetics',
    iconName: 'ShieldCheck',
  },
  {
    step: 2,
    title: 'Controlled Coastal Ponds & Natural Probiotics',
    subtitle: 'Simulating pristine ocean currents and benthic habitats',
    description:
      'Transferred into HDPE-lined ponds equipped with high-efficiency paddlewheel aerators and gentle water currents. We cultivate beneficial bio-floc and probiotics to naturally digest waste and outcompete harmful bacteria.',
    keyPoints: [
      'Zero antibiotic or hormone policy',
      'Plant and marine-based certified non-GMO feed',
      'Mangrove bio-filtration buffer zones around all ponds',
    ],
    standards: '100% Antibiotic-Free System',
    iconName: 'Droplets',
  },
  {
    step: 3,
    title: '24/7 Digital Water Quality Telemetry',
    subtitle: 'Precision monitoring of every vital aquatic parameter',
    description:
      'Optical sensors continuously track Dissolved Oxygen (DO), salinity, pH, temperature, and redox potential. Our aquaculture engineers review water health data around the clock to adjust aeration and feed rates instantly.',
    keyPoints: [
      'Real-time IoT sensors in every pond',
      'Dissolved Oxygen maintained above 6.5 mg/L',
      'Daily microbiological lab plate counts on-site',
    ],
    standards: 'Automated 24/7 Telemetry',
    iconName: 'Activity',
  },
  {
    step: 4,
    title: 'Humane Night-Harvest & Ice Slurry',
    subtitle: 'Instant temperature shock for peak freshness and firm texture',
    description:
      'Harvesting takes place during the cool hours of night or early dawn to minimize heat and sunlight stress. Aquatic catches are immediately immersed into a -1.5°C seawater ice slurry, causing instant, humane stun and locking in pristine cell structure.',
    keyPoints: [
      'Night-time harvest prevents enzyme breakdown',
      'Instant temperature drop to below 2°C in seconds',
      'Zero lactic acid accumulation guarantees delicate, sweet flavor',
    ],
    standards: 'Sub-Zero Seawater Slurry Protocol',
    iconName: 'Moon',
  },
  {
    step: 5,
    title: 'Rapid Grading, Packing & Cold-Chain Dispatch',
    subtitle: 'From pond harvest to kitchen table in record time',
    description:
      'Within our climate-controlled packing facility, catches are optical-weighed, hand-inspected for shell integrity and meat firmness, then packed in customized breathable live boxes or temperature-logged ice containers.',
    keyPoints: [
      'Individual hand inspection for every crab and fish',
      'GPS & Temperature datalogger in wholesale shipments',
      'Direct dispatch to premier restaurants, markets & exporters',
    ],
    standards: 'HACCP & Cold-Chain Certified',
    iconName: 'Truck',
  },
];

export const SUSTAINABILITY_METRICS: SustainabilityMetric[] = [
  {
    title: 'Zero Effluent Recirculation',
    value: '94%',
    description: 'Of all pond water is bio-filtered and recycled through our constructed mangrove wetlands before any return.',
    icon: 'Recycle',
  },
  {
    title: 'Mangrove Protection Belt',
    value: '12 Hectares',
    description: 'Active coastal mangrove conservation corridor maintained along our perimeter, safeguarding coastal bird and marine life.',
    icon: 'Trees',
  },
  {
    title: 'Antibiotic & Hormone Free',
    value: '100%',
    description: 'We rely exclusively on beneficial bio-probiotics and optimal water aeration rather than medicinal chemical cocktails.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Solar-Powered Aerators',
    value: '68% Clean Power',
    description: 'Daytime surface paddlewheels and pond blowers are driven directly by our on-farm 350kW solar photovoltaic arrays.',
    icon: 'SunMedium',
  },
];

export const CERTIFICATIONS = [
  {
    name: 'Good Aquaculture Practices (GAP)',
    code: 'GAP-AQUA-2024-CERT',
    description: 'Audited farm safety, hygienic handling, and environmental stewardship.',
  },
  {
    name: 'HACCP Certified Facility',
    code: 'HACCP-SEAFOOD-9001',
    description: 'Rigorous food safety hazard analysis and critical control point tracking.',
  },
  {
    name: 'Chemical & Antibiotic Free Guarantee',
    code: '100% PURE SEAFOOD',
    description: 'Zero chemical growth accelerators, chlorine rinses, or synthetic preservatives.',
  },
  {
    name: 'Full Batch QR Traceability',
    code: 'SMART-TAG LOT ID',
    description: 'Scan any shipment box to see the exact pond, feed log, and harvest timestamp.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Aquaculture Ponds at Dawn',
    category: 'ponds',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Aerated bio-secure coastal ponds catching the first morning rays. Pristine tidal water exchanges keep water clear and oxygenated.',
    tag: 'Coastal Ponds',
  },
  {
    id: 'gal-2',
    title: 'Pond-Fattened Mud Crab Sorting',
    category: 'harvest',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Scylla_serrata_by_OpenCage.jpg',
    caption: 'Master graders hand-verifying carapace firmness and claw density before packing in breathable live-cargo crates.',
    tag: 'Live Harvest',
  },
  {
    id: 'gal-3',
    title: 'Giant Tiger Prawn Night Harvest',
    category: 'harvest',
    imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crisp tiger prawns harvested in cold ice-slurry to preserve natural dark banding and sweet muscle snap.',
    tag: 'Fresh Prawns',
  },
  {
    id: 'gal-4',
    title: 'Indoor Micro-Algae & Larval Nursery',
    category: 'nursery',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    caption: 'UV-purified seawater incubation tanks ensuring healthy post-larvae growth before pond introduction.',
    tag: 'SPF Hatchery',
  },
  {
    id: 'gal-5',
    title: 'Barramundi & Grouper Schooling Flow',
    category: 'ponds',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    caption: 'Saltwater fish swim actively against paddlewheel currents, developing lean, muscular, restaurant-grade fillets.',
    tag: 'Fish Culture',
  },
  {
    id: 'gal-6',
    title: 'Climate-Controlled Clean Packing Line',
    category: 'processing',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/01_Pike_Place_Fish_Market_fish_on_ice.jpg',
    caption: 'Insulated packaging line operating at 4°C with digital weight sensors and dry ice/shaved ice balancing.',
    tag: 'Cold Chain',
  },
];

export const FARM_STATS = [
  { value: '120+', label: 'Acres of Active Ponds', detail: 'Protected coastal saltwater farm' },
  { value: '100%', label: 'Antibiotic Free', detail: 'Zero hormones, zero harsh chemicals' },
  { value: '4 Hours', label: 'Pond to Dispatch', detail: 'Rapid ice-slurry processing speed' },
  { value: '35+ Yrs', label: 'Aquaculture Heritage', detail: 'Generations of marine farming craft' },
];

export const TESTIMONIALS = [
  {
    quote:
      "FP AQUAFARM's tiger prawns are unmatched in crunch and natural sweetness. We have served their barramundi and mud crabs in our seafood dining rooms for over 3 years with zero quality complaints.",
    author: 'Chef Marco Valenti',
    role: 'Executive Seafood Chef, The Coastal Grill',
    rating: 5,
  },
  {
    quote:
      "Consistency in size, fullness, and lively arrival is everything for our wholesale distribution. FP AQUAFARM provides pristine grading and transparent batch telemetry with every shipment.",
    author: 'Elena Rostova',
    role: 'Procurement Director, Pacific Rim Seafoods',
    rating: 5,
  },
];

export const FAQS = [
  {
    question: 'Do you sell to both wholesale buyers and local restaurants?',
    answer:
      'Yes! We supply commercial seafood distributors, supermarket chains, premier seafood restaurants, and specialty fish markets. We also accept scheduled bulk orders for events and caterers.',
  },
  {
    question: 'How do you guarantee freshness during transit?',
    answer:
      'Depending on your needs, we provide: 1) Live oxygenated water tank transport; 2) Live tied crabs in temperature-controlled humidity boxes; 3) Super-chilled iced catch packed within 4 hours of night harvest with cold-chain data loggers.',
  },
  {
    question: 'Can I visit the farm or inspect the facilities?',
    answer:
      'We welcome scheduled partner visits, chef tours, and quality audits on Tuesdays and Thursdays. Please contact our liaison team in advance to arrange a biosecurity visitor badge.',
  },
  {
    question: 'What feeds do you use for your fish, crab, and shrimp?',
    answer:
      'We use high-grade sustainable fishmeal-reduced formulations enriched with natural spirulina, marine phospholipids, and live-cultured microalgae. Absolutely no mammalian by-products or growth hormone stimulants are ever used.',
  },
];

export const HARVEST_VIDEOS: FarmVideo[] = [
  {
    id: 'hv-1',
    title: 'Mud Crab Harvest & Grading',
    description:
      'Watch our team hand-sort pond-fattened mud crabs, verifying carapace firmness and claw density before packing in breathable live-cargo crates for dispatch.',
    videoUrl: '/videos/harvesting/harvest-video-1.mp4',
    duration: '0:58',
    tag: 'Live Harvest',
  },
  {
    id: 'hv-2',
    title: 'Tiger Prawn Night Sluice',
    description:
      'Night-time gravity sluice harvest of tiger prawns into sub-zero seawater ice slurry, locking in crispness and natural dark banding within seconds.',
    videoUrl: '/videos/harvesting/harvest-video-2.mp4',
    duration: '1:01',
    tag: 'Cold-Chain Harvest',
  },
  {
    id: 'hv-3',
    title: 'Fish Sorting & Rapid Packing',
    description:
      'Barramundi and grouper are optical-weighed, hand-inspected for firmness, then packed in temperature-logged ice containers for same-day dispatch.',
    videoUrl: '/videos/harvesting/harvest-video-3.mp4',
    duration: '0:50',
    tag: 'Fresh Packing',
  },
];

export const POND_VIDEOS: FarmVideo[] = [
  {
    id: 'pv-1',
    title: 'Coastal Ponds Overview',
    description: 'Aerial view of our aerated bio-secure coastal ponds where saltwater fish and shrimp are raised.',
    videoUrl: '/videos/fish-pond/pond-video-1.mp4',
    duration: '0:14',
    tag: 'Farm Ponds',
  },
  {
    id: 'pv-2',
    title: 'Water Aeration System',
    description: 'High-efficiency paddlewheel aerators simulating pristine ocean currents and maintaining oxygen levels.',
    videoUrl: '/videos/fish-pond/pond-video-2.mp4',
    duration: '0:20',
    tag: 'Bio-Secure',
  },
];
