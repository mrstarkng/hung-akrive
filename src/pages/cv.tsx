import Head from "next/head";
import globalStyles from "@/styles/Main.module.css";
import PdfViewer from "@/components/PdfViewer";

export default function CVPage() {
  return (
    <>
      <Head>
        <title>Hung Nguyen — CV</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className={globalStyles.container}>
        <h1 className={globalStyles.mainTitle}>Resume</h1>
        {/* Chọn 1 trong 2: iframe (mặc định) hoặc object */}
        <PdfViewer file="/api/cv" ratio="3 / 4" />
        {/* <PdfViewer file="/api/cv" ratio="3 / 4" useObject /> */}
      </main>
    </>
  );
}
