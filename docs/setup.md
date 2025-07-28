# re:membr - 環境構築と開発の手順
## 0. 環境構築
Next.js プロジェクトをセットアップします
### 0.0. node.js と yarn のインストール
- node.js が入っていることを確認:
	```sh
	$ node --version
	```
	- note: node.js が入っていない場合はインストールしておく:
		```sh
		$ brew install node
		```
	- npm もインストール:
		```sh
		$ npm install -g npm
		```
- yarn が入っていることを確認:
	```sh
	$ yarn --version
	```
	- note: yarn が入っていない場合はインストールしておく:
		```sh
		$ npm install -g yarn
		```

### 0.1. プロジェクトの作成
- yarn create コマンド:
	```sh
	$ yarn create next-app remembr --app --use-yarn --typescript --eslint --tailwind --no-turbopack
	```
	オプションの選択肢を質問されるので、矢印キーで以下の通り回答する：
	- Would you like your code inside a `src/` directory? … No / Yes
	→ [ YES ]
	- Would you like to customize the import alias (`@/*` by default)? … No / Yes
	→ [ No ]

	→ `remembr` ディレクトリが作成される:
	```
	$ cd remembr
	```
- git commit -m "init":
	```sh
	$ git add .
	$ git commit -m "init"
	```

### 0.2. ドキュメントの整備
#### 0.2.0. README
- [README.md](../README.md) を更新 - 内容が自動生成されたものになっているので適切な内容に書き換える
- git commit -m "update README.md"

#### 0.2.1. 手順書類
- ドキュメント格納用のディレクトリを作成:
	```sh
	$ mkdir docs # ドキュメントはこのディレクトリで管理
	$ touch docs/setup.md
	```
- `docs/setup.md` の内容を更新
- [README.md](../README.md) にリンクを貼る
- git commit -m "create docs/setup.md"

### 0.3. パッケージインストール
#### 0.3.0. Redux Toolkit
- yarn add コマンド:
	```sh
	$ yarn add @reduxjs/toolkit react-redux
	```
- ディレクトリとファイルを作成:
	```sh
	$ mkdir src/store # Redux ストアはこのディレクトリで管理
	$ touch src/store/index.ts # いったん空のファイルを作成しておく
	$ touch src/store/hooks.ts # いったん空のファイルを作成しておく
	$ mkdir -p src/features/cards # Redux スライスはこのディレクトリで管理
	$ touch src/features/cards/cardsSlice.ts # いったん空のファイルを作成しておく
	```
- 関連ドキュメントを更新
- git commit -m "add Redux Toolkit"

## 1. 開発
### 1.0. アプリケーションの起動
- yarn dev:
	```sh
	$ yarn dev
	```

## 2. デプロイ
### 2.0. Vercel へのデプロイ
0. Vercel アカウントを作成し、Next.js プロジェクトのデプロイ先を準備します。
	- [vercel.com](https://vercel.com/)
0. Vercel CLI をインストール:
	```sh
	$ yarn global add vercel
	```
0. Vercel CLI を使ってデプロイ:
	```sh
	$ vercel
	```
0. Vercel の対話式プロンプトに従ってセットアップ:
	```
	Vercel CLI x.x.x

	? Set up and deploy “remembr”? [Y/n] y
	? Which scope should it belong to? hiroyuki-suwa
	? Link to existing project? [y/N] n
	? What’s your project’s name? remembr
	? In which directory is your code located? ./
	? Want to override the settings? [y/N] n
	? Link to GitHub repository? [Y/n] y
	```
	※ 基本的にはすべてデフォルト [Enter] で OK です
0. デプロイ完了後:
	- Vercel のダッシュボードでプロジェクトの設定を確認します
	- 必要に応じて、環境変数・ブランチ設定・Production Domain などを調整します
	- アプリケーションは Vercel が発行する URL (ex: `https://remembr.vercel.app`) からアクセスできます
