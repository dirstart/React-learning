#### 本项目为了拯救自己之前以往的 React 知识。
> 毕业设计用 React，还剩下一个月办。

#### 1.`npm run eject`之前要现在 git 上提交一次。大概是`create-react-app`的严谨吧。
> 这个操作使用 git 查看的话 `git diff HEAD --name-only
todo-list/README.md
todo-list/package.json
todo-list/src/App.js
主要还是对 package.json 中依赖的添加。

#### 2.先想办法在 create-react-app 中使用 Less

* npm run eject
* 在 todo-list/config 中的 webpack.config.dev.js 和 webpack.config.prod.js 都加上
```
use: [
  require.resolve('style-loader'),
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
    },
  },
  {
    loader: require.resolve('postcss-loader'),
    options: {
      // Necessary for external CSS imports to work
      // https://github.com/facebookincubator/create-react-app/issues/2677
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009',
        }),
      ],
    },
  },w
  {
    loader: require.resolve('less-loader')
  }
],
```