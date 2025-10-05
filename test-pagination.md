# Pagination Testing Guide

## Test Scenarios

### 1. Basic Pagination Display

**Test Case 1.1: No Items**
- **Steps**: Open tool with empty list
- **Expected**: Pagination controls should be hidden
- **Status**: ⬜ Not tested

**Test Case 1.2: Single Page (≤20 items)**
- **Steps**: Add 10 IDs to the list
- **Expected**: Pagination controls should be hidden
- **Status**: ⬜ Not tested

**Test Case 1.3: Multiple Pages (>20 items)**
- **Steps**: Add 25 IDs to the list
- **Expected**: 
  - Pagination controls should appear below table
  - Should show "Hiển thị 1-20 trong số 25 mục"
  - Page buttons: « Trước [1] [2] Tiếp »
  - Page 1 should be highlighted in blue
  - "Trước" button should be disabled
- **Status**: ⬜ Not tested

### 2. Page Navigation

**Test Case 2.1: Next Button**
- **Steps**: 
  1. Add 50 IDs
  2. Click "Tiếp »" button
- **Expected**:
  - Move to page 2
  - Show items 21-40
  - STT should show 21, 22, 23... (not 1, 2, 3...)
  - Page 2 button highlighted
  - "Trước" button enabled
- **Status**: ⬜ Not tested

**Test Case 2.2: Previous Button**
- **Steps**: 
  1. Navigate to page 2
  2. Click "« Trước" button
- **Expected**:
  - Return to page 1
  - Show items 1-20
  - "Trước" button disabled again
- **Status**: ⬜ Not tested

**Test Case 2.3: Direct Page Click**
- **Steps**: 
  1. Add 100 IDs
  2. Click page number "3" button
- **Expected**:
  - Jump directly to page 3
  - Show items 41-60
  - Page 3 highlighted
- **Status**: ⬜ Not tested

**Test Case 2.4: Last Page**
- **Steps**: 
  1. Add 45 IDs (3 pages: 20, 20, 5)
  2. Navigate to page 3
- **Expected**:
  - Show items 41-45 (only 5 items)
  - "Tiếp" button disabled
  - Info shows "Hiển thị 41-45 trong số 45 mục"
- **Status**: ⬜ Not tested

### 3. Items Per Page Selector

**Test Case 3.1: Change to 10 items per page**
- **Steps**: 
  1. Add 25 IDs
  2. Select "10" from dropdown
- **Expected**:
  - Reset to page 1
  - Show items 1-10
  - Total pages becomes 3
  - Info shows "Hiển thị 1-10 trong số 25 mục"
- **Status**: ⬜ Not tested

**Test Case 3.2: Change to 50 items per page**
- **Steps**: 
  1. Add 30 IDs
  2. Navigate to page 2
  3. Select "50" from dropdown
- **Expected**:
  - Reset to page 1
  - Show all 30 items (single page)
  - Pagination controls hidden
- **Status**: ⬜ Not tested

**Test Case 3.3: Select "Tất cả"**
- **Steps**: 
  1. Add 100 IDs
  2. Select "Tất cả" from dropdown
- **Expected**:
  - Show all 100 items
  - Pagination controls hidden
  - Page loads without performance issues
- **Status**: ⬜ Not tested

### 4. Data Mutations

**Test Case 4.1: Add IDs while on page 1**
- **Steps**: 
  1. Add 15 IDs
  2. Add 10 more IDs (total 25)
- **Expected**:
  - Stay on page 1
  - Pagination controls appear (2 pages now)
  - New IDs added to end of list
- **Status**: ⬜ Not tested

**Test Case 4.2: Add IDs while on page 2**
- **Steps**: 
  1. Add 30 IDs (2 pages)
  2. Navigate to page 2
  3. Add 5 more IDs
- **Expected**:
  - Stay on page 2
  - Still showing items 21-30
  - Total becomes 35 items
- **Status**: ⬜ Not tested

**Test Case 4.3: Clear all IDs**
- **Steps**: 
  1. Add 50 IDs
  2. Navigate to page 3
  3. Click "Xóa tất cả"
- **Expected**:
  - All IDs removed
  - Pagination controls hidden
  - Reset to page 1 (for future additions)
- **Status**: ⬜ Not tested

**Test Case 4.4: Toggle Save button**
- **Steps**: 
  1. Add 25 IDs
  2. Navigate to page 2
  3. Click "Lưu ID" on an item
- **Expected**:
  - Item saved status updated
  - Stay on page 2
  - Button changes to "✓ Đã lưu"
- **Status**: ⬜ Not tested

**Test Case 4.5: Reset opened status**
- **Steps**: 
  1. Add 40 IDs
  2. Open some tabs (mark as "Đã mở")
  3. Navigate to page 2
  4. Click "Reset trạng thái đã mở"
