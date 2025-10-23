// src/components/PdfViewer/index.tsx
import styles from "./PdfViewer.module.css";

type Props = {
  file?: string;           // endpoint PDF (mặc định /api/cv)
  ratio?: string;          // tỉ lệ khung, ví dụ "3 / 4" hoặc "16 / 9"
  useObject?: boolean;     // nếu true dùng <object> thay cho <iframe>
};

export default function PdfViewer({
  file = "/api/cv",
  ratio = "3 / 4",
  useObject = false,
}: Props) {
  // Ẩn toolbar & khu điều hướng
  const src = `${file}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-width`;

  return (
    <div className={styles.frameWrap} style={{ aspectRatio: ratio }}>
      {useObject ? (
        // Cách 2: <object> – chrome cũng ổn định và không bị block
        <object data={src} type="application/pdf" className={styles.frame}>
          <p>Unable to display PDF.</p>
        </object>
      ) : (
        // Cách 1: <iframe> – KHÔNG sandbox để Chrome không block
        <iframe
          className={styles.frame}
          src={src}
          title="PDF viewer"
          loading="lazy"
          // KHÔNG đặt sandbox ở đây!
          // Không cần allow/permissions gì đặc biệt
        />
      )}
    </div>
  );
}
