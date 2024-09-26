import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from "next";
import Image from "next/image";

const Index = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Image
        src="/static/image/aboutus.png"
        width={720}
        height={460}
        alt="img"
        priority
      ></Image>
      {JSON.stringify(data)}
    </div>
  );
};

export async function getStaticProps(
  context: GetStaticPropsContext<
    {
      ccc: string;
    },
    PreviewData
  >
) {
  let data: any[] = [];
  await fetch("https://www.wanandroid.com/article/list/0/json")
    .then((res) => res.json())
    .then((res) => {
      data = res.data.datas;
    });
  return {
    props: {
      data: data,
    },
  };
}

export default Index;
