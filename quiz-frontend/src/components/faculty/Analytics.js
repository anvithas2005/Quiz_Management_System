useEffect(() => {
    axios.get("http://localhost:8000/api/analytics/top-scores/", {
        headers: { Authorization: `Bearer ${authTokens.access}` },
    }).then((res) => setData(res.data));
}, []);

<ul>
    {data.map(item => (
        <li key={item.quiz}>Quiz ID: {item.quiz} - Top Score: {item.top_score}</li>
    ))}
</ul>