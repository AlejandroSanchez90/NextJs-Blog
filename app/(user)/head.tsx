// Re-export `NextStudioHead` as default if you're happy with the default behavior
export { NextStudioHead } from 'next-sanity/studio/head';

// To customize it, use it as a children component:
import { NextStudioHead } from 'next-sanity/studio/head';

export default function CustomStudioHead() {
  return (
    <>
      <title>Blog</title>
    </>
  );
}
