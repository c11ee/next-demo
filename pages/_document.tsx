import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // 这组件的意义就为了设置 `lang`
    <Html lang="zh">
      <Head>
        {/* 网页作者 */}
        <meta name="author" content="毕方网络开发" />
        {/* 网页地址 */}
        <meta name="website" content="http://bfidc.bifnet.com/" />
        {/* 网页版权信息 */}
        {/* <meta name="copyright" content="2020-2021 demo.com" /> */}
        {/* 网页关键字, 用于SEO */}
        <meta name="keywords" content="毕方网络" />
        {/* 网页描述 */}
        <meta name="description" content="专业软件定制" />
        {/* 搜索引擎索引方式，一般为all，不用深究 */}
        <meta name="robots" content="all" />
        {/* 移动端常用视口设置 */}
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
        <title>毕方网络软件官网</title>
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
