# Bảng Quy Chuẩn Thiết Kế & Cấu Trúc (Design System & Architecture)
Cập nhật những quy chuẩn mới nhất cho dự án để đảm bảo tính đồng nhất.

## 1. Sử Dụng UI Components (ShadcnUI)
- Bắt buộc tận dụng tối đa các components gốc từ thư viện **shadcn/ui** (ví dụ: `Button`, `Input`, `Carousel`, `Dialog`, v.v.).
- Nếu cần các component dùng chung mà mang phong cách/style riêng biệt cho dự án, phải khởi tạo (hoặc wrapper) từ bản gốc của shapdcn/ui, lưu trữ tập trung tại 1 nơi để sử dụng lại xuyên suốt dự án (ưu tiên giữ chung style system để tránh file local css tràn lan).

## 2. Quản Lý File Media
- Toàn bộ hình ảnh dùng cho cấu trúc layout chuẩn (banners, placeholder cho product, background default...) hoặc dùng lặp đi lặp lại ở nhiều nơi phải được lưu tại thư mục:
  `/public/images/base/`
- Khi render, tuyệt đối dùng `<Image />` của Next.js với đường dẫn trỏ về `/images/base/...`

## 3. Quản Lý Dữ Liệu Tạm (Mockdata)
- Mỗi tính năng/module phải tự có file `constants.ts` của riêng mình.
- Dữ liệu ảo (`mockdata`) không được phép nhồi nhét chung ở global nếu không thực sự cần thiết, mà tách nhỏ chia về từng module. File `constants.ts` này cũng có thể chứa các biến hằng số phục vụ mảng render dữ liệu ảo.

## 4. Layout Chuẩn
Ví dụ quy chuẩn về Grid Layout tại Hero Section:
- Hệ thống Grid: 4 columns x 3 rows.
- Banner Carousel chính thường sẽ nằm tại vùng trọng tâm trên cùng bên trái.
- Các Navigation Cards/Banner phụ ở cột còn lại hoặc hàng dưới cùng.
