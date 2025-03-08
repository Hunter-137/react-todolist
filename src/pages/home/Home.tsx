import {
  Sidebar,
  TodayTasks,
  ScheduledTasks,
  SettingsView,
} from "../../widgets/";

const Home = () => {
  return (
    <div className="container">
      <main className="wrapper">
        <Sidebar />
        <TodayTasks />
        <ScheduledTasks />
        <SettingsView />
      </main>
    </div>
  );
};

export default Home;
