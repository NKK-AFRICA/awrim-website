import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;
const host = '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Upload Endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
    console.log('Upload Request Headers:', req.headers['content-type']);
    if (!req.file) {
        console.error('Multer failed to find file. Check if field name is "image" and body is multipart.');
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const protocol = req.headers['x-forwarded-proto'] || req.protocol;
    const imageUrl = `${protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    console.log('Successfully uploaded:', imageUrl);
    res.json({ url: imageUrl });
});

// Database connection configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'awrim_db'
};

async function query(sql, params) {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [results] = await connection.execute(sql, params);
        await connection.end();
        return results;
    } catch (err) {
        console.error('Database Error:', err.message, '| SQL:', sql);
        throw err;
    }
}

// News Endpoints
app.get('/api/news', async (req, res) => {
    try {
        const results = await query('SELECT * FROM news ORDER BY created_at DESC');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/news', async (req, res) => {
    const { title, date, category, image, summary, content } = req.body;
    try {
        const result = await query(
            'INSERT INTO news (title, date, category, image, summary, content) VALUES (?, ?, ?, ?, ?, ?)',
            [title, date, category, image, summary, content]
        );
        res.json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/news/:id', async (req, res) => {
    const { id } = req.params;
    const { title, date, category, image, summary, content } = req.body;
    try {
        await query(
            'UPDATE news SET title = ?, date = ?, category = ?, image = ?, summary = ?, content = ? WHERE id = ?',
            [title, date, category, image, summary, content, id]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/news/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await query('DELETE FROM news WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Events Endpoints
app.get('/api/events', async (req, res) => {
    try {
        const results = await query('SELECT * FROM events ORDER BY created_at DESC');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/events', async (req, res) => {
    const { title, day, month, year, time, location, description, action_text, action_link } = req.body;
    try {
        const result = await query(
            'INSERT INTO events (title, day, month, year, time, location, description, action_text, action_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [title, day, month, year, time, location, description, action_text, action_link]
        );
        res.json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/events/:id', async (req, res) => {
    const { id } = req.params;
    const { title, day, month, year, time, location, description, action_text, action_link } = req.body;
    try {
        await query(
            'UPDATE events SET title = ?, day = ?, month = ?, year = ?, time = ?, location = ?, description = ?, action_text = ?, action_link = ? WHERE id = ?',
            [title, day, month, year, time, location, description, action_text, action_link, id]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/events/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await query('DELETE FROM events WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Gallery Endpoints
app.get('/api/gallery', async (req, res) => {
    try {
        const results = await query('SELECT * FROM gallery ORDER BY created_at DESC');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/gallery', async (req, res) => {
    const { image_url, caption, category } = req.body;
    try {
        const result = await query(
            'INSERT INTO gallery (image_url, caption, category) VALUES (?, ?, ?)',
            [image_url, caption, category]
        );
        res.json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/gallery/:id', async (req, res) => {
    const { id } = req.params;
    const { image_url, caption, category } = req.body;
    try {
        await query(
            'UPDATE gallery SET image_url = ?, caption = ?, category = ? WHERE id = ?',
            [image_url, caption, category, id]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/gallery/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await query('DELETE FROM gallery WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Resources Endpoints
app.get('/api/resources', async (req, res) => {
    try {
        const results = await query('SELECT * FROM resources ORDER BY created_at DESC');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/resources', async (req, res) => {
    const { title, description, file_type, file_size, file_url, is_featured } = req.body;
    try {
        const result = await query(
            'INSERT INTO resources (title, description, file_type, file_size, file_url, is_featured) VALUES (?, ?, ?, ?, ?, ?)',
            [title, description, file_type, file_size, file_url, is_featured]
        );
        res.json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/resources/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, file_type, file_size, file_url, is_featured } = req.body;
    try {
        await query(
            'UPDATE resources SET title = ?, description = ?, file_type = ?, file_size = ?, file_url = ?, is_featured = ? WHERE id = ?',
            [title, description, file_type, file_size, file_url, is_featured, id]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/resources/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await query('DELETE FROM resources WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, host, () => {
    console.log(`API Bridge running at http://${host}:${port}`);
});
