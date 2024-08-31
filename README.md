# section5
Building Adaptive User Interfaces (Adapt to Platform &amp; Device)
Giải thích các điểm chính:
1. Sử dụng useWindowDimensions để lấy kích thước màn hình động.
Điều chỉnh số cột dựa trên hướng màn hình (ngang/dọc).
Sử dụng Dimensions API (thông qua useWindowDimensions) để điều chỉnh kích thước hình ảnh.
Xử lý vấn đề xoay màn hình bằng cách cập nhật số cột.
5. Sử dụng KeyboardAvoidingView để quản lý nội dung khi bàn phím hiển thị.
6. Cải thiện giao diện cho chế độ ngang bằng cách tăng số cột.
7. Sử dụng Platform.OS để viết mã đặc thù cho từng nền tảng (iOS/Android).
Tùy chỉnh thanh trạng thái (Status Bar) cho phù hợp với từng nền tảng.
Ứng dụng này bao gồm một danh sách sản phẩm có thể tìm kiếm, với giao diện thích ứng cho các kích thước và hướng màn hình khác nhau. Nó cũng minh họa việc sử dụng các API đặc thù cho nền tảng và xử lý bàn phím.
