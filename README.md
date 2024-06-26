## Getting Started

First, Install the project:

`npm i`
Then, run the dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Generating Supabase Types

`npx supabase login`
`npx supabase init`
`npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > src/types/supabase.ts`
npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > src/types/supabase.ts

Project Ref is found in settings > Project Settings > Reference ID. It's also found in NEXT_PUBLIC_SUPABASE_URL
