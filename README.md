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
--- Tạo giao diện trong các component ở file ".html"
--- Validate form
--- Đối với Reactive form: cần import FormGroup, Validators, FormControl để tạo formGroup chứa các require của các trường dữ liệu
7. TẠO FILE JSON
npm install json-server -g
Sau đó tạo 1 file json có tên là "db.json" trong thư mục assets. File này chức dữ liệu dạng json của Project.
--- Sau khi tạo xong file json, add giữ liệu demo đạng json theo các trường dữ liệu có trong form.
 8. XEM DỮ LIỆU FILE JSON VÀ ĐƯỜNG DẪN API ĐỂ XỬ LÝ DỮ LIỆU
json-server --watch db.json lấy được API
9. TẠO SERVICE
Tạo thư mục SHARE để chứa SERVICE
ng g service employee
--- Chứa các hàm xử lý dữ liệu lấy dữ liệu,thêm, sửa, xóa
----- 1. Cần khai báo API, http
----- 2. Viết các hàm 
--------- getAllEmployees(): Lấy dữ liệu - GET
--------- deleteEmployeeById(): Xóa dữ liệu - DELETE
--------- createEmployee(): Thêm dữ liệu - POST
--------- updateEmployee(): Sửa dữ liệu - PUT
10. TẠO MODEL
--- Tạo thư mục "model" chứa file "employee.model.ts" dùng để khai báo kiểu dữ liệu cho các trường
----- Sau đó, import vào service để sử dụng
11. HIỂN THỊ DỮ LIỆU
----- Import service và model vào file "employee-list.component.ts"
----- Khai báo service
----- Trong fie này tạo gọi lại các hàm trong service:
-------- getAllEmployees() để get dữ liệu.
-------- deleteEmployeeById() để truyền id bản ghi muốn xóa, dữ liệu trả ta thực hiện xử lý dữ liệu thông qua phương thức subscribe.
-------- updateEmployee() để truyền id bản ghi muốn cập nhật, dữ liệu trả ta thực hiện xử lý dữ liệu thông qua phương thức subscribe.
12. XỬ LÝ DỮ LIỆU TỪ FORM THÊM MỚI
---- Trong file "employee.component.ts" gọi lại các hàm updateEmployee(), createEmployee() trong service tương tự như hiển thị dữ liệu
------- và tạo clearForm() để reset form


