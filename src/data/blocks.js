// =============================================================
// BLOCKS DATA
// A "block" is a development area/community within Gulberg Greens,
// Islamabad. "category" groups blocks for the homepage category
// cards and the Blocks page filter tabs. "blockNavTree" defines the
// nested Navbar dropdown structure (Gulberg Farmhouses has its own
// flyout submenu of individual farmhouse blocks).
// URL for each block: /blocks/:id
// =============================================================

// SAMPLE PLACEHOLDER DATA for descriptions/facilities/plot sizes below -
// the block NAMES match Al Harmain Associates' real Gulberg Greens
// block structure, but details (facilities, plot sizes, images) are
// placeholders. Replace with your actual information before publishing.

export const blockCategories = [
  {
    id: 'd-markaz',
    label: 'Gulberg Greens D-Markaz',
    description: 'The commercial and lifestyle hub at the heart of Gulberg Greens.',
    image: '/src/assets/images/blocks/Dmarkaz main.jpeg',
  },
  {
    id: 'farmhouses',
    label: 'Gulberg Farmhouses',
    description: 'Executive and residential farmhouse blocks (A–E) across Gulberg Greens.',
    image: '/src/assets/images/blocks/gulbergfarmhouse.jpeg',
  },
  {
    id: 'residencia',
    label: 'Gulberg Residencia',
    description: 'A dedicated residential community within Gulberg Greens.',
    image: '/src/assets/images/blocks/gulberg resi main.jpeg',
  },
]

// Nested menu structure used by the Navbar's "Blocks" dropdown.
// "Gulberg Farmhouses" opens its own flyout submenu on desktop and
// an expandable nested accordion on mobile.
export const blockNavTree = [
  { label: 'Gulberg Greens D-Markaz', path: '/blocks/gulberg-greens-d-markaz' },
  {
    label: 'Gulberg Farmhouses',
    children: [
      { label: 'Executive Blocks', path: '/blocks/executive-blocks' },
      { label: 'Gulberg Greens Block A Farmhouses', path: '/blocks/block-a-farmhouses' },
      { label: 'Gulberg Greens Block B Farmhouses', path: '/blocks/block-b-farmhouses' },
      { label: 'Gulberg Greens Block C Farmhouses', path: '/blocks/block-c-farmhouses' },
      { label: 'Gulberg Greens Block D Farmhouses', path: '/blocks/block-d-farmhouses' },
      { label: 'Gulberg Greens Block E Farmhouses', path: '/blocks/block-e-farmhouses' },
    ],
  },
  { label: 'Gulberg Residencia', path: '/blocks/gulberg-residencia' },
]

