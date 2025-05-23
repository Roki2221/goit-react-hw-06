export default function Contact({ onDelete, contactInfo }) {
  return (
    <>
      <div>
        <p>{contactInfo.name}</p>
        <p>{contactInfo.number}</p>
      </div>
      <button
        onClick={() => {
          onDelete(contactInfo.id);
        }}
      >
        Delete
      </button>
    </>
  );
}
