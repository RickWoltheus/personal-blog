import { client } from "../contentful";

export const works = {
  contentType: "work",
  getEntries: () => {
    return client.getEntries({
      content_type: works.contentType,
    });
  },
  getWorkPaths: async () => {
    const queryData = await client.getEntries({
      content_type: works.contentType,
    });

    if (!queryData) {
      return { paths: [], fallback: true };
    }

    const paths = queryData?.items.map((post: any) => ({
      params: { slug: "/work/" + post.fields.slug },
      locale: post.fields.locale,
    }));

    return paths;
  },
  getEntryBySlug: async (slug: string) => {
    const result = await client.getEntries({
      content_type: works.contentType,
      "fields.slug[in]": slug,
    });
    const item = result.items[0];
    return item;
  },
};
