import type { Metadata } from 'next';

const BASE_URL = 'https://keydeals.vn';

export function createMetadata({
  title,
  description,
  path = '',
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | KeyDeals`;
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${BASE_URL}${path}`,
      siteName: 'KeyDeals',
      ...(image && { images: [{ url: image, width: 1200, height: 630 }] }),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}
