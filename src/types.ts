// Graphql Query Types
export interface HeadQueryData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: {
        name: string;
      };
      siteUrl: string;
      image: string;
    };
  };
}
