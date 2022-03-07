### 動作確認手順

1. `git clone https://github.com/chillout2san/react_redux_lp.git`
2. `cd react_redux_lp_master`
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
    Home ページに使用しているコンポーネントを格納。<br>
    Home ページを 5 つのコンポーネントに分けて考えている。<br>
    各コンポーネントのパーツは`parts`ディレクトリに格納。
  - `work`<br>
    Work ページに使用しているコンポーネントを格納。<br>
    Work ページを 3 つのコンポーネントに分けて考えている。
- `store`<br>
  Redux のファイルを格納。
