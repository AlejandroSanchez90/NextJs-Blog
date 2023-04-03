import { client } from './sanity.client';
import imageurlBuilder from '@sanity/image-url';

const builder = imageurlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};

export default urlFor;
