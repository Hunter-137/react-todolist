const TodayTasks = () => {
  return (
    <section className="content">
      <h2 className="title">Today main focus</h2>
      <form className="task-enter">
        <div className="task-enter__wrapper">
          <input type="text" placeholder="What is your next task?" />
        </div>
        <button>Sumbit</button>
      </form>
      <div className="task-list">
        <div className="task-item">
          <div className="filter-circle"></div>
          <h3>Work out</h3>
          <p>8:00 am</p>
          <div className="status-check"></div>
        </div>
      </div>
    </section>
  );
};

export default TodayTasks;