export const blocks = [
  {
    id: 'gulberg-greens-d-markaz',
    name: 'Gulberg Greens D-Markaz',
    category: 'd-markaz',
    location: 'D-Markaz, Gulberg Greens, Islamabad',
    image: '/src/assets/images/blocks/Dmarkaz.png',
    gallery: [
      '/src/assets/images/blocks/d-markaz-1.jpg',
      '/src/assets/images/blocks/d-markaz-2.jpg',
    ],
    video: null, // e.g. '/src/assets/videos/d-markaz-tour.mp4'
    shortDescription: 'The commercial and lifestyle centre of Gulberg Greens.',
    overview: 'D-Markaz is the main commercial hub of Gulberg Greens, with retail, dining and office space.',
    description:
      'D-Markaz sits at the heart of Gulberg Greens and is planned as the community\u2019s primary commercial and lifestyle destination, with shops, offices and dining options.',
    propertyTypes: ['Commercial', 'Plot'],
    plotSizes: ['4 Marla', '8 Marla', '1 Kanal'],
    facilities: ['Main boulevard frontage', 'Ample parking', '24/7 security'],
    nearbyLocations: ['Gulberg Greens main entrance', 'Gulberg Residencia'],
    totalBlocksCount: null, // TODO: add if known
  },
  {
    id: 'executive-blocks',
    name: 'Executive Blocks',
    category: 'farmhouses',
    location: 'Gulberg Farmhouses, Gulberg Greens, Islamabad',
    image: '/src/assets/images/blocks/executive Block.png',
    gallery: [
      '/src/assets/images/blocks/executive-blocks-1.jpg',
      '/src/assets/images/blocks/executive-blocks-2.jpg',
    ],
    video: null,
    shortDescription: 'Premium executive farmhouse plots within Gulberg Farmhouses.',
    overview: 'Executive Blocks offer larger, premium farmhouse plots for private weekend homes.',
    description:
      'Executive Blocks form the premium tier of Gulberg Farmhouses, offering generous plot sizes suited to private farmhouses and weekend homes.',
    propertyTypes: ['Farmhouse', 'Plot'],
    plotSizes: ['2 Kanal', '4 Kanal', '8 Kanal'],
    facilities: ['Landscaped boundary walls', 'Private security'],
    nearbyLocations: ['Gulberg Greens D-Markaz'],
    totalBlocksCount: null,
  },
  {
    id: 'block-a-farmhouses',
    name: 'Gulberg Greens Block A Farmhouses',
    category: 'farmhouses',
    location: 'Block A, Gulberg Farmhouses, Gulberg Greens, Islamabad',
    image: '/src/assets/images/blocks/A-block.png',
    gallery: ['/src/assets/images/properties/farm4.jpeg'],
    video: null,
    shortDescription: 'Farmhouse plots in Block A of Gulberg Farmhouses.',
    overview: 'Block A Farmhouses offers plots within easy reach of the main Gulberg Greens boulevard.',
    description:
      'Block A is one of the farmhouse blocks within Gulberg Farmhouses, offering a mix of plot sizes for those seeking a farmhouse lifestyle close to the main community.',
    propertyTypes: ['Farmhouse', 'Plot'],
    plotSizes: ['2 Kanal', '4 Kanal'],
    facilities: ['Underground electricity', '24/7 security'],
    nearbyLocations: ['Gulberg Greens main boulevard'],
    totalBlocksCount: null,
  },
  {
    id: 'block-b-farmhouses',
    name: 'Gulberg Greens Block B Farmhouses',
    category: 'farmhouses',
    location: 'Block B, Gulberg Farmhouses, Gulberg Greens, Islamabad',
    image: '/src/assets/images/blocks/B block.png',
    gallery: ['/src/assets/images/properties/farm2.jpeg'],
    video: null,
    shortDescription: 'Farmhouse plots in Block B of Gulberg Farmhouses.',
    overview: 'Block B Farmhouses offers quiet, spacious plots within Gulberg Farmhouses.',
    description:
      'Block B is a farmhouse block within Gulberg Farmhouses, designed for buyers wanting more space and privacy.',
    propertyTypes: ['Farmhouse', 'Plot'],
    plotSizes: ['2 Kanal', '4 Kanal'],
    facilities: ['Underground electricity', '24/7 security'],
    nearbyLocations: ['Gulberg Greens main boulevard'],
    totalBlocksCount: null,
  },
  {
    id: 'block-c-farmhouses',
    name: 'Gulberg Greens Block C Farmhouses',
    category: 'farmhouses',
    location: 'Block C, Gulberg Farmhouses, Gulberg Greens, Islamabad',
    image: '/src/assets/images/blocks/C block.png',
    gallery: ['/src/assets/images/properties/farm3.jpeg'],
    video: null,
    shortDescription: 'Farmhouse plots in Block C of Gulberg Farmhouses.',
    overview: 'Block C Farmhouses is part of the Gulberg Farmhouses community.',
    description:
      'Block C is a farmhouse block within Gulberg Farmhouses, offering plots suited to weekend and full-time farmhouse living.',
    propertyTypes: ['Farmhouse', 'Plot'],
    plotSizes: ['2 Kanal', '4 Kanal'],
    facilities: ['Underground electricity', '24/7 security'],
    nearbyLocations: ['Gulberg Greens main boulevard'],
    totalBlocksCount: null,
  },
  {
    id: 'block-d-farmhouses',
    name: 'Gulberg Greens Block D Farmhouses',
    category: 'farmhouses',
    location: 'Block D, Gulberg Farmhouses, Gulberg Greens, Islamabad',
    image: '/src/assets/images/blocks/D block.png',
    gallery: ['/src/assets/images/properties/farm4.jpeg'],
    video: null,
    shortDescription: 'Farmhouse plots in Block D of Gulberg Farmhouses.',
    overview: 'Block D Farmhouses is part of the Gulberg Farmhouses community.',
    description:
      'Block D is a farmhouse block within Gulberg Farmhouses, offering plots for private farmhouse construction.',
    propertyTypes: ['Farmhouse', 'Plot'],
    plotSizes: ['2 Kanal', '4 Kanal'],
    facilities: ['Underground electricity', '24/7 security'],
    nearbyLocations: ['Gulberg Greens main boulevard'],
    totalBlocksCount: null,
  },
  {
    id: 'block-e-farmhouses',
    name: 'Gulberg Greens Block E Farmhouses',
    category: 'farmhouses',
    location: 'Block E, Gulberg Farmhouses, Gulberg Greens, Islamabad',
    image: '/src/assets/images/blocks/E block.png',
    gallery: ['/src/assets/images/properties/farm5.jpeg'],
    video: null,
    shortDescription: 'Farmhouse plots in Block E of Gulberg Farmhouses.',
    overview: 'Block E Farmhouses is part of the Gulberg Farmhouses community.',
    description:
      'Block E is a farmhouse block within Gulberg Farmhouses, rounding out the farmhouse plot options in the community.',
    propertyTypes: ['Farmhouse', 'Plot'],
    plotSizes: ['2 Kanal', '4 Kanal'],
    facilities: ['Underground electricity', '24/7 security'],
    nearbyLocations: ['Gulberg Greens main boulevard'],
    totalBlocksCount: null,
  },
  {
    id: 'gulberg-residencia',
    name: 'Gulberg Residencia',
    category: 'residencia',
    location: 'Gulberg Residencia, Gulberg Greens, Islamabad',
    image: '/src/assets/images/blocks/gulberg Residencia.png',
    gallery: [
      '/src/assets/images/blocks/gulberg-residencia-1.jpg',
      '/src/assets/images/blocks/gulberg-residencia-2.jpg',
    ],
    video: null,
    shortDescription: 'A dedicated residential community within Gulberg Greens.',
    overview: 'Gulberg Residencia offers residential plots and homes within Gulberg Greens.',
    description:
      'Gulberg Residencia is a residential community within Gulberg Greens, offering a range of plot sizes for house construction close to the D-Markaz commercial hub.',
    propertyTypes: ['House', 'Plot'],
    plotSizes: ['5 Marla', '10 Marla', '1 Kanal'],
    facilities: ['Underground electricity', 'Community park', '24/7 security'],
    nearbyLocations: ['Gulberg Greens D-Markaz'],
    totalBlocksCount: null,
  },
]

export const getBlockById = (id) => blocks.find((b) => b.id === id)
export const getBlocksByCategory = (categoryId) => blocks.filter((b) => b.category === categoryId)
