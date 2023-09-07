const http = require('http');

const port = 3001;
 
const server = http.createServer(async (req, res) => {
    const data = `


<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>    
    <title>Hello</title>
</head>
<body>

123

</body>
<script>

document.body.innerHTML = '<h1>Hello</h1>'

</script>
</html>


`;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data.trim());
});
 
server.listen(port, () => {
    console.log(`Server running...`);
});
