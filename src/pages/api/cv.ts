// src/pages/api/cv.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method Not Allowed");
  }

  // ĐƯỜNG DẪN FILE THỰC TẾ CỦA BẠN (xem ảnh tree: private/hunglenguyen.pdf)
  const filePath = path.join(process.cwd(), "private", "hunglenguyen.pdf");

  try {
    const stat = fs.statSync(filePath);

    res.setHeader("Content-Type", "application/pdf");
    // Hiển thị inline (trong trình duyệt) chứ không gợi ý tải về
    res.setHeader('Content-Disposition', 'inline; filename="HungNguyenCV.pdf"');

    // Hạn chế lưu trữ
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Content-Length", String(stat.size));

    const stream = fs.createReadStream(filePath);
    stream.on("error", () => res.status(500).end("Failed to read CV"));
    stream.pipe(res);
  } catch {
    return res.status(404).end("CV not found");
  }
}
