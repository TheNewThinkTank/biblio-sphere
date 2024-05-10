![CI](https://github.com/TheNewThinkTank/biblio-sphere/actions/workflows/wf.yml/badge.svg)

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

- [x] Set up Jekyll for GH pages

<img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-jekyll-a-simple-blog-aware-static-site-generator-for-personal-project-logo-shadow-tal-revivo.png" alt="external-jekyll-a-simple-blog-aware-static-site-generator-for-personal-project-logo-shadow-tal-revivo"/>

```BASH
brew install ruby
brew info ruby

vim ~/.zshrc

echo $PATH

gem update --system 3.5.10
gem install jekyll bundler

echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
echo 'export PATH="/opt/homebrew/lib/ruby/gems/3.3.0/bin:$PATH"' >> ~/.zshrc

source  ~/.zshrc

ruby -v
gem -v
jekyll -v
```

- [ ] Find a good online book DB and API (Goodreads API is discontinued)
- [ ] Suggest next book to read, using RAG: [medium](https://medium.com/@pankaj_pandey/unleash-the-power-of-rag-in-python-a-simple-guide-6f59590a82c3) or faiss model
