import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Untitled",
    description: "No description",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Abstract",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Success",
      question: "Question",
      warning: "Warning",
      failure: "Failure",
      danger: "Danger",
      bug: "Bug",
      example: "Example",
      quote: "Quote",
    },
    backlinks: {
      title: "Backlinks",
      noBacklinksFound: "No backlinks found.",
    },
    themeToggle: {
      lightMode: "Light mode",
      darkMode: "Dark mode",
    },
    readerMode: {
      title: "Reader mode",
    },
    explorer: {
      title: "Explorer",
    },
    footer: {
      createdWith: "Created with",
    },
    graph: {
      title: "Graph view",
    },
    recentNotes: {
      title: "Recent notes",
      seeRemainingMore: ({ remaining }) => `${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Link to original",
    },
    search: {
      title: "Search",
      searchBarPlaceholder: "Search...",
    },
    tableOfContents: {
      title: "Contents",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min read`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Recent notes",
      lastFewNotes: ({ count }) => `Last ${count} notes`,
    },
    error: {
      title: "Not Found",
      notFound: "This page does not exist or is private.",
      home: "Back to home",
    },
    folderContent: {
      folder: "Folder",
      itemsUnderFolder: ({ count }) => `${count} items`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag index",
      itemsUnderTag: ({ count }) => `${count} items`,
      showingFirst: ({ count }) => `Showing first ${count} tags`,
      totalTags: ({ count }) => `Found ${count} tags in total`,
    },
  },
} as const satisfies Translation
