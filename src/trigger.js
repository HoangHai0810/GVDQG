
// Định nghĩa model cho bảng trigger
const Trigger = sequelize.define('trigger', {
    name: Sequelize.STRING,
    // Các trường khác của bảng
});

// Tạo trigger
sequelize.query(`
    CREATE TRIGGER your_trigger_name
    AFTER INSERT ON your_table_name
    FOR EACH ROW
    BEGIN
      -- Thực thi hành động khi trigger được kích hoạt
      -- Ví dụ: INSERT INTO trigger (name) VALUES (NEW.column_name);
    END;
  `);

// Sử dụng trigger
Trigger.create({ name: 'example' })
    .then((trigger) => {
        console.log('Trigger created:', trigger);
    })
    .catch((error) => {
        console.error('Error creating trigger:', error);
    });
