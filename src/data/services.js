// =============================================================
// SERVICES DATA
// Add, remove or edit services here. Each "id" is used in the
// URL: /services/:id — keep ids lowercase, no spaces.
// Replace "image" paths with your own files placed in
// src/assets/images/services/
// =============================================================

// SAMPLE PLACEHOLDER DATA - no real service list was supplied by
// Al Harmain Associates yet. Replace every entry below with your actual
// services before publishing; delete the ones that don't apply.

export const services = [
  {
    id: 'architecture-design',
    icon: 'DraftingCompass',
    name: 'Architecture Design',
    shortDescription:
      'Custom architectural plans that balance functionality, light and long-term value.',
    image: '/src/assets/images/services/architecture-design.jpg',
    heroImage: '/src/assets/images/services/architecture-hero-image.jpg',
    description:
      'Our architecture team translates your requirements into buildable, efficient designs — from initial concept sketches through approved construction drawings. We work closely with structural engineers so every design is both beautiful and sound.',
    process: [
      'Site survey & requirement gathering',
      'Concept sketches & spatial planning',
      '3D massing and elevation studies',
      'Approved construction drawings',
    ],
    features: [
      'Custom floor plans',
      '3D visualization',
      'Approval-ready drawings',
      'Structural coordination',
    ],
    gallery: [
      '/src/assets/images/services/architecture-gallery-1.jpg',
      '/src/assets/images/services/architecture-gallery-2.jpg',
    ],
    video: null, // e.g. '/src/assets/videos/architecture-walkthrough.mp4'
  },
  {
    id: 'interior-design',
    icon: 'Sofa',
    name: 'Interior Design',
    shortDescription:
      'Interiors that feel considered — material palettes, lighting and layout tailored to how you live.',
    image: '/src/assets/images/services/interior-design.jpg',
    heroImage: '/src/assets/images/services/interior-hero-image.jpg',
    description:
      'From material boards to final styling, our interior design service covers every room of your home or commercial space, with a focus on durable, timeless finishes.',
    process: [
      'Concept & mood boards',
      'Material & finish selection',
      'Furniture and lighting layout',
      'On-site execution & styling',
    ],
    features: [
      'Space planning',
      'Custom joinery',
      'Lighting design',
      'Turnkey furnishing',
    ],
    gallery: [
      '/src/assets/images/services/interior-design-1.jpg',
      '/src/assets/images/services/interior-design-2.jpg',
    ],
    video: null,
  },
  {
    id: 'grey-structure',
    icon: 'HardHat',
    name: 'Grey Structure',
    shortDescription:
      'Foundation-to-roof structural construction, built to code with certified materials.',
    image: '/src/assets/images/services/grey-structure.jpg',
    heroImage: '/src/assets/images/services/graystructure-hero-image.jpg',
    description:
      'We manage grey structure construction end to end — excavation, foundation, columns, slabs and brickwork — with quality checks at every stage.',
    process: [
      'Excavation & foundation',
      'Column & beam casting',
      'Slab casting per floor',
      'Brickwork & plastering',
    ],
    features: [
      'Certified materials',
      'Structural quality checks',
      'Dedicated site supervisor',
      'Transparent progress updates',
    ],
    gallery: [
      '/src/assets/images/services/grey-structure-design-1.jpg',
      '/src/assets/images/services/grey-structure-design-2.jpg',
    ],
    video: null,
  },
  {
    id: 'finishing',
    icon: 'PaintRoller',
    name: 'Finishing',
    shortDescription:
      'Flooring, paint, fixtures and final detailing that bring a project to move-in condition.',
    image: '/src/assets/images/services/finishing-design.jpg',
    heroImage: '/src/assets/images/services/finishing-hero-image.jpg',
    description:
      'The finishing stage covers flooring, electrical fittings, plumbing fixtures, paint and carpentry — completed to a consistent, high-end standard.',
    process: [
      'Flooring & tiling',
      'Electrical & plumbing fixtures',
      'Paint & wall finishes',
      'Final quality walkthrough',
    ],
    features: [
      'Premium flooring options',
      'Fixture installation',
      'Paint & texture finishes',
      'Snag-list resolution',
    ],
    gallery: [
      '/src/assets/images/services/finishing-1.jpg',
      '/src/assets/images/services/finishing-2.jpg',
    ],
    video: null,
  },
]

export const getServiceById = (id) => services.find((s) => s.id === id)
