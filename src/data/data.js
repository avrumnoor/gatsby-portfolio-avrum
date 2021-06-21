module.exports = {
  SiteTitle: 'Avrum',
  Sitelogo: '#',
  SiteLogoText: 'Avrum',
  SiteAuthor: 'Avrum Noor',
  SiteDescription: 'Electrical engineer',
  defaultDescription: 'Electrica engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    twitter: '',
    github: 'https://github.com/avrumnoor',
    linkedin: 'https://www.linkedin.com/in/avrumnoor/',
  },
  SiteAddress: {
    city: 'Casablanca',
    region: 'CurvaSud',
    country: 'Morocco',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'avrum@stanford.edu',
    phone: 'phone number',
  },
  SiteCopyright: '2021',
};
