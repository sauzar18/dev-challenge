# dev

[demo](https://dev-problem.herokuapp.com/)

1. スキルを十分に確認できるプロジェクトあるいはソースコード  
[GitHub](https://github.com/sauzar18)

2. メインコーダーとなって開発した、実際に稼働中のプロダクト
[Keenlyの書き換え](https://github.com/sauzar18/keenly)  
[予約システム](https://github.com/sauzar18/furbo)  
[歯科求人サイト](https://github.com/sauzar18/medee)

3. フロントエンドの最近の動向についての考察 (JSフレームワークの選定についてや今後のフロントエンドはどうなるか)  
SPAでの開発が主流になり、マイクロサービス化が進んでいる印象がある。  
デザインにおいてもマイクロデザインが浸透しつつあり、コンポーネント指向が現在のトレンドになっていると思う。

JSフレームワークについてはReact, Vue, Angularの三強の中で、個人的にはVueをメインで利用している
それぞれ案件によって使い分けていく必要はあるかと思う。

エンジニアとして組織化され、より大規模なアプリの開発をするならReact。Flowで型チェックできる点、  
JSXで管理できる点がエラーチェックがしやすいと思う。

Vueはスタートアップの開発や、ちょっとしたWEBサイトの構築、デザイナーとの共同制作などにむいていると思う。  
Nuxt.jsがあることで、Vueファイルに集中することができ、SPA開発やPWAの対応が比較的簡単になった。  
リーンスタートアップなど、スピード感をもって制作することができる。  
最近だとTypeScriptと連携が取りやすくなってきている点もある。

Angularはフレームワークとして、TypeScript標準で、Webアプリを制作するためのエコシステムが豊富にあるイメージ。  
Google製なので、マテリアルデザインやGoとの親和性が強い。フレームワークとして何でもできるイメージ。

今後のフロントエンドでは、スタートアップでNuxt.jsを採用する企業は増えると思う。  
ある程度規模間が大きくなってきたときにReactかAngularに移行する感じになりそう。  
TypeScriptが今トレンドということもあり、型を定義した開発が当たり前になってくると思う。  
一つのフレームワークに固執するのではなく、プロジェクトの規模間、環境などに合わせた選択をしなくてはならない。

4. バックエンドについての考察 (PHP,Rails,Go,Scalaなど好き嫌いや自分ならどれを選ぶかなど)  
一番すきな言語はNode.js。理由として、各JSフレームワークとの連携が取りやすい点、後方/前方互換性があるので、  
バージョンアップしても基本的に動く点、v12になり起動速度が30％UPする点など、今後の魅力の一つ。  
フロントエンドの延長で制作ができるので、フロントエンドからバックエンドまでのストーリーが描きやすい。

今後、身につけたい言語はGo言語。処理スピードの速さが魅力の一つ。  
実行速度が速いので、複雑なアルゴリズムで書かれた処理もさくっと処理してくれそう。  
他の言語に比べるとまだまだ発展途上のイメージがある。

Railsはスピード感をもってWebアプリが制作でき、コードもしゅっとしていて管理がしやすくメンテナンスが  
しやすいイメージ。バグもすくなく実装することが出来る点も魅力の一つだと思う。初心者から上級者まで  
利用しやすいという点から、プロジェクトの規模間に合わせた開発が柔軟にできるイメージ。

それぞれ、案件に合わせて使い分けていくのが良いと考えています。

5. SPA についての考察  
滞在時間が長いWebアプリは対応すべきだと考えています。  
表示速度が一般的なWEBサイトに比べて天と地の差かなと。  
最近だとSEOに対応できるようになっているので、SEOやアクセシビリティを意識した  
サイトでも導入しやすくなっている。また、サーバー（インフラ）で選択できる言語も多様化して  
きているので、今後はSPAが前提でどう設計していくか、パフォーマンスをあげていくかがメインになってくると思う。  

6. PWA についての考察  
LP等には必要ないと思うが、基本的には実装したほうがいいと思う。  
Google PlayにもPWAが申請できるようになる点や、サービスワーカーによる、オフラインでも利用できる  
点、Push通知によるユーザーへのアプローチができる点、5Gに対応するといっても格安SIMの利用者が  
増えているというところで、ブラウザキャッシュを使って速度改善ができる点がメリットでもあると思う。
iOS Safariではまだまだ弱い点もあるが、世界の市場的にはPWAの需要が高まっている点、一人あたりのWEBの閲覧数は  
ネイティブよりも各段に高いので（利用時間は圧倒的にネイティブ）、PWAに対応することで、ネイティブの良さを取り入れつつWEBの気軽さが体験できるので、ユーザーのUX改善にもなりえる。

7. TypeScript, Flow についての考察（要・不要含めて）  
TypeScriptは最近急激に普及してきたイメージ。  
型を定義することで、意図した動きを制作に実行することが出来ると思う。  
JavaScriptは型がないので、数字が文字列になっていても気づきにくかったり、Array,Objectなどを  
明確なデータとして扱うことができる点が非常にメリットがあり、エラー検出やソースの治安などが  
守られると考えています。  
個人的には今後取り入れていく必要が多いにあると考えています。

8. ES2015 で導入された Class についての考察
function地獄にならずに、オブジェクト指向で開発ができる点が継承などができてメリットだと考えています。
ソースの生産性や補完性も上がるので、functionで開発するメリットがなかったら、Classで実装していく方が  
良いと思います。  
アクセッサプロパティがあるので、関数として扱うこともできるので、Webコンポーネントの指向にも非常にマッチしていると思います。
逆にWeakMapを利用すれば、Classの外からのアクセスを制限することもできる。  
個人的には導入事例はまだまだ少ないので、知見を深めてWEB制作に導入していきたい。

## Build Setup
対象のプロジェクト上で下記を実行してください。  
また、sqlはフォルダ内のdev_db.sqlです。

ログインはGithubのみ実装しました。

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
# dev-challenge
