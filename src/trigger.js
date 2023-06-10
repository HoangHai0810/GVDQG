
// Định nghĩa model cho bảng trigger
const Trigger = sequelize.define('trigger', {
  name: Sequelize.STRING,
  // Các trường khác của bảng
});

// Tạo trigger
sequelize.query(`
    CREATE TRIGGER check_tuoicauthu
    BEFORE INSERT ON cauThus
    FOR EACH ROW
    BEGIN
      DECLARE tuoi INT
      SET tuoi = YEAR(NOW)) - YEAR(NEW.ngaySinh)
      IF(tuoi < 16 or tuoi > 40)
      BEGIN
        --in ra lỗi
      END
      ELSE 
      BEGIN
        INSERT INTO cauThus VALUES (NEW.maCauThu, NEW.tenCauThu, NEW.tenDoiBong, NEW.maLoaiCauThu, 
                                  NEW.viTri, NEW.soAo, NEW.ngaySinh, NEW.chieuCao, NEW.canNang,
                                  NEW.quocTich)
      END
      -- Thực thi hành động khi trigger được kích hoạt
      -- Ví dụ: INSERT INTO trigger (name) VALUES (NEW.column_name);
    END;
  `);

// Sử dụng trigger
/*Trigger.create({ name: 'example' })
  .then((trigger) => {
    console.log('Trigger created:', trigger);
  })
  .catch((error) => {
    console.error('Error creating trigger:', error);
  });*/
