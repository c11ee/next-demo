import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // 这组件的意义就为了设置 `lang`
    <Html lang="zh">
      <Head />
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
