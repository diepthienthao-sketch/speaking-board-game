# Speak & Roll — Mini Casino Edition

Trò chơi luyện nói tiếng Anh (giáo viên làm Host, học sinh làm Player), dùng nội dung 39 bài nghe (Track 5–43).
Một file `index.html` duy nhất, không cần build.

## Đưa lên GitHub Pages
1. Tạo repo mới, upload `index.html` (và `README.md`, `Code.gs` nếu muốn).
2. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
3. Sau 1–2 phút game chạy tại `https://<username>.github.io/<repo>/`.

## Kết quả của học sinh được lưu thế nào
- Tự lưu trong trình duyệt (localStorage) sau mỗi phiên: tên, World, cấp độ, coin, số nhiệm vụ hoàn thành, điểm mạnh/yếu, nhận xét.
- Dữ liệu gắn với **một trình duyệt trên một máy**. Dùng cùng máy và cùng link để thấy lịch sử.
- Trên trang chủ: **Export CSV** (mở bằng Excel/Google Sheets), **Backup JSON** và **Restore backup** để chuyển sang máy khác.
- Nên Export CSV định kỳ. Xóa dữ liệu duyệt web sẽ mất kết quả.

## Gom kết quả từ nhiều máy vào Google Sheets (tùy chọn)
1. Tạo Google Sheet mới → Extensions → Apps Script.
2. Dán nội dung `Code.gs`, Save.
3. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone → Deploy, copy URL `/exec`.
4. Mở game → trang chủ → mục "auto-send every result to Google Sheets" → dán URL.
Mỗi lần kết thúc game, một dòng kết quả được thêm vào Sheet.
