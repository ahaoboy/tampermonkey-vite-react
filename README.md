# tampermonkey-vite

> If you feel helpful, don't stingy your star, this is the best encouragement for me

tampermonkey scaffold, uses the following framework:

- react@17 - UMD
- react-dom@17 - UMD
- zent@9
- vite@2
- typescript@4
- sass

## install

> make sure you have installed `node@12+` at first.

```bash
yarn # install dependencies
```

## dev

```bash
yarn dev
```

there are two dev mode, the first is dev with local page, and the next is dev with the target page.

### local mode

1. run `yarn dev` to start vite
2. open `localhost:[port]` at browser.(use the port which your terminal output)
3. code with it

### advanced mode

1. run `yarn dev` to start vite
2. change `config/tamper` config to match your target url.
3. change the source code.
4. run `yarn dev-inject`, the inject code will been copied to your clipboard.
5. go to tampermonkey and paste it.
6. open target url, and enjoy~

## build

```bash
yarn build
```

and the bundle file will be generated at `dist/[pluginName].user.js`

- run `yarn build`
- the bundle will generate at `dist/[dist-name].user.js`
- copy code to tampermonkey.
  - perfer to upload to github/gitlab and use raw url
