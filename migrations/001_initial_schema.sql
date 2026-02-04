-- AWRIM Database Initial Schema Migration
-- Run this migration to create the initial database structure

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS awrim_db;
USE awrim_db;

-- Create news table
CREATE TABLE IF NOT EXISTS news (
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

-- Create events table
CREATE TABLE IF NOT EXISTS events (
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

-- Create gallery table
CREATE TABLE IF NOT EXISTS gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(500) NOT NULL,
    caption VARCHAR(255),
    category VARCHAR(100) DEFAULT 'General',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create resources/publications table
CREATE TABLE IF NOT EXISTS resources (
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

-- Create indexes for better performance
CREATE INDEX idx_news_created_at ON news(created_at);
CREATE INDEX idx_events_created_at ON events(created_at);
CREATE INDEX idx_gallery_created_at ON gallery(created_at);
CREATE INDEX idx_resources_created_at ON resources(created_at);
CREATE INDEX idx_resources_featured ON resources(is_featured);

-- Insert some sample data (optional - remove if not needed)
INSERT INTO news (title, date, category, image, summary, content) VALUES
('AWRIM Celebrates 55 Years of Service', 'Dec 15, 2024', 'Announcements', 'https://picsum.photos/800/400?random=1', 'AWRIM marks 55 years of uniting consecrated women across Malawi in service to the Church and community.', 'This milestone anniversary celebrates AWRIM\'s enduring commitment to spiritual formation, education, and community development across all Catholic dioceses in Malawi.'),
('New Leadership Training Program Launched', 'Nov 20, 2024', 'Education', 'https://picsum.photos/800/400?random=2', 'AWRIM introduces comprehensive leadership development program for Sisters in governance and administration.', 'The new program focuses on enhancing administrative skills, financial management, and organizational leadership to better serve communities.');

INSERT INTO events (title, day, month, year, time, location, description, action_text, action_link) VALUES
('Annual AWRIM Assembly', '15', 'January', '2025', '9:00 AM - 4:00 PM', 'Blantyre Cathedral', 'Annual gathering of all AWRIM members for spiritual renewal and strategic planning.', 'Register Now', '/contact'),
('Leadership Conference', '22', 'March', '2025', '8:30 AM - 5:00 PM', 'Lilongwe Diocese Center', 'Training conference focused on governance and capacity building for congregational leaders.', 'Learn More', '/what-we-do');

INSERT INTO gallery (image_url, caption, category) VALUES
('https://picsum.photos/600/400?random=1', 'Sisters gathering for spiritual formation', 'Mission'),
('https://picsum.photos/600/400?random=2', 'Community outreach program', 'Events'),
('https://picsum.photos/600/400?random=3', 'Educational activities with children', 'Community');

INSERT INTO resources (title, description, file_type, file_size, file_url, is_featured) VALUES
('AWRIM Strategic Plan 2024-2028', 'Comprehensive strategic plan outlining AWRIM\'s vision and mission for the next four years.', 'PDF', '2.3 MB', '/uploads/strategic-plan-2024.pdf', TRUE),
('Leadership Development Guidelines', 'Guidelines and best practices for congregational leadership and governance.', 'PDF', '1.8 MB', '/uploads/leadership-guidelines.pdf', FALSE);