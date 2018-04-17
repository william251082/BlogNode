// Temporary file to create a new blog post

fetch('/api/blogs', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({ title: 'My Title', content: 'My Content'})
});