- **Expected**:
  - All opened status reset
  - Stay on page 2
  - All statuses show "Chưa mở tab"
- **Status**: ⬜ Not tested

### 5. Edge Cases

**Test Case 5.1: Exactly 20 items**
- **Steps**: Add exactly 20 IDs
- **Expected**: Pagination controls hidden (exactly 1 page)
- **Status**: ⬜ Not tested

**Test Case 5.2: 21 items (2 pages with 1 item on page 2)**
- **Steps**: Add 21 IDs, navigate to page 2
- **Expected**: 
  - Page 2 shows only 1 item (item 21)
  - Info shows "Hiển thị 21-21 trong số 21 mục"
- **Status**: ⬜ Not tested

**Test Case 5.3: Many pages (>5 pages)**
- **Steps**: Add 150 IDs (8 pages)
- **Expected**:
  - Page buttons show ellipsis: [1] [2] [3] [4] [5] ... [8]
  - When on page 4: [1] ... [2] [3] [4] [5] [6] ... [8]
  - When on page 8: [1] ... [4] [5] [6] [7] [8]
- **Status**: ⬜ Not tested

**Test Case 5.4: Remove items making current page invalid**
- **Steps**: 
  1. Add 50 IDs (3 pages)
  2. Navigate to page 3
  3. Manually delete items to have only 30 total
- **Expected**: Auto-adjust to valid page (page 2)
- **Note**: This scenario may not apply with current UI (no delete single item feature)
- **Status**: ⬜ Not tested

### 6. UI/UX Checks

**Test Case 6.1: Button hover effects**
- **Steps**: Hover over pagination buttons
- **Expected**:
  - Enabled buttons change to light blue background
  - Disabled buttons show no hover effect
  - Cursor changes appropriately
- **Status**: ⬜ Not tested

**Test Case 6.2: Active page styling**
- **Steps**: Check current page button
- **Expected**:
  - Blue background (#0b57d0)
  - White text
  - No hover effect (non-clickable)
- **Status**: ⬜ Not tested

**Test Case 6.3: Responsive layout**
- **Steps**: Resize browser window
- **Expected**:
  - Pagination controls wrap on smaller screens
  - Info text, buttons, and dropdown stay visible
- **Status**: ⬜ Not tested

### 7. Performance Tests

**Test Case 7.1: Large dataset (1000 IDs)**
- **Steps**: Add 1000 IDs using test data
- **Expected**:
  - Page renders quickly (<1 second)
  - Only 20 items rendered initially
  - Navigation is smooth
  - No browser lag
- **Status**: ⬜ Not tested

**Test Data Generator** (paste in console after tool loads):
```javascript
// Generate test data
const testIds = Array.from({length: 1000}, (_, i) => `TEST_ID_${i + 1}`).join('\n');
document.querySelector('textarea').value = testIds;
document.querySelector('button[textContent*="Thêm danh sách"]').click();
```

**Test Case 7.2: Rapid page switching**
- **Steps**: 
  1. Add 200 IDs (10 pages)
  2. Quickly click through pages 1 → 2 → 3 → 10 → 1
- **Expected**:
  - Each transition is smooth
  - No rendering glitches
  - Correct items shown each time
- **Status**: ⬜ Not tested

### 8. Accessibility

**Test Case 8.1: Keyboard navigation**
- **Steps**: Use Tab key to navigate through pagination controls
- **Expected**: All buttons and dropdown are keyboard accessible
- **Status**: ⬜ Not tested

**Test Case 8.2: ARIA attributes**
- **Steps**: Inspect pagination buttons in DevTools
- **Expected**:
  - Buttons have `aria-label` attributes
  - Current page has `aria-current="page"`
  - Disabled buttons have `disabled` attribute
- **Status**: ⬜ Not tested

## Test Results Summary

- **Total Tests**: 31
- **Passed**: ___
- **Failed**: ___
- **Blocked**: ___
- **Not Tested**: 31

## Known Issues

_(Document any issues found during testing)_

---

## Quick Test Commands

### Generate 50 test IDs
```javascript
Array.from({length: 50}, (_, i) => `ID_${String(i + 1).padStart(3, '0')}`).join('\n')
```

### Generate 100 test IDs
```javascript
Array.from({length: 100}, (_, i) => `ID_${String(i + 1).padStart(4, '0')}`).join('\n')
```

### Clear localStorage
```javascript
localStorage.removeItem('savedIds');
```

### Check current pagination state
```javascript
console.log('Current Page:', currentPage);
console.log('Items Per Page:', itemsPerPage);
console.log('Total Items:', idList.length);
console.log('Total Pages:', Math.ceil(idList.length / itemsPerPage));
```
