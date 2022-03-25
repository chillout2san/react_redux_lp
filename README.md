### 動作確認手順

1. `git clone https://github.com/chillout2san/react_redux_lp.git`
2. `cd react_redux_lp`
3. `yarn install`
4. `yarn start`

### 動作確認環境

- MacBookAir(M1 2020)
  - Node.js: v16.0.0
- WindowPC(Windows10)
  - Node.js: v14.17.0

### ディレクトリ構成

- 緩い atomic デザインで作成。
- `src`の以下 3 つのディレクトリについて説明。
- `pages`
  - デザインカンプの各ページ(Home ページ、Work ページ)に対応。
- `components`
  - `common`<br>
    使い回すことが出来るコンポーネントや HTML 要素を格納。
  - `home`<br>
    Home ページ(デザインカンプに「Home」とあったページ)に使用しているコンポーネントを格納。<br>
    5 つのコンポーネントに分けて考えており、更に各コンポーネントのパーツは`parts`ディレクトリに格納。
  - `work`<br>
    Work ページ(デザインカンプに「実績詳細」とあったページ)に使用しているコンポーネントを格納。<br>
    3 つのコンポーネントに分けて考えており、更に各コンポーネントのパーツは`parts`ディレクトリに格納。
- `store`<br>
  Redux のファイルを格納。
