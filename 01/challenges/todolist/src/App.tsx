import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { PlusCircle, ClipboardText } from 'phosphor-react'
import { Header } from './components/Header'
import { Task } from './components/Task'
import styles from './App.module.css'
import './global.css'

export function App() {
  const [tasks, setTasks] = useState<
    { id: string; content: string; checked: boolean }[]
  >([])
  const [newTaskText, setNewTaskText] = useState('')

  const isNewTaskEmpty = newTaskText.length === 0
  const completedTasks = tasks.filter(task => task.checked)

  function handleAddTask(event: FormEvent) {
    event.preventDefault()
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        content: newTaskText,
        checked: false
      }
    ])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function changeTaskCheck({ checked, id }: { checked: boolean; id: string }) {
    setTasks(currentTasks => {
      return currentTasks.map(task => {
        return task.id === id ? { ...task, checked: !checked } : task
      })
    })
  }

  function deleteTask(id: string) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id)
    })
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleAddTask} className={styles.taskForm}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />

          <button type="submit" disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <div>
          <header className={styles.tabs}>
            <div className={styles.tab}>
              <span className={styles.createdText}>Tarefas criadas</span>

              <div className={styles.counter}>
                <span>{tasks.length}</span>
              </div>
            </div>

            <div className={styles.tab}>
              <span className={styles.completedText}>Concluídas</span>

              <div className={styles.counter}>
                <span>
                  {tasks.length === 0
                    ? tasks.length
                    : `${completedTasks.length} de ${tasks.length}`}
                </span>
              </div>
            </div>
          </header>

          {tasks.length === 0 ? (
            <div className={styles.emptyList}>
              <ClipboardText size={56} />

              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                <span>Crie tarefas e organize seus itens a fazer</span>
              </p>
            </div>
          ) : (
            <div className={styles.list}>
              {tasks.map(task => (
                <Task
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  checked={task.checked}
                  onChangeCheck={changeTaskCheck}
                  onDelete={deleteTask}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
