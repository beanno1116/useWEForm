import styles from './app.module.css'
import useWEForm from './useWEForm/useWEForm'

function App() {
  const {registerFormInput} = useWEForm({
    name: ""
  })

  return (
    <div className={styles.container}>
      
      <div className={styles.form_container}>

        <form className={styles.form}>

          <input className={styles.textfield} type='text' {...registerFormInput("name")} placeholder='Enter name'/>
          <input className={styles.textfield} type='text' {...registerFormInput("City")} placeholder='Enter city'/>

        </form>

      </div>

    </div>
  )
}

export default App
