import { client } from "../contentful";

export const posts = {
  contentType: "blogPost",
  getEntries: () => {
    return client.getEntries({
      content_type: posts.contentType,
    });
  },
  getPostPaths: async () => {
    const queryData = await client.getEntries({
      content_type: posts.contentType,
    });

    if (!queryData) {
      return { paths: [], fallback: true };
    }

    const paths = queryData?.items.map((post: any) => ({
      params: { slug: "/posts/" + post.fields.slug },
      locale: post.fields.locale,
    }));

    return paths;
  },
  getEntryBySlug: async (slug: string) => {
    const result = await client.getEntries({
      content_type: posts.contentType,
      "fields.slug[in]": slug,
    });
    const item = result.items[0];
    return item;
  },
};
