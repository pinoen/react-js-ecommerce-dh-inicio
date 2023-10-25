import { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setUserData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!userData.email || !userData.password) {
      toast.error('Please fill in all fields')
      return
    }

    localStorage.setItem('user', JSON.stringify(userData))

    toast.success('Login successful')
    navigate('/dashboard')
  }

  return (
    <div className={styles.containerLogin}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControlLogin}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Email" name="email" value={userData.email} onChange={handleChange} />
        </div>

        <div className={styles.formControlLogin}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" name="password" value={userData.password} onChange={handleChange} />
        </div>

        <div className={styles.formControlLogin}>
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login