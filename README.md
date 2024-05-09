![CI](https://github.com/TheNewThinkTank/biblio-sphere/actions/workflows/wf.yml/badge.svg)
![CI](https://github.com/TheNewThinkTank/biblio-sphere/actions/workflows/typescript-wf.yml/badge.svg)

# biblio-sphere

digital world of books

## useful resources

[svelte setup](https://www.chrisjmendez.com/2022/03/28/how-to-install-svelte-on-macos-using-npm/)

## local setup

```BASH
npm init
npm i lodash
npm i -g degit

npx degit sveltejs/template my-svelte-app
cd my-svelte-project
npm i

npm run dev

# compile and run index.ts
tsc index.ts
node index.js
```

# TODOs

Backend:

- [ ] Set up Jekyll for GH pages
- [ ] Find a good online book DB and API (Goodreads API is discontinued)
- [ ] Suggest next book to read, using RAG: [medium](https://medium.com/@pankaj_pandey/unleash-the-power-of-rag-in-python-a-simple-guide-6f59590a82c3) or faiss model
