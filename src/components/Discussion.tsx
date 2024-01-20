import * as React from 'react';

import Giscus, {Repo} from '@giscus/react';

export default function Discussion() {
  return (
    <Giscus
          id="comments"
          repo={(process.env.NEXT_PUBLIC_GISCUS_REPO as Repo)}
          repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''}
          category="General"
          categoryId="DIC_kwDOJNLybs4CcjBQ"
          mapping="pathname"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="lazy"
      />
  )
}
