import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
  id: string
  content: string
  checked: boolean
  onChangeCheck: (params: { checked: boolean; id: string }) => void
  onDelete: (id: string) => void
}

export function Task({
  id,
  content,
  checked,
  onChangeCheck,
  onDelete
}: TaskProps) {
  function handleToggleTask() {
    onChangeCheck({ checked, id })
  }

  function handleDeleteTask() {
    onDelete(id)
  }

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleToggleTask}
      />

      <label htmlFor={id}>{content}</label>

      <button type="button" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}
