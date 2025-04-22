const express = require('express');
const cors = require('cors');
const app = express();
const { sequelize } = require('./models');
const quizRoutes = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use('/api', quizRoutes);

const PORT = 3000;
sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to sync database:', err);
});