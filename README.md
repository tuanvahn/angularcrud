*****Step by step
1. CÀI ANGULAR
npm install -g @angular/cli
2.TẠO PROJECT
ng new CRUD
3. CÀI ĐẶT BOOTSTRAP
npm install bootstrap -S
Sau đó khai báo đường dẫn file css bootsrap vừa cài đặt vào trong angular.json
4. TẠO MODULE CHO CÁC COMPONENT
ng g module modules/employees --module=app
Chứa các thành phần để thực hiện các chức năng
Sau đó tại thư mục chung chứa các component có tên là "employees"
5. TẠO CÁC COMPONENT
Tiếp theo tạo các Component "employee", "employee-list" trong thư mục "employees"
--- Component "employee" dùng để thực hiện thêm sửa xóa
--- Component "employee-list" dùng để hiển thị dữ liệu
Sau khi tạo xong các component, vào "app.componetn.html" để chỉnh sửa giao diện
-- và hiển thị các selector của các component
--- Trong "employees.module.ts" thêm thuộc tính "exports" các class component để sử dụng được ở Module khác
6. TẠO CÁC TEMPALTE HIỂN THỊ TRANG INDEX
--- Tạo giao diện trong các component ở file ".htnl"
7. TẠO FILE JSON
npm install json-server -g
Sau đó tạo 1 file json có tên là "db.json" trong thư mục assets. File này chức dữ liệu dạng json của Project.
--- Sau khi tạo xong file json, add giữ liệu demo đạng json theo các trường dữ liệu có trong form.
 8. XEM DỮ LIỆU FILE JSON VÀ ĐƯỜNG DẪN API ĐỂ XỬ LÝ DỮ LIỆU
json-server --watch db.json lấy được API
9. TẠO SERVICE
Tạo thư mục SHARE để chứa SERVICE
ng g service employee
--- Chứa các hàm xử lý dữ liệu (thêm, sửa, xóa) được truyền vào từ view
10. 

