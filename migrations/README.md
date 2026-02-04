# AWRIM Database Migrations

This directory contains database migration files for the AWRIM website backend.

## Database Setup

The application uses MySQL database with the following tables:
- `news` - News articles and announcements
- `events` - Event calendar and scheduling
- `gallery` - Image gallery with categories
- `resources` - Publications and downloadable files

## Running Migrations

### Prerequisites
- MySQL server running on localhost
- Node.js installed
- Database user with CREATE/DROP privileges

### Initial Setup
1. Make sure MySQL is running on localhost
2. Update database credentials in `migrate.js` if needed:
   ```javascript
   const dbConfig = {
       host: 'localhost',
       user: 'root',
       password: '', // Add your MySQL password
       database: 'awrim_db'
   };
   ```

### Run All Migrations
```bash
node migrations/migrate.js all
```

### Run Specific Migration
```bash
node migrations/migrate.js 001_initial_schema.sql
```

### Manual Execution
You can also run the SQL files directly in MySQL:
```bash
mysql -u root -p awrim_db < migrations/001_initial_schema.sql
```

## Migration Files

### 001_initial_schema.sql
- Creates the `awrim_db` database if it doesn't exist
- Creates all required tables with proper indexes
- Inserts sample data for testing
- Sets up relationships and constraints

## Database Schema

### News Table
```sql
CREATE TABLE news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date VARCHAR(50) NOT NULL,
    category VARCHAR(100) DEFAULT 'General',
    image VARCHAR(500),
    summary TEXT,
    content LONGTEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Events Table
```sql
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    day VARCHAR(10) NOT NULL,
    month VARCHAR(20) NOT NULL,
    year VARCHAR(10) NOT NULL,
    time VARCHAR(50),
    location VARCHAR(255),
    description TEXT,
    action_text VARCHAR(100) DEFAULT 'Learn More',
    action_link VARCHAR(500) DEFAULT '#',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Gallery Table
```sql
CREATE TABLE gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(500) NOT NULL,
    caption VARCHAR(255),
    category VARCHAR(100) DEFAULT 'General',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Resources Table
```sql
CREATE TABLE resources (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    file_type VARCHAR(50) NOT NULL,
    file_size VARCHAR(50),
    file_url VARCHAR(500) NOT NULL,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Adding New Migrations

1. Create a new SQL file with the next sequential number: `002_new_feature.sql`
2. Write your migration SQL statements
3. Test the migration using the runner script
4. Update this README if needed

## Troubleshooting

### Connection Issues
- Ensure MySQL server is running
- Check database credentials in `migrate.js`
- Verify user has proper permissions

### Migration Errors
- Check MySQL error logs
- Ensure database exists or migration creates it
- Verify SQL syntax is correct

### Permission Issues
- Grant proper permissions to database user:
  ```sql
  GRANT ALL PRIVILEGES ON awrim_db.* TO 'username'@'localhost';
  FLUSH PRIVILEGES;
  ```