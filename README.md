# Facebook Tool QN | Mở nhiều tab

Công cụ JavaScript để mở nhiều tab Facebook với batch processing và quản lý trạng thái.

## Tính năng

✅ **Mở nhiều tab tự động**
- Phân tích URL và tham số
- Ánh xạ tham số với danh sách ID
- Mở tab theo lô (batch) với delay
- Theo dõi trạng thái đã mở/chưa mở

✅ **Quản lý danh sách ID**
- Thêm nhiều ID cùng lúc
- Lưu ID quan trọng
- Xuất danh sách ID đã lưu
- Reset trạng thái đã mở
- Xóa tất cả ID

✅ **Batch Processing**
- Cấu hình số lượng tab mở cùng lúc (khuyến nghị: 5)
- Tùy chỉnh độ trễ giữa các tab (khuyến nghị: 1000ms)
- Tự động quản lý popup permission

## Cách sử dụng

### 1. Chạy script
```javascript
// Mở Developer Console (F12) trên business.facebook.com
// Copy toàn bộ nội dung file script-open-many-tabs.js
// Paste vào Console và Enter
```

### 2. Cấu hình
1. **Paste URL mẫu** vào "URL cơ sở"
2. Click **"Phân tích URL"**
3. **Chọn tham số** để ánh xạ (thường là `selectedAsset`)
4. **Nhập danh sách ID** (mỗi dòng một ID)
5. Click **"Thêm danh sách ID"**

### 3. Mở tabs
1. Cấu hình **batch size** và **delay** nếu cần
2. Click **"Kiểm tra quyền pop-up"** (lần đầu tiên)
3. Click **"Mở tab"**
4. Script sẽ mở từng lô tabs với delay

## Cấu hình khuyến nghị

- **Batch Size**: 5 tabs
- **Delay**: 1000ms (1 giây)

## Bảng kết quả

| STT | SelectedAsset | Trạng thái | Lưu |
|-----|---------------|------------|-----|
| 1   | ID_123        | Đã mở      | Lưu ID |
| 2   | ID_456        | Chưa mở tab| ✓ Đã lưu |

## Lưu ý

- Cho phép popup cho domain `business.facebook.com`
- Không mở quá nhiều tabs cùng lúc (max 5-10)
- IDs được lưu trong `localStorage` của browser
- Script chỉ hoạt động trên domain Facebook Business

## Export ID đã lưu

Click nút **"Xuất các ID đã lưu"** để download file JSON chứa danh sách ID.

---

**Version**: 2.0.0  
**Last Updated**: 2025-01-05
