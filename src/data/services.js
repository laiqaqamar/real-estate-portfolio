
// =============================================================
// SERVICES DATA
//
// Add, remove or edit services here. Each "id" is used in the
// URL: /services/:id — keep ids lowercase, no spaces.
//
// Images are imported relatively from:
// src/assets/images/services/
// =============================================================

// =============================================================
// SERVICE IMAGES
// =============================================================

// Architecture Design
import architectureImage from '../assets/images/services/architecture-design.jpg'
import architectureHeroImage from '../assets/images/services/architecture-hero-image.jpg'
import architectureGallery1 from '../assets/images/services/architecture-gallery-1.jpg'
import architectureGallery2 from '../assets/images/services/architecture-gallery-2.jpg'

// Interior Design
import interiorImage from '../assets/images/services/interior-design.jpg'
import interiorHeroImage from '../assets/images/services/interior-hero-image.jpg'
import interiorGallery1 from '../assets/images/services/interior-design-1.jpg'
import interiorGallery2 from '../assets/images/services/interior-design-2.jpg'

// Grey Structure
import greyStructureImage from '../assets/images/services/grey-structure.jpg'
import greyStructureHeroImage from '../assets/images/services/graystructure-hero-image.jpg'
import greyStructureGallery1 from '../assets/images/services/grey-structure-design-1.jpg'
import greyStructureGallery2 from '../assets/images/services/grey-structure-design-2.jpg'

// Finishing
import finishingImage from '../assets/images/services/finishing-design.jpg'
import finishingHeroImage from '../assets/images/services/finishing-hero-image.jpg'
import finishingGallery1 from '../assets/images/services/finishing-1.jpg'
import finishingGallery2 from '../assets/images/services/finishing-2.jpg'

// =============================================================
// SERVICES
// =============================================================

export const services = [
  {
    id: 'architecture-design',
    icon: 'DraftingCompass',
    name: 'Architecture Design',

    shortDescription:
      'Custom architectural plans that balance functionality, light and long-term value.',

    image: architectureImage,

    heroImage: architectureHeroImage,

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
      architectureGallery1,
      architectureGallery2,
    ],

    video: null,
  },

  {
    id: 'interior-design',
    icon: 'Sofa',
    name: 'Interior Design',

    shortDescription:
      'Interiors that feel considered — material palettes, lighting and layout tailored to how you live.',

    image: interiorImage,

    heroImage: interiorHeroImage,

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
      interiorGallery1,
      interiorGallery2,
    ],

    video: null,
  },

  {
    id: 'grey-structure',
    icon: 'HardHat',
    name: 'Grey Structure',

    shortDescription:
      'Foundation-to-roof structural construction, built to code with certified materials.',

    image: greyStructureImage,

    heroImage: greyStructureHeroImage,

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
      greyStructureGallery1,
      greyStructureGallery2,
    ],

    video: null,
  },

  {
    id: 'finishing',
    icon: 'PaintRoller',
    name: 'Finishing',

    shortDescription:
      'Flooring, paint, fixtures and final detailing that bring a project to move-in condition.',

    image: finishingImage,

    heroImage: finishingHeroImage,

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
      finishingGallery1,
      finishingGallery2,
    ],

    video: null,
  },
]

// =============================================================
// GET SERVICE BY ID
// =============================================================

export const getServiceById = (id) =>
  services.find((s) => s.id === id)
