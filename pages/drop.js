import Drops from "../src/components/Drops";
import MainLayout from "../src/layouts/MainLayout";
const Main = ({ data }) => {
  return (
    <MainLayout>
      <div className="w-[95%] mx-auto lg:w-[85%]">
        <div className="my-4 flex flex-col items-center font-merriweather">
          <p className="text-2xl font-bold text-center">Upcoming drops</p>
          <p className="text-lg text-center my-3">
            Turn on notifications so that no drops will miss you.
          </p>
          <button className="border w-[45%] mt-2 h-[40px] lg:w-[20%] border border-current rounded-md">
            Notify me
          </button>
        </div>
        <div>
          {data.map((item) => (
            <Drops
              key={item.id}
              drop={item}
              status={
                item.status === "active"
                  ? "live now"
                  : item.status === "inactive"
                  ? "ended"
                  : "upcoming"
              }
              cta={
                item.status === "active"
                  ? "Join now"
                  : item.status === "inactive"
                  ? "View"
                  : "Get notified"
              }
              btnColor={
                item.status === "active"
                  ? "bg-[#3EA03B]"
                  : item.status === "inactive"
                  ? "bg-[#999EA5]"
                  : "bg-[#4693ED]"
              }
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;

export async function getServerSideProps() {
  const { drops } = await import("../data/data.json");

  return {
    props: {
      data: drops,
    },
  };
}
