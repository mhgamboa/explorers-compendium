import { features } from "./data";

export default function Features() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-screen-xl px-4 text-center text-gray-600 md:px-8">
        <div className="mx-auto max-w-2xl">
          <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            Run Combat 2-3x faster
          </h3>
          <p className="mt-3">With our specialized Suite of tools</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon, title, desc }) => (
              <li key={title} className="space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  {icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                <p>{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
