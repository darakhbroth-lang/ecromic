import TeamMember from "../component/about/TeamMember";
import Stats from "../component/about/Stats";
import OurStory from "../component/about/OurStory";
export default function Aboutpage() {
  return (
    <div>
        <main className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-20 text-center px-4">
        <h1 className="text-3xl  font-extrabold tracking-tight">
          ហាងលក់សម្លៀកបំពាក់របស់យើង
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            មានលក់ទាំងនៅទីតាំងផ្ទាល់និងតាម Online
        </p>
      </div>
      <OurStory />
      <Stats />
      <TeamMember />
    </main>
    </div>
  );
}