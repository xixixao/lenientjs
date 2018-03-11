# How to generate babylon:

Below `babylon` is a folder in local checkout of `babel` and `prettier` is the folder with local checkout of `prettier`.

1. Make changes to `babylon`
2. In `babel`, run `gulp build`
3. Link `babylon` to `node_modules/babylon` inside `prettier`
4. In `prettier` run

`rollup -c scripts/build/rollup.parser.config.js --environment parser:language-js/parser-babylon`

5. In `prettier` run

`rollup -c scripts/build/rollup.docs.config.js --environment filepath:parser-babylon.js -i dist/parser-babylon.js`

6. Copy the compiled parser file from `prettier/website` to this repo, like

`cp ../prettier/website/static/lib/parser-babylon.js public/prettier/lib/`

# How to generate prettier:

1. Make changes to `prettier`
2. In `prettier` run `yarn build`, then `yarn build-docs`
3. Copy the compiled index from `prettier/website` to this repo, like

`cp ../prettier/website/static/lib/index.js public/prettier/lib/`
