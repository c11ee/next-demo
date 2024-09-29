import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

interface DataItem {
  adminAdd: boolean;
  apkLink: string;
  audit: number;
  author: string;
  canEdit: boolean;
  chapterId: number;
  chapterName: string;
  collect: boolean;
  courseId: number;
  desc: string;
  descMd: string;
  envelopePic: string;
  fresh: boolean;
  host: string;
  id: number;
  isAdminAdd: boolean;
  link: string;
  niceDate: string;
  niceShareDate: string;
  origin: string;
  prefix: string;
  projectLink: string;
  publishTime: number;
  realSuperChapterId: number;
  selfVisible: number;
  shareDate: number;
  shareUser: string;
  superChapterId: number;
  superChapterName: string;
  tags: {
    name: string;
    url: string;
  }[];
  title: string;
  type: number;
  userId: number;
  visible: number;
  zan: number;
}
const Index = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const l = data;
  return (
    <div>
      <Image
        src="/static/image/aboutus.png"
        width={720}
        height={460}
        alt="img"
        priority
      ></Image>
      {JSON.stringify(l)}
    </div>
  );
};

export const getServerSideProps = (async () => {
  let data: DataItem[] = [];
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
}) satisfies GetServerSideProps<{ data: DataItem[] }>;

export default Index;
