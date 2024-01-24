import styles from './app.module.css'
import useWEForm from './useWEForm/useWEForm'

function App() {
  const {formData,registerFormInput} = useWEForm({
    name: ""
  })

  return (
    <div className={styles.container}>
      
      <div className={styles.form_container}>

        <form className={styles.form}>

          <input type='text' {...registerFormInput("name")} />

        </form>

      </div>

    </div>
  )
}

export default App
