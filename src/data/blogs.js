
// =============================================================
// BLOG DATA
// URL for each post: /blogs/:id
// =============================================================

import blog1Image from '../assets/images/blogs/blog-1.png'
import blog2Image from '../assets/images/blogs/blog-2.png'
import blog3Image from '../assets/images/blogs/blog-3.png'

// SAMPLE PLACEHOLDER DATA - no real blog posts were supplied by
// Al Harmain Associates yet. Replace every entry below with your actual
// articles before publishing, or leave this array empty ([]) if you
// don't plan to use a blog yet.

export const blogs = [
  {
    id: 'choosing-the-right-plot-size',
    title: 'Choosing the Right Plot Size for Your Family',
    category: 'Buying Guide',
    date: '2026-08-02',
    featuredImage: blog1Image,
    excerpt:
      'Plot size affects everything from build cost to resale value. Here’s how to think about it before you buy.',
    content: `Choosing a plot size is one of the first — and most consequential — decisions in building a home. Too small, and you may outgrow the space within a few years. Too large, and construction and maintenance costs climb faster than most buyers expect.

Start with how you actually live: how many bedrooms you need now, whether you plan to add floors later, and how much outdoor space matters to your household. From there, work backwards from your construction budget per square foot rather than choosing a plot size first and hoping the budget stretches to fit.

Finally, consider resale. Plot sizes that are common in your chosen block tend to hold value better than unusually small or large outliers, since they match what most future buyers are searching for.`,
    images: [],
    video: null,
  },

  {
    id: 'grey-structure-vs-finishing-costs',
    title: 'Grey Structure vs. Finishing: Where Your Budget Really Goes',
    category: 'Construction',
    date: '2026-07-18',
    featuredImage: blog2Image,
    excerpt:
      'Many first-time builders underestimate finishing costs. Here’s a realistic breakdown.',
    content: `It’s common for first-time builders to assume that once the grey structure is complete, the hardest — and most expensive — part is behind them. In practice, finishing often accounts for close to half of total construction cost, once flooring, fixtures, paint, kitchen and bathroom fittings are included.

Grey structure costs are relatively predictable, driven mainly by material rates and covered area. Finishing costs vary far more widely depending on the quality tier you choose — from standard fittings to imported fixtures.

Our advice: get itemized finishing estimates early, not just a single lump sum, so you can make trade-offs deliberately rather than discovering the gap once construction is already underway.`,
    images: [],
    video: null,
  },

  {
    id: 'farmhouse-living-what-to-expect',
    title: 'Farmhouse Living: What to Expect in the First Year',
    category: 'Lifestyle',
    date: '2026-06-30',
    featuredImage: blog3Image,
    excerpt:
      'Moving from city living to a farmhouse community comes with a real adjustment period.',
    content: `Farmhouse living offers space, privacy and a slower pace that’s hard to find in the city — but the first year often comes with an adjustment period. Utilities, landscaping and security work differently than in a dense residential block, and it helps to plan for that up front.

Landscaping in particular takes time: mature trees and gardens are one of the biggest draws of farmhouse communities, but a newly planted garden can take a full season or two to establish. Many owners find it worthwhile to prioritize hardscaping and irrigation early, so the landscape has time to grow in.

Security and maintenance are also worth planning for early, especially if the farmhouse will be a weekend or seasonal residence rather than a full-time home.`,
    images: [],
    video: null,
  },
]

export const blogCategories = [...new Set(blogs.map((b) => b.category))]

export const getBlogById = (id) => blogs.find((b) => b.id === id)

export const getRelatedBlogs = (blog, count = 2) =>
  blogs
    .filter((b) => b.id !== blog.id && b.category === blog.category)
    .slice(0, count)

