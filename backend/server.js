const express = require('express');
const app = express();
const notificationRoutes = require('./routes/notificationRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

app.use(express.json());
app.use('/api/notifications', notificationRoutes);
app.use('/api/uploads', uploadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});