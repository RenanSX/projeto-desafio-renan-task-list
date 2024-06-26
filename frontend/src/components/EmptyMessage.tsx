interface EmptyMessageProps {
  message: string
}

const EmptyMessage = ({ message }: EmptyMessageProps) => (
  <div className="empty-list">
    <i className="fas fa-clipboard-list empty-icon" />
    <span>{message}</span>
  </div>
)

export default EmptyMessage
