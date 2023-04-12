function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('www.onezeromate.com:8080/api/v1/accounts');
          //'C:\Users\cse\Desktop\web\register\begin-react\src\info');
          //'https://jsonplaceholder.typicode.com/users');

        //const response = await axios.post('www.onezeromate.com:8080/api/v1/accounts', 
        //{ email: 'yeppi6050@gmail.com', nickname: '지혜', password: '5678!'});

        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <ul>
      {users.map(user => (
        <li key={user.nickname}>
          {user.email} ({user.password})
        </li>
      ))}
    </ul>
  );
}

export default Users